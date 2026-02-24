import HeroCarousel from "../components/HeroCarousel";

function ContactUs() {
  return (
    <section className="contact-page" aria-label="Contact Us">
      <HeroCarousel className="contact-page__hero" intervalMs={5000} />

      <div className="contact-page__intro">
        <h1 className="contact-page__title">Contact Us</h1>
        <div className="contact-page__rule" aria-hidden="true" />
        <p className="contact-page__lead">
          Please call us if you would like to book an appointment. We currently
          do not accept email appointment requests.
        </p>
        <p className="contact-page__lead contact-page__lead--phone">
          Phone: <a href="tel:+17344878669">(734) 487-8669</a>
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form">
          <label htmlFor="contact-name">Your Name (Required)</label>
          <input id="contact-name" name="name" type="text" required />

          <label htmlFor="contact-email">Your Email (Required)</label>
          <input id="contact-email" name="email" type="email" required />

          <label htmlFor="contact-phone">Phone (Required)</label>
          <input id="contact-phone" name="phone" type="tel" required />

          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" />

          <label htmlFor="contact-message">Your Message</label>
          <textarea id="contact-message" name="message" rows="8" />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
