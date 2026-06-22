export type SpiceLevel = 0 | 1 | 2 | 3

export type MenuCategory =
  | 'appetizers' | 'soups' | 'sides' | 'dosa'
  | 'breads' | 'tandoori' | 'thali' | 'chicken'
  | 'lamb' | 'seafood' | 'vegetarian' | 'rice'
  | 'drinks' | 'desserts'

export interface MenuItem {
  id: string
  name: string
  nameFr: string
  description?: string
  descriptionFr?: string
  price: number
  priceAlt?: { label: string; value: number }
  category: MenuCategory
  spiceLevel?: SpiceLevel
  featured?: boolean
  vegetarian?: boolean
  vegan?: boolean
  new?: boolean
  image?: string
}

export const menuItems: MenuItem[] = [
  // ── APPETIZERS / ENTRÉES ──
  { id: 'samosa-veg',      category: 'appetizers', name: 'Vegetable Samosa (2)',    nameFr: 'Samosa aux légumes (2)',       price: 5.99,  vegetarian: true, spiceLevel: 1 },
  { id: 'samosa-meat',     category: 'appetizers', name: 'Meat Samosa (2)',         nameFr: 'Samosa à la viande (2)',       price: 6.49,  spiceLevel: 1 },
  { id: 'pakora-veg',      category: 'appetizers', name: 'Vegetable Pakora',        nameFr: 'Pakora aux légumes',           price: 7.99,  vegetarian: true, spiceLevel: 1 },
  { id: 'pakora-chicken',  category: 'appetizers', name: 'Chicken Pakora',          nameFr: 'Pakora au poulet',             price: 9.99,  spiceLevel: 2 },
  { id: 'seekh-kebab',     category: 'appetizers', name: 'Seekh Kebab',             nameFr: 'Seekh Kebab',                  price: 11.99, spiceLevel: 2 },
  { id: 'chicken-tikka-ap',category: 'appetizers', name: 'Chicken Tikka',           nameFr: 'Tikka au poulet',              price: 12.99, spiceLevel: 2, featured: true },
  { id: 'fish-pakora',     category: 'appetizers', name: 'Fish Pakora',             nameFr: 'Pakora au poisson',            price: 11.99, spiceLevel: 2 },
  { id: 'pappadum',        category: 'appetizers', name: 'Pappadum (4)',            nameFr: 'Pappadum (4)',                  price: 3.99,  vegetarian: true, spiceLevel: 0 },
  { id: 'chutney',         category: 'appetizers', name: 'Chutney',                 nameFr: 'Chutney',                      price: 1.99,  vegetarian: true, spiceLevel: 0 },

  // ── SOUPS / SOUPES ──
  { id: 'dal-soup',        category: 'soups',      name: 'Dal Soup',                nameFr: 'Soupe dal',                    price: 5.99,  vegetarian: true, spiceLevel: 1 },
  { id: 'tomato-soup',     category: 'soups',      name: 'Tomato Soup',             nameFr: 'Soupe à la tomate',            price: 5.99,  vegetarian: true, spiceLevel: 0 },
  { id: 'mulligatawny',    category: 'soups',      name: 'Mulligatawny',            nameFr: 'Mulligatawny',                 price: 6.49,  spiceLevel: 2 },

  // ── SIDES / ACCOMPAGNEMENTS ──
  { id: 'raita',           category: 'sides',      name: 'Raita',                   nameFr: 'Raïta',                        price: 2.99,  vegetarian: true },
  { id: 'mango-chutney',   category: 'sides',      name: 'Mango Chutney',           nameFr: 'Chutney à la mangue',          price: 1.99,  vegetarian: true },
  { id: 'papadum-side',    category: 'sides',      name: 'Papadum',                 nameFr: 'Papadum',                      price: 1.99,  vegetarian: true },
  { id: 'onion-salad',     category: 'sides',      name: 'Onion Salad',             nameFr: 'Salade d\'oignon',             price: 2.49,  vegetarian: true },
  { id: 'mixed-pickle',    category: 'sides',      name: 'Mixed Pickle',            nameFr: 'Condiments mélangés',          price: 1.99,  vegetarian: true },

  // ── DOSA ──
  { id: 'plain-dosa',      category: 'dosa',       name: 'Plain Dosa',              nameFr: 'Dosa nature',                  price: 8.99,  vegetarian: true },
  { id: 'masala-dosa',     category: 'dosa',       name: 'Masala Dosa',             nameFr: 'Dosa masala',                  price: 10.99, vegetarian: true, spiceLevel: 1, featured: true },
  { id: 'onion-dosa',      category: 'dosa',       name: 'Onion Dosa',              nameFr: 'Dosa à l\'oignon',             price: 10.99, vegetarian: true, spiceLevel: 1 },
  { id: 'cheese-dosa',     category: 'dosa',       name: 'Cheese Dosa',             nameFr: 'Dosa au fromage',              price: 11.99, vegetarian: true },
  { id: 'chicken-dosa',    category: 'dosa',       name: 'Chicken Dosa',            nameFr: 'Dosa au poulet',               price: 12.99, spiceLevel: 2 },
  { id: 'lamb-dosa',       category: 'dosa',       name: 'Lamb Dosa',               nameFr: 'Dosa à l\'agneau',             price: 13.99, spiceLevel: 2 },
  { id: 'uttapam',         category: 'dosa',       name: 'Uttapam',                 nameFr: 'Uttapam',                      price: 10.99, vegetarian: true },

  // ── BREADS / PAINS ──
  { id: 'naan',            category: 'breads',     name: 'Plain Naan',              nameFr: 'Naan nature',                  price: 2.99,  vegetarian: true },
  { id: 'butter-naan',     category: 'breads',     name: 'Butter Naan',             nameFr: 'Naan au beurre',               price: 3.49,  vegetarian: true },
  { id: 'garlic-naan',     category: 'breads',     name: 'Garlic Naan',             nameFr: 'Naan à l\'ail',                price: 3.99,  vegetarian: true, featured: true },
  { id: 'cheese-naan',     category: 'breads',     name: 'Cheese Naan',             nameFr: 'Naan au fromage',              price: 4.49,  vegetarian: true },
  { id: 'stuffed-naan',    category: 'breads',     name: 'Stuffed Naan',            nameFr: 'Naan farci',                   price: 4.99,  vegetarian: true },
  { id: 'roti',            category: 'breads',     name: 'Roti',                    nameFr: 'Roti',                         price: 2.49,  vegetarian: true },
  { id: 'paratha',         category: 'breads',     name: 'Paratha',                 nameFr: 'Paratha',                      price: 3.49,  vegetarian: true },
  { id: 'puri',            category: 'breads',     name: 'Puri (2)',                nameFr: 'Puri (2)',                     price: 2.99,  vegetarian: true },

  // ── TANDOORI ──
  { id: 'tandoori-chicken-half', category: 'tandoori', name: 'Tandoori Chicken (Half)',  nameFr: 'Poulet tandoori (demi)',  price: 13.99, spiceLevel: 2, featured: true },
  { id: 'tandoori-chicken-full', category: 'tandoori', name: 'Tandoori Chicken (Full)',  nameFr: 'Poulet tandoori (entier)',price: 23.99, spiceLevel: 2 },
  { id: 'chicken-tikka-t',      category: 'tandoori', name: 'Chicken Tikka',           nameFr: 'Tikka au poulet',           price: 14.99, spiceLevel: 2 },
  { id: 'seekh-kebab-t',        category: 'tandoori', name: 'Seekh Kebab',             nameFr: 'Seekh Kebab',               price: 13.99, spiceLevel: 2 },
  { id: 'lamb-chops',           category: 'tandoori', name: 'Lamb Chops',              nameFr: 'Côtelettes d\'agneau',      price: 17.99, spiceLevel: 2 },
  { id: 'mixed-grill',          category: 'tandoori', name: 'Mixed Grill',             nameFr: 'Grillade mixte',            price: 19.99, spiceLevel: 2, featured: true },
  { id: 'tandoori-shrimp',      category: 'tandoori', name: 'Tandoori Shrimp',         nameFr: 'Crevettes tandoori',        price: 16.99, spiceLevel: 2 },
  { id: 'malai-chicken-tikka',  category: 'tandoori', name: 'Malai Chicken Tikka',     nameFr: 'Tikka malai au poulet',     price: 14.99, spiceLevel: 1, featured: true, image: '/assets/images/menu/Malai%20Chicken%20Tikka.png' },
  { id: 'bihari-kebab',         category: 'tandoori', name: 'Bihari Kebab',            nameFr: 'Bihari kebab',              price: 14.99, spiceLevel: 2, image: '/assets/images/menu/Bihari%20Kebab.png' },
  { id: 'resham-kebab',         category: 'tandoori', name: 'Resham Kebab',            nameFr: 'Resham kebab',              price: 13.99, spiceLevel: 2, image: '/assets/images/menu/Resham%20Kebab.png' },

  // ── THALI ──
  { id: 'veg-thali',       category: 'thali', name: 'Vegetarian Thali',            nameFr: 'Thali végétarien',             price: 14.99, vegetarian: true, spiceLevel: 1 },
  { id: 'chicken-thali',   category: 'thali', name: 'Chicken Thali',               nameFr: 'Thali au poulet',              price: 16.99, spiceLevel: 2, featured: true },
  { id: 'lamb-thali',      category: 'thali', name: 'Lamb Thali',                  nameFr: 'Thali à l\'agneau',            price: 18.99, spiceLevel: 2 },
  { id: 'special-thali',   category: 'thali', name: 'Special Thali',               nameFr: 'Thali spécial',                price: 21.99, spiceLevel: 2, featured: true },

  // ── CHICKEN / POULET ──
  { id: 'butter-chicken',  category: 'chicken', name: 'Butter Chicken',            nameFr: 'Poulet au beurre',             price: 14.99, spiceLevel: 1, featured: true, description: 'Tender chicken in a rich tomato cream sauce' },
  { id: 'chicken-tikka-m', category: 'chicken', name: 'Chicken Tikka Masala',      nameFr: 'Masala tikka au poulet',       price: 14.99, spiceLevel: 2, featured: true },
  { id: 'chicken-korma',   category: 'chicken', name: 'Chicken Korma',             nameFr: 'Korma au poulet',              price: 14.99, spiceLevel: 1 },
  { id: 'chicken-vindaloo',category: 'chicken', name: 'Chicken Vindaloo',          nameFr: 'Vindaloo au poulet',           price: 14.99, spiceLevel: 3 },
  { id: 'chicken-saag',    category: 'chicken', name: 'Chicken Saag',              nameFr: 'Poulet saag',                  price: 14.99, spiceLevel: 2 },
  { id: 'chicken-jalfrezi',category: 'chicken', name: 'Chicken Jalfrezi',          nameFr: 'Jalfrezi au poulet',           price: 14.99, spiceLevel: 2 },
  { id: 'chicken-karahi',  category: 'chicken', name: 'Chicken Karahi',            nameFr: 'Karahi au poulet',             price: 15.99, spiceLevel: 2 },
  { id: 'chicken-kadai',   category: 'chicken', name: 'Chicken Kadai',             nameFr: 'Kadai au poulet',              price: 15.99, spiceLevel: 2 },
  { id: 'chicken-dopiaza', category: 'chicken', name: 'Chicken Dopiaza',           nameFr: 'Dopiaza au poulet',            price: 14.99, spiceLevel: 2 },

  // ── LAMB / AGNEAU ──
  { id: 'lamb-rogan-josh', category: 'lamb', name: 'Lamb Rogan Josh',              nameFr: 'Rogan josh à l\'agneau',       price: 16.99, spiceLevel: 2, featured: true },
  { id: 'lamb-korma',      category: 'lamb', name: 'Lamb Korma',                   nameFr: 'Korma à l\'agneau',            price: 16.99, spiceLevel: 1 },
  { id: 'lamb-vindaloo',   category: 'lamb', name: 'Lamb Vindaloo',                nameFr: 'Vindaloo à l\'agneau',         price: 16.99, spiceLevel: 3 },
  { id: 'lamb-saag',       category: 'lamb', name: 'Lamb Saag',                    nameFr: 'Agneau saag',                  price: 16.99, spiceLevel: 2 },
  { id: 'lamb-karahi',     category: 'lamb', name: 'Lamb Karahi',                  nameFr: 'Karahi à l\'agneau',           price: 17.99, spiceLevel: 2 },
  { id: 'keema',           category: 'lamb', name: 'Keema (Minced Lamb)',          nameFr: 'Keema (agneau haché)',         price: 15.99, spiceLevel: 2 },

  // ── SEAFOOD / FRUITS DE MER ──
  { id: 'fish-curry',      category: 'seafood', name: 'Fish Curry',               nameFr: 'Curry de poisson',             price: 15.99, spiceLevel: 2 },
  { id: 'prawn-masala',    category: 'seafood', name: 'Prawn Masala',             nameFr: 'Masala aux crevettes',         price: 17.99, spiceLevel: 2, featured: true },
  { id: 'prawn-korma',     category: 'seafood', name: 'Prawn Korma',              nameFr: 'Korma aux crevettes',          price: 17.99, spiceLevel: 1 },
  { id: 'fish-tikka-masala',category:'seafood', name: 'Fish Tikka Masala',        nameFr: 'Masala tikka au poisson',      price: 15.99, spiceLevel: 2 },

  // ── VEGETARIAN / VÉGÉTARIEN ──
  { id: 'dal-makhani',     category: 'vegetarian', name: 'Dal Makhani',           nameFr: 'Dal makhani',                  price: 12.99, vegetarian: true, spiceLevel: 1, featured: true },
  { id: 'palak-paneer',    category: 'vegetarian', name: 'Palak Paneer',          nameFr: 'Épinards au paneer',           price: 13.99, vegetarian: true, spiceLevel: 1, featured: true },
  { id: 'paneer-tikka-m',  category: 'vegetarian', name: 'Paneer Tikka Masala',  nameFr: 'Masala tikka au paneer',       price: 13.99, vegetarian: true, spiceLevel: 2 },
  { id: 'mutter-paneer',   category: 'vegetarian', name: 'Mutter Paneer',         nameFr: 'Petits pois au paneer',        price: 12.99, vegetarian: true, spiceLevel: 1 },
  { id: 'chana-masala',    category: 'vegetarian', name: 'Chana Masala',          nameFr: 'Masala aux pois chiches',      price: 11.99, vegetarian: true, vegan: true, spiceLevel: 2 },
  { id: 'aloo-gobi',       category: 'vegetarian', name: 'Aloo Gobi',             nameFr: 'Pommes de terre et chou-fleur',price: 11.99, vegetarian: true, vegan: true, spiceLevel: 1 },
  { id: 'saag',            category: 'vegetarian', name: 'Saag (Spinach Curry)',  nameFr: 'Curry d\'épinards',            price: 11.99, vegetarian: true, vegan: true, spiceLevel: 1 },
  { id: 'baingan-bharta',  category: 'vegetarian', name: 'Baingan Bharta',        nameFr: 'Aubergine grillée épicée',     price: 12.99, vegetarian: true, vegan: true, spiceLevel: 2 },
  { id: 'mixed-veg-curry', category: 'vegetarian', name: 'Mixed Vegetable Curry', nameFr: 'Curry de légumes mélangés',    price: 11.99, vegetarian: true, vegan: true, spiceLevel: 1 },

  // ── RICE & BIRYANI ──
  { id: 'basmati-rice',    category: 'rice', name: 'Basmati Rice',               nameFr: 'Riz basmati',                  price: 3.99,  vegetarian: true },
  { id: 'veg-biryani',     category: 'rice', name: 'Vegetable Biryani',          nameFr: 'Biryani aux légumes',          price: 13.99, vegetarian: true, spiceLevel: 1, featured: true },
  { id: 'chicken-biryani', category: 'rice', name: 'Chicken Biryani',            nameFr: 'Biryani au poulet',            price: 15.99, spiceLevel: 2, featured: true },
  { id: 'lamb-biryani',    category: 'rice', name: 'Lamb Biryani',               nameFr: 'Biryani à l\'agneau',          price: 17.99, spiceLevel: 2 },
  { id: 'prawn-biryani',   category: 'rice', name: 'Prawn Biryani',              nameFr: 'Biryani aux crevettes',        price: 17.99, spiceLevel: 2 },

  // ── DRINKS / BOISSONS ──
  { id: 'mango-lassi',     category: 'drinks', name: 'Mango Lassi',              nameFr: 'Lassi à la mangue',            price: 4.99,  vegetarian: true, featured: true },
  { id: 'sweet-lassi',     category: 'drinks', name: 'Sweet Lassi',              nameFr: 'Lassi sucré',                  price: 3.99,  vegetarian: true },
  { id: 'salt-lassi',      category: 'drinks', name: 'Salt Lassi',               nameFr: 'Lassi salé',                   price: 3.99,  vegetarian: true },
  { id: 'chai',            category: 'drinks', name: 'Masala Chai',              nameFr: 'Thé masala',                   price: 2.99,  vegetarian: true },
  { id: 'water',           category: 'drinks', name: 'Water / Sparkling',        nameFr: 'Eau / Eau gazeuse',            price: 1.99 },
  { id: 'soft-drinks',     category: 'drinks', name: 'Soft Drinks',              nameFr: 'Boissons gazeuses',            price: 2.49 },

  // ── DESSERTS ──
  { id: 'gulab-jamun',     category: 'desserts', name: 'Gulab Jamun',            nameFr: 'Gulab Jamun',                  price: 4.99,  vegetarian: true, featured: true },
  { id: 'kheer',           category: 'desserts', name: 'Kheer (Rice Pudding)',   nameFr: 'Kheer (riz au lait)',          price: 4.99,  vegetarian: true },
  { id: 'mango-kulfi',     category: 'desserts', name: 'Mango Kulfi',            nameFr: 'Kulfi à la mangue',            price: 5.49,  vegetarian: true },
  { id: 'rasmalai',        category: 'desserts', name: 'Rasmalai',               nameFr: 'Rasmalai',                     price: 5.99,  vegetarian: true },
]

