const loveIsLoveBadge = "/love-is-love.jpg";

const businessHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "10-8" },
  { day: "Wednesday", hours: "10-6" },
  { day: "Thursday", hours: "12-7" },
  { day: "Friday", hours: "9-5" },
  { day: "Saturday", hours: "9-2" },
  { day: "Sunday", hours: "Closed" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__column site-footer__column--map">
            <div className="site-footer__map-wrap">
              <iframe
                className="site-footer__map"
                title="Aarie Styles Salon location map"
                src="https://www.google.com/maps?q=1295+E.+Michigan+Ave,+Ypsilanti,+MI+48198&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="site-footer__column site-footer__column--contact">
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

            <div className="site-footer__contact-details">
              <div className="site-footer__contact-block">
                <p className="site-footer__label">Phone</p>
                <a className="site-footer__contact-link" href="tel:+17344878669">
                  (734) 487-8669
                </a>
              </div>

              <div className="site-footer__contact-block">
                <p className="site-footer__label">Address</p>
                <address className="site-footer__address">
                  <span>1295 E. Michigan Ave</span>
                  <span>Ypsilanti, MI 48198</span>
                </address>
              </div>
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

          <div className="site-footer__column site-footer__column--hours">
            <h2 className="site-footer__heading">Hours</h2>
            <div className="site-footer__hours-list">
              {businessHours.map((entry) => (
                <p key={entry.day} className="site-footer__hours-row">
                  <span>{entry.day}</span>
                  <span>{entry.hours}</span>
                </p>
              ))}
            </div>

            <img
              src={loveIsLoveBadge}
              alt="Love is Love badge"
              className="site-footer__allies-badge"
              loading="lazy"
            />
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
