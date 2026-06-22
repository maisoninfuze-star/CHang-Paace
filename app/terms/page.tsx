'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { useI18n } from '@/lib/i18n'

export default function TermsPage() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={t.legal.label} title={t.legal.termsTitle} />
      <section className="section-pad">
        <div className="container-cp max-w-2xl flex flex-col gap-5 font-lora text-[#C4B49A] leading-relaxed">
          <p>{t.legal.termsP1}</p>
          <p>{t.legal.termsP2}</p>
        </div>
      </section>
    </div>
  )
}
