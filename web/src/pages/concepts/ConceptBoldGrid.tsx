import { useMemo, useState } from 'react';
import { demoMotorcycles, getMotorcycle, type MotorcycleCategory } from '../../data/demoMotorcycles';
import { ResponsiveImage } from '../../components/ResponsiveImage';
import { DemoImageryNotice } from '../../components/DemoImageryNotice';
import { Price } from '../../components/Price';
import { CountrySelector } from '../../components/CountrySelector';
import { CartIcon } from '../../components/CartIcon';
import { DeliveryEstimate } from '../../components/DeliveryEstimate';
import { DocumentationBadge } from '../../components/DocumentationBadge';

const heroBike = getMotorcycle('ironclad-street-890')!;
const popular = demoMotorcycles.slice(0, 4);
const onSale = demoMotorcycles.filter((m) => m.badge === 'Sale');

const categories: Array<MotorcycleCategory | 'All'> = ['All', 'Sport', 'Naked', 'Cruiser', 'Classic'];

export function ConceptBoldGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(
    () => (activeCategory === 'All' ? demoMotorcycles : demoMotorcycles.filter((m) => m.category === activeCategory)),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Promo strip */}
      <div className="bg-neutral-900 py-2 text-center text-xs font-medium tracking-wide text-white">
        <span className="font-accent">Free 21-point inspection on every bike</span>
        <span className="mx-3 text-white/30">|</span>
        <span className="font-accent">12-month warranty on new inventory</span>
        <span className="mx-3 text-white/30">|</span>
        <span className="font-accent text-[var(--color-brand-red)]">Trade-ins welcome</span>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <span className="font-heading text-xl font-black tracking-tight">
            UG<span className="text-[var(--color-brand-red)]">.</span>ARENA
          </span>
          <nav className="font-body hidden gap-6 text-sm font-semibold text-neutral-700 lg:flex">
            <span>Inventory</span>
            <span>Sport</span>
            <span>Cruiser</span>
            <span>Financing</span>
            <span>Service</span>
            <span>Sell / Trade-In</span>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-400 xl:flex">
              Search inventory…
            </div>
            <CountrySelector />
            <CartIcon />
            <button className="font-accent rounded-full bg-[var(--color-brand-red)] px-4 py-2 text-sm font-bold text-white">
              Book Test Ride
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate h-[70vh] min-h-[440px] overflow-hidden">
        <ResponsiveImage src={heroBike.imageUrl} alt={heroBike.imageAlt} priority className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="font-accent text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
              Built For Riders
            </p>
            <h1 className="font-heading mt-2 max-w-xl text-5xl leading-[1.05] font-black tracking-tight text-white uppercase sm:text-6xl">
              Uganda's Home of Performance Motorcycles
            </h1>
            <p className="font-body mt-4 max-w-md text-white/80">
              New and inspected used bikes, serviced in-house and ready to ride today.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="font-accent rounded bg-[var(--color-brand-red)] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase">
                Shop Inventory
              </button>
              <button className="font-accent rounded border border-white px-6 py-3 text-sm font-bold tracking-wide text-white uppercase">
                Explore Financing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular models */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-black tracking-tight uppercase">Popular Models</h2>
          <div className="font-accent flex gap-2 text-sm font-bold text-neutral-400">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {popular.map((bike) => (
            <a key={bike.id} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded bg-neutral-100">
                <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} className="transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="font-heading mt-2 text-sm font-bold tracking-tight uppercase">{bike.name}</p>
              <Price usd={bike.price} primaryClassName="font-accent text-sm font-bold text-[var(--color-brand-red)]" />
            </a>
          ))}
        </div>
      </section>

      {/* Special offers */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-black tracking-tight uppercase">Special Offers</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {onSale.concat(demoMotorcycles.find((m) => m.badge === 'Featured')!).map((bike) => (
              <a key={bike.id} href="#" className="group relative block overflow-hidden rounded">
                <div className="aspect-[4/3]">
                  <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} className="transition-transform duration-300 group-hover:scale-105" />
                </div>
                {bike.originalPrice && (
                  <span className="font-accent absolute top-3 right-3 rounded-full bg-[var(--color-brand-red)] px-2.5 py-1 text-xs font-bold text-white">
                    -{Math.round((1 - bike.price / bike.originalPrice) * 100)}%
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="font-heading text-sm font-bold text-white uppercase">{bike.name}</p>
                  <Price
                    usd={bike.price}
                    primaryClassName="font-accent text-sm font-bold text-white/90"
                    secondaryClassName="text-white/50"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog with working filter */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-black tracking-tight uppercase">Catalog</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-accent rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide uppercase transition-colors ${
                  activeCategory === cat
                    ? 'border-[var(--color-brand-red)] bg-[var(--color-brand-red)] text-white'
                    : 'border-neutral-300 text-neutral-600 hover:border-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bike) => (
            <a
              key={bike.id}
              href="#"
              className="group flex flex-col overflow-hidden rounded border border-neutral-200 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-neutral-100">
                <ResponsiveImage src={bike.imageUrl} alt={bike.imageAlt} className="transition-transform duration-300 group-hover:scale-105" />
                {bike.badge && (
                  <span className="font-accent absolute top-3 left-3 rounded bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
                    {bike.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="font-accent text-[11px] font-bold tracking-wide text-neutral-400 uppercase">
                  {bike.condition} · {bike.category}
                </p>
                <h3 className="font-heading mt-1 text-lg font-bold tracking-tight">{bike.name}</h3>
                <p className="font-body mt-1 text-xs text-neutral-500">
                  {bike.specs.engine} · {bike.specs.power} · {bike.specs.topSpeed}
                </p>
                <div className="mt-2 flex-1 space-y-1 text-[11px]">
                  <DocumentationBadge available={bike.documentationAvailable} />
                  <DeliveryEstimate bike={bike} />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Price usd={bike.price} primaryClassName="font-accent text-lg font-bold text-[var(--color-brand-red)]" />
                  <span className="font-accent text-xs font-bold text-neutral-900 uppercase group-hover:text-[var(--color-brand-red)]">
                    View →
                  </span>
                </div>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <p className="font-body col-span-full py-10 text-center text-neutral-400">
              No motorcycles in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Sell or consign */}
      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-black tracking-tight uppercase">Selling? We've Got Two Ways.</h2>
          <p className="font-body mt-2 max-w-2xl text-sm text-neutral-500">
            Trade it in for cash today, or let our floor sell it for you — you choose how hands-on you want to be.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded border border-neutral-200 bg-white p-6">
              <p className="font-accent text-xs font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                Sell to Us
              </p>
              <h3 className="font-heading mt-2 text-xl font-bold tracking-tight">Sell Your Bike to UG Bikes Arena</h3>
              <p className="font-body mt-2 text-sm text-neutral-500">
                Get an instant valuation and walk away with cash or credit toward your next bike — no listing, no
                waiting on a buyer.
              </p>
              <a
                href="#"
                className="font-accent mt-4 inline-block rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold tracking-wide text-white uppercase"
              >
                Get a Valuation
              </a>
            </div>
            <div className="rounded border border-neutral-200 bg-white p-6">
              <p className="font-accent text-xs font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                Sell for You
              </p>
              <h3 className="font-heading mt-2 text-xl font-bold tracking-tight">We Sell It, You Get Paid</h3>
              <p className="font-body mt-2 text-sm text-neutral-500">
                List your bike on our floor on consignment — we handle the marketing, buyers, and paperwork, you set
                the price you'll accept.
              </p>
              <a
                href="#"
                className="font-accent mt-4 inline-block rounded-full border border-neutral-900 px-5 py-2.5 text-xs font-bold tracking-wide text-neutral-900 uppercase"
              >
                Start a Consignment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-neutral-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-4">
          <div>
            <span className="font-heading text-xl font-black tracking-tight text-white">
              UG<span className="text-[var(--color-brand-red)]">.</span>ARENA
            </span>
            <p className="font-body mt-3 text-sm text-neutral-400">
              Performance motorcycles, backed by our own service bay.
            </p>
          </div>
          <FooterColumn title="Shop" items={['Inventory', 'Sport', 'Cruiser', 'Sale']} />
          <FooterColumn title="Company" items={['About', 'Financing', 'Careers', 'Contact']} />
          <FooterColumn title="Support" items={['Service Bay', 'Warranty', 'Trade-In', 'FAQ']} />
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6">
          <DemoImageryNotice dark />
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-accent text-xs font-bold tracking-widest text-white uppercase">{title}</p>
      <ul className="font-body mt-3 space-y-2 text-sm text-neutral-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
