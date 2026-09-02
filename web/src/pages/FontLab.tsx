import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useTypography } from '../context/TypographyContext';
import {
  accentFonts,
  bodyFonts,
  headingFonts,
  fontCombinations,
  findFont,
  type FontCombination,
} from '../data/fontCombinations';
import { ensureFontsLoaded } from '../lib/fonts';
import { BrandSample } from '../components/BrandSample';

type ScopedStyle = CSSProperties & Record<'--font-heading' | '--font-body' | '--font-accent', string>;

function comboStyle(combo: FontCombination): ScopedStyle {
  const heading = findFont(headingFonts, combo.headingId);
  const body = findFont(bodyFonts, combo.bodyId);
  const accent = findFont(accentFonts, combo.accentId);
  return {
    '--font-heading': `"${heading.family}", ${heading.fallback}`,
    '--font-body': `"${body.family}", ${body.fallback}`,
    '--font-accent': `"${accent.family}", ${accent.fallback}`,
  };
}

const DEFAULT_COMPARE = ['modern-luxury', 'automotive-premium', 'sport-performance'];

export function FontLab() {
  const {
    headingId,
    bodyId,
    accentId,
    setHeadingId,
    setBodyId,
    setAccentId,
    activeCombination,
    applyCombination,
  } = useTypography();

  const [compareIds, setCompareIds] = useState<string[]>(DEFAULT_COMPARE);
  const [justApplied, setJustApplied] = useState<string | null>(null);

  // Preload every curated font up front so the comparison grid renders real
  // type immediately, and every selector option is instant with no per-pick
  // network wait.
  useEffect(() => {
    ensureFontsLoaded([...headingFonts, ...bodyFonts, ...accentFonts]);
  }, []);

  useEffect(() => {
    if (!justApplied) return;
    const t = setTimeout(() => setJustApplied(null), 2200);
    return () => clearTimeout(t);
  }, [justApplied]);

  const compareCombos = useMemo(
    () => compareIds.map((id) => fontCombinations.find((c) => c.id === id)!).filter(Boolean),
    [compareIds],
  );

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((x) => x !== id) : prev;
      }
      if (prev.length < 3) return [...prev, id];
      return [...prev.slice(1), id];
    });
  }

  function handleUseTypography(id: string) {
    applyCombination(id);
    setJustApplied(id);
  }

  return (
    <div className="min-h-screen bg-neutral-100 pb-24 text-neutral-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-brand-red)] uppercase">
          UG Bikes Arena
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Font Lab</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Experiment with heading, body and accent typography using real UG Bikes Arena content.
          Every change below applies instantly — no reload — and, once picked, propagates
          everywhere on this site via CSS variables, not hardcoded per-component fonts.
        </p>

        {/* ---- 1. Build your own combination ---- */}
        <section className="mt-12">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            1 · Build your own combination
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <FontSelect
              label="Heading Font"
              value={headingId}
              options={headingFonts}
              onChange={setHeadingId}
            />
            <FontSelect label="Body Font" value={bodyId} options={bodyFonts} onChange={setBodyId} />
            <FontSelect
              label="Accent / Numbers Font"
              value={accentId}
              options={accentFonts}
              onChange={setAccentId}
            />
          </div>

          <div className="mt-3 text-sm text-neutral-500">
            Currently matches curated combination:{' '}
            <strong className="text-neutral-800">{activeCombination ? activeCombination.name : 'None — custom mix'}</strong>
          </div>

          <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <BrandSample />
          </div>
        </section>

        {/* ---- 2. Curated combinations ---- */}
        <section className="mt-14">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            2 · Curated combinations
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-500">
            Seven intentional pairings — pick one to apply its heading, body and accent fonts
            together.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fontCombinations.map((combo) => {
              const isActive = activeCombination?.id === combo.id;
              return (
                <div
                  key={combo.id}
                  style={comboStyle(combo)}
                  className={`flex flex-col rounded-xl border bg-white p-5 transition-shadow ${
                    isActive
                      ? 'border-[var(--color-brand-red)] ring-2 ring-[var(--color-brand-red)]/30'
                      : 'border-neutral-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-2xl font-bold tracking-tight">{combo.name}</h3>
                    {isActive && (
                      <span className="shrink-0 rounded-full bg-[var(--color-brand-red)] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="font-accent mt-1 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                    {combo.personality}
                  </p>
                  <p className="font-body mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {combo.rationale}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleUseTypography(combo.id)}
                    className="font-accent mt-4 rounded-full bg-neutral-900 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-red)]"
                  >
                    {isActive ? 'In use ✓' : 'Use this typography'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---- 3. Compare side by side ---- */}
        <section className="mt-14">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            3 · Compare side by side
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-500">
            Choose up to three combinations to render simultaneously, each in its own real
            typefaces, so you can judge them next to each other.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {fontCombinations.map((combo) => {
              const selected = compareIds.includes(combo.id);
              return (
                <button
                  key={combo.id}
                  type="button"
                  onClick={() => toggleCompare(combo.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selected
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-300 text-neutral-600 hover:border-neutral-500'
                  }`}
                >
                  {combo.name}
                </button>
              );
            })}
          </div>

          <div className={`mt-5 grid gap-4 ${compareCombos.length === 1 ? '' : compareCombos.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {compareCombos.map((combo) => {
              const isActive = activeCombination?.id === combo.id;
              return (
                <div
                  key={combo.id}
                  style={comboStyle(combo)}
                  className={`rounded-xl border bg-white p-5 ${
                    isActive ? 'border-[var(--color-brand-red)] ring-2 ring-[var(--color-brand-red)]/30' : 'border-neutral-200'
                  }`}
                >
                  <div className="border-b border-neutral-100 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading text-lg font-bold">{combo.name}</p>
                      {isActive && (
                        <span className="shrink-0 rounded-full bg-[var(--color-brand-red)] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      {findFont(headingFonts, combo.headingId).family} · {findFont(bodyFonts, combo.bodyId).family} ·{' '}
                      {findFont(accentFonts, combo.accentId).family}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleUseTypography(combo.id)}
                      className="font-accent mt-3 w-full rounded-full bg-neutral-900 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-red)]"
                    >
                      {isActive ? 'In use ✓' : 'Use this typography'}
                    </button>
                  </div>
                  <div className="mt-4">
                    <BrandSample compact />
                  </div>
                </div>
              );
            })}
          </div>

          {justApplied && (
            <div
              role="status"
              className="fixed top-6 left-1/2 z-[1000] -translate-x-1/2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl"
            >
              Applied "{fontCombinations.find((c) => c.id === justApplied)?.name}" globally ✓
            </div>
          )}
        </section>

        <section className="mt-14 rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-500">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            How this propagates
          </h2>
          <p className="mt-2 leading-relaxed">
            Selections here write three CSS custom properties —{' '}
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-[12px]">--font-heading</code>,{' '}
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-[12px]">--font-body</code>,{' '}
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-[12px]">--font-accent</code> —
            onto the document root and persist them to <code>localStorage</code>. Every page and
            component reads those variables through Tailwind's <code>font-heading</code>/
            <code>font-body</code>/<code>font-accent</code> utility classes rather than a hardcoded
            font-family, so the four concept pages, and any future page, inherit whatever is
            selected here with zero component changes.
          </p>
        </section>
      </div>
    </div>
  );
}

function FontSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { id: string; family: string }[];
  onChange: (id: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.family}
          </option>
        ))}
      </select>
    </label>
  );
}
