'use client'

import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MandalaBg } from '@/components/ui/MandalaBg'
import { useI18n } from '@/lib/i18n'

export function AboutTeaser() {
  const { t } = useI18n()
  return (
    <section className="section-pad" style={{ background: '#EDE3D5' }}>
      <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{ border: '1px solid #C9A84C55' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/menu/p1.png"
              alt={t.about.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gold frame accent */}
            <div
              className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none"
              style={{ border: '1px solid #C9A84C33' }}
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <MandalaBg variant="corner" opacity={0.04}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-5">
              <SectionLabel dark>{t.about.label}</SectionLabel>
              <OrnamentDivider size="sm" dark className="w-32" />
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic leading-tight text-[#1C0D08]">
                {t.about.heading}
              </h2>
              <p className="font-lora text-base leading-relaxed text-[#7A6558]">
                {t.about.p1}
              </p>
              <p className="font-lora text-base leading-relaxed text-[#7A6558]">
                {t.about.p2}
              </p>
              <OrnamentDivider size="sm" dark className="w-32 mt-2" />
              <GoldButton href="/about" variant="crimson" size="md" className="self-start mt-2">
                {t.about.button}
              </GoldButton>
            </div>
          </ScrollReveal>
        </MandalaBg>
      </div>
    </section>
  )
}
