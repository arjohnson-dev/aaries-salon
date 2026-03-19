import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import salonImage from "../assets/shopfromback.jpg";
import servicesImage from "../assets/aaries-services.jpg";
import contactImage from "../assets/outside.jpg";

const eventsImage = "/event.jpg";

const routeCards = [
  {
    title: "Services",
    to: "/services",
    media: servicesImage,
    labelClass: "home-card__label--feature",
  },
  {
    title: "Events",
    to: "/events",
    media: eventsImage,
    labelClass: "home-card__label--feature",
  },
  {
    title: "Meet the Team",
    to: "/meet-the-team",
    media: salonImage,
    labelClass: "home-card__label--feature",
  },
  {
    title: "CONTACT",
    to: "/contact-us",
    media: contactImage,
    labelClass: "home-card__label--feature",
  },
];

function Home() {
  return (
    <section className="home-cards" aria-label="Site sections">
      <div className="home-card home-card--static home-hero">
        <HeroCarousel className="hero-carousel--fill" intervalMs={5000} />
        <div className="home-card__copy">
          <p>
            Aarie Styles Salon is a full-service hair salon serving the
            Ypsilanti and greater Ann Arbor area. At Aarie Styles Salon we
            believe in providing a comfortable environment for our clients to
            have you looking and feeling your best! Book online with us today!
          </p>
        </div>
      </div>

      {routeCards.map((card) => (
        <Link key={card.to} to={card.to} className="home-card home-card--route">
          <img
            src={card.media}
            alt={`${card.title} preview`}
            className="home-card__media"
          />
          <span
            className={`home-card__label ${card.labelClass ? card.labelClass : ""}`}
          >
            {card.title}
          </span>
        </Link>
      ))}
    </section>
  );
}

export default Home;
