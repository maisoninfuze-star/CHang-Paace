'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Lang = 'fr' | 'en'

/* ────────────────────────────────────────────────────────────
   Full FR / EN dictionary. Every UI string lives here so the
   whole site switches language from one toggle.
   ──────────────────────────────────────────────────────────── */
export const messages = {
  fr: {
    nav: {
      home: 'Accueil', menu: 'Menu', about: 'Notre Histoire', gallery: 'Galerie',
      contact: 'Contact', reserve: 'Réserver', tagline: 'Cuisine Indienne',
      openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', drawerTitle: 'Menu',
    },
    hero: {
      eyebrow: 'Cuisine Indienne Authentique · Montréal',
      tagline: 'Des saveurs authentiques du Punjab, au cœur de Montréal',
      headline: 'Une expérience culinaire inoubliable',
      reserve: 'Réserver une table', viewMenu: 'Voir le menu',
      scroll: 'Défiler', hours: '11h – 22h · Tous les jours',
    },
    features: {
      authentic: { title: 'Cuisine Punjabi Authentique', desc: 'Recettes traditionnelles transmises de génération en génération' },
      halal: { title: 'Certifié Halal', desc: 'Tous nos plats respectent les exigences halal' },
      delivery: { title: 'Livraison Disponible', desc: 'Uber Eats et Skip The Dishes · Livraison rapide' },
    },
    origin: {
      label: 'Notre inspiration',
      heading: 'D’Amritsar à Montréal',
      p1: 'Du cœur du Pendjab jusqu’aux rues de Montréal, Chand Palace réunit deux mondes : la chaleur dorée du Temple d’Or et l’énergie vibrante de notre ville. Chaque plat raconte ce voyage.',
      p2: 'Une cuisine punjabi authentique, servie dans une ambiance qui célèbre à la fois nos racines et notre maison d’adoption.',
      button: 'Notre histoire',
    },
    about: {
      label: 'Notre Histoire', heading: 'Un goût du Punjab à Montréal',
      p1: 'Depuis son ouverture, Chand Palace apporte les saveurs riches et authentiques de la cuisine punjabi au cœur de Montréal. Chaque plat est préparé avec des épices fraîchement moulues et des recettes transmises de génération en génération.',
      p2: 'Notre chef et équipe mettent un point d’honneur à préserver l’authenticité de la cuisine indienne tout en créant une expérience chaleureuse et accueillante pour chaque convive.',
      button: 'Notre histoire complète',
    },
    signature: {
      label: 'Nos spécialités', title: 'Plats signature',
      subtitle: 'Les favoris de la maison — survolez pour explorer, ou faites défiler.',
    },
    testimonials: { label: 'Ce que disent nos clients', title: 'Témoignages', via: 'via' },
    delivery: {
      label: 'Commandez en ligne', heading: 'Savourez à la maison',
      p: 'Nos plats livrés chauds directement chez vous, partout à Montréal. Disponible sur Uber Eats et Skip The Dishes.',
      call: 'Ou appelez-nous directement :',
    },
    reservationCta: {
      label: 'Réservations', heading: 'Réservez votre table',
      p: 'Pour un dîner en famille ou une occasion spéciale, nous serons ravis de vous accueillir.',
    },
    form: {
      name: 'Nom', fullName: 'Nom complet', party: 'Personnes', date: 'Date', time: 'Heure',
      phone: 'Téléphone', email: 'Courriel (optionnel)', notes: 'Demandes spéciales',
      namePlaceholder: 'Votre nom', phonePlaceholder: '(514) 000-0000',
      emailPlaceholder: 'vous@exemple.com', notesPlaceholder: 'Allergies, occasion spéciale…',
      choose: 'Choisir…', person: 'personne', persons: 'personnes',
      submit: 'Réserver ma table', sending: 'Envoi…',
    },
    footer: {
      tagline: 'Cuisine Indienne · Indian Cuisine',
      blurb: 'Des saveurs authentiques du Punjab, servies avec chaleur au cœur de Montréal depuis des années.',
      menuHeading: 'Notre Menu', navHeading: 'Navigation', visitHeading: 'Nous Visiter',
      hoursHeading: 'Heures d’ouverture', hoursWeek: 'Lun – Ven : 11h – 22h', hoursWeekend: 'Sam – Dim : 11h – 23h',
      rights: 'Tous droits réservés.', privacy: 'Confidentialité', terms: 'Conditions',
    },
    menuPage: {
      label: 'Notre Cuisine', title: 'Le Menu',
      subtitle: 'Saveurs authentiques du Punjab · Cuisine Halal', all: 'Tous',
      open: 'Ouvrir dans un nouvel onglet', download: 'Télécharger le PDF',
      fallback: 'Votre navigateur ne peut pas afficher le PDF.',
    },
    reservationsPage: {
      label: 'Réservations', title: 'Réservez votre table',
      subtitle: 'Pour un dîner en famille ou une occasion spéciale, nous serons ravis de vous accueillir.',
      infoHeading: 'Une table vous attend',
      infoP: 'Remplissez le formulaire et notre équipe vous confirmera votre réservation dans les plus brefs délais. Pour les groupes de plus de 10 personnes, veuillez nous appeler directement.',
      addressLabel: 'Adresse', phoneLabel: 'Téléphone', hoursLabel: 'Heures d’ouverture',
      hoursValue: 'Tous les jours · 11h – 22h',
      successTitle: 'Merci !',
      successP: 'Votre demande de réservation a bien été reçue. Nous vous confirmerons sous peu. À très bientôt chez Chand Palace.',
      again: 'Nouvelle réservation',
      error: 'Une erreur est survenue. Veuillez réessayer ou nous appeler au (514) 271-6000.',
      vName: 'Veuillez entrer votre nom', vPhone: 'Numéro de téléphone invalide',
      vEmail: 'Courriel invalide', vDate: 'Veuillez choisir une date', vTime: 'Veuillez choisir une heure',
    },
    aboutPage: {
      label: 'Notre Histoire', title: 'L’âme du Punjab',
      subtitle: 'Une tradition culinaire portée par la passion, servie au cœur de Montréal.',
      storyLabel: 'Depuis nos débuts', storyHeading: 'Un goût du Punjab à Montréal',
      storyP1: 'Chand Palace est né d’un désir simple : partager la cuisine généreuse et parfumée du Punjab avec la ville de Montréal. De la première bouchée de butter chicken au dernier morceau de naan tout juste sorti du tandoor, chaque détail rend hommage à notre héritage.',
      storyP2: 'Notre cuisine marie épices fraîchement moulues, ingrédients soigneusement choisis et savoir-faire transmis au fil des générations. Le résultat : des plats authentiques, préparés avec le même soin que dans une maison punjabi.',
      storyButton: 'Découvrir le menu',
      valuesLabel: 'Nos valeurs', valuesTitle: 'Ce qui nous distingue',
      values: [
        { title: 'Épices fraîchement moulues', body: 'Chaque mélange est préparé à la main, jour après jour, pour préserver la profondeur et l’arôme de la cuisine punjabi.' },
        { title: 'Recettes de famille', body: 'Nos plats suivent des recettes transmises de génération en génération, fidèles aux saveurs du Punjab.' },
        { title: 'Cuisine Halal', body: 'Toutes nos viandes sont certifiées Halal, préparées dans le respect de nos traditions.' },
        { title: 'Hospitalité chaleureuse', body: 'Nous accueillons chaque convive comme un membre de la famille — c’est l’esprit du « Palace ».' },
      ],
      ctaTitle: 'Venez vivre l’expérience',
      ctaP: 'Réservez votre table dès aujourd’hui et laissez-nous vous faire voyager.',
      ctaButton: 'Réserver une table',
    },
    galleryPage: {
      label: 'Galerie', title: 'En images',
      subtitle: 'Un aperçu de nos plats, de notre salle et de l’atmosphère de Chand Palace.',
      view: 'Voir', close: 'Fermer',
    },
    contactPage: {
      label: 'Contact', title: 'Nous trouver',
      subtitle: 'Au cœur de Montréal, sur Jean-Talon Ouest. Venez nous rendre visite.',
      coords: 'Coordonnées', addressLabel: 'Adresse', phoneLabel: 'Téléphone', emailLabel: 'Courriel',
      hoursLabel: 'Heures d’ouverture', delivery: 'Livraison disponible jusqu’à 21h.',
      mapTitle: 'Carte — Chand Palace',
      hours: [
        { day: 'Lundi – Jeudi', time: '11h00 – 22h00' },
        { day: 'Vendredi – Samedi', time: '11h00 – 23h00' },
        { day: 'Dimanche', time: '11h00 – 22h00' },
      ],
    },
    legal: {
      label: 'Mentions légales', privacyTitle: 'Confidentialité', termsTitle: 'Conditions',
      privacyP1: 'Chand Palace respecte votre vie privée. Les renseignements que vous nous fournissez (nom, téléphone, courriel) lors d’une réservation sont utilisés uniquement pour traiter votre demande et ne sont jamais vendus à des tiers.',
      privacyP2: 'Pour toute question concernant vos données, contactez-nous au (514) 271-6000 ou à info@chandpalace.ca.',
      termsP1: 'Les prix et la disponibilité des plats sont sujets à changement sans préavis. Les demandes de réservation sont confirmées par notre équipe et ne constituent pas une garantie de table avant confirmation.',
      termsP2: 'Ce site est fourni à titre informatif. Pour toute question, contactez-nous au (514) 271-6000.',
    },
    spice: { mild: 'Doux', medium: 'Moyen', hot: 'Fort' },
    badge: { chefs: 'Choix du chef', new: 'Nouveau' },
  },

  en: {
    nav: {
      home: 'Home', menu: 'Menu', about: 'Our Story', gallery: 'Gallery',
      contact: 'Contact', reserve: 'Reserve', tagline: 'Indian Cuisine',
      openMenu: 'Open menu', closeMenu: 'Close menu', drawerTitle: 'Menu',
    },
    hero: {
      eyebrow: 'Authentic Indian Cuisine · Montréal',
      tagline: 'Authentic Punjab flavours, in the heart of Montréal',
      headline: 'An unforgettable dining experience',
      reserve: 'Reserve a table', viewMenu: 'View the menu',
      scroll: 'Scroll', hours: '11 AM – 10 PM · Every day',
    },
    features: {
      authentic: { title: 'Authentic Punjabi Cuisine', desc: 'Traditional recipes passed down through generations' },
      halal: { title: 'Halal Certified', desc: 'All our dishes meet halal requirements' },
      delivery: { title: 'Delivery Available', desc: 'Uber Eats and Skip The Dishes · Fast delivery' },
    },
    origin: {
      label: 'Our inspiration',
      heading: 'From Amritsar to Montréal',
      p1: 'From the heart of Punjab to the streets of Montréal, Chand Palace brings two worlds together: the golden warmth of the Golden Temple and the vibrant energy of our city. Every dish tells that journey.',
      p2: 'Authentic Punjabi cuisine, served in a setting that celebrates both our roots and our adopted home.',
      button: 'Our story',
    },
    about: {
      label: 'Our Story', heading: 'A taste of Punjab in Montréal',
      p1: 'Since opening, Chand Palace has brought the rich, authentic flavours of Punjabi cuisine to the heart of Montréal. Every dish is prepared with freshly ground spices and recipes passed down through generations.',
      p2: 'Our chef and team take pride in preserving the authenticity of Indian cuisine while creating a warm and welcoming experience for every guest.',
      button: 'Read our full story',
    },
    signature: {
      label: 'Our specialties', title: 'Signature dishes',
      subtitle: 'House favourites — hover to explore, or scroll through.',
    },
    testimonials: { label: 'What our guests say', title: 'Testimonials', via: 'via' },
    delivery: {
      label: 'Order online', heading: 'Enjoy it at home',
      p: 'Our dishes delivered hot, straight to your door, anywhere in Montréal. Available on Uber Eats and Skip The Dishes.',
      call: 'Or call us directly:',
    },
    reservationCta: {
      label: 'Reservations', heading: 'Reserve your table',
      p: 'For a family dinner or a special occasion, we would be delighted to welcome you.',
    },
    form: {
      name: 'Name', fullName: 'Full name', party: 'Guests', date: 'Date', time: 'Time',
      phone: 'Phone', email: 'Email (optional)', notes: 'Special requests',
      namePlaceholder: 'Your name', phonePlaceholder: '(514) 000-0000',
      emailPlaceholder: 'you@example.com', notesPlaceholder: 'Allergies, special occasion…',
      choose: 'Choose…', person: 'guest', persons: 'guests',
      submit: 'Reserve my table', sending: 'Sending…',
    },
    footer: {
      tagline: 'Indian Cuisine · Cuisine Indienne',
      blurb: 'Authentic Punjab flavours, served with warmth in the heart of Montréal for years.',
      menuHeading: 'Our Menu', navHeading: 'Navigation', visitHeading: 'Visit Us',
      hoursHeading: 'Opening hours', hoursWeek: 'Mon – Fri: 11 AM – 10 PM', hoursWeekend: 'Sat – Sun: 11 AM – 11 PM',
      rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms',
    },
    menuPage: {
      label: 'Our Cuisine', title: 'The Menu',
      subtitle: 'Authentic Punjab flavours · Halal cuisine', all: 'All',
      open: 'Open in a new tab', download: 'Download PDF',
      fallback: 'Your browser cannot display the PDF.',
    },
    reservationsPage: {
      label: 'Reservations', title: 'Reserve your table',
      subtitle: 'For a family dinner or a special occasion, we would be delighted to welcome you.',
      infoHeading: 'A table awaits you',
      infoP: 'Fill out the form and our team will confirm your reservation as soon as possible. For groups of more than 10 guests, please call us directly.',
      addressLabel: 'Address', phoneLabel: 'Phone', hoursLabel: 'Opening hours',
      hoursValue: 'Every day · 11 AM – 10 PM',
      successTitle: 'Thank you!',
      successP: 'Your reservation request has been received. We will confirm shortly. See you soon at Chand Palace.',
      again: 'New reservation',
      error: 'Something went wrong. Please try again or call us at (514) 271-6000.',
      vName: 'Please enter your name', vPhone: 'Invalid phone number',
      vEmail: 'Invalid email', vDate: 'Please choose a date', vTime: 'Please choose a time',
    },
    aboutPage: {
      label: 'Our Story', title: 'The soul of Punjab',
      subtitle: 'A culinary tradition driven by passion, served in the heart of Montréal.',
      storyLabel: 'From the beginning', storyHeading: 'A taste of Punjab in Montréal',
      storyP1: 'Chand Palace was born from a simple desire: to share the generous, fragrant cuisine of Punjab with the city of Montréal. From the first bite of butter chicken to the last piece of naan fresh from the tandoor, every detail honours our heritage.',
      storyP2: 'Our kitchen blends freshly ground spices, carefully chosen ingredients, and know-how passed down through generations. The result: authentic dishes, prepared with the same care as in a Punjabi home.',
      storyButton: 'Explore the menu',
      valuesLabel: 'Our values', valuesTitle: 'What sets us apart',
      values: [
        { title: 'Freshly ground spices', body: 'Every blend is prepared by hand, day after day, to preserve the depth and aroma of Punjabi cuisine.' },
        { title: 'Family recipes', body: 'Our dishes follow recipes passed down through generations, faithful to the flavours of Punjab.' },
        { title: 'Halal cuisine', body: 'All our meats are Halal certified, prepared in keeping with our traditions.' },
        { title: 'Warm hospitality', body: 'We welcome every guest like family — that is the spirit of the “Palace”.' },
      ],
      ctaTitle: 'Come live the experience',
      ctaP: 'Reserve your table today and let us take you on a journey.',
      ctaButton: 'Reserve a table',
    },
    galleryPage: {
      label: 'Gallery', title: 'In pictures',
      subtitle: 'A glimpse of our dishes, our dining room, and the atmosphere at Chand Palace.',
      view: 'View', close: 'Close',
    },
    contactPage: {
      label: 'Contact', title: 'Find us',
      subtitle: 'In the heart of Montréal, on Jean-Talon Ouest. Come visit us.',
      coords: 'Contact details', addressLabel: 'Address', phoneLabel: 'Phone', emailLabel: 'Email',
      hoursLabel: 'Opening hours', delivery: 'Delivery available until 9 PM.',
      mapTitle: 'Map — Chand Palace',
      hours: [
        { day: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
        { day: 'Friday – Saturday', time: '11:00 AM – 11:00 PM' },
        { day: 'Sunday', time: '11:00 AM – 10:00 PM' },
      ],
    },
    legal: {
      label: 'Legal', privacyTitle: 'Privacy', termsTitle: 'Terms',
      privacyP1: 'Chand Palace respects your privacy. The information you provide (name, phone, email) when making a reservation is used only to process your request and is never sold to third parties.',
      privacyP2: 'For any questions about your data, contact us at (514) 271-6000 or at info@chandpalace.ca.',
      termsP1: 'Prices and dish availability are subject to change without notice. Reservation requests are confirmed by our team and do not guarantee a table until confirmed.',
      termsP2: 'This site is provided for informational purposes. For any questions, contact us at (514) 271-6000.',
    },
    spice: { mild: 'Mild', medium: 'Medium', hot: 'Hot' },
    badge: { chefs: "Chef's Choice", new: 'New' },
  },
} as const

export type Messages = (typeof messages)['fr']

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: Messages }
const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  // Read stored preference after mount (avoids hydration mismatch).
  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem('cp-lang')) as Lang | null
    if (stored === 'fr' || stored === 'en') setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('cp-lang', l) } catch {}
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: messages[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
