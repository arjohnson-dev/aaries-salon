import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length < 4) {
    return digits;
  }

  if (digits.length < 7) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function ContactUs() {
  const [state, handleSubmit] = useForm("xpqyabga");
  const [phone, setPhone] = useState("");
  const isSending = state.submitting;

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
        {state.succeeded ? (
          <p className="contact-form__status contact-form__status--success">
            Message sent. We will be in touch soon.
          </p>
        ) : null}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your Name (Required)</label>
          <input id="contact-name" name="name" type="text" required />
          <ValidationError
            className="contact-form__status contact-form__status--error"
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <label htmlFor="contact-email">Your Email (Required)</label>
          <input id="contact-email" name="email" type="email" required />
          <ValidationError
            className="contact-form__status contact-form__status--error"
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <label htmlFor="contact-phone">Phone (Required)</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={14}
            placeholder="(555) 555-5555"
            value={phone}
            onChange={(event) => setPhone(formatPhoneNumber(event.target.value))}
            required
          />
          <ValidationError
            className="contact-form__status contact-form__status--error"
            prefix="Phone"
            field="phone"
            errors={state.errors}
          />

          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" />
          <ValidationError
            className="contact-form__status contact-form__status--error"
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea id="contact-message" name="message" rows="8" />
          <ValidationError
            className="contact-form__status contact-form__status--error"
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>

          <ValidationError
            className="contact-form__status contact-form__status--error"
            errors={state.errors}
          />
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
