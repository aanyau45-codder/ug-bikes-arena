import { useCountry } from '../context/CountryContext';
import { estimateDelivery } from '../lib/delivery';
import type { DemoMotorcycle } from '../data/demoMotorcycles';

/**
 * Reads the shopper's selected delivery country from context, so it updates
 * live when `CountrySelector` changes — no prop threading required.
 */
export function DeliveryEstimate({ bike, className = '' }: { bike: DemoMotorcycle; className?: string }) {
  const { country } = useCountry();
  return (
    <p className={`font-body flex items-center gap-1.5 text-neutral-500 ${className}`}>
      <span aria-hidden>🚚</span>
      <span>
        Delivers to {country.name} in <span className="font-semibold text-neutral-700">{estimateDelivery(bike, country)}</span>
      </span>
    </p>
  );
}
