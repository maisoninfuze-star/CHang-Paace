import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'outline' | 'solid' | 'crimson'
type Size    = 'sm' | 'md' | 'lg'

interface GoldButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const variantClasses: Record<Variant, string> = {
  outline: [
    'border border-[#C9A84C] text-[#C9A84C]',
    'hover:bg-[#C9A84C] hover:text-[#0E0804]',
  ].join(' '),
  solid: [
    'bg-[#C9A84C] text-[#0E0804] border border-[#C9A84C]',
    'hover:bg-[#0E0804] hover:text-[#C9A84C]',
  ].join(' '),
  crimson: [
    'bg-[#4C1215] text-[#F5EDE0] border border-[#4C1215]',
    'hover:border-[#C9A84C] hover:text-[#C9A84C]',
  ].join(' '),
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
}

export function GoldButton({
  variant = 'outline',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
}: GoldButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'font-cinzel tracking-widest uppercase transition-all duration-300',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return <Link href={href} className={base}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
