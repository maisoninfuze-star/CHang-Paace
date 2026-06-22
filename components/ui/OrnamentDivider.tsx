import { cn } from '@/lib/utils'

interface OrnamentDividerProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  dark?: boolean
}

export function OrnamentDivider({ label, size = 'md', className, dark = false }: OrnamentDividerProps) {
  const goldOpacity = dark ? 'bg-[#C9A84C]/30' : 'bg-[#C9A84C]/50'
  const textColor   = dark ? 'text-[#7A6558]' : 'text-[#C9A84C]'
  const gemSize     = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'

  return (
    <div className={cn('flex items-center gap-3 w-full', className)}>
      <span className={cn('flex-1 h-px', goldOpacity)} />
      <span className={cn('font-cinzel tracking-widest', gemSize, textColor)}>✦</span>
      {label && (
        <>
          <span className={cn('font-cinzel text-xs tracking-[0.2em] uppercase', textColor)}>
            {label}
          </span>
          <span className={cn('font-cinzel tracking-widest', gemSize, textColor)}>✦</span>
        </>
      )}
      <span className={cn('flex-1 h-px', goldOpacity)} />
    </div>
  )
}
