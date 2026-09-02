/**
 * Responsive Unsplash URL helpers.
 *
 * Every demo image is stored in demoMotorcycles.ts as a bare URL with no
 * size/crop params. We request appropriately-sized rectangular sources here
 * (width only — no server-side crop), and let CSS `object-fit` do the actual
 * cropping to whatever aspect ratio a given layout needs. That keeps the UI
 * free to change crop/aspect per concept without re-fetching differently
 * shaped sources, and means a real (arbitrarily-sized) inventory photo can
 * drop into the same `imageUrl` field later with no component changes.
 */

const DEFAULT_WIDTHS = [480, 768, 1080, 1440, 1920];

function withParams(baseUrl: string, width: number, quality: number): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}auto=format&fit=crop&w=${width}&q=${quality}`;
}

export function buildSrcSet(baseUrl: string, widths: number[] = DEFAULT_WIDTHS, quality = 75): string {
  return widths.map((w) => `${withParams(baseUrl, w, quality)} ${w}w`).join(', ');
}

export function buildFallbackSrc(baseUrl: string, widths: number[] = DEFAULT_WIDTHS, quality = 75): string {
  const fallbackWidth = widths[Math.min(1, widths.length - 1)] ?? widths[0];
  return withParams(baseUrl, fallbackWidth, quality);
}
