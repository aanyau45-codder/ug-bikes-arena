import type { Country } from '../data/countries';

/**
 * Every demo `price` is stored in USD — the placeholder unit the data was
 * originally written in. Display always leads with the shopper's local East
 * African currency (driven by the selected delivery country, see
 * `CountryContext`) and shows USD as a small, faint secondary line — see
 * `Price` in `src/components/Price.tsx`.
 */
export function formatLocalCurrency(usdValue: number, country: Country): string {
  const amount = Math.round((usdValue * country.usdRate) / 1000) * 1000;
  return `${country.currencySymbol} ${amount.toLocaleString('en-US')}`;
}

export function formatUSD(usdValue: number): string {
  return `$${usdValue.toLocaleString('en-US')}`;
}
