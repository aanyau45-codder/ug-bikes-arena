import { useEffect, useRef, useState } from 'react';
import { countries } from '../data/countries';
import { useCountry } from '../context/CountryContext';

/**
 * "Deliver to" control — East Africa only for now (see `data/countries.ts`).
 * Switching country here immediately updates currency (`Price`) and delivery
 * estimates (`DeliveryEstimate`) everywhere on the page; no other component
 * needs to know the selection changed.
 */
export function CountrySelector() {
  const { country, setCountryCode } = useCountry();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Choose delivery country"
        className="font-accent flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:border-neutral-500"
      >
        <span className="flex h-4 w-6 items-center justify-center rounded-sm bg-neutral-900 text-[9px] font-bold text-white">
          {country.code}
        </span>
        <span className="hidden md:inline">Deliver to {country.name}</span>
        <span aria-hidden className="text-neutral-400">
          ▾
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-30 mt-2 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
        >
          <p className="font-accent px-3 py-1.5 text-[10px] font-semibold tracking-wide text-neutral-400 uppercase">
            Deliver to (East Africa)
          </p>
          {countries.map((c) => (
            <button
              key={c.code}
              type="button"
              role="option"
              aria-selected={c.code === country.code}
              onClick={() => {
                setCountryCode(c.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-50 ${
                c.code === country.code ? 'font-semibold text-[var(--color-brand-red)]' : 'text-neutral-700'
              }`}
            >
              <span
                className={`flex h-4 w-6 shrink-0 items-center justify-center rounded-sm text-[9px] font-bold ${
                  c.code === country.code ? 'bg-[var(--color-brand-red)] text-white' : 'bg-neutral-900 text-white'
                }`}
              >
                {c.code}
              </span>
              <span className="flex-1">{c.name}</span>
              <span className="font-accent text-xs text-neutral-400">{c.currencyCode}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
