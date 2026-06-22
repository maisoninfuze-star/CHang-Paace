'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

const labelClass = 'font-cinzel text-[10px] tracking-widest uppercase text-[#C9A84C]'

export default function ContactPage() {
  const { t } = useI18n()
  const c = t.contactPage

  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={c.label} title={c.title} subtitle={c.subtitle} />

      <section className="section-pad">
        <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SectionLabel>{c.coords}</SectionLabel>
                <OrnamentDivider size="sm" className="w-32" />

                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{c.addressLabel}</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=989+Jean-Talon+Ouest+Montreal"
                    target="_blank" rel="noopener noreferrer"
                    className="font-lora text-[#F5EDE0] hover:text-[#C9A84C] transition-colors"
                  >
                    989 Jean-Talon Ouest, Montréal, QC H3N 1S9
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{c.phoneLabel}</span>
                  <a href="tel:+15142716000" className="font-lora text-[#C9A84C] hover:underline">(514) 271-6000</a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className={labelClass}>{c.emailLabel}</span>
                  <a href="mailto:info@chandpalace.ca" className="font-lora text-[#F5EDE0] hover:text-[#C9A84C] transition-colors">
                    info@chandpalace.ca
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-4">
                <SectionLabel>{c.hoursLabel}</SectionLabel>
                <OrnamentDivider size="sm" className="w-32" />
                <ul className="flex flex-col gap-2">
                  {c.hours.map(h => (
                    <li key={h.day} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #C9A84C1A' }}>
                      <span className="font-lora text-[#F5EDE0]">{h.day}</span>
                      <span className="font-jost text-sm text-[#C4B49A]">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-jost text-xs text-[#C4B49A] mt-1">{c.delivery}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="w-full overflow-hidden" style={{ border: '1px solid #C9A84C44' }}>
              <iframe
                title={c.mapTitle}
                src="https://www.google.com/maps?q=989+Jean-Talon+Ouest+Montreal+QC+H3N+1S9&output=embed"
                width="100%" height="460"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
