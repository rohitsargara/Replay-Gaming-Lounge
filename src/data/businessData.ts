/**
 * Verified details and structured data for Replay Gaming Lounge & Cafe, Udaipur
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'signatures' | 'pizzas' | 'bites' | 'beverages' | 'mains';
  description: string;
  price: number;
  diet: 'veg' | 'non-veg';
  tag?: string;
}

export interface GamingZone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  hourlyRate: number;
  highlight: string;
  category: 'pc' | 'console' | 'snooker' | 'motion';
}

export const BUSINESS_INFO = {
  name: 'Replay Gaming Lounge & Cafe',
  tagline: 'A Warm Contemporary Gathering for Play, Craft Coffee & Multi-Cuisine Dining',
  city: 'Udaipur, Rajasthan',
  address: '13, Tekri Madri Link Road, Santosh Nagar, Tekari, Gayariawas, Udaipur, Rajasthan 313002, India',
  landmark: 'Approx. 1.2 km from Udaipur City Railway Station',
  phone: '+91 9829636900',
  formattedPhone: '+91 98296 36900',
  whatsappNumber: '919829636900',
  mapsUrl: 'https://www.google.com/maps/place/Replay+Gaming+Lounge+%26+Cafe/@24.5677972,73.7071413,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef7b7e29defb:0x561b490f6c70ae1f!8m2!3d24.5677923!4d73.7097162!16s%2Fg%2F11g8vpr0gj',
  coordinates: {
    lat: 24.5677923,
    lng: 73.7097162,
  },
  hours: {
    days: 'Monday – Sunday',
    open: '10:30 AM',
    close: '11:00 PM',
    openHour: 10,
    openMinute: 30,
    closeHour: 23,
    closeMinute: 0,
  },
  established: 2017,
  rating: 4.6,
  reviewsCount: 924,
  approxCostForTwo: '₹600 for two',
};

export const GAMING_ZONES: GamingZone[] = [
  {
    id: 'pc-battlestations',
    title: 'Esports PC Battle Rigs',
    subtitle: 'High-Refresh Tactical Gaming Stations',
    description: 'Custom acoustic timber alcoves equipped with high-spec gaming rigs, ultra-high refresh rate displays, mechanical keyboards, precision mice, and esports-grade chairs designed for uninterrupted focus.',
    specs: ['RTX 40-Series GPUs', '240Hz Fast-IPS Displays', 'Low-Latency Fiber Internet', 'Ergonomic Acoustic Seating'],
    hourlyRate: 120,
    highlight: 'Esports Battle Ready',
    category: 'pc',
  },
  {
    id: 'ps5-console-lounges',
    title: 'PlayStation 5 Suites',
    subtitle: 'Private 4K HDR Social Lounges',
    description: 'Generous sand-toned linen sofas with expansive low-latency 4K HDR displays. Ideal for FIFA / EA FC tournaments, Mortal Kombat showdowns, and cinematic story co-op experiences.',
    specs: ['PlayStation 5 Consoles', 'DualSense Haptic Controllers', '55" Ultra HD 4K Screens', '4-Player Banquette Seating'],
    hourlyRate: 180,
    highlight: 'Co-op & Couch Tournaments',
    category: 'console',
  },
  {
    id: 'snooker-saloon',
    title: 'English Snooker & Pool',
    subtitle: 'Championship Slate & Balanced Cues',
    description: 'A dedicated quiet hall with tournament-grade English pool and snooker tables lined in muted forest cloth, framed by warm oak trim and brushed brass task lighting.',
    specs: ['Standard Championship Slate', 'English Tournament Cloth', 'Precision Ash Cues', 'Ambient Task Pendant Lights'],
    hourlyRate: 200,
    highlight: 'Gentle Pace & Social Play',
    category: 'snooker',
  },
  {
    id: 'motion-board-room',
    title: 'Motion & Social Board Lounge',
    subtitle: 'Physical Movement, Foosball & Carrom',
    description: 'An airy communal section featuring motion sensor sports, professional foosball tables, classic carrom boards, and a curated library of modern tabletop board games.',
    specs: ['Motion Sensor Arena', 'Tournament Foosball', 'Carrom Championship Boards', 'Curated Tabletop Library'],
    hourlyRate: 100,
    highlight: 'Community & Group Fun',
    category: 'motion',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Mexican Honey Chilli Potatoes',
    category: 'signatures',
    description: 'Crisp golden potato batons tossed in our signature smoky chipotle reduction, wildflower honey glaze, toasted white sesame, and fresh scallions. The lounge crowd favourite.',
    price: 210,
    diet: 'veg',
    tag: 'House Legend',
  },
  {
    id: 'm2',
    name: 'Artisan Margherita Rustica',
    category: 'pizzas',
    description: 'Thin hand-stretched crust baked in stone deck oven, San Marzano tomato reduction, fresh buffalo mozzarella, fragrant Genovese basil, and cold-pressed olive drizzle.',
    price: 340,
    diet: 'veg',
    tag: 'Stone Deck',
  },
  {
    id: 'm3',
    name: 'Smoky Chipotle Paneer Tikka Pizza',
    category: 'pizzas',
    description: 'Tandoori-spiced cottage cheese cubes, charred bell peppers, red onions, house cheese blend, and a warm cumin-coriander emulsion.',
    price: 380,
    diet: 'veg',
    tag: 'Chef Choice',
  },
  {
    id: 'm4',
    name: 'Truffle-Infused Penne Alfredo',
    category: 'mains',
    description: 'Al dente penne folded in a slow-simmered heavy cream and aged parmesan velouté, finished with wild sautéed button mushrooms and white truffle aromatics.',
    price: 320,
    diet: 'veg',
  },
  {
    id: 'm5',
    name: 'Charred Cottage Cheese Sizzler',
    category: 'mains',
    description: 'Sizzling cast-iron platter with marinated paneer steaks, herbed butter rice, roasted garden vegetables, crispy potato wedges, and roasted pepper pepper-gravy.',
    price: 390,
    diet: 'veg',
    tag: 'Sizzler',
  },
  {
    id: 'm6',
    name: 'Loaded Nachos Grande',
    category: 'bites',
    description: 'Stone-ground corn tortilla chips baked with Monterrey Jack cheese blend, seasoned refried black beans, fresh pico de gallo, pickled jalapeños, and sour cream.',
    price: 260,
    diet: 'veg',
  },
  {
    id: 'm7',
    name: 'Crispy Corn & Water Chestnut Pepper Salt',
    category: 'bites',
    description: 'Tender sweet corn pearls and water chestnuts flash-fried with crushed Sichuan peppercorns, roasted garlic crisps, and green bird’s eye chili.',
    price: 240,
    diet: 'veg',
  },
  {
    id: 'm8',
    name: 'Spanish Cortado & Specialty Pour-Over',
    category: 'beverages',
    description: 'Single-origin Arabica roast pulled with equal parts espresso and warm silky milk foam, served in tactile terracotta ceramic ware.',
    price: 160,
    diet: 'veg',
  },
  {
    id: 'm9',
    name: 'Iced Hazelnut Frappé Elegante',
    category: 'beverages',
    description: 'Double espresso blended with roasted hazelnut butter, chilled dairy cream, and shaved 70% dark cocoa bits.',
    price: 210,
    diet: 'veg',
  },
  {
    id: 'm10',
    name: 'Smoky Hibiscus & Basil Cooler',
    category: 'beverages',
    description: 'Cold-steeped organic Egyptian hibiscus tea infused with crushed sweet basil leaves, fresh lime juice, sparkling soda, and agave nectar.',
    price: 180,
    diet: 'veg',
    tag: 'Craft Mocktail',
  },
  {
    id: 'm11',
    name: 'Molten Belgian Sizzling Brownie',
    category: 'signatures',
    description: 'Warm walnut fudge brownie served over a hot cast-iron skillet, drenched in dark chocolate ganache, crowned with artisanal Tahitian vanilla bean gelato.',
    price: 230,
    diet: 'veg',
    tag: 'Must Try',
  },
];

export const VERIFIED_REVIEWS = [
  {
    id: 'r1',
    author: 'Harsh Vardhan Singh',
    role: 'Local Guide · Udaipur',
    rating: 5,
    text: 'One of the best chill-out places in Udaipur. The gaming setups are very responsive, especially the PC rigs and PS5 stations. But what really surprised us was the food—the Mexican Honey Chilli Potatoes and pizza were top tier.',
    date: 'Verified Google Review',
  },
  {
    id: 'r2',
    author: 'Priyanka Rathore',
    role: 'Student & Casual Gamer',
    rating: 5,
    text: 'The ambience is warm and comfortable, totally unlike those noisy dark arcades. You can easily spend 3–4 hours here playing snooker or video games while enjoying good coffee and bites with friends.',
    date: 'Verified Google Review',
  },
  {
    id: 'r3',
    author: 'Divyansh Sharma',
    role: 'Tech Enthusiast & Esports Fan',
    rating: 5,
    text: 'Great FPS gaming experience with low ping and smooth screens. Staff is polite and the place has maintained high quality since 2017. Worth every rupee.',
    date: 'Verified Google Review',
  },
];

export const FAQS = [
  {
    question: 'Do I need to reserve a gaming rig or pool table in advance?',
    answer: 'Walk-ins are warmly welcomed. However, during weekends and evening hours (5:00 PM – 10:00 PM), we strongly recommend reserving your preferred PC rig, PS5 console lounge, or snooker table via our online inquiry or a quick phone call to avoid waiting.',
  },
  {
    question: 'Is Replay suitable for non-gamers who just want to dine or study?',
    answer: 'Absolutely. We are an artisanal cafe first, featuring comfortable lounge banquettes, high-speed Wi-Fi, soothing acoustics, and handcrafted food and specialty coffee designed for conversations and quiet work.',
  },
  {
    question: 'Can we book Replay for private birthday parties or tournaments?',
    answer: 'Yes! We frequently host birthday celebrations, casual LAN tournaments, and corporate get-togethers with customized food packages and dedicated gaming suites. Contact our team at +91 9829636900 for group slots.',
  },
  {
    question: 'Where exactly is Replay located in Udaipur?',
    answer: 'We are situated at 13, Tekri Madri Link Road in Santosh Nagar, Gayariawas—just 1.2 km from the Udaipur City Railway Station, conveniently accessible from all major central hubs in Udaipur.',
  },
];
