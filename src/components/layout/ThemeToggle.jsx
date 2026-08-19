import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon">
        {isDark ? (
          <Sun size={17} strokeWidth={1.8} />
        ) : (
          <Moon size={17} strokeWidth={1.8} />
        )}
      </span>

      <span className="theme-toggle__label">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
