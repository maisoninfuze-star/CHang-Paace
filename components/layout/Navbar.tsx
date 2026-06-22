'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'
import { LangToggle } from '@/components/ui/LangToggle'
import { MobileDrawer } from './MobileDrawer'

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [drawerOpen, setDrawer]   = useState(false)
  const pathname = usePathname()
  const { t } = useI18n()

  const navLinks = [
    { href: '/',        label: t.nav.home },
    { href: '/menu',    label: t.nav.menu },
    { href: '/about',   label: t.nav.about },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#0E0804] border-b border-[#C9A84C]/20 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-6',
        )}
      >
        <nav className="container-cp flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-cinzel text-base font-bold tracking-[0.18em] uppercase text-[#F5EDE0] group-hover:text-[#C9A84C] transition-colors"
            >
              Chand Palace
            </span>
            <span className="font-jost text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mt-0.5">
              {t.nav.tagline}
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'font-jost text-sm tracking-wider uppercase transition-colors relative pb-1',
                      active
                        ? 'text-[#C9A84C]'
                        : 'text-[#C4B49A] hover:text-[#F5EDE0]',
                    )}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C]" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Toggle + CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <LangToggle className="hidden sm:inline-flex" />
            <Link
              href="/reservations"
              className={cn(
                'hidden lg:inline-flex items-center px-5 py-2.5 font-cinzel text-xs tracking-widest uppercase transition-all duration-300 border',
                'border-[#C9A84C] text-[#C9A84C]',
                'hover:bg-[#C9A84C] hover:text-[#0E0804]',
              )}
            >
              {t.nav.reserve}
            </Link>
            <button
              aria-label={t.nav.openMenu}
              onClick={() => setDrawer(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
            >
              <span className="w-6 h-px bg-[#F5EDE0] group-hover:bg-[#C9A84C] transition-colors" />
              <span className="w-4 h-px bg-[#F5EDE0] group-hover:bg-[#C9A84C] transition-colors" />
              <span className="w-6 h-px bg-[#F5EDE0] group-hover:bg-[#C9A84C] transition-colors" />
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawer(false)} links={navLinks} />
    </>
  )
}
