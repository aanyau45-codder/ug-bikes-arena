import { Link } from 'react-router-dom';
import { useTypography } from '../context/TypographyContext';

const selectedConcept = {
  to: '/concepts/bold-grid',
  title: 'Concept 2 — Bold Industrial Grid',
  description:
    'Dense e-commerce-style layout: sticky nav, filter bar, popular models carousel, red sale badges. Built for browsing a large catalog fast.',
};

// Not discarded — just set aside while we build out the selected direction.
// Kept fully live and linkable in case we want to revisit one of them.
const parkedConcepts = [
  {
    to: '/concepts/editorial',
    title: 'Concept 1 — Editorial Cinematic',
    description:
      'Full-bleed cinematic hero, magazine-style asymmetric grid, generous whitespace. Personality carried by photography and a dramatic display headline.',
  },
  {
    to: '/concepts/modern-luxury',
    title: 'Concept 3 — Modern Luxury Automotive',
    description:
      'Dark, upscale automotive-brand treatment with an oversized typographic hero, category rail, and premium promo banners.',
  },
  {
    to: '/concepts/minimal-performance',
    title: 'Concept 4 — Minimal Performance Dashboard',
    description:
      'Ultra-minimal, spec-forward layout that puts the accent/numbers font to work — big stat callouts, quiet color, sharp red line details.',
  },
];

export function Home() {
  const { activeCombination } = useTypography();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="font-accent text-sm font-semibold tracking-[0.2em] text-[var(--color-brand-red)] uppercase">
          UG Bikes Arena · Internal Prototype
        </p>
        <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          Typography &amp; Design Concept Review
        </h1>
        <p className="font-body mt-5 max-w-2xl text-lg text-neutral-600">
          This build houses a live <strong>Font Lab</strong> for choosing UG Bikes Arena's
          typography, and four fully-imaged homepage design concepts built to judge it in context.{' '}
          <strong>Bold Industrial Grid</strong> is the selected direction going forward — the other
          three are parked below, not discarded, in case we want to call one back later. Pick a
          font combination on{' '}
          <Link to="/fonts" className="underline decoration-[var(--color-brand-red)] underline-offset-4">
            /fonts
          </Link>{' '}
          and it applies instantly, everywhere on this site — including every concept below.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
          <span className="font-accent font-semibold text-neutral-900">Active typography:</span>
          <span>{activeCombination ? activeCombination.name : 'Custom mix'}</span>
          <Link
            to="/fonts"
            className="ml-auto rounded-full bg-neutral-900 px-4 py-1.5 font-accent text-xs font-semibold text-white transition-colors hover:bg-[var(--color-brand-red)]"
          >
            Open Font Lab →
          </Link>
        </div>

        <h2 className="font-heading mt-16 text-2xl font-bold tracking-tight">Selected direction</h2>
        <Link
          to={selectedConcept.to}
          className="group mt-6 block rounded-xl border-2 border-[var(--color-brand-red)] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
        >
          <span className="font-accent inline-block rounded-full bg-[var(--color-brand-red)] px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Selected
          </span>
          <h3 className="font-heading mt-3 text-2xl font-bold tracking-tight group-hover:text-[var(--color-brand-red)] sm:text-3xl">
            {selectedConcept.title}
          </h3>
          <p className="font-body mt-2 max-w-2xl text-neutral-600">{selectedConcept.description}</p>
          <span className="font-accent mt-5 inline-block text-sm font-bold tracking-wide text-[var(--color-brand-red)] uppercase">
            View concept →
          </span>
        </Link>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-2 border-t border-neutral-200 pt-8">
          <h2 className="font-heading text-lg font-bold tracking-tight text-neutral-500">
            Other directions — parked
          </h2>
          <span className="font-accent text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Not discarded — may revisit
          </span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {parkedConcepts.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-xl border border-neutral-200 bg-neutral-50/60 p-5 opacity-80 transition-opacity hover:opacity-100 hover:shadow-md"
            >
              <h3 className="font-heading text-base font-bold tracking-tight text-neutral-700 group-hover:text-[var(--color-brand-red)]">
                {c.title}
              </h3>
              <p className="font-body mt-2 text-xs leading-relaxed text-neutral-500">{c.description}</p>
              <span className="font-accent mt-3 inline-block text-[11px] font-semibold tracking-wide text-neutral-400 uppercase">
                View concept →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
          <p>
            All motorcycle photography across the four concepts is demo imagery sourced from
            Unsplash for evaluation purposes only — see <code>src/data/demoMotorcycles.ts</code>{' '}
            for the centralized data model that production inventory (via John's admin dashboard)
            will replace.
          </p>
        </div>
      </div>
    </div>
  );
}
