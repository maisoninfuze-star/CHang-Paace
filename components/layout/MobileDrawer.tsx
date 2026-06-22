'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from '@/components/ui/LangToggle'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileDrawer({ open, onClose, links }: MobileDrawerProps) {
  const { t } = useI18n()
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
            style={{ background: '#0E0804', borderLeft: '1px solid #C9A84C33' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[#C9A84C]/20">
              <span className="font-cinzel text-sm tracking-widest uppercase text-[#C9A84C]">
                {t.nav.drawerTitle}
              </span>
              <div className="flex items-center gap-3">
                <LangToggle />
                <button
                  aria-label={t.nav.closeMenu}
                  onClick={onClose}
                  className="text-[#C4B49A] hover:text-[#F5EDE0] transition-colors text-2xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    className="block font-cinzel text-xl tracking-wide text-[#F5EDE0] hover:text-[#C9A84C] transition-colors py-3 border-b border-[#C9A84C]/10"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Reserve CTA */}
            <div className="px-8 py-8">
              <Link
                href="/reservations"
                onClick={onClose}
                className="block text-center font-cinzel text-sm tracking-widest uppercase py-4 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0E0804] transition-all"
              >
                {t.hero.reserve}
              </Link>
              <p className="text-center font-jost text-xs text-[#C4B49A] mt-4">
                (514) 271-6000
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
