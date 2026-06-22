'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { HERO_IMAGE } from '@/lib/dishImage'
import { useI18n } from '@/lib/i18n'

const stagger = { visible: { transition: { staggerChildren: 0.18 } } }
const item = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function Hero() {
  const { t } = useI18n()
  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ background: '#0E0804' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* Full-bleed food photo (curated stock — swap for client-provided
            photography by changing HERO_IMAGE in lib/dishImage.ts) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Cuisine indienne authentique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Espresso gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,8,4,0.62) 0%, rgba(14,8,4,0.55) 45%, rgba(14,8,4,0.82) 100%)',
          }}
        />
        {/* Mandala watermark */}
        <img
          src="/assets/patterns/mandala-tile.svg"
          aria-hidden="true"
          className="absolute bottom-12 right-12 w-80 h-80 lg:w-[420px] lg:h-[420px] pointer-events-none"
          style={{ opacity: 0.08, filter: 'invert(80%) sepia(30%) saturate(400%) hue-rotate(10deg)' }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label */}
          <motion.span variants={item} className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
            {t.hero.eyebrow}
          </motion.span>

          {/* Restaurant name */}
          <motion.h1 variants={item} className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-[#F5EDE0] leading-none">
            Chand Palace
          </motion.h1>

          {/* Ornament */}
          <motion.div variants={item} className="w-64">
            <OrnamentDivider />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="font-cormorant text-xl md:text-2xl italic text-[#C4B49A] leading-relaxed">
            {t.hero.tagline}
          </motion.p>

          {/* Display headline */}
          <motion.p variants={item} className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold italic text-[#F5EDE0] leading-tight">
            {t.hero.headline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-4 font-cinzel text-xs tracking-widest uppercase bg-[#C9A84C] text-[#0E0804] hover:bg-[#0E0804] hover:text-[#C9A84C] border border-[#C9A84C] transition-all duration-300"
            >
              {t.hero.reserve}
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 font-cinzel text-xs tracking-widest uppercase border border-[#C9A84C]/60 text-[#F5EDE0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            >
              {t.hero.viewMenu}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="font-jost text-[10px] tracking-[0.25em] uppercase text-[#C4B49A]">
            {t.hero.scroll}
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/60 to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Info bar */}
      <div
        className="relative z-10 w-full py-4 border-t"
        style={{ background: 'rgba(14,8,4,0.85)', borderColor: '#C9A84C33' }}
      >
        <div className="container-cp flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-jost text-xs tracking-wider text-[#C4B49A]">
          <span>📍 989 Jean-Talon Ouest, Montréal</span>
          <span className="hidden sm:block text-[#C9A84C]/40">|</span>
          <a href="tel:+15142716000" className="hover:text-[#F5EDE0] transition-colors">
            📞 (514) 271-6000
          </a>
          <span className="hidden sm:block text-[#C9A84C]/40">|</span>
          <span>🕐 {t.hero.hours}</span>
        </div>
      </div>
    </section>
  )
}
