import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "site-nav__link site-nav__link--active" : "site-nav__link";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__bar">
          <NavLink to="/" end className="site-brand">
            Aarie Styles
          </NavLink>

          <button
            type="button"
            className="site-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          id="site-navigation"
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end className={getNavLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className={getNavLinkClass} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/events" className={getNavLinkClass} onClick={closeMenu}>
            Events
          </NavLink>
          <NavLink
            to="/meet-the-team"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Meet the Team
          </NavLink>
          <NavLink
            to="/contact-us"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            CONTACT
          </NavLink>

          <a
            href="https://www.fresha.com/a/aaries-styles-salon-ypsilanti-1295-east-michigan-avenue-a9dbbbu0/booking?menu=true&cartId=9a138cd1-4e3d-40c8-9df9-3e078289594e"
            className="site-nav__cta"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Book an Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
