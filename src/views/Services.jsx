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
      { name: "Adult's Cuts", price: "Starting at $35" },
      { name: "Clipper Cuts (No Fuss)", price: "$25" },
      { name: "Kid's Cuts", price: "$20" },
      { name: "Updo", price: "$65" },
      { name: "Style", price: "Starting at $25" },
      { name: "Platinum Shampoo", price: "$23" },
      { name: "Nourish Shampoo", price: "$21" },
      { name: "Extensions", price: "upon consultation" },
    ],
  },
  {
    title: "Color and Treatments",
    image: colorImage,
    rows: [
      { name: "Color Highlights", price: "$130" },
      { name: "Highlights Touchup", price: "$110" },
      { name: "Color", price: "Starting at $90" },
      { name: "Color Correction", price: "$85" },
      { name: "Color Touchup", price: "$70" },
      { name: "Perm Piggy Back", price: "$120" },
      { name: "Perm Spiral", price: "$110" },
      { name: "Perm", price: "Starting at $80" },
    ],
  },
  {
    title: "Hair Removal",
    image: hairRemovalImage,
    rows: [
      { name: "Back and/or Chest", price: "upon consultation" },
      { name: "Legs", price: "$80" },
      { name: "Brows + Lip + Chin", price: "$30" },
      { name: "Underarms", price: "$25" },
      { name: "Brows", price: "$15" },
      { name: "Chin", price: "$12" },
      { name: "Lip", price: "$10" },
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
      <div className="home-card home-card--static">
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
