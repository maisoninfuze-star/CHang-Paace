'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { useI18n } from '@/lib/i18n'

export default function PrivacyPage() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={t.legal.label} title={t.legal.privacyTitle} />
      <section className="section-pad">
        <div className="container-cp max-w-2xl flex flex-col gap-5 font-lora text-[#C4B49A] leading-relaxed">
          <p>{t.legal.privacyP1}</p>
          <p>{t.legal.privacyP2}</p>
        </div>
      </section>
    </div>
  )
}
