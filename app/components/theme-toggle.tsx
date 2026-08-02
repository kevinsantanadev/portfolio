"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle({
  darkLabel,
  lightLabel,
}: {
  darkLabel: string;
  lightLabel: string;
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const activeTheme =
        document.documentElement.dataset.theme === "light" ? "light" : "dark";
      setTheme(activeTheme);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = nextTheme === "light" ? lightLabel : darkLabel;

  function toggleTheme() {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("kevin-portfolio-theme", nextTheme);
  }

  return (
    <button
      aria-label={label}
      aria-pressed={theme === "light"}
      className="theme-toggle"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
        <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24">
          <path d="M20.2 15.5A8.4 8.4 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z" />
        </svg>
      </span>
    </button>
  );
}