/**
 * Real photos uploaded to /public/assets/images/menu, mapped to dishes by id.
 * (Filenames contain spaces, so paths are URL-encoded with %20.)
 * Add more here as photography comes in — these override the auto stock photo.
 */
const dishImages: Record<string, string> = {
  'butter-chicken':        '/assets/images/menu/butter%20Chicken.png',
  'pakora-chicken':        '/assets/images/menu/Chicken%20Pakora.png',
  'pakora-veg':            '/assets/images/menu/Veg%20Pakora.png',
  'samosa-meat':           '/assets/images/menu/Chicken%20Samosa.png',
  'seekh-kebab':           '/assets/images/menu/Chicken%20Sheekh%20Kebab.png',
  'seekh-kebab-t':         '/assets/images/menu/Chicken%20Sheekh%20Kebab.png',
  'chutney':               '/assets/images/menu/Chutney.png',
  'dal-makhani':           '/assets/images/menu/Dal%20Makhni.png',
  'pappadum':              '/assets/images/menu/Papadum.png',
  'papadum-side':          '/assets/images/menu/Papadum.png',
  'tandoori-chicken-full': '/assets/images/menu/Whole%20Chicken%20Tandoori.png',
  'chicken-tikka-ap':      '/assets/images/menu/chicken%20tikka.png',
  'chicken-tikka-t':       '/assets/images/menu/chicken%20tikka.png',
  'fish-pakora':           '/assets/images/menu/Fish%20pakora%20.png',
  'dal-soup':              '/assets/images/menu/Dal%20soup.png',
  'tomato-soup':           '/assets/images/menu/Tomato%20soup.png',
  'mulligatawny':          '/assets/images/menu/Mulligatawny.png',
  'raita':                 '/assets/images/menu/Raita.png',
  'mango-chutney':         '/assets/images/menu/Mango%20chutney%20.png',
  'mixed-pickle':          '/assets/images/menu/Mixed%20pickles.png',
  'plain-dosa':            '/assets/images/menu/Plain%20dosa.png',
  'masala-dosa':           '/assets/images/menu/Masala%20dosa.png',
  'onion-dosa':            '/assets/images/menu/onion%20%20dosa.png',
  'cheese-dosa':           '/assets/images/menu/cheese%20dosa.png',
  'chicken-dosa':          '/assets/images/menu/chicken%20dosa.png',
  'lamb-dosa':             '/assets/images/menu/lamb%20dosa.png',
  'uttapam':               '/assets/images/menu/Uttapam.png',
  'naan':                  '/assets/images/menu/plain%20naan.png',
  'butter-naan':           '/assets/images/menu/butter%20naan.png',
  'garlic-naan':           '/assets/images/menu/garlic%20naan%20.png',
  'cheese-naan':           '/assets/images/menu/cheese%20naan%20.png',
}

menuItems.forEach((item) => {
  if (dishImages[item.id]) item.image = dishImages[item.id]
})

export const categoryLabels: Record<MenuCategory, { en: string; fr: string }> = {
  appetizers:  { en: 'Appetizers',        fr: 'Entrées' },
  soups:       { en: 'Soups',             fr: 'Soupes' },
  sides:       { en: 'Sides',             fr: 'Accompagnements' },
  dosa:        { en: 'Dosa',              fr: 'Dosa' },
  breads:      { en: 'Breads',            fr: 'Pains' },
  tandoori:    { en: 'Tandoori',          fr: 'Tandoori' },
  thali:       { en: 'Thali',             fr: 'Thali' },
  chicken:     { en: 'Chicken',           fr: 'Poulet' },
  lamb:        { en: 'Lamb',              fr: 'Agneau' },
  seafood:     { en: 'Seafood',           fr: 'Fruits de mer' },
  vegetarian:  { en: 'Vegetarian',        fr: 'Végétarien' },
  rice:        { en: 'Rice & Biryani',    fr: 'Riz & Biryani' },
  drinks:      { en: 'Drinks',            fr: 'Boissons' },
  desserts:    { en: 'Desserts',          fr: 'Desserts' },
}
