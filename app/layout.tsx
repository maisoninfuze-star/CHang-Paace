import type { Metadata } from 'next'
import { cinzel, playfair, cormorant, lora, jost } from '@/lib/fonts'
import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Chand Palace — Authentic Indian Cuisine · Montréal',
    template: '%s | Chand Palace',
  },
  description:
    'Experience the rich flavours of authentic Punjabi cuisine at Chand Palace, Montréal. Dine in, takeout, and delivery available.',
  keywords: ['Indian restaurant Montreal', 'Punjabi cuisine', 'halal restaurant Montreal', 'Indian food Jean-Talon'],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://chandpalace.ca',
    siteName: 'Chand Palace',
    title: 'Chand Palace — Authentic Indian Cuisine · Montréal',
    description: 'Experience the rich flavours of authentic Punjabi cuisine at Chand Palace, Montréal.',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Chand Palace',
      description: 'Authentic Punjabi cuisine in Montréal',
      url: 'https://chandpalace.ca',
      telephone: '+15142716000',
      servesCuisine: ['Punjabi', 'Indian', 'Halal'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '989 Jean-Talon Ouest',
        addressLocality: 'Montréal',
        addressRegion: 'QC',
        postalCode: 'H3N 1S9',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.5283,
        longitude: -73.6263,
      },
    }),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={[
        cinzel.variable,
        playfair.variable,
        cormorant.variable,
        lora.variable,
        jost.variable,
      ].join(' ')}
    >
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
