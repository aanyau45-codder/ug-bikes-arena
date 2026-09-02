import { demoMotorcycles, type DemoMotorcycle } from '../data/demoMotorcycles';
import type { Country } from '../data/countries';

/**
 * Estimated delivery windows, demo-only placeholders:
 *  - Uganda: 1–8 hours — same-country delivery, no border to clear.
 *  - Kenya: 10+ hours, up to 24 — crosses the Uganda–Kenya border.
 *  - Tanzania: 1–3 days — crosses the Uganda–Tanzania border.
 * Within each country's window, heavier bikes (more to crate/transport) land
 * toward the slow end and lighter bikes toward the fast end, so the estimate
 * varies sensibly by bike rather than showing one flat number for everything.
 */

const weights = demoMotorcycles.map((m) => parseFloat(m.specs.weight));
const minWeight = Math.min(...weights);
const maxWeight = Math.max(...weights);

function weightRatio(bike: DemoMotorcycle): number {
  if (maxWeight === minWeight) return 0.5;
  return (parseFloat(bike.specs.weight) - minWeight) / (maxWeight - minWeight);
}

export function estimateDelivery(bike: DemoMotorcycle, country: Country): string {
  const ratio = weightRatio(bike);

  switch (country.code) {
    case 'UG': {
      const lo = Math.max(1, Math.round(1 + ratio * 5));
      const hi = Math.min(8, lo + 2);
      return `${lo}–${hi} hours`;
    }
    case 'KE': {
      const lo = Math.round(10 + ratio * 10);
      const hi = Math.min(24, lo + 4);
      return `${lo}–${hi} hours`;
    }
    case 'TZ': {
      const lo = Math.max(1, Math.round(1 + ratio));
      const hi = Math.min(3, lo + 1);
      return `${lo}–${hi} days`;
    }
    default:
      return '';
  }
}
