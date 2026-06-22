import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface PageHeaderProps {
  label: string
  title: string
  subtitle?: string
}

/** Shared dark page header — mirrors the /menu page hero band. */
export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="pt-36 pb-16 text-center"
      style={{ background: '#2D1315', borderBottom: '1px solid #C9A84C33' }}
    >
      <div className="container-cp flex flex-col items-center gap-4">
        <SectionLabel>{label}</SectionLabel>
        <OrnamentDivider className="w-48" />
        <h1 className="font-playfair text-5xl lg:text-6xl font-bold italic text-[#F5EDE0]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-lora text-base italic text-[#C4B49A] max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
