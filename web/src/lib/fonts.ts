import type { FontOption } from '../data/fontCombinations';

/**
 * Dynamic Google Fonts loader.
 *
 * Keeps a single <link> tag in <head> whose href is the union of every font
 * family/weight requested so far in this session. We only ever add to that
 * set (never remove), so switching back to a previously-used font is instant
 * and never re-triggers a flash of unstyled text. Concept/home pages only
 * ever request the currently-active 3 fonts; the Font Lab page requests every
 * curated font up front so its side-by-side comparison view can render real
 * type for all combinations simultaneously.
 */

const loadedWeights = new Map<string, Set<number>>();
let linkEl: HTMLLinkElement | null = null;

function rebuildHref(): string {
  const families = Array.from(loadedWeights.entries())
    .map(([family, weights]) => {
      const sorted = Array.from(weights).sort((a, b) => a - b).join(';');
      return `family=${encodeURIComponent(family)}:wght@${sorted}`;
    })
    .join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

export function ensureFontsLoaded(options: FontOption[]): void {
  let changed = false;

  for (const { family, weights } of options) {
    const existing = loadedWeights.get(family);
    if (!existing) {
      loadedWeights.set(family, new Set(weights));
      changed = true;
      continue;
    }
    for (const w of weights) {
      if (!existing.has(w)) {
        existing.add(w);
        changed = true;
      }
    }
  }

  if (!changed && linkEl) return;
  if (loadedWeights.size === 0) return;

  if (!linkEl) {
    linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.dataset.role = 'dynamic-google-fonts';
    document.head.appendChild(linkEl);
  }
  linkEl.href = rebuildHref();
}
