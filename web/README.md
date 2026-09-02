# UG Bikes Arena — Typography & Design Concept Review

An internal prototype: a live **Font Lab** for picking UG Bikes Arena's site-wide
typography, plus four fully-imaged homepage **design concepts** built on top of
it. Built from `ug-bikes-arena-typography-and-imagery-spec.md`.

## Running it

```bash
npm install
npm run dev      # dev server, http://localhost:5173 (or next free port)
npm run build    # type-checks (tsc -b) then builds to dist/
npm run preview  # serves the production build locally
```

## What's here

- **`/` (Home)** — overview of the prototype, links to the Font Lab and all
  four concepts, and shows the currently-active typography combination.
- **`/fonts` (Font Lab)** — [FontLab.tsx](src/pages/FontLab.tsx). Three ways to
  pick typography: mix-and-match heading/body/accent fonts freely, apply one of
  seven curated combinations, or compare up to three combinations side by side
  in real typefaces. A selection writes `--font-heading` / `--font-body` /
  `--font-accent` CSS custom properties onto `<html>` and persists them to
  `localStorage`, so **every page — including all four concepts — updates
  instantly with zero component changes**, because nothing reads a hardcoded
  font-family; everything reads `font-heading` / `font-body` / `font-accent`
  Tailwind utilities backed by those variables.
- **`/concepts/editorial`, `/concepts/bold-grid`, `/concepts/modern-luxury`,
  `/concepts/minimal-performance`** — four distinct homepage layouts (magazine
  cinematic, dense e-commerce grid, dark luxury-automotive, minimal
  spec-forward dashboard) built from the same shared demo inventory data, for
  evaluating layout/imagery/typography independently of copy or content.

## Demo data

[`src/data/demoMotorcycles.ts`](src/data/demoMotorcycles.ts) is the single
source of truth for the ten placeholder motorcycles used across every concept
and the Font Lab. Names, prices, and specs are invented for evaluation
purposes; every `imageUrl` is a real, individually verified Unsplash photo
(Unsplash License — free for commercial use). In production, John's admin
dashboard would write real photo URLs into this same `imageUrl` field; no
layout code assumes a fixed aspect ratio or a pre-cropped source, since every
consumer crops via CSS `object-fit`, not by requesting a specific size.

`src/lib/image.ts` builds responsive `srcset`s from that base URL; components
never hardcode a `?w=` size.

## Notable implementation decisions

- **Tailwind v4, CSS-first config** — theme tokens (brand color, font
  variables) live in `@theme` inside [`src/index.css`](src/index.css); there's
  no `tailwind.config.js`.
- **Typography propagation is CSS variables, not React props/context
  drilling** — a font change in the Font Lab needs to reach four independently
  laid-out pages with zero per-component wiring, so the source of truth is
  three custom properties on the document root, read via Tailwind utility
  classes everywhere.
- **Background-image hero sections use `isolate`** — any section that layers
  a full-bleed image behind content with `-z-10` needs to establish its own
  CSS stacking context (`position: relative` alone does **not**, only a
  non-`auto` `z-index` or `isolation: isolate` does). Without it, the negative
  z-index escapes to the page's root stacking context and paints *underneath*
  the nearest ancestor's own opaque background — which on a dark page reads as
  a slightly-too-dark hero, and on a light page reads as a **fully blank
  hero**. All three concepts with this pattern (`ConceptEditorial`,
  `ConceptBoldGrid`, `ConceptModernLuxury`) carry `isolate` on the hero
  `<section>` for exactly this reason — don't remove it.
