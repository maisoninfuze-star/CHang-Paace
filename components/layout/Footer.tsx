'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { categoryLabels, type MenuCategory } from '@/data/menu'

const menuCats: MenuCategory[] = ['appetizers', 'tandoori', 'chicken', 'vegetarian', 'desserts', 'drinks']

export function Footer() {
  const { t, lang } = useI18n()

  const quickLinks = [
    { href: '/',             label: t.nav.home },
    { href: '/about',        label: t.nav.about },
    { href: '/gallery',      label: t.nav.gallery },
    { href: '/reservations', label: t.reservationsPage.label },
    { href: '/contact',      label: t.nav.contact },
  ]

  return (
    <footer style={{ background: '#0E0804', borderTop: '1px solid #C9A84C33' }}>
      {/* Main footer */}
      <div className="container-cp py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <p className="font-cinzel text-lg font-bold tracking-[0.15em] uppercase text-[#F5EDE0] mb-1">
            Chand Palace
          </p>
          <p className="font-jost text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mb-4">
            {t.footer.tagline}
          </p>
          <p className="font-lora text-sm text-[#C4B49A] leading-relaxed mb-6">
            {t.footer.blurb}
          </p>
          <div className="flex gap-3">
            {['Facebook', 'Instagram'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0E0804] transition-all text-xs font-cinzel"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Menu links */}
        <div>
          <h3 className="font-cinzel text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
            {t.footer.menuHeading}
          </h3>
          <ul className="space-y-2.5">
            {menuCats.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/menu#${cat}`}
                  className="font-jost text-sm text-[#C4B49A] hover:text-[#F5EDE0] transition-colors"
                >
                  {categoryLabels[cat][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-cinzel text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
            {t.footer.navHeading}
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-jost text-sm text-[#C4B49A] hover:text-[#F5EDE0] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & contact */}
        <div>
          <h3 className="font-cinzel text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
            {t.footer.visitHeading}
          </h3>
          <address className="not-italic font-jost text-sm text-[#C4B49A] space-y-2">
            <p>989 Jean-Talon Ouest</p>
            <p>Montréal, QC  H3N 1S9</p>
            <p className="pt-1">
              <a href="tel:+15142716000" className="hover:text-[#F5EDE0] transition-colors">
                (514) 271-6000
              </a>
            </p>
          </address>
          <div className="mt-4 font-jost text-sm text-[#C4B49A] space-y-1">
            <p className="text-[#F5EDE0] text-xs font-cinzel tracking-wider mb-2">{t.footer.hoursHeading}</p>
            <p>{t.footer.hoursWeek}</p>
            <p>{t.footer.hoursWeekend}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#4E3926' }} className="py-4">
        <div className="container-cp flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-jost text-xs text-[#C4B49A]">
            © {new Date().getFullYear()} Chand Palace. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="font-jost text-xs text-[#C4B49A] hover:text-[#F5EDE0] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="font-jost text-xs text-[#C4B49A] hover:text-[#F5EDE0] transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
