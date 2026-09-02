import type { CSSProperties } from 'react';
import { buildFallbackSrc, buildSrcSet } from '../lib/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Passed straight through to the `sizes` attribute. */
  sizes?: string;
  objectPosition?: string;
  /** Hero/above-the-fold images should be priority-loaded, everything else lazy. */
  priority?: boolean;
  widths?: number[];
  /** Optional — most cards leave this to the parent's flex/grid height instead. */
  aspectRatio?: string;
  style?: CSSProperties;
}

/**
 * Renders a motorcycle (or any demo) photo with a responsive srcset, lazy
 * loading, and flexible object-fit cropping. Deliberately does not force a
 * fixed intrinsic size — the parent container controls shape, this just fills
 * it, so arbitrary real photo dimensions will work here unchanged later.
 */
export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = '100vw',
  objectPosition = 'center',
  priority = false,
  widths,
  aspectRatio,
  style,
}: ResponsiveImageProps) {
  return (
    <img
      src={buildFallbackSrc(src, widths)}
      srcSet={buildSrcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style,
      }}
    />
  );
}
