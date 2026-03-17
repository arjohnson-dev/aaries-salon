import { useEffect, useMemo, useState } from "react";
import servicesImage from "../assets/aaries-services.jpg";
import {
  fetchEventsFromGoogleSheets,
  getGoogleSheetsConfig,
  selectEventsForDisplay,
} from "../lib/googleSheets";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "2-digit",
});

function formatEventTiming(event) {
  const dateLabel = dateFormatter.format(event.startAt);

  if (event.allDay) {
    return `${dateLabel} · All day`;
  }

  if (!event.startTime && !event.endTime) {
    return dateLabel;
  }

  const startLabel = timeFormatter.format(event.startAt);

  if (!event.endTime || event.endAt.getTime() === event.startAt.getTime()) {
    return `${dateLabel} · ${startLabel}`;
  }

  return `${dateLabel} · ${startLabel} - ${timeFormatter.format(event.endAt)}`;
}

function Events() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const config = useMemo(() => getGoogleSheetsConfig(), []);
  const isConfigured = Boolean(
    config.apiKey && config.spreadsheetId && config.range,
  );

  useEffect(() => {
    if (!isConfigured) {
      return undefined;
    }

    const controller = new AbortController();

    async function loadEvents() {
      setStatus("loading");
      setErrorMessage("");

      try {
        const sheetEvents = await fetchEventsFromGoogleSheets(controller.signal);
        setEvents(selectEventsForDisplay(sheetEvents));
        setStatus("success");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to load events right now.",
        );
        setStatus("error");
      }
    }

    loadEvents();

    return () => controller.abort();
  }, [config.apiKey, config.range, config.spreadsheetId, isConfigured]);

  return (
    <section className="services-page events-page" aria-label="Upcoming events">
      <div className="home-card home-card--static services-hero">
        <img src={servicesImage} alt="Upcoming events" className="home-card__media" />
        <span className="home-card__label home-card__label--feature">
          Upcoming Events
        </span>
      </div>

      {status === "loading" ? (
        <div className="events-empty" role="status">
          Loading events...
        </div>
      ) : null}

      {!isConfigured ? (
        <div className="events-empty">
          Add <code>VITE_GOOGLE_SHEETS_API_KEY</code>,{" "}
          <code>VITE_GOOGLE_SHEETS_SPREADSHEET_ID</code>, and{" "}
          <code>VITE_GOOGLE_SHEETS_RANGE</code> to your local env file to connect
          the events feed.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="events-empty">
          We couldn&apos;t load the events right now. {errorMessage}
        </div>
      ) : null}

      {status === "success" && events.length === 0 ? (
        <div className="events-empty">
          No events matched the current window yet. Add upcoming rows in the sheet
          and they&apos;ll appear here automatically.
        </div>
      ) : null}

      {status === "success" && events.length > 0 ? (
        <div className="services-cards">
          {events.map((event) => (
            <article key={event.id} className="service-card event-card">
              <img
                src={event.imageUrl || servicesImage}
                alt=""
                className="service-card__media"
                aria-hidden="true"
              />
              <div className="service-card__overlay" aria-hidden="true" />

              <div className="service-card__content event-card__content">
                <div className="event-card__header">
                  <div className="event-card__badges">
                    {event.isPast ? (
                      <span className="event-card__badge">Recently Ended</span>
                    ) : null}
                  </div>

                  <h2 className="service-card__title event-card__title">{event.title}</h2>

                  <p className="event-card__timing">{formatEventTiming(event)}</p>
                </div>

                {event.description ? (
                  <p className="event-card__description">{event.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default Events;
