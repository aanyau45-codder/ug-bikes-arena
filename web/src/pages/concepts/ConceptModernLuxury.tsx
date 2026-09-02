import { getMotorcycle, type MotorcycleCategory } from '../../data/demoMotorcycles';
import { ResponsiveImage } from '../../components/ResponsiveImage';
import { DemoImageryNotice } from '../../components/DemoImageryNotice';
import { Price } from '../../components/Price';

const heroBike = getMotorcycle('nightfall-r6-599')!;

const showcase = [
  getMotorcycle('vantage-superleggera-1100')!,
  getMotorcycle('apex-gts-950')!,
  getMotorcycle('solace-roadmaster-1200')!,
];

const categoryRail: { label: MotorcycleCategory; sample: string }[] = [
  { label: 'Sport', sample: 'apex-gts-950' },
  { label: 'Naked', sample: 'ironclad-street-890' },
  { label: 'Cruiser', sample: 'solace-roadmaster-1200' },
  { label: 'Classic', sample: 'heritage-classic-500' },
];

export function ConceptModernLuxury() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-heading text-lg font-bold tracking-[0.2em] uppercase">UG Bikes Arena</span>
        <nav className="font-body hidden gap-8 text-sm text-white/70 lg:flex">
          {['Collection', 'Sport', 'Cruiser', 'Financing', 'Visit'].map((item) => (
            <span key={item} className="cursor-pointer transition-colors hover:text-white">
              {item}
            </span>
          ))}
        </nav>
        <button className="font-accent rounded-full border border-white/30 px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors hover:border-white">
          Book a Visit
        </button>
      </header>

      {/* Hero */}
      <section className="relative isolate mx-6 h-[80vh] min-h-[520px] overflow-hidden rounded-2xl sm:mx-10">
        <ResponsiveImage
          src={heroBike.imageUrl}
          alt={heroBike.imageAlt}
          priority
          className="absolute inset-0 -z-10"
          objectPosition="center 30%"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/30 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
          <h1 className="font-heading text-6xl leading-[0.95] font-bold tracking-tight sm:text-8xl">
            Power.
            <br />
            <span className="text-[var(--color-brand-red)]">Precision.</span> Presence.
          </h1>
          <p className="font-body mt-5 max-w-md text-white/70">
            A collection built for riders who notice the details — from throttle response to
            stitching.
          </p>
          <div className="mt-7 flex gap-3">
            <button className="font-accent rounded-full bg-white px-6 py-3 text-sm font-bold tracking-wide text-black uppercase">
              View the Collection
            </button>
            <button className="font-accent rounded-full border border-white/40 px-6 py-3 text-sm font-bold tracking-wide uppercase">
              Book a Test Ride
            </button>
          </div>
        </div>
      </section>

      {/* Category rail */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categoryRail.map((cat) => {
            const bike = getMotorcycle(cat.sample)!;
            return (
              <a key={cat.label} href="#" className="group text-center">
                <div className="mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-full border border-white/10 bg-neutral-900">
                  <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="font-accent mt-3 text-sm font-semibold tracking-widest text-white/70 uppercase group-hover:text-white">
                  {cat.label}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Showcase — alternating rows */}
      <section className="mx-auto max-w-7xl px-6 pb-8 sm:px-10">
        <h2 className="font-heading text-3xl font-bold tracking-tight">The Collection</h2>
        <div className="mt-8 space-y-16">
          {showcase.map((bike, i) => (
            <div
              key={bike.id}
              className={`flex flex-col items-center gap-8 lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
                <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-accent text-xs font-semibold tracking-widest text-[var(--color-brand-red)] uppercase">
                  {bike.brandLine}
                </p>
                <h3 className="font-heading mt-2 text-4xl font-bold tracking-tight">{bike.name}</h3>
                <p className="font-body mt-3 max-w-md text-white/70">{bike.blurb}</p>
                <dl className="font-accent mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                  {Object.entries(bike.specs).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-white/40 capitalize">{key}</dt>
                      <dd className="mt-0.5 font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 flex items-center gap-5">
                  <Price
                    usd={bike.price}
                    primaryClassName="font-accent text-2xl font-bold"
                    secondaryClassName="text-white/40"
                  />
                  <button className="font-accent rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-black uppercase">
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo banners */}
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-16 sm:grid-cols-2 sm:px-10">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--color-brand-red)] to-[var(--color-brand-red-dark)] p-8">
          <p className="font-accent text-xs font-bold tracking-widest text-white/80 uppercase">Limited Time</p>
          <h3 className="font-heading mt-2 text-2xl font-bold">Test Ride Weekend</h3>
          <p className="font-body mt-2 text-sm text-white/85">
            Book a slot this weekend and ride three flagship models back to back.
          </p>
          <button className="font-accent mt-5 rounded-full bg-black px-5 py-2.5 text-xs font-bold tracking-wide text-white uppercase">
            Reserve a Slot
          </button>
        </div>
        <div className="rounded-2xl border border-white/15 bg-neutral-900 p-8">
          <p className="font-accent text-xs font-bold tracking-widest text-white/50 uppercase">Trade-In Program</p>
          <h3 className="font-heading mt-2 text-2xl font-bold">Upgrade Without the Hassle</h3>
          <p className="font-body mt-2 text-sm text-white/70">
            Get an on-the-spot valuation on your current bike toward any model in the collection.
          </p>
          <button className="font-accent mt-5 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold tracking-wide uppercase">
            Get a Valuation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-lg font-bold tracking-tight">UG Bikes Arena</p>
            <p className="font-body mt-1 text-sm text-white/50">Power. Precision. Presence.</p>
          </div>
          <DemoImageryNotice dark className="max-w-md" />
        </div>
      </footer>
    </div>
  );
}
