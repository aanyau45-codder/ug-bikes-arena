import { demoMotorcycles, getMotorcycle } from '../../data/demoMotorcycles';
import { Price } from '../../components/Price';
import { ResponsiveImage } from '../../components/ResponsiveImage';
import { DemoImageryNotice } from '../../components/DemoImageryNotice';

const heroBike = getMotorcycle('solaris-r6x-599')!;
const catalog = demoMotorcycles.filter((m) => m.id !== heroBike.id);

const stats: { label: string; value: string }[] = [
  { label: 'Top Speed', value: heroBike.specs.topSpeed },
  { label: 'Power', value: heroBike.specs.power },
  { label: 'Weight', value: heroBike.specs.weight },
  { label: 'Engine', value: heroBike.specs.engine },
];

export function ConceptMinimalPerformance() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-heading text-base font-bold tracking-tight">UG Bikes Arena</span>
          <nav className="font-body flex gap-8 text-sm text-neutral-500">
            <span>Inventory</span>
            <span className="hidden sm:inline">Financing</span>
            <span className="hidden sm:inline">Service</span>
            <span>Contact</span>
          </nav>
        </div>
      </header>

      {/* Hero — stats left, image right */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-accent text-xs font-semibold tracking-[0.3em] text-neutral-400 uppercase">
            {heroBike.brandLine}
          </p>
          <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{heroBike.name}</h1>
          <p className="font-body mt-4 max-w-sm text-neutral-500">{heroBike.blurb}</p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-accent text-4xl leading-none font-bold sm:text-5xl">{stat.value}</p>
                <p className="font-body mt-2 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Price usd={heroBike.price} primaryClassName="font-accent text-2xl font-bold" />
            <a href="#" className="font-accent border-b-2 border-[var(--color-brand-red)] pb-0.5 text-sm font-semibold">
              View Full Specs →
            </a>
          </div>
        </div>

        <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-50 lg:aspect-[3/4]">
          <ResponsiveImage src={heroBike.imageUrl} alt={heroBike.imageAlt} priority objectPosition="center 20%" />
        </div>
      </section>

      {/* Full-width spec dashboard */}
      <section className="border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-6 sm:grid-cols-5">
          {[
            { label: 'Engine', value: heroBike.specs.engine },
            { label: 'Power', value: heroBike.specs.power },
            { label: 'Weight', value: heroBike.specs.weight },
            { label: 'Top Speed', value: heroBike.specs.topSpeed },
            { label: 'Gearbox', value: heroBike.specs.transmission },
          ].map((row, i) => (
            <div key={row.label} className={`px-4 py-8 text-center ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}>
              <p className="font-accent text-2xl font-bold sm:text-3xl">{row.value}</p>
              <p className="font-body mt-1.5 text-[11px] font-medium tracking-wide text-white/40 uppercase">
                {row.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog — minimal cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-heading text-xl font-bold tracking-tight">Full Inventory</h2>
        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((bike) => (
            <a key={bike.id} href="#" className="group block">
              <div className="aspect-[4/3] bg-neutral-50 p-4">
                <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} className="transition-opacity group-hover:opacity-80" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold tracking-tight">{bike.name}</h3>
                  <p className="font-accent mt-1 text-xs tracking-wide text-neutral-400 uppercase">
                    {bike.specs.power} · {bike.specs.topSpeed}
                  </p>
                </div>
                <Price
                  usd={bike.price}
                  className="shrink-0"
                  align="right"
                  primaryClassName="font-accent text-base font-bold"
                />
              </div>
              <span className="font-accent mt-2 inline-block border-b border-transparent text-xs font-semibold text-neutral-400 group-hover:border-[var(--color-brand-red)] group-hover:text-neutral-900">
                View →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer — sparse */}
      <footer className="border-t border-neutral-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-neutral-400">© UG Bikes Arena — Design Prototype</p>
          <DemoImageryNotice className="max-w-md text-right" />
        </div>
      </footer>
    </div>
  );
}
