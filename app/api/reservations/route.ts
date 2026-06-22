import { NextResponse } from 'next/server'
import { z } from 'zod'

/** Server-side validation — mirrors the client Zod schema. */
const reservationSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(30),
  email: z.string().email().optional().or(z.literal('')),
  partySize: z.coerce.number().int().min(1).max(20),
  date: z.string().min(1),
  time: z.string().min(1),
  notes: z.string().max(500).optional().or(z.literal('')),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = reservationSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  const data = parsed.data

  // Email delivery via Resend — only attempted when configured.
  // Without a key (e.g. local dev) the request still succeeds so the form is testable.
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.RESERVATIONS_EMAIL || 'info@chandpalace.ca'

  if (apiKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: 'Chand Palace <reservations@chandpalace.ca>',
        to,
        replyTo: data.email || undefined,
        subject: `Nouvelle réservation — ${data.name} (${data.partySize} pers.)`,
        text: [
          `Nom: ${data.name}`,
          `Téléphone: ${data.phone}`,
          `Courriel: ${data.email || '—'}`,
          `Personnes: ${data.partySize}`,
          `Date: ${data.date}`,
          `Heure: ${data.time}`,
          `Demandes: ${data.notes || '—'}`,
        ].join('\n'),
      })
    } catch (err) {
      console.error('[reservations] Resend error:', err)
      return NextResponse.json(
        { error: 'Could not send reservation. Please call us at (514) 271-6000.' },
        { status: 502 },
      )
    }
  } else {
    console.info('[reservations] RESEND_API_KEY not set — logging only:', data)
  }

  return NextResponse.json({ ok: true })
}
