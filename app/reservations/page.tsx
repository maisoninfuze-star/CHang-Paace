'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PageHeader } from '@/components/ui/PageHeader'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { GoldButton } from '@/components/ui/GoldButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

const TIMES = ['11:30', '12:00', '12:30', '13:00', '13:30', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']

const fieldClass =
  'bg-transparent border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-[#C4B49A]/50 transition-colors'
const selectClass =
  'bg-[#2D1315] border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none'
const labelClass = 'font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]'

export default function ReservationsPage() {
  const { t } = useI18n()
  const r = t.reservationsPage
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const schema = useMemo(() => z.object({
    name: z.string().min(2, r.vName),
    phone: z.string().min(7, r.vPhone),
    email: z.string().email(r.vEmail).optional().or(z.literal('')),
    partySize: z.coerce.number().int().min(1).max(20),
    date: z.string().min(1, r.vDate),
    time: z.string().min(1, r.vTime),
    notes: z.string().max(500).optional().or(z.literal('')),
  }), [r])

  type FormValues = z.infer<typeof schema>

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { partySize: 2 },
  })

  const onSubmit = async (values: FormValues) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      reset({ partySize: 2 })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={r.label} title={r.title} subtitle={r.subtitle} />

      <section className="section-pad">
        <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info side */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl font-bold italic text-[#F5EDE0] leading-tight">
                {r.infoHeading}
              </h2>
              <OrnamentDivider size="sm" className="w-32" />
              <p className="font-lora text-base text-[#C4B49A] leading-relaxed">{r.infoP}</p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{r.addressLabel}</span>
                  <span className="font-lora text-[#F5EDE0]">989 Jean-Talon Ouest, Montréal, H3N 1S9</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{r.phoneLabel}</span>
                  <a href="tel:+15142716000" className="font-lora text-[#C9A84C] hover:underline">(514) 271-6000</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{r.hoursLabel}</span>
                  <span className="font-lora text-[#F5EDE0]">{r.hoursValue}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form side */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="p-6 lg:p-8" style={{ background: '#2D1315', border: '1px solid #C9A84C33' }}>
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center gap-4 py-10">
                  <span className="font-playfair text-2xl italic text-[#C9A84C]">{r.successTitle}</span>
                  <OrnamentDivider size="sm" className="w-32" />
                  <p className="font-lora text-[#C4B49A] max-w-sm">{r.successP}</p>
                  <GoldButton variant="outline" size="md" onClick={() => setStatus('idle')} className="mt-2">
                    {r.again}
                  </GoldButton>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>{t.form.fullName}</label>
                    <input type="text" placeholder={t.form.namePlaceholder} className={fieldClass} {...register('name')} />
                    {errors.name && <span className="font-jost text-[11px] text-[#E8918C]">{errors.name.message}</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{t.form.phone}</label>
                      <input type="tel" placeholder={t.form.phonePlaceholder} className={fieldClass} {...register('phone')} />
                      {errors.phone && <span className="font-jost text-[11px] text-[#E8918C]">{errors.phone.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{t.form.party}</label>
                      <select className={selectClass} {...register('partySize')}>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n}>{n} {n > 1 ? t.form.persons : t.form.person}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{t.form.date}</label>
                      <input type="date" className={fieldClass} {...register('date')} />
                      {errors.date && <span className="font-jost text-[11px] text-[#E8918C]">{errors.date.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{t.form.time}</label>
                      <select className={selectClass} defaultValue="" {...register('time')}>
                        <option value="" disabled>{t.form.choose}</option>
                        {TIMES.map(time => <option key={time} value={time}>{time}</option>)}
                      </select>
                      {errors.time && <span className="font-jost text-[11px] text-[#E8918C]">{errors.time.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>{t.form.email}</label>
                    <input type="email" placeholder={t.form.emailPlaceholder} className={fieldClass} {...register('email')} />
                    {errors.email && <span className="font-jost text-[11px] text-[#E8918C]">{errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>{t.form.notes}</label>
                    <textarea rows={3} placeholder={t.form.notesPlaceholder} className={`${fieldClass} resize-none`} {...register('notes')} />
                  </div>

                  {status === 'error' && (
                    <p className="font-jost text-[12px] text-[#E8918C]">{r.error}</p>
                  )}

                  <GoldButton type="submit" variant="solid" size="lg" className="mt-2">
                    {status === 'sending' ? t.form.sending : t.form.submit}
                  </GoldButton>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
