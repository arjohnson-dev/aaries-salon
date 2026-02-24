import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "site-nav__link site-nav__link--active" : "site-nav__link";

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
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={getNavLinkClass}>
            Services
          </NavLink>
          <NavLink to="/meet-the-team" className={getNavLinkClass}>
            Meet the Team
          </NavLink>
          <NavLink to="/contact-us" className={getNavLinkClass}>
            CONTACT
          </NavLink>

          <a
            href="https://www.fresha.com/a/aaries-styles-salon-ypsilanti-1295-east-michigan-avenue-a9dbbbu0/booking?menu=true&cartId=9a138cd1-4e3d-40c8-9df9-3e078289594e"
            className="site-nav__cta"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
