/**
 * Centralized demo inventory data.
 *
 * IMPORTANT — this is prototype/demo data only:
 *  - Names, prices and specs are invented placeholders for evaluating the
 *    four design concepts, not real UG Bikes Arena inventory.
 *  - Every `imageUrl` is a real, verified Unsplash photo (Unsplash License:
 *    free for commercial use, no permission required). They are demo
 *    photography standing in for real inventory shots — never present them
 *    as actual bikes for sale.
 *  - `imageUrl` is a *base* URL with no sizing params. Components build
 *    responsive, appropriately-sized variants via `buildSrcSet` in
 *    `src/lib/image.ts` — never hardcode a `?w=` size here.
 *  - In production, John's admin dashboard will write real photo URLs into
 *    this same `imageUrl` field — no component or layout code should need to
 *    change when that happens. Nothing here assumes a fixed image aspect
 *    ratio; every consumer crops via CSS (`object-fit`), not by requesting a
 *    pre-cropped source.
 */

export type MotorcycleCategory = 'Sport' | 'Naked' | 'Cruiser' | 'Classic';

export interface MotorcycleSpecs {
  engine: string;
  power: string;
  weight: string;
  topSpeed: string;
  transmission: string;
}

export interface DemoMotorcycle {
  id: string;
  name: string;
  brandLine: string;
  category: MotorcycleCategory;
  condition: 'New' | 'Used';
  price: number;
  originalPrice?: number;
  badge?: 'Featured' | 'New Arrival' | 'Sale';
  specs: MotorcycleSpecs;
  imageUrl: string;
  imageAlt: string;
  blurb: string;
  /** Logbook/ownership paperwork ready to transfer — shown as a trust badge. */
  documentationAvailable: boolean;
}

