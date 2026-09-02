import { Price } from './Price';

/**
 * Realistic UG Bikes Arena content used everywhere a font selection needs to
 * be judged in context (Font Lab live preview + every comparison column).
 * Deliberately touches every element the spec calls out: hero heading, nav,
 * body text, motorcycle name, price, specs, buttons, labels.
 */
export function BrandSample({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'text-left' : 'text-left'}>
      {/* Nav */}
      <div
        className={`flex items-center justify-between border-b border-current/10 pb-3 ${
          compact ? 'text-[10px]' : 'text-sm'
        }`}
      >
        <span className="font-heading font-bold tracking-tight">UG BIKES ARENA</span>
        <div className={`font-body flex gap-3 opacity-70 ${compact ? 'hidden sm:flex' : ''}`}>
          <span>Inventory</span>
          <span>Sport</span>
          <span>Cruiser</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Hero */}
      <div className={compact ? 'mt-4' : 'mt-8'}>
        <span
          className={`font-accent inline-block rounded-full bg-[var(--color-brand-red)]/10 font-semibold tracking-widest text-[var(--color-brand-red)] uppercase ${
            compact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-xs'
          }`}
        >
          New Arrival
        </span>
        <h2
          className={`font-heading mt-2 font-bold tracking-tight ${
            compact ? 'text-xl' : 'text-4xl sm:text-5xl'
          }`}
        >
          Engineered for the Road Ahead.
        </h2>
        <p className={`font-body mt-2 max-w-md opacity-70 ${compact ? 'text-xs' : 'text-base'}`}>
          From weekend cruisers to track-bred superbikes, every motorcycle we sell is inspected,
          serviced, and backed by our team before it reaches you.
        </p>
      </div>

      {/* Motorcycle card */}
      <div
        className={`mt-4 flex items-center justify-between gap-4 rounded-lg border border-current/10 ${
          compact ? 'p-2.5' : 'p-4'
        }`}
      >
        <div>
          <p className={`font-heading font-bold ${compact ? 'text-sm' : 'text-xl'}`}>
            Vantage Superleggera 1100
          </p>
          <p className={`font-accent mt-1 tracking-wide opacity-70 ${compact ? 'text-[10px]' : 'text-sm'}`}>
            1103cc V4 · 214 hp · 175 kg · 299 km/h
          </p>
        </div>
        <Price
          usd={24999}
          className="shrink-0"
          align="right"
          primaryClassName={`font-accent font-bold text-[var(--color-brand-red)] ${compact ? 'text-base' : 'text-2xl'}`}
          secondarySize={compact ? 'text-[8px]' : 'text-[10px]'}
        />
      </div>

      {/* Buttons + labels */}
      <div className={`mt-4 flex flex-wrap items-center gap-2 ${compact ? '' : 'gap-3'}`}>
        <span
          className={`font-accent rounded-full bg-neutral-900 font-semibold tracking-wide text-white ${
            compact ? 'px-2.5 py-1 text-[10px]' : 'px-5 py-2 text-sm'
          }`}
        >
          View Inventory
        </span>
        <span
          className={`font-accent rounded-full border border-current font-semibold tracking-wide opacity-80 ${
            compact ? 'px-2.5 py-1 text-[10px]' : 'px-5 py-2 text-sm'
          }`}
        >
          Book a Test Ride
        </span>
        <span
          className={`font-accent ml-auto font-semibold tracking-widest opacity-50 uppercase ${
            compact ? 'text-[9px]' : 'text-xs'
          }`}
        >
          Featured
        </span>
      </div>
    </div>
  );
}
