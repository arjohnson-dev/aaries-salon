function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__section">
            <h2 className="site-footer__heading">Contact</h2>
            <p className="site-footer__text">(734) 487-8669</p>
            <p className="site-footer__text">
              1295 E. Michigan Ave, Ypsilanti, MI 48198
            </p>
            <div className="site-footer__map-wrap">
              <iframe
                className="site-footer__map"
                title="Aarie Styles Salon location map"
                src="https://www.google.com/maps?q=1295+E.+Michigan+Ave,+Ypsilanti,+MI+48198&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="site-footer__directions"
              href="https://www.google.com/maps/dir/?api=1&destination=1295+E.+Michigan+Ave,+Ypsilanti,+MI+48198"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className="site-footer__section">
            <h2 className="site-footer__heading">Hours</h2>
            <p className="site-footer__text">Tuesday &amp; Thursday: 9a-8p</p>
            <p className="site-footer__text">Wednesday: 10a-6p</p>
            <p className="site-footer__text">Friday: 9a-5p</p>
            <p className="site-footer__text">Saturday: 9a-4p</p>
            <p className="site-footer__text">Sunday: Closed</p>
          </div>

          <div className="site-footer__section site-footer__section--social">
            <div
              className="site-footer__socials"
              aria-label="Social media links"
            >
              <a
                className="site-footer__social-link"
                href="https://www.instagram.com/aariestylessalon?igsh=NDdocDJvdHR0azRz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aarie Styles Salon on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" ry="4" />
                  <circle cx="12" cy="12" r="4.25" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                className="site-footer__social-link"
                href="https://www.facebook.com/AarieStylesSalonMI/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aarie Styles Salon on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.1 8.4h2.3V5.6h-2.7c-3 0-4.3 1.8-4.3 4.5v2.1H7v2.9h2.4v5.3h3.1v-5.3h2.8l.4-2.9h-3.2v-1.8c0-1.2.4-2 1.6-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} Aarie Styles Salon LLC. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
