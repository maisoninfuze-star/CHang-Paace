'use client'

import { useI18n, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const options: Lang[] = ['fr', 'en']

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <div className={cn('inline-flex items-center border border-[#C9A84C]/30 rounded-full overflow-hidden', className)}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={cn(
            'px-3 py-1 font-cinzel text-[10px] tracking-widest uppercase transition-colors duration-300',
            lang === opt ? 'bg-[#C9A84C] text-[#0E0804]' : 'text-[#C4B49A] hover:text-[#C9A84C]',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
