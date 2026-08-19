import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { primaryNavigation } from "../../data/navigation";

import "./Header.css";

function Header({ onMenuOpen }) {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link
          to="/"
          className="site-header__brand"
          aria-label="Mithilesh Yadav home"
        >
          <span className="site-header__brand-main">MITHILESH</span>

          <span className="site-header__brand-sub">frontend developer</span>
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />

          <button
            type="button"
            className="site-header__menu-button"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