export const demoMotorcycles: DemoMotorcycle[] = [
  {
    id: 'vantage-rr-390',
    name: 'Vantage RR 390',
    brandLine: 'Lightweight Sport',
    category: 'Sport',
    condition: 'New',
    price: 5499,
    badge: 'Featured',
    specs: {
      engine: '373cc single',
      power: '43 hp',
      weight: '172 kg',
      topSpeed: '167 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f',
    imageAlt: 'Orange and white lightweight sportbike parked on tarmac in daylight',
    blurb: 'An agile first supersport built for learning the limits without outgrowing them too fast.',
    documentationAvailable: true,
  },
  {
    id: 'solace-roadmaster-1200',
    name: 'Solace Roadmaster 1200',
    brandLine: 'Touring Cruiser',
    category: 'Cruiser',
    condition: 'Used',
    price: 11200,
    specs: {
      engine: '1202cc V-twin',
      power: '96 hp',
      weight: '251 kg',
      topSpeed: '180 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39',
    imageAlt: 'Rider cruising a classic motorcycle down an open highway at golden hour',
    blurb: 'Long-haul comfort with a torque-rich V-twin built for miles that disappear behind you.',
    documentationAvailable: true,
  },
  {
    id: 'apex-gts-950',
    name: 'Apex GTS 950',
    brandLine: 'Sport Tourer',
    category: 'Sport',
    condition: 'New',
    price: 13999,
    originalPrice: 15900,
    badge: 'Sale',
    specs: {
      engine: '937cc V-twin',
      power: '110 hp',
      weight: '214 kg',
      topSpeed: '246 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87',
    imageAlt: 'Red sport-touring motorcycle parked in a moody underground garage',
    blurb: 'Italian-flavored performance with just enough wind protection for a weekend away.',
    documentationAvailable: true,
  },
  {
    id: 'raptor-sbk-636',
    name: 'Raptor SBK 636',
    brandLine: 'Supersport',
    category: 'Sport',
    condition: 'New',
    price: 10750,
    specs: {
      engine: '636cc inline-4',
      power: '128 hp',
      weight: '194 kg',
      topSpeed: '260 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d',
    imageAlt: 'Green and white liveried supersport motorcycle on an open road',
    blurb: 'Track-bred handling with race-inspired livery straight from the showroom floor.',
    documentationAvailable: true,
  },
  {
    id: 'ember-rr-660',
    name: 'Ember RR 660',
    brandLine: 'Middleweight Sport',
    category: 'Sport',
    condition: 'Used',
    price: 7300,
    specs: {
      engine: '659cc parallel-twin',
      power: '95 hp',
      weight: '187 kg',
      topSpeed: '225 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1580341289255-5b47c98a59dd',
    imageAlt: 'Red middleweight sportbike parked in dappled tree shade',
    blurb: 'A punchy twin-cylinder middleweight that rewards a confident twist of the wrist.',
    documentationAvailable: true,
  },
  {
    id: 'ironclad-street-890',
    name: 'Ironclad Street 890',
    brandLine: 'Naked Streetfighter',
    category: 'Naked',
    condition: 'New',
    price: 9999,
    badge: 'Featured',
    specs: {
      engine: '889cc triple',
      power: '121 hp',
      weight: '166 kg',
      topSpeed: '240 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f',
    imageAlt: 'Black naked streetfighter motorcycle on an empty forest road',
    blurb: 'Stripped-down, triple-cylinder attitude for riders who want the bike to disappear.',
    documentationAvailable: true,
  },
  {
    id: 'solaris-r6x-599',
    name: 'Solaris R6X 599',
    brandLine: 'Supersport',
    category: 'Sport',
    condition: 'New',
    price: 12499,
    badge: 'New Arrival',
    specs: {
      engine: '599cc inline-4',
      power: '122 hp',
      weight: '190 kg',
      topSpeed: '262 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1587971051803-70bf6d4ae977',
    imageAlt: 'Black and orange sportbike parked beside a wall',
    blurb: 'A screaming inline-four with the kind of throttle response that rewrites your commute.',
    documentationAvailable: true,
  },
  {
    id: 'vantage-superleggera-1100',
    name: 'Vantage Superleggera 1100',
    brandLine: 'Flagship Superbike',
    category: 'Sport',
    condition: 'New',
    price: 24999,
    badge: 'Featured',
    specs: {
      engine: '1103cc V4',
      power: '214 hp',
      weight: '175 kg',
      topSpeed: '299 km/h',
      transmission: '6-speed quickshifter',
    },
    imageUrl: 'https://images.unsplash.com/photo-1713638916407-94d936da4eff',
    imageAlt: 'Motorcycle silhouette lit by a glowing orange headlight against total darkness',
    blurb: 'The halo model. Aerospace-grade carbon, a V4 howl, and a 299 km/h top end.',
    documentationAvailable: true,
  },
  {
    id: 'heritage-classic-500',
    name: 'Heritage Classic 500',
    brandLine: 'Retro Classic',
    category: 'Classic',
    condition: 'New',
    price: 6800,
    specs: {
      engine: '499cc single',
      power: '27 hp',
      weight: '196 kg',
      topSpeed: '122 km/h',
      transmission: '5-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1594704614188-b3af4c08eea7',
    imageAlt: 'Chrome-detailed cruiser motorcycle parked on a city street',
    blurb: 'Kick-start soul with modern reliability — thumping single, chrome, and unhurried style.',
    documentationAvailable: true,
  },
  {
    id: 'nightfall-r6-599',
    name: 'Nightfall R6 599',
    brandLine: 'Supersport',
    category: 'Sport',
    condition: 'Used',
    price: 8999,
    originalPrice: 9999,
    badge: 'Sale',
    specs: {
      engine: '599cc inline-4',
      power: '118 hp',
      weight: '190 kg',
      topSpeed: '255 km/h',
      transmission: '6-speed',
    },
    imageUrl: 'https://images.unsplash.com/photo-1658064274071-98831c8e2ab1',
    imageAlt: 'Motorcycle parked in a dark tunnel, its headlight glowing warm against the shadows',
    blurb: 'City-lit and track-capable — a well-kept supersport ready for its next owner.',
    documentationAvailable: true,
  },
];

export function getMotorcycle(id: string): DemoMotorcycle | undefined {
  return demoMotorcycles.find((m) => m.id === id);
}

/**
 * Every `price` above is stored in USD — the placeholder unit the demo data
 * was originally written in. Display always leads with the shopper's local
 * East African currency (Uganda/Kenya/Tanzania, driven by the delivery
 * country picked in the header — see `CountryContext`) and shows the USD
 * figure as a small, faint secondary line. Formatting itself lives in
 * `src/lib/currency.ts`, consumed via `<Price>` in `src/components/Price.tsx`.
 */
