'use client'

import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

/** "From Amritsar to Montréal" — the fusion image + brand-story band under the hero. */
export function OriginStory() {
  const { t } = useI18n()
  return (
    <section className="section-pad" style={{ background: '#0E0804' }}>
      <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden" style={{ border: '1px solid #C9A84C55' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/montreal-india.png"
              alt={t.origin.heading}
              className="w-full h-full object-cover aspect-[3/4]"
            />
            {/* Gold inner frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none" style={{ border: '1px solid #C9A84C44' }} />
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal direction="right" delay={0.1}>
          <div className="flex flex-col gap-5">
            <SectionLabel>{t.origin.label}</SectionLabel>
            <OrnamentDivider size="sm" className="w-32" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic leading-tight text-[#F5EDE0]">
              {t.origin.heading}
            </h2>
            <p className="font-lora text-base leading-relaxed text-[#C4B49A]">{t.origin.p1}</p>
            <p className="font-lora text-base leading-relaxed text-[#C4B49A]">{t.origin.p2}</p>
            <OrnamentDivider size="sm" className="w-32 mt-2" />
            <GoldButton href="/about" variant="outline" size="md" className="self-start mt-2">
              {t.origin.button}
            </GoldButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
