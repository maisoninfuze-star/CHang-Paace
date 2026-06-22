import { Cinzel, Playfair_Display, Cormorant_Garamond, Lora, Jost } from 'next/font/google'

export const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700'],
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
  display: 'swap',
})
