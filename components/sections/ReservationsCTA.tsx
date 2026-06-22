'use client'

import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

export function ReservationsCTA() {
  const { t } = useI18n()
  return (
    <section className="section-pad" style={{ background: '#4E3926' }}>
      <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <ScrollReveal direction="left">
          <div
            className="relative aspect-[3/4] overflow-hidden"
            style={{ border: '1px solid #C9A84C44', background: '#0E0804' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/menu/P2.png"
              alt="Chand Palace"
              className="absolute inset-0 w-full h-full object-contain p-8"
            />
          </div>
        </ScrollReveal>

        {/* Form side */}
        <ScrollReveal direction="right" delay={0.1}>
          <div className="flex flex-col gap-5">
            <SectionLabel>{t.reservationCta.label}</SectionLabel>
            <OrnamentDivider size="sm" className="w-32" />
            <h2 className="font-playfair text-4xl font-bold italic text-[#F5EDE0] leading-tight">
              {t.reservationCta.heading}
            </h2>
            <p className="font-lora text-sm text-[#C4B49A] leading-relaxed">
              {t.reservationCta.p}
            </p>

            <form className="flex flex-col gap-4 mt-2" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.name}</label>
                  <input
                    type="text"
                    placeholder={t.form.namePlaceholder}
                    className="bg-transparent border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-[#C4B49A]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.party}</label>
                  <select
                    className="bg-[#2D1315] border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                      <option key={n} value={n}>{n} {n > 1 ? t.form.persons : t.form.person}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.date}</label>
                  <input
                    type="date"
                    className="bg-transparent border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.time}</label>
                  <select
                    className="bg-[#2D1315] border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                  >
                    {['11:30','12:00','12:30','13:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.phone}</label>
                <input
                  type="tel"
                  placeholder={t.form.phonePlaceholder}
                  className="bg-transparent border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-[#C4B49A]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]">{t.form.notes}</label>
                <textarea
                  rows={3}
                  placeholder={t.form.notesPlaceholder}
                  className="bg-transparent border border-[#C9A84C]/30 text-[#F5EDE0] font-jost text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-[#C4B49A]/50 transition-colors resize-none"
                />
              </div>

              <GoldButton type="submit" variant="solid" size="lg" className="mt-2">
                {t.form.submit}
              </GoldButton>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
