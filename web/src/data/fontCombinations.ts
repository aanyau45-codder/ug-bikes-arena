/**
 * Font Lab data model.
 *
 * Two layers, matching the spec:
 *  - `headingFonts` / `bodyFonts` / `accentFonts`: the individual per-role
 *    controls (spec 1.2). Each option is drawn from one of the curated
 *    combinations below, so free mixing never falls back to arbitrary,
 *    unvetted pairings.
 *  - `fontCombinations`: the curated, intentional pairings (spec 1.3) that
 *    set heading + body + accent together with one click ("Use this
 *    typography").
 */

export interface FontOption {
  /** Stable id referenced by FontCombination and TypographyState. */
  id: string;
  /** Exact Google Fonts family name. */
  family: string;
  /** CSS generic fallback appended after the family name. */
  fallback: string;
  /** Weights to request from Google Fonts / use in previews. */
  weights: number[];
}

export const headingFonts: FontOption[] = [
  { id: 'playfair-display', family: 'Playfair Display', fallback: 'Georgia, serif', weights: [500, 600, 700] },
  { id: 'saira-condensed', family: 'Saira Condensed', fallback: 'Arial Narrow, sans-serif', weights: [500, 600, 700] },
  { id: 'anton', family: 'Anton', fallback: 'Impact, sans-serif', weights: [400] },
  { id: 'bodoni-moda', family: 'Bodoni Moda', fallback: 'Didot, Georgia, serif', weights: [500, 600, 700] },
  { id: 'manrope', family: 'Manrope', fallback: 'Helvetica Neue, sans-serif', weights: [700, 800] },
  { id: 'bebas-neue', family: 'Bebas Neue', fallback: 'Arial Narrow, sans-serif', weights: [400] },
  { id: 'sora', family: 'Sora', fallback: 'Helvetica Neue, sans-serif', weights: [600, 700] },
];

export const bodyFonts: FontOption[] = [
  { id: 'jost', family: 'Jost', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500] },
  { id: 'barlow', family: 'Barlow', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500, 600] },
  { id: 'titillium-web', family: 'Titillium Web', fallback: 'Helvetica Neue, sans-serif', weights: [400, 600] },
  { id: 'inter', family: 'Inter', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500, 600] },
  { id: 'manrope-body', family: 'Manrope', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500] },
  { id: 'archivo', family: 'Archivo', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500, 600] },
  { id: 'ubuntu', family: 'Ubuntu', fallback: 'Helvetica Neue, sans-serif', weights: [400, 500, 700] },
];

export const accentFonts: FontOption[] = [
  { id: 'cormorant-sc', family: 'Cormorant SC', fallback: 'Georgia, serif', weights: [500, 600] },
  { id: 'rajdhani', family: 'Rajdhani', fallback: 'Helvetica Neue, sans-serif', weights: [500, 600, 700] },
  { id: 'teko', family: 'Teko', fallback: 'Arial Narrow, sans-serif', weights: [500, 600, 700] },
  { id: 'space-mono', family: 'Space Mono', fallback: 'Courier New, monospace', weights: [400, 700] },
  { id: 'ibm-plex-mono', family: 'IBM Plex Mono', fallback: 'Courier New, monospace', weights: [500, 600] },
  { id: 'archivo-black', family: 'Archivo Black', fallback: 'Helvetica Neue, sans-serif', weights: [400] },
  { id: 'space-grotesk', family: 'Space Grotesk', fallback: 'Helvetica Neue, sans-serif', weights: [500, 700] },
];

export interface FontCombination {
  id: string;
  name: string;
  /** Short personality tag shown as a pill on the combo card. */
  personality: string;
  /** One or two sentences on *why* these three fonts belong together. */
  rationale: string;
  headingId: string;
  bodyId: string;
  accentId: string;
}

export const fontCombinations: FontCombination[] = [
  {
    id: 'modern-luxury',
    name: 'Modern Luxury',
    personality: 'Boutique · refined · high-end',
    rationale:
      'A high-contrast display serif signals boutique craftsmanship, paired with a light geometric sans for calm, confident reading, and a small-caps serif accent for prices and specs that feels engraved rather than printed.',
    headingId: 'playfair-display',
    bodyId: 'jost',
    accentId: 'cormorant-sc',
  },
  {
    id: 'automotive-premium',
    name: 'Automotive Premium',
    personality: 'Precision · engineered · dashboard',
    rationale:
      'A condensed heading reads like a badge on a fuel tank, a neutral grotesque keeps spec sheets legible at a glance, and a squared-off accent face gives numbers the feel of a digital instrument cluster.',
    headingId: 'saira-condensed',
    bodyId: 'barlow',
    accentId: 'rajdhani',
  },
  {
    id: 'sport-performance',
    name: 'Sport / Performance',
    personality: 'Loud · fast · race-bred',
    rationale:
      'A tall, high-impact heading shouts like a race fairing decal, a technical sans keeps body copy crisp at speed, and a tight condensed accent gives lap-time-style numbers real urgency.',
    headingId: 'anton',
    bodyId: 'titillium-web',
    accentId: 'teko',
  },
  {
    id: 'editorial',
    name: 'Editorial',
    personality: 'Magazine · storytelling · considered',
    rationale:
      'A dramatic high-contrast serif headline sets a magazine cover tone, a humanist sans carries longer reading passages comfortably, and a monospace accent treats specs and captions like a photo credit line.',
    headingId: 'bodoni-moda',
    bodyId: 'inter',
    accentId: 'space-mono',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    personality: 'Quiet · systemized · restrained',
    rationale:
      'One geometric sans family carries both heading and body — the personality comes entirely from weight and scale, not from mixing typefaces — while a mono accent quietly sets numbers apart without adding noise.',
    headingId: 'manrope',
    bodyId: 'manrope-body',
    accentId: 'ibm-plex-mono',
  },
  {
    id: 'bold-industrial',
    name: 'Bold / Industrial',
    personality: 'Heavy · stencilled · workshop',
    rationale:
      'A tall compressed display face reads like stencilled workshop signage, a sturdy grotesque body keeps things grounded, and a solid black accent face makes prices and specs land like a stamped plate.',
    headingId: 'bebas-neue',
    bodyId: 'archivo',
    accentId: 'archivo-black',
  },
  {
    id: 'modern-african-startup',
    name: 'Modern African / Startup',
    personality: 'Warm · confident · contemporary',
    rationale:
      'A confident geometric heading brings startup energy, Ubuntu — designed for warmth and openness — carries body copy with a distinctly humanist voice, and a fresh grotesque accent gives numbers a modern fintech-dashboard feel.',
    headingId: 'sora',
    bodyId: 'ubuntu',
    accentId: 'space-grotesk',
  },
];

export function findFont(list: FontOption[], id: string): FontOption {
  const found = list.find((f) => f.id === id);
  if (!found) throw new Error(`Unknown font id: ${id}`);
  return found;
}

export const DEFAULT_COMBINATION_ID = 'automotive-premium';
