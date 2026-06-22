import { cn } from '@/lib/utils'

interface MandalaBgProps {
  children: React.ReactNode
  opacity?: number
  variant?: 'tile' | 'corner' | 'hero'
  className?: string
}

export function MandalaBg({ children, opacity = 0.06, variant = 'tile', className }: MandalaBgProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Pattern overlay */}
      {variant === 'tile' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/patterns/mandala-tile.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '120px 120px',
            opacity,
            color: '#C9A84C',
          }}
        />
      )}
      {variant === 'corner' && (
        <>
          <img
            src="/assets/patterns/mandala-tile.svg"
            aria-hidden="true"
            className="absolute -bottom-10 -right-10 w-64 h-64 pointer-events-none"
            style={{ opacity, filter: 'invert(70%) sepia(30%) saturate(500%) hue-rotate(10deg)' }}
          />
          <img
            src="/assets/patterns/mandala-tile.svg"
            aria-hidden="true"
            className="absolute -top-10 -left-10 w-48 h-48 pointer-events-none rotate-45"
            style={{ opacity, filter: 'invert(70%) sepia(30%) saturate(500%) hue-rotate(10deg)' }}
          />
        </>
      )}
      {variant === 'hero' && (
        <img
          src="/assets/patterns/mandala-tile.svg"
          aria-hidden="true"
          className="absolute bottom-10 right-10 w-96 h-96 pointer-events-none"
          style={{ opacity, filter: 'invert(70%) sepia(30%) saturate(500%) hue-rotate(10deg)' }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
