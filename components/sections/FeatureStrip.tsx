'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

export function FeatureStrip() {
  const { t } = useI18n()
  const features = [
    { icon: '🍛', ...t.features.authentic },
    { icon: '✓',  ...t.features.halal },
    { icon: '🛵', ...t.features.delivery },
  ]

  return (
    <section
      className="py-10"
      style={{
        background: '#4C1215',
        borderTop: '1px solid #C9A84C55',
        borderBottom: '1px solid #C9A84C55',
      }}
    >
      <div className="container-cp grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {features.map(({ icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 0.1} direction="up">
            <div className="flex flex-col items-center text-center px-6 md:border-r last:border-r-0" style={{ borderColor: '#C9A84C33' }}>
              <span className="text-3xl mb-3">{icon}</span>
              <h3 className="font-cinzel text-sm tracking-wider uppercase text-[#C9A84C] mb-1">{title}</h3>
              <p className="font-jost text-xs text-[#C4B49A] leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
