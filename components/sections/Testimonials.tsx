'use client'

import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

const testimonials = [
  {
    fr: "Le meilleur restaurant indien de Montréal, sans hésitation. Le butter chicken est divin et le service est toujours chaleureux.",
    en: "The best Indian restaurant in Montréal, without a doubt. The butter chicken is divine and the service is always warm.",
    author: 'Marie-Claude B.', source: 'Google', rating: 5,
  },
  {
    fr: "Des saveurs punjabi authentiques qui vous transportent directement en Inde. Les plats tandoori sont parfaitement épicés et les portions généreuses.",
    en: 'Authentic Punjabi flavours that take you straight to India. The tandoori dishes are perfectly spiced and portions are generous.',
    author: 'James R.', source: 'TripAdvisor', rating: 5,
  },
  {
    fr: "On y revient régulièrement en famille. La cuisine est toujours consistante, savoureuse et les prix sont très raisonnables.",
    en: 'We come back regularly as a family. The food is always consistent, flavourful, and the prices are very reasonable.',
    author: 'Fatima K.', source: 'Google', rating: 5,
  },
]

export function Testimonials() {
  const { t, lang } = useI18n()

  return (
    <section className="section-pad" style={{ background: '#2D1315' }}>
      <div className="container-cp">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>{t.testimonials.label}</SectionLabel>
            <OrnamentDivider className="w-48" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic text-[#F5EDE0]">
              {t.testimonials.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ fr, en, author, source, rating }, i) => (
            <ScrollReveal key={author} delay={i * 0.12} direction="up">
              <div
                className="flex flex-col p-8 h-full"
                style={{ background: '#1A0D08', border: '1px solid #C9A84C33' }}
              >
                {/* Quote mark */}
                <span className="font-playfair text-6xl text-[#C9A84C]/40 leading-none mb-4">&ldquo;</span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, j) => (
                    <span key={j} className="text-[#C9A84C] text-sm">★</span>
                  ))}
                </div>

                <p className="font-lora text-sm italic text-[#C4B49A] leading-relaxed flex-1 mb-6">
                  {lang === 'fr' ? fr : en}
                </p>

                <div className="pt-4" style={{ borderTop: '1px solid #C9A84C22' }}>
                  <p className="font-cinzel text-xs tracking-wider text-[#F5EDE0]">{author}</p>
                  <p className="font-jost text-[10px] tracking-widest uppercase text-[#C9A84C] mt-0.5">
                    {t.testimonials.via} {source}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
