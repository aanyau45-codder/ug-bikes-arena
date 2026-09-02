import { demoMotorcycles, getMotorcycle } from '../../data/demoMotorcycles';
import { ResponsiveImage } from '../../components/ResponsiveImage';
import { DemoImageryNotice } from '../../components/DemoImageryNotice';
import { Price } from '../../components/Price';

const flagship = getMotorcycle('vantage-superleggera-1100')!;
const featuredSecondary = [getMotorcycle('ironclad-street-890')!, getMotorcycle('heritage-classic-500')!];
const rest = demoMotorcycles.filter(
  (m) => m.id !== flagship.id && !featuredSecondary.some((f) => f.id === m.id),
);

export function ConceptEditorial() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav — thin, overlaid on hero */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <span className="font-heading text-lg font-bold tracking-[0.15em] text-white uppercase">
            UG Bikes Arena
          </span>
          <nav className="font-body hidden gap-8 text-sm text-white/85 sm:flex">
            <span>Lineup</span>
            <span>Editorial</span>
            <span>Service</span>
            <span>Visit Us</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex h-[92vh] min-h-[560px] items-end">
        <ResponsiveImage
          src={flagship.imageUrl}
          alt={flagship.imageAlt}
          priority
          className="absolute inset-0 -z-10"
          objectPosition="center 35%"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20">
          <p className="font-accent text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">
            Issue No. 01 — The Flagship
          </p>
          <h1 className="font-heading mt-3 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl">
            Engineered for the Road Ahead.
          </h1>
          <p className="font-body mt-5 max-w-lg text-white/80">
            A closer look at the {flagship.name} — and the rest of a lineup built around one idea:
            every bike should feel inevitable to ride.
          </p>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <p className="font-body text-lg leading-relaxed text-neutral-700 sm:text-xl">
          <span className="font-heading float-left mr-3 text-7xl leading-[0.8] font-bold text-[var(--color-brand-red)]">
            F
          </span>
          rom weekend cruisers to track-bred superbikes, every motorcycle at UG Bikes Arena is
          inspected, serviced, and road-ready before it reaches you. What follows is this
          season's lineup — photographed, specced, and priced for a straightforward decision.
        </p>
      </section>

      {/* Featured asymmetric spread */}
      <section className="mx-auto max-w-7xl px-6 pb-6 sm:px-10">
        <h2 className="font-heading text-2xl font-bold tracking-tight">This Season's Spread</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <a href="#" className="group relative col-span-3 aspect-[16/9] overflow-hidden rounded-sm sm:col-span-2 sm:aspect-auto">
            <ResponsiveImage
              src={flagship.imageUrl}
              alt={flagship.imageAlt}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-accent text-xs font-semibold tracking-widest text-white/70 uppercase">
                {flagship.brandLine}
              </p>
              <h3 className="font-heading mt-1 text-3xl font-bold text-white">{flagship.name}</h3>
              <Price
                usd={flagship.price}
                primaryClassName="font-accent mt-1 text-white/80"
                secondaryClassName="text-white/40"
              />
            </div>
          </a>

          <div className="flex flex-col gap-4">
            {featuredSecondary.map((bike) => (
              <a
                key={bike.id}
                href="#"
                className="group relative aspect-[4/3] flex-1 overflow-hidden rounded-sm"
              >
                <ResponsiveImage
                  src={bike.imageUrl}
                  alt={bike.imageAlt}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-heading text-lg font-bold text-white">{bike.name}</h3>
                  <Price
                    usd={bike.price}
                    primaryClassName="font-accent text-sm text-white/80"
                    secondaryClassName="text-white/40"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-2xl font-bold tracking-tight">The Rest of the Lineup</h2>
          <span className="font-accent text-sm text-neutral-400">{rest.length} motorcycles</span>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((bike) => (
            <a key={bike.id} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100">
                <ResponsiveImage
                  src={bike.imageUrl}
                  alt={bike.imageAlt}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight">{bike.name}</h3>
                  <p className="font-accent mt-0.5 text-xs tracking-wide text-neutral-500 uppercase">
                    {bike.specs.engine} · {bike.specs.power}
                  </p>
                </div>
                <Price
                  usd={bike.price}
                  className="shrink-0"
                  align="right"
                  primaryClassName="font-accent font-semibold text-[var(--color-brand-red)]"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight">UG Bikes Arena</p>
            <p className="font-body mt-1 text-sm text-neutral-500">
              Curated new &amp; used motorcycles, inspected and ready to ride.
            </p>
          </div>
          <DemoImageryNotice className="max-w-md" />
        </div>
      </footer>
    </div>
  );
}
