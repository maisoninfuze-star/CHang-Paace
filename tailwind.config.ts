import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cp: {
          // Dark backgrounds (pixel-extracted from digital menu PDF)
          espresso:        '#0E0804',
          'espresso-mid':  '#2D1315',
          'espresso-warm': '#4E3926',
          // Crimson accents (section headers in menu)
          crimson:         '#4C1215',
          'crimson-light': '#7A2020',
          // Light backgrounds
          parchment:       '#EDE3D5',
          ivory:           '#F4EBDA',
          // Crown gold
          gold:            '#C9A84C',
          'gold-light':    '#E8CF82',
          // Text
          'text-light':    '#F5EDE0',
          'text-muted':    '#C4B49A',
          'text-dark':     '#1C0D08',
          'text-taupe':    '#7A6558',
        },
      },
      fontFamily: {
        cinzel:    ['var(--font-cinzel)', 'serif'],
        playfair:  ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        lora:      ['var(--font-lora)', 'serif'],
        jost:      ['var(--font-jost)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2' }],
        'display-sm': ['1.75rem', { lineHeight: '1.25' }],
      },
      spacing: {
        section: '9rem',
        'section-sm': '6rem',
      },
      maxWidth: {
        container: '1280px',
        wide: '1440px',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'bob':       'bob 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
