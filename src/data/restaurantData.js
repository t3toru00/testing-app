export const restaurantInfo = {
  name: 'Bella Cucina',
  tagline: 'Fine Italian & European Dining',
  established: 2014,
  address: 'Via dei Giardini 42, Brera District, 20121 Milano MI, Italy',
  phone: '+39 02 8942 7510',
  email: 'concierge@bellacucina.eu',
  reservationEmail: 'reservations@bellacucina.eu',
  rating: '4.9',
  reviewCount: '640+',
  openingHours: [
    { days: 'Tuesday – Thursday', hours: '12:00 – 15:00  |  18:30 – 23:00' },
    { days: 'Friday – Saturday', hours: '12:00 – 15:30  |  18:30 – 00:00' },
    { days: 'Sunday', hours: '12:00 – 16:00  |  18:00 – 22:30' },
    { days: 'Monday', hours: 'Closed (Private Wine Cellar Events Only)' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://tripadvisor.com',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Brera+District+Milano+Italy',
};

export const menuCategories = [
  { id: 'all', label: 'All Selections' },
  { id: 'starters', label: 'Starters' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

export const specialDishes = [
  {
    id: 'special-1',
    name: 'Tagliolini al Tartufo Bianco d’Alba',
    subtitle: 'Chef’s Autumn Signature',
    category: 'Artisanal Pasta',
    price: 38,
    badge: 'Most Popular',
    calories: '540 kcal',
    origin: 'Piedmont, Italy',
    description:
      '40-yolk hand-cut egg tagliolini tossed in cultured Alpine mountain butter, aged 36-month Parmigiano Reggiano emulsion, and shaved white truffle from Alba.',
    image:
      'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'special-2',
    name: 'Filetto di Manzo al Barolo Riserva',
    subtitle: 'Wood-Fired Heritage Cut',
    category: 'Main Course',
    price: 46,
    badge: 'Chef’s Selection',
    calories: '680 kcal',
    origin: 'Tuscany & Piedmont',
    description:
      'Char-seared Chianina beef tenderloin, slow-simmered Barolo DOCG reduction, caramelized Cipollini onions, charred rosemary, and silky smoked celeriac purée.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'special-3',
    name: 'Polpo Arrostito & Zafferano Ligure',
    subtitle: 'Coastal Mediterranean Reserve',
    category: 'Seafood Specialty',
    price: 34,
    badge: 'Seasonal Star',
    calories: '460 kcal',
    origin: 'Ligurian Coast',
    description:
      'Crispy bronze-roasted Mediterranean octopus over velvety saffron potato crema, Taggiasca olive tapenade, confit datterini tomatoes, and cold-pressed basil oil.',
    image:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=85',
  },
];

export const menuItems = [
  // STARTERS
  {
    id: 'st-1',
    name: 'Burrata Pugliese & Prosciutto Crudo',
    category: 'starters',
    price: 19,
    tag: 'Signature Starter',
    dietary: 'GF Option',
    description:
      'Creamy artisan burrata from Andria, 24-month aged Prosciutto di Parma, roasted figs, pistachio crumble, and aged Modena balsamic glaze.',
    image:
      'https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'st-2',
    name: 'Carpaccio di Manzo & Grana Padano',
    category: 'starters',
    price: 21,
    tag: 'Classic',
    dietary: 'Gluten Free',
    description:
      'Paper-thin raw Piedmontese beef tenderloin, wild rocket, shaved Grana Padano Riserva, caper berries, and lemon-infused extra virgin olive oil.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'st-3',
    name: 'Capesante Scottate al Limone d’Amalfi',
    category: 'starters',
    price: 23,
    tag: 'Seafood',
    dietary: 'Gluten Free',
    description:
      'Pan-seared king scallops with crushed sweet pea purée, crispy pancetta dust, Amalfi lemon butter foam, and micro herbs.',
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'st-4',
    name: 'Bruschetta Trio della Casa',
    category: 'starters',
    price: 16,
    tag: 'Vegetarian',
    dietary: 'Vegetarian',
    description:
      'Grilled sourdough crowned with heirloom San Marzano tomato & basil, whipped ricotta with truffle honey, and wild porcini mushroom ragù.',
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
  },

  // PASTA
  {
    id: 'pa-1',
    name: 'Pappardelle al Ragù di Cinghiale',
    category: 'pasta',
    price: 26,
    tag: 'Tuscan Heritage',
    dietary: 'Handmade Daily',
    description:
      'Wide ribbon egg pasta braised with 8-hour slow-cooked Tuscan wild boar ragù, juniper berries, Chianti Classico, and Pecorino Toscano.',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pa-2',
    name: 'Ravioli di Aragosta & Bisque allo Champagne',
    category: 'pasta',
    price: 32,
    tag: 'Chef Favorite',
    dietary: 'Seafood',
    description:
      'Handmade saffron pasta parcels filled with native blue lobster and mascarpone, finished in a velvety Champagne and tarragon bisque.',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pa-3',
    name: 'Spaghetti alla Chitarra ai Frutti di Mare',
    category: 'pasta',
    price: 29,
    tag: 'Coastal Classic',
    dietary: 'Fresh Catch',
    description:
      'Artisanal square-cut spaghetti with Veraci clams, Mediterranean prawns, mussels, garlic, white wine, chilli, and fresh flat-leaf parsley.',
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pa-4',
    name: 'Cacio e Pepe con Tartufo Nero',
    category: 'pasta',
    price: 24,
    tag: 'Vegetarian',
    dietary: 'Vegetarian',
    description:
      'Bronze-die tonnarelli pasta emulsified with aged Pecorino Romano DOP, toasted Sarawak black pepper, and fresh Umbrian black truffle.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
  },

  // MAIN COURSES
  {
    id: 'mc-1',
    name: 'Branzino Selvatico al Forno',
    category: 'mains',
    price: 36,
    tag: 'Mediterranean',
    dietary: 'Gluten Free',
    description:
      'Wild-caught Mediterranean sea bass fillet roasted with Ligurian olives, capers, baby fennel, heirloom cherry tomatoes, and white wine jus.',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-2',
    name: 'Ossobuco alla Milanese con Risotto',
    category: 'mains',
    price: 39,
    tag: 'Milanese Icon',
    dietary: 'Signature',
    description:
      'Slow-braised veal shank in aromatic vegetables and dry white wine, finished with bright gremolata and served over saffron Risotto alla Milanese.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-3',
    name: 'Petto d’Anatra Glassato al Miele e Fichi',
    category: 'mains',
    price: 34,
    tag: 'European Contemporary',
    dietary: 'Gluten Free',
    description:
      'Crispy skin Barbarie duck breast glazed with chestnut honey and spiced port wine, served with parsnip mousseline and roasted black mission figs.',
    image:
      'https://images.unsplash.com/photo-1514944298352-f4d732142f74?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-4',
    name: 'Costoletta di Agnello alle Erbe Alpine',
    category: 'mains',
    price: 41,
    tag: 'Prime Cut',
    dietary: 'Gluten Free',
    description:
      'Herb-crusted rack of pasture-raised lamb, roasted garlic jus, crispy potato mille-feuille, and charred baby Mediterranean artichokes.',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
  },

  // DESSERTS
  {
    id: 'de-1',
    name: 'Tiramisù Tradizionale di Bella Cucina',
    category: 'desserts',
    price: 14,
    tag: 'House Legend',
    dietary: 'Vegetarian',
    description:
      'Homemade savoiardi biscuits soaked in single-origin Napoli espresso and Marsala Superiore, layered with whipped organic mascarpone and Valrhona cocoa.',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'de-2',
    name: 'Panna Cotta alla Vaniglia & Frutti di Bosco',
    category: 'desserts',
    price: 13,
    tag: 'Light & Silky',
    dietary: 'Gluten Free',
    description:
      'Silky Piedmont cream infused with Madagascar bourbon vanilla bean, topped with warm wild berry compote and toasted Bronte pistachio.',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'de-3',
    name: 'Tortino Caldo al Cioccolato Fondente',
    category: 'desserts',
    price: 15,
    tag: 'Indulgent',
    dietary: 'Vegetarian',
    description:
      'Warm 70% Guanaja dark chocolate fondant with a molten hazelnut gianduja heart, paired with artisanal Fior di Latte gelato.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  },

  // DRINKS
  {
    id: 'dr-1',
    name: 'Negroni Sbagliato Riserva d’Oro',
    category: 'drinks',
    price: 16,
    tag: 'Signature Aperitivo',
    dietary: 'Craft Cocktail',
    description:
      'Antica Formula Carpano vermouth, Campari infused with blood orange peel, topped with Franciacorta Brut DOCG and edible gold leaf.',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dr-2',
    name: 'Brunello di Montalcino DOCG (Calice)',
    category: 'drinks',
    price: 22,
    tag: 'Sommelier Pick',
    dietary: '150ml Pour',
    description:
      'Full-bodied Tuscan Sangiovese aged 36 months in Slavonian oak. Notes of dark cherry, leather, dried violet, and sweet tobacco.',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dr-3',
    name: 'Limoncello Spritz di Positano',
    category: 'drinks',
    price: 15,
    tag: 'Refreshing',
    dietary: 'Botanical',
    description:
      'Artisanal Sorrento limoncello, Prosecco Superiore Valdobbiadene, fever-tree Mediterranean tonic, fresh garden basil, and Amalfi lemon zest.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
];

export const galleryImages = [
  {
    id: 'gal-1',
    title: 'Candlelit Main Dining Room',
    category: 'Interior & Atmosphere',
    caption: 'Warm brass accents, velvet banquettes, and intimate evening lighting in our Brera dining salon.',
    span: 'md:col-span-2 md:row-span-2',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'gal-2',
    title: 'Hand-Rolled Egg Pasta',
    category: 'Culinary Craft',
    caption: 'Every morning our sfoglina crafts fresh tagliolini, ravioli, and pappardelle using organic stone-ground flour.',
    span: 'md:col-span-1 md:row-span-1',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: 'Private Wine Cellar & Sommelier Table',
    category: 'Wine & Spirits',
    caption: 'Over 450 curated labels spanning Barolo, Brunello, Super Tuscans, and boutique European estates.',
    span: 'md:col-span-1 md:row-span-1',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: 'Wood-Fired Prime Cuts',
    category: 'From the Hearth',
    caption: 'Dry-aged Tuscan Chianina beef and coastal seafood seared over olive wood and vine embers.',
    span: 'md:col-span-1 md:row-span-1',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-5',
    title: 'Al Fresco Courtyard Terrace',
    category: 'Dining Experience',
    caption: 'Dine beneath olive trees and warm string lights in our private Milanese courtyard garden.',
    span: 'md:col-span-2 md:row-span-1',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
  },
];

export const customerReviews = [
  {
    id: 'rev-1',
    name: 'Lorenzo & Sofia Conti',
    role: 'Anniversary Dinner Guests',
    date: 'October 2026',
    rating: 5,
    dishHighlight: 'Tagliolini al Tartufo Bianco',
    quote:
      'An unforgettable evening from the moment our coats were taken. The white truffle tagliolini transported us straight to Piedmont, and the sommelier’s Barolo pairing was pure poetry. Truly one of Milan’s finest tables.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 'rev-2',
    name: 'Henrik Lindqvist',
    role: 'Culinary Critic & Traveler',
    date: 'September 2026',
    rating: 5,
    dishHighlight: 'Ossobuco alla Milanese',
    quote:
      'Bella Cucina achieves that rare balance between Michelin-caliber precision and genuine Italian warmth. Their Ossobuco with saffron risotto is textbook perfection—deeply flavorful, unpretentious, and impeccably plated.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 'rev-3',
    name: 'Camille Beauchamp',
    role: 'Private Dining Host',
    date: 'November 2026',
    rating: 5,
    dishHighlight: 'Lobster Ravioli & Tiramisù',
    quote:
      'We hosted twelve guests in the garden conservatory and every single course arrived hot, vibrant, and artfully presented. The house Tiramisù at the end drew applause around the table. We are already planning our return.',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
  },
];
