'use client'

import { useState, useEffect } from 'react'
import { menuItems, type MenuItem } from '@/data/menu'
import { dishImage } from '@/lib/dishImage'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { SectionLabel } from '@/components/ui/SectionLabel'
import SocialCards, { type CardItem } from '@/components/ui/SocialCards'
import { useI18n } from '@/lib/i18n'

const COUNT = 11

const toCard = (i: MenuItem): CardItem => ({
  imgUrl: dishImage(i, 600, 750),
  alt: i.name,
  linkUrl: '/menu',
})

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Random selection — real uploaded photos first, then random dishes to fill.
 *  Deduped by photo so no image repeats within the fan. */
function pickRandom(): CardItem[] {
  const withPhoto = shuffle(menuItems.filter(i => i.image))
  const rest = shuffle(menuItems.filter(i => !i.image))
  const seen = new Set<string>()
  const cards: CardItem[] = []
  for (const item of [...withPhoto, ...rest]) {
    const card = toCard(item)
    if (seen.has(card.imgUrl)) continue
    seen.add(card.imgUrl)
    cards.push(card)
    if (cards.length === COUNT) break
  }
  return shuffle(cards)
}

/** Signature dishes shown as a GSAP fanned-card carousel. */
export function SignatureFan() {
  const { t } = useI18n()
  // null on the server / first paint (avoids hydration mismatch from random),
  // then we pick a random set on mount so the fan animates in once.
  const [cards, setCards] = useState<CardItem[] | null>(null)
  useEffect(() => setCards(pickRandom()), [])

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: '#0E0804' }}>
      {/* faint mandala texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/patterns/mandala-tile.svg)',
          backgroundSize: '160px 160px',
          opacity: 0.03,
        }}
      />

      <div className="container-cp relative flex flex-col items-center text-center gap-4 mb-10">
        <SectionLabel>{t.signature.label}</SectionLabel>
        <OrnamentDivider className="w-48" />
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold italic text-[#F5EDE0] leading-tight">
          {t.signature.title}
        </h2>
        <p className="font-lora text-base text-[#C4B49A] max-w-md">
          {t.signature.subtitle}
        </p>
      </div>

      {cards ? <SocialCards cards={cards} /> : <div className="fan-layout" aria-hidden />}
    </section>
  )
}
