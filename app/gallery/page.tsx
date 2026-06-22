'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useI18n } from '@/lib/i18n'

const M = '/assets/images/menu/'

/** Real uploaded photos with bilingual captions. */
const photos = [
  { id: 1, src: `${M}butter%20Chicken.png`,           fr: 'Poulet au beurre',  en: 'Butter Chicken',     tall: true },
  { id: 2, src: `${M}Whole%20Chicken%20Tandoori.png`, fr: 'Poulet tandoori',   en: 'Tandoori Chicken' },
  { id: 3, src: `${M}Chicken%20Sheekh%20Kebab.png`,   fr: 'Seekh Kebab',       en: 'Seekh Kebab' },
  { id: 4, src: `${M}Masala%20dosa.png`,              fr: 'Dosa masala',       en: 'Masala Dosa',        tall: true },
  { id: 5, src: `${M}Malai%20Chicken%20Tikka.png`,    fr: 'Tikka malai',       en: 'Malai Tikka' },
  { id: 6, src: `${M}Dal%20Makhni.png`,              fr: 'Dal makhani',       en: 'Dal Makhani' },
  { id: 7, src: `${M}chicken%20tikka.png`,           fr: 'Tikka au poulet',   en: 'Chicken Tikka',      tall: true },
  { id: 8, src: `${M}Resham%20Kebab.png`,            fr: 'Resham Kebab',      en: 'Resham Kebab' },
  { id: 9, src: `${M}Veg%20Pakora.png`,              fr: 'Pakora aux légumes', en: 'Vegetable Pakora' },
]

export default function GalleryPage() {
  const { t, lang } = useI18n()
  const g = t.galleryPage
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close])

  const current = photos.find(p => p.id === active)
  const caption = (p: { fr: string; en: string }) => (lang === 'fr' ? p.fr : p.en)

  return (
    <div className="min-h-screen" style={{ background: '#0E0804' }}>
      <PageHeader label={g.label} title={g.title} subtitle={g.subtitle} />

      <section className="section-pad">
        <div className="container-cp">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {photos.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid">
                <button
                  onClick={() => setActive(photo.id)}
                  className="group relative w-full overflow-hidden block"
                  style={{ border: '1px solid #C9A84C22' }}
                  aria-label={caption(photo)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={caption(photo)}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${photo.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0E0804]/0 group-hover:bg-[#0E0804]/50 transition-colors duration-300">
                    <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {g.view}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0E0804]/85 to-transparent">
                    <span className="font-cormorant text-sm text-[#F5EDE0]">{caption(photo)}</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'rgba(14,8,4,0.92)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label={g.close}
              className="absolute top-6 right-6 font-cinzel text-sm tracking-widest uppercase text-[#C9A84C] hover:text-[#F5EDE0] transition-colors"
            >
              {g.close} ✕
            </button>
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={current.src} alt={caption(current)} className="w-full max-h-[80vh] object-contain" style={{ border: '1px solid #C9A84C44' }} />
              <p className="font-cormorant text-lg text-[#F5EDE0] text-center mt-4">{caption(current)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
