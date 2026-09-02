# UG Bikes Arena — Typography System & Demo Imagery Spec

## Overview

This document defines two related requirements for the UG Bikes Arena website project:

1. A dedicated **Font Exploration System** (`/fonts` page) for testing and selecting typography before committing to a final design direction.
2. A **Demo Motorcycle Imagery** strategy for the four website design concepts, using realistic remote photography as placeholders until real inventory photos are available.

Typography is treated as a core pillar of brand identity for UG Bikes Arena — not a detail layered on top of the black + red color scheme. The final personality of the site should emerge from the combination of photography, typography, spacing, layout, red accent treatment, buttons, cards, and navigation working together.

---

## 1. Font Exploration System

### 1.1 Page

Create a dedicated page at:

```
/fonts
```

This page — the **Font Lab** — allows live experimentation with different font combinations using realistic UG Bikes Arena content, so typography can be judged in context before a final design is chosen.

### 1.2 Font Lab Controls

The page must provide the following selectable controls:

| Control | Purpose |
|---|---|
| **Heading Font** | Choose from several suitable premium display/heading fonts |
| **Body Font** | Choose from several highly readable body-copy fonts |
| **Accent / Numbers Font** (optional, third font) | Used specifically for: prices, motorcycle specifications, small labels, performance numbers |

**Requirement:** Selecting a font from any control must update the live preview **instantly, with no page refresh**.

### 1.3 Curated Font Combinations

Do not allow (or at least don't rely on) random/arbitrary font pairing. Provide several **curated, purposeful** combinations, for example:

- **Modern Luxury**
- **Automotive Premium**
- **Sport / Performance**
- **Editorial**
- **Minimal**
- **Bold / Industrial**
- **Modern African / Startup**

Each curated combination must be intentional — heading, body, and (optional) accent fonts chosen to reinforce a specific personality, not thrown together arbitrarily.

### 1.4 What Each Combination Must Demonstrate

Every font combination preview must render **realistic UG Bikes Arena content** across all of the following elements, so the typography can be judged as it will actually appear on the live site:

- Hero heading
- Navigation
- Body text
- Motorcycle name
- Price
- Specifications
- Buttons
- Labels

### 1.5 Font Comparison View

In addition to the single-combination preview, provide a **comparison area** where multiple combinations can be viewed **simultaneously**, side by side. For example:

```
Combination A          Combination B          Combination C
Heading: [Font]        Heading: [Font]        Heading: [Font]
Body: [Font]           Body: [Font]            Body: [Font]
```

From this comparison view, allow a combination to be selected and marked as:

> **"Use this typography"**

### 1.6 Global Application (Design Token Requirement)

The selected typography must be easy to apply **globally** across whichever of the four website concepts is eventually chosen.

- Typography must **not** be hardcoded or locked into individual components.
- Use **CSS variables / design tokens** (or an equivalent centralized system) so that changing the selected heading/body/accent fonts propagates consistently across the entire design — every page, component, and concept — from a single source of truth.

### 1.7 Brand Identity Principle

Typography is one of several factors — alongside photography, spacing, layout, red accent treatment, buttons, cards, and navigation — that together define UG Bikes Arena's visual personality. Black + red alone should not be treated as the brand identity.

---

## 2. Demo Motorcycle Imagery

### 2.1 Requirement

For the four design concepts, motorcycle photography must **not** be manually supplied. Instead, use high-quality **remote imagery** (Unsplash preferred, or another legally usable image source) to make the demo concepts feel realistic enough to properly evaluate the visual design.

### 2.2 Image Quality Bar

Images selected must be:

- High resolution
- Professional and cinematic in style
- Clearly depict motorcycles
- Suitable for premium automotive / motorcycle branding
- Visually diverse enough to distinguish the four layouts from one another
- Appropriate for both desktop and mobile crops

Use **different motorcycle images across the four concepts** where appropriate, so the concepts don't feel identical to one another.

### 2.3 Critical Distinction — Demo vs. Production

- These images are **demo/placeholder only**. They must never be presented or treated as actual motorcycles for sale.
- The **production system** must eventually let **John** upload real motorcycle photographs through the **admin dashboard**.
- The motorcycle database schema must store **image URLs/references separately** from UI components, so demo images can later be swapped out entirely for real inventory photos without touching layout code.
- Do **not** design the UI around fixed image dimensions/aspect ratios that would make John's future real photos difficult to use — build for variability.

### 2.4 Technical Image Handling

- Responsive image handling throughout
- Appropriate `object-fit` / `object-position` behavior so crops work across arbitrary source image dimensions
- Lazy loading where appropriate
- Optimized image rendering (e.g. appropriately sized/served images, not oversized originals)

### 2.5 Demo Data Structure

- Prefer **Unsplash** for prototype imagery where suitable.
- Keep all remote image URLs **centralized in demo data** — do not scatter image URLs throughout individual components.
- Create a clear, centralized demo-data structure, e.g.:

```js
// demoMotorcycles
[
  {
    id: "...",
    name: "...",
    price: "...",
    specs: { ... },
    imageUrl: "...", // from Unsplash or other legal source
    ...
  },
  ...
]
```

This structure should make it trivial to later swap every demo motorcycle (and its imagery) for real inventory data.

### 2.6 Licensing Fallback

If a chosen image source has usage restrictions that make a particular image unsuitable for commercial use, source an appropriate alternative from another legally usable image provider instead.

### 2.7 Production Reminder

The **final production system** must rely entirely on images uploaded or supplied by UG Bikes Arena (via John's admin dashboard) — demo imagery is strictly a prototyping aid and must not persist into production.

---

## Summary Checklist

- [ ] `/fonts` page built with live, no-refresh preview
- [ ] Heading / Body / Accent font selectors implemented
- [ ] Curated font combinations (Modern Luxury, Automotive Premium, Sport/Performance, Editorial, Minimal, Bold/Industrial, Modern African/Startup) defined with intentional rationale
- [ ] Each combination demonstrates hero heading, nav, body text, motorcycle name, price, specs, buttons, labels using realistic UG Bikes Arena content
- [ ] Side-by-side comparison view (Combination A/B/C...) with "Use this typography" selection
- [ ] Typography implemented via CSS variables/design tokens, not hardcoded per-component
- [ ] Selected typography can be applied globally to any of the four chosen design concepts
- [ ] Demo motorcycle imagery sourced from Unsplash (or other legal source), high-res, cinematic, diverse across concepts
- [ ] Demo images clearly separated from production data model (`demoMotorcycles` structure, centralized URLs)
- [ ] Responsive image handling: `object-fit`/`object-position`, lazy loading, optimized rendering
- [ ] UI not locked to fixed image dimensions — ready for John's real photos
- [ ] No commercially-restricted images used; alternates sourced if needed
- [ ] Production system designed to fully replace demo imagery with John's uploaded photos via admin dashboard
