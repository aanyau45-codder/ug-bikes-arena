import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { defaultCountry, findCountry, type Country } from '../data/countries';

const STORAGE_KEY = 'ugba.country.v1';

interface CountryContextValue {
  country: Country;
  setCountryCode: (code: string) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

function loadInitialCode(): string {
  if (typeof window === 'undefined') return defaultCountry.code;
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? defaultCountry.code;
  } catch {
    return defaultCountry.code;
  }
}

/**
 * Delivery-country selection, mirroring `TypographyContext`'s "pick once,
 * apply everywhere" pattern: persisted to localStorage, read by every
 * `<Price>` and `<DeliveryEstimate>` on the site with zero call-site changes
 * when the shopper switches country.
 */
export function CountryProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<string>(loadInitialCode);
  const country = findCountry(code);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // localStorage unavailable (private browsing, etc.) — selection still
      // works for the current session, it just won't persist.
    }
  }, [code]);

  const setCountryCode = useCallback((next: string) => setCode(next), []);

  return <CountryContext.Provider value={{ country, setCountryCode }}>{children}</CountryContext.Provider>;
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error('useCountry must be used within a CountryProvider');
  return ctx;
}
