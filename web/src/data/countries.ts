/**
 * Countries UG Bikes Arena currently delivers to.
 *
 * Deliberately East Africa only, and deliberately just these three — John is
 * still confirming which markets he's actually selling into. Add more here
 * (and nowhere else) once that's settled; every consumer (`CountrySelector`,
 * `Price`, `estimateDelivery`) reads this list rather than hardcoding names.
 */

export type CountryCode = 'UG' | 'KE' | 'TZ';

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currencyCode: 'UGX' | 'KES' | 'TZS';
  /** Symbol/prefix used in formatted prices, e.g. "USh 20,350,000". */
  currencySymbol: string;
  /** Placeholder USD -> local-currency conversion rate for demo pricing. */
  usdRate: number;
}

export const countries: Country[] = [
  { code: 'UG', name: 'Uganda', flag: '🇺🇬', currencyCode: 'UGX', currencySymbol: 'USh', usdRate: 3700 },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', currencyCode: 'KES', currencySymbol: 'KSh', usdRate: 130 },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿', currencyCode: 'TZS', currencySymbol: 'TSh', usdRate: 2600 },
];

export const defaultCountry = countries[0];

export function findCountry(code: string): Country {
  return countries.find((c) => c.code === code) ?? defaultCountry;
}
