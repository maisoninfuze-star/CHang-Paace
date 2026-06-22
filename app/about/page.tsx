'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { MandalaBg } from '@/components/ui/MandalaBg'
import { useI18n } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useI18n()
  const a = t.aboutPage

  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={a.label} title={a.title} subtitle={a.subtitle} />

      {/* Story split */}
      <section className="section-pad" style={{ background: '#EDE3D5' }}>
        <div className="container-cp grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden" style={{ border: '1px solid #C9A84C55' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/menu/Whole%20Chicken%20Tandoori.png"
                alt="Chand Palace"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none" style={{ border: '1px solid #C9A84C55' }} />
            </div>
          </ScrollReveal>

          <MandalaBg variant="corner" opacity={0.04}>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-5">
                <SectionLabel dark>{a.storyLabel}</SectionLabel>
                <OrnamentDivider size="sm" dark className="w-32" />
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic leading-tight text-[#1C0D08]">
                  {a.storyHeading}
                </h2>
                <p className="font-lora text-base leading-relaxed text-[#7A6558]">{a.storyP1}</p>
                <p className="font-lora text-base leading-relaxed text-[#7A6558]">{a.storyP2}</p>
                <OrnamentDivider size="sm" dark className="w-32 mt-2" />
                <GoldButton href="/menu" variant="crimson" size="md" className="self-start mt-2">
                  {a.storyButton}
                </GoldButton>
              </div>
            </ScrollReveal>
          </MandalaBg>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-cp">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>{a.valuesLabel}</SectionLabel>
            <OrnamentDivider className="w-48" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic text-[#F5EDE0]">
              {a.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="h-full p-6 flex flex-col gap-3" style={{ background: '#2D1315', border: '1px solid #C9A84C22' }}>
                  <h3 className="font-cormorant text-xl font-semibold text-[#C9A84C]">{v.title}</h3>
                  <p className="font-lora text-sm text-[#C4B49A] leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section-pad-sm section-crimson">
        <div className="container-cp flex flex-col items-center text-center gap-6">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold italic text-[#F5EDE0]">
            {a.ctaTitle}
          </h2>
          <p className="font-lora text-[#F5EDE0]/80 max-w-xl">{a.ctaP}</p>
          <GoldButton href="/reservations" variant="solid" size="lg">{a.ctaButton}</GoldButton>
        </div>
      </section>
    </div>
  )
}
