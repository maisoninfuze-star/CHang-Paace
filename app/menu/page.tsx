'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { useI18n } from '@/lib/i18n'

const PDF = '/chand-palace-menu.pdf'

const btnBase =
  'inline-flex items-center justify-center gap-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300'

export default function MenuPage() {
  const { t } = useI18n()
  const m = t.menuPage

  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={m.label} title={m.title} subtitle={m.subtitle} />

      <section className="section-pad-sm">
        <div className="container-cp flex flex-col items-center gap-8">
          {/* Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} bg-[#C9A84C] text-[#0E0804] border border-[#C9A84C] hover:bg-[#0E0804] hover:text-[#C9A84C]`}
            >
              {m.open}
            </a>
            <a
              href={PDF}
              download
              className={`${btnBase} border border-[#C9A84C]/60 text-[#F5EDE0] hover:border-[#C9A84C] hover:text-[#C9A84C]`}
            >
              {m.download}
            </a>
          </div>

          {/* Embedded PDF (desktop) */}
          <div className="w-full" style={{ border: '1px solid #C9A84C44' }}>
            <object data={`${PDF}#view=FitH`} type="application/pdf" className="w-full h-[80vh] hidden sm:block">
              <iframe src={PDF} title={m.title} className="w-full h-[80vh]" />
            </object>

            {/* Mobile fallback — inline PDF viewers are unreliable on phones */}
            <div className="sm:hidden flex flex-col items-center gap-4 py-16 px-6 text-center" style={{ background: '#2D1315' }}>
              <p className="font-lora text-sm text-[#C4B49A]">{m.fallback}</p>
              <a
                href={PDF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} bg-[#C9A84C] text-[#0E0804] border border-[#C9A84C]`}
              >
                {m.open}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
