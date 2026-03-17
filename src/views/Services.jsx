import servicesImage from "../assets/aaries-services.jpg";
import hairImage from "../assets/aaries-wash.jpg";
import colorImage from "../assets/color.jpeg";
import hairRemovalImage from "../assets/eyebrows.jpeg";
import massageImage from "../assets/massage.jpg";

const serviceSections = [
  {
    title: "Hair",
    image: hairImage,
    rows: [
      { name: "Adult's Cuts", price: "starting at $40" },
      { name: "Clipper Cuts (No Fuss)", price: "$30" },
      { name: "Kid's Cuts", price: "$25" },
      { name: "Formal Updo", price: "$75" },
      { name: "Wash and Style", price: "starting at $25" },
      { name: "Extensions", price: "upon consultation" },
    ],
  },
  {
    title: "Color and Treatments",
    image: colorImage,
    rows: [
      { name: "Full Bleach", price: "starting at $130" },
      { name: "Bleach Touch-Up", price: "starting at $90" },
      { name: "Highlights", price: "starting at $100" },
      { name: "Highlights — Top Only", price: "starting at $80" },
      { name: "Full Color", price: "starting at $95" },
      { name: "Full Color (pre-lightened)", price: "starting at $60" },
      { name: "Additional Colors", price: "starting at $20" },
      { name: "Color Correction", price: "upon consultation" },
    ],
  },
  {
    title: "Esthetics",
    image: hairRemovalImage,
    rows: [
      { name: "Lash Extensions —Full Set", price: "starting at $110" },
      { name: "Lash Extensions —Fill", price: "starting at $60" },
      { name: "Lash Extensions —Express Fill", price: "starting at $30" },
      { name: "Lash Extensions —Removal", price: "starting at $30" },
      { name: "Lash Lift", price: "$70" },
      { name: "Lash Tint", price: "$20" },
      { name: "Brow Tint", price: "$20" },
      { name: "Facial", price: "starting at $70" },
      { name: "Paraffin Wax", price: "starting at $15" },
      { name: "Hair Removal", price: "starting at $10" },
    ],
  },
  {
    title: "Massage",
    image: massageImage,
    rows: [
      { name: "Swedish Massage", price: "$80" },
      { name: "Deep Tissue", price: "$80" },
    ],
  },
];

function Services() {
  return (
    <section className="services-page" aria-label="Services">
      <div className="home-card home-card--static services-hero">
        <img src={servicesImage} alt="Services" className="home-card__media" />
        <span className="home-card__label home-card__label--feature">
          Services
        </span>
      </div>

      <div className="services-cards">
        {serviceSections.map((section) => (
          <article key={section.title} className="service-card">
            <img
              src={section.image}
              alt=""
              className="service-card__media"
              aria-hidden="true"
            />
            <div className="service-card__overlay" aria-hidden="true" />

            <div className="service-card__content">
              <h2 className="service-card__title">{section.title}</h2>

              <dl className="service-card__list">
                {section.rows.map((row) => (
                  <div key={row.name} className="service-card__row">
                    <dt>{row.name}</dt>
                    <dd>{row.price}</dd>
                  </div>
                ))}
              </dl>

              {section.note ? (
                <p className="service-card__note">{section.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <a
        className="services-book-btn"
        href="https://www.fresha.com/a/aaries-styles-salon-ypsilanti-1295-east-michigan-avenue-a9dbbbu0/booking?menu=true&cartId=9a138cd1-4e3d-40c8-9df9-3e078289594e"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book an Appointment
      </a>
    </section>
  );
}

export default Services;
