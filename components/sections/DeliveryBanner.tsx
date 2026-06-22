'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { useI18n } from '@/lib/i18n'

export function DeliveryBanner() {
  const { t } = useI18n()
  return (
    <section className="section-pad-sm" style={{ background: '#0E0804', borderTop: '1px solid #C9A84C33' }}>
      <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <ScrollReveal direction="left">
          <div className="flex flex-col gap-5">
            <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#C9A84C]">
              {t.delivery.label}
            </span>
            <OrnamentDivider size="sm" className="w-32" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic text-[#F5EDE0] leading-tight">
              {t.delivery.heading}
            </h2>
            <p className="font-lora text-base text-[#C4B49A] leading-relaxed">
              {t.delivery.p}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 font-cinzel text-xs tracking-wider uppercase border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0E0804] transition-all"
              >
                Uber Eats
              </a>
              <a
                href="https://www.skipthedishes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 font-cinzel text-xs tracking-wider uppercase border border-[#C9A84C]/50 text-[#F5EDE0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                Skip The Dishes
              </a>
            </div>
            <p className="font-jost text-sm text-[#C4B49A] mt-1">
              {t.delivery.call}{' '}
              <a href="tel:+15142716000" className="text-[#C9A84C] hover:underline">
                (514) 271-6000
              </a>
            </p>
          </div>
        </ScrollReveal>

        {/* Photo side placeholder */}
        <ScrollReveal direction="right" delay={0.15}>
          <div
            className="relative aspect-square lg:aspect-[4/3] overflow-hidden"
            style={{ border: '1px solid #C9A84C33' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/menu/butter%20Chicken.png"
              alt="Butter Chicken"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0804]/40 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
