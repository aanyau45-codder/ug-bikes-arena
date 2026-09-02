import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/fonts', label: 'Font Lab' },
  { to: '/concepts/editorial', label: 'Concept 1' },
  { to: '/concepts/bold-grid', label: 'Concept 2' },
  { to: '/concepts/modern-luxury', label: 'Concept 3' },
  { to: '/concepts/minimal-performance', label: 'Concept 4' },
];

/**
 * Small prototype navigator so this internal review build is easy to jump
 * around while evaluating concepts — not part of any concept's own design.
 *
 * Deliberately collapsed to a small corner toggle rather than an
 * always-expanded bar: an always-visible full-width fixed bar sat over the
 * bottom of real page content on shorter viewports (e.g. it covered the
 * last row of the homepage's concept cards). Collapsed-by-default in a
 * corner keeps its footprint tiny so it never competes with page content,
 * and it closes on route change so it never lingers open over a new page.
 */
export function DevNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const wasOpen = useRef(open);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  wasOpen.current = open;

  return (
    <div className="fixed right-3 bottom-3 z-[999]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {open && (
        <nav
          aria-label="Prototype navigator"
          className="mb-2 flex max-w-[min(90vw,20rem)] flex-wrap items-center justify-end gap-1 rounded-2xl border border-white/10 bg-black/85 p-2 text-xs text-white shadow-xl backdrop-blur"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1 whitespace-nowrap transition-colors ${
                  isActive ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close prototype navigator' : 'Open prototype navigator'}
        className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/85 text-white shadow-lg backdrop-blur transition-colors hover:bg-black"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  );
}
