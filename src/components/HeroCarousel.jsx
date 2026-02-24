import { useEffect, useState } from "react";
import chairsImage from "../assets/chairs.jpeg";
import colorOneImage from "../assets/color_1.jpg";
import colorImage from "../assets/color.jpeg";
import hairImage from "../assets/hair.jpeg";
import salonTenImage from "../assets/Salon-10.jpg";

const carouselImages = [
  { src: chairsImage, alt: "Salon styling chairs" },
  { src: colorOneImage, alt: "Hair color service result" },
  { src: colorImage, alt: "Color treatment close-up" },
  { src: hairImage, alt: "Styled hair detail" },
  { src: salonTenImage, alt: "Salon interior with stations" },
];

function HeroCarousel({ className = "", intervalMs = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((current) =>
        current === carouselImages.length - 1 ? 0 : current + 1,
      );
    }, intervalMs);

    return () => clearInterval(slideTimer);
  }, [intervalMs]);

  return (
    <div
      className={`hero-carousel ${className}`}
      aria-label="Salon image carousel"
    >
      {carouselImages.map((image, index) => (
        <img
          key={image.alt}
          src={image.src}
          alt={index === currentSlide ? image.alt : ""}
          aria-hidden={index !== currentSlide}
          className={`hero-carousel__image ${
            index === currentSlide ? "hero-carousel__image--active" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default HeroCarousel;
