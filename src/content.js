export const links = {
  instagram: 'https://www.instagram.com/gamedome_/',
  youtube: 'https://linktr.ee/gamedome_',
  discord: 'https://linktr.ee/gamedome_',
  wakadMap:
    'https://www.google.com/maps/search/?api=1&query=Game%20Dome%20Wakad%20Laxmi%20Avenue%20Nirmitee%20Signature%20Rd',
  vimanMap:
    'https://www.google.com/maps/search/?api=1&query=Game%20Dome%20Optimus%20A-1B%20West%20Ave%20Viman%20Nagar%20Pune',
};

export const locations = [
  {
    id: 'wakad',
    name: 'Wakad',
    area: 'Pimpri-Chinchwad',
    address:
      'B, Laxmi Avenue, 204, Nirmitee Signature Rd, Shankar Kalat Nagar, Wakad',
    note: 'West-side hangout for crews, solo sessions and after-college plans.',
    href: links.wakadMap,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=85',
    marker: '01 / WEST PUNE',
  },
  {
    id: 'viman',
    name: 'Viman Nagar',
    area: 'East Pune',
    address: 'Optimus, A-1B, West Ave, Viman Nagar, Pune',
    note: 'A tighter city-side stop close to cafes, campuses and weekend plans.',
    href: links.vimanMap,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1800&q=85',
    marker: '02 / EAST PUNE',
  },
];

export const experiences = [
  {
    kicker: '01',
    title: 'PC Sessions',
    text: 'For quick solo grinds, squad nights and long-form competitive practice.',
  },
  {
    kicker: '02',
    title: 'Console Corners',
    text: 'A low-pressure setup for couch matches, fighting games and party play.',
  },
  {
    kicker: '03',
    title: 'Multiplayer First',
    text: 'The room is built around people playing together, not just screens in rows.',
  },
  {
    kicker: '04',
    title: 'Event Ready',
    text: 'A flexible format for tournaments, watch parties, drops and community nights.',
  },
];

// A popular-title showcase, not a live availability feed. Update this list
// after Game Dome confirms its current library and platform rotations.
export const games = [
  {
    title: 'Counter-Strike 2',
    genre: 'FPS',
    platforms: ['PC'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg',
    blurb: 'The clean, tense classic for a five-stack that likes a little pressure.',
  },
  {
    title: 'Valorant',
    genre: 'FPS',
    platforms: ['PC'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85',
    blurb: 'Fast rounds, sharp calls and exactly one more queue before heading out.',
  },
  {
    title: 'EA Sports FC',
    genre: 'Sports',
    platforms: ['PS5', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg',
    blurb: 'The couch-friendly fixture when everybody has an opinion on the lineup.',
  },
  {
    title: 'Forza Horizon 5',
    genre: 'Racing',
    platforms: ['PC', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg',
    blurb: 'Wide roads, quick restarts and a proper reason to pass the controller around.',
  },
  {
    title: 'Grand Theft Auto V',
    genre: 'Open world',
    platforms: ['PC', 'PS5', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg',
    blurb: 'For the crew that came in with no plan and stayed for the whole session.',
  },
  {
    title: 'Apex Legends',
    genre: 'Battle royale',
    platforms: ['PC', 'PS5', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg',
    blurb: 'High movement, louder comms and a round that rarely stays calm for long.',
  },
  {
    title: 'Tekken 8',
    genre: 'Fighting',
    platforms: ['PS5', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg',
    blurb: 'A tight bracket, a crowd around the screen and somebody asking for a rematch.',
  },
  {
    title: 'Cyberpunk 2077',
    genre: 'Open world',
    platforms: ['PC', 'PS5', 'XBOX'],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
    blurb: 'A big-world detour for when competitive can wait until tomorrow.',
  },
];

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Gaming setup with monitors in a dark room',
    label: 'Setup mood',
  },
  {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    alt: 'Player holding a console controller',
    label: 'Community mood',
  },
  {
    src: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80',
    alt: 'Arcade machines in an entertainment venue',
    label: 'Venue energy',
  },
  {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Close-up of arcade controls',
    label: 'Button check',
  },
  {
    src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gaming controller and screen',
    label: 'Console mood',
  },
];
