import { useCountry } from '../context/CountryContext';
import { formatLocalCurrency, formatUSD } from '../lib/currency';

/**
 * Two-line price display: the shopper's local East African currency as the
 * primary, prominent figure (driven by the "Deliver to" country selector —
 * see `CountryContext`), with the USD equivalent underneath in small, faint
 * text. Every caller supplies the sizing/color for the primary line (since it
 * varies a lot — badge, hero headline, catalog card) but the secondary USD
 * line defaults to something small and quiet everywhere it's used. Because
 * this reads currency from context, every call site updates automatically
 * when the shopper switches country — nothing above needs to change.
 */
export function Price({
  usd,
  primaryClassName,
  secondaryClassName = 'text-neutral-400',
  secondarySize = 'text-[9px]',
  align = 'left',
  className = '',
}: {
  usd: number;
  primaryClassName: string;
  secondaryClassName?: string;
  secondarySize?: string;
  align?: 'left' | 'right';
  className?: string;
}) {
  const { country } = useCountry();
  return (
    <span className={`inline-flex flex-col gap-0.5 ${align === 'right' ? 'items-end' : 'items-start'} ${className}`}>
      <span className={primaryClassName}>{formatLocalCurrency(usd, country)}</span>
      <span className={`font-accent leading-none font-medium ${secondarySize} ${secondaryClassName}`}>
        {formatUSD(usd)}
      </span>
    </span>
  );
}
