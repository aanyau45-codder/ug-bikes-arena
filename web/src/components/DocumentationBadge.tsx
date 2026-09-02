/**
 * Trust signal shown on bikes with logbook/ownership paperwork ready to
 * transfer. Deliberately uses green rather than the brand red — red is
 * reserved for price/sale/CTA emphasis elsewhere on the page.
 */
export function DocumentationBadge({ available, className = '' }: { available: boolean; className?: string }) {
  if (!available) return null;
  return (
    <p className={`font-accent flex items-center gap-1.5 font-semibold text-emerald-600 ${className}`}>
      <span aria-hidden>✓</span>
      <span>Documents available</span>
    </p>
  );
}
