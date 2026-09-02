import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  accentFonts,
  bodyFonts,
  headingFonts,
  fontCombinations,
  findFont,
  DEFAULT_COMBINATION_ID,
  type FontCombination,
  type FontOption,
} from '../data/fontCombinations';
import { ensureFontsLoaded } from '../lib/fonts';

const STORAGE_KEY = 'ugba.typography.v1';

interface StoredState {
  headingId: string;
  bodyId: string;
  accentId: string;
}

interface TypographyContextValue {
  headingId: string;
  bodyId: string;
  accentId: string;
  headingFont: FontOption;
  bodyFont: FontOption;
  accentFont: FontOption;
  /** The curated combination that exactly matches the current selection, if any. */
  activeCombination: FontCombination | null;
  setHeadingId: (id: string) => void;
  setBodyId: (id: string) => void;
  setAccentId: (id: string) => void;
  applyCombination: (comboId: string) => void;
}

const defaultCombo = fontCombinations.find((c) => c.id === DEFAULT_COMBINATION_ID) ?? fontCombinations[0];

function loadInitialState(): StoredState {
  if (typeof window === 'undefined') {
    return { headingId: defaultCombo.headingId, bodyId: defaultCombo.bodyId, accentId: defaultCombo.accentId };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('no stored typography');
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    if (!parsed.headingId || !parsed.bodyId || !parsed.accentId) throw new Error('incomplete stored typography');
    return { headingId: parsed.headingId, bodyId: parsed.bodyId, accentId: parsed.accentId };
  } catch {
    return { headingId: defaultCombo.headingId, bodyId: defaultCombo.bodyId, accentId: defaultCombo.accentId };
  }
}

const TypographyContext = createContext<TypographyContextValue | null>(null);

function applyToDocument(heading: FontOption, body: FontOption, accent: FontOption) {
  const root = document.documentElement.style;
  root.setProperty('--font-heading', `"${heading.family}", ${heading.fallback}`);
  root.setProperty('--font-body', `"${body.family}", ${body.fallback}`);
  root.setProperty('--font-accent', `"${accent.family}", ${accent.fallback}`);
}

export function TypographyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(() => loadInitialState());

  const headingFont = useMemo(() => findFont(headingFonts, state.headingId), [state.headingId]);
  const bodyFont = useMemo(() => findFont(bodyFonts, state.bodyId), [state.bodyId]);
  const accentFont = useMemo(() => findFont(accentFonts, state.accentId), [state.accentId]);

  const activeCombination = useMemo(
    () =>
      fontCombinations.find(
        (c) => c.headingId === state.headingId && c.bodyId === state.bodyId && c.accentId === state.accentId,
      ) ?? null,
    [state],
  );

  useEffect(() => {
    ensureFontsLoaded([headingFont, bodyFont, accentFont]);
    applyToDocument(headingFont, bodyFont, accentFont);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable (private mode, etc.) — selection still works for this session.
    }
  }, [state, headingFont, bodyFont, accentFont]);

  const setHeadingId = useCallback((id: string) => setState((s) => ({ ...s, headingId: id })), []);
  const setBodyId = useCallback((id: string) => setState((s) => ({ ...s, bodyId: id })), []);
  const setAccentId = useCallback((id: string) => setState((s) => ({ ...s, accentId: id })), []);
  const applyCombination = useCallback((comboId: string) => {
    const combo = fontCombinations.find((c) => c.id === comboId);
    if (!combo) return;
    setState({ headingId: combo.headingId, bodyId: combo.bodyId, accentId: combo.accentId });
  }, []);

  const value: TypographyContextValue = {
    headingId: state.headingId,
    bodyId: state.bodyId,
    accentId: state.accentId,
    headingFont,
    bodyFont,
    accentFont,
    activeCombination,
    setHeadingId,
    setBodyId,
    setAccentId,
    applyCombination,
  };

  return <TypographyContext.Provider value={value}>{children}</TypographyContext.Provider>;
}

export function useTypography(): TypographyContextValue {
  const ctx = useContext(TypographyContext);
  if (!ctx) throw new Error('useTypography must be used within a TypographyProvider');
  return ctx;
}
