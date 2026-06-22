import type { MenuItem, MenuCategory } from '@/data/menu'
import type { Lang } from '@/lib/i18n'

/** Dish name in the active language. */
export const dishName = (i: MenuItem, lang: Lang) => (lang === 'fr' ? i.nameFr : i.name)
/** Dish description in the active language (falls back to the other if missing). */
export const dishDesc = (i: MenuItem, lang: Lang) =>
  lang === 'fr' ? i.descriptionFr ?? i.description : i.description ?? i.descriptionFr

/**
 * Resolves a photo for a menu item.
 *
 * Priority:
 *   1. `item.image` — paste ANY image URL here (your own uploads in /public, a
 *      specific Unsplash/Pexels link, etc.) and it always wins.
 *   2. Otherwise we pick a curated, on-topic stock photo from Unsplash, chosen
 *      by a stable hash of the dish id so the same dish always shows the same
 *      picture. Savoury dishes, drinks and desserts draw from separate pools.
 *
 * To use a specific picture for a dish, just set `image: '...'` on it in
 * `data/menu.ts`.
 */

// Curated Unsplash photo IDs (real, permanent). Stored as base IDs; sizing is
// applied at call time so each spot requests only the resolution it needs.
const SAVOURY = [
  '1555939594-58d7cb561ad1', '1585937421612-70a008356fbe', '1589302168068-964664d93dc0',
  '1625398407796-82650a8c135f', '1574484284002-952d92456975', '1728910156510-77488f19b152',
  '1601050690597-df0568f70950', '1694849789325-914b71ab4075', '1565557623262-b51c2513a641',
  '1581600140682-d4e68c8cde32', '1668236543090-82eba5ee5976', '1517244683847-7456b63c5969',
  '1606471191009-63994c53433b', '1542367592-8849eb950fd8', '1589301760014-d929f3979dbc',
]
const DRINKS = [
  '1601493700631-2b16ec4b4716', '1553279768-865429fa0078', '1669207334420-66d0e3450283',
  '1623065422902-30a2d299bbe4', '1546173159-315724a31696', '1697642452436-9c40773cbcbb',
]
const DESSERTS = [
  '1635952346904-95f2ccfcd029', '1635564981692-857482d9325f', '1667185487656-91aee4306658',
  '1646578515903-67873a5398f9', '1667185487460-b303881b2bb9', '1667185486143-a2d5609f5229',
]

/** A great wide shot for full-bleed hero / banner backgrounds. */
export const HERO_IMAGE = unsplash('1585937421612-70a008356fbe', 1920, 1080)

function pool(category: MenuCategory): string[] {
  if (category === 'drinks') return DRINKS
  if (category === 'desserts') return DESSERTS
  return SAVOURY
}

/** Small stable hash so each dish keeps the same photo. */
function hash(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 100000
  return h
}

export function unsplash(photoId: string, w: number, h: number): string {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=70`
}

export function dishImage(item: MenuItem, w = 440, h = 320): string {
  if (item.image) return item.image
  const list = pool(item.category)
  return unsplash(list[hash(item.id) % list.length], w, h)
}
