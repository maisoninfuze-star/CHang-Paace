import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-cinzel text-xs tracking-[0.25em] uppercase',
        dark ? 'text-[#7A6558]' : 'text-[#C9A84C]',
        className,
      )}
    >
      {children}
    </span>
  )
}
