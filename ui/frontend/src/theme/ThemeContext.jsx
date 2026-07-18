import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const THEME_KEY = "joblication.theme";

export function readTheme() {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function applyTheme(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    const value = next === "dark" ? "dark" : "light";
    setThemeState(value);
    applyTheme(value);
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
