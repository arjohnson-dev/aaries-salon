const EXPECTED_HEADERS = [
  "title",
  "date",
  "starttime",
  "endtime",
  "allday",
  "description",
  "location",
  "category",
  "imageurl",
];

function normalizeHeader(value) {
  return String(value ?? "").trim().toLowerCase();
}

function isTruthy(value) {
  return ["true", "1", "yes", "y"].includes(
    String(value ?? "").trim().toLowerCase(),
  );
}

function parseDateParts(value) {
  const raw = String(value ?? "").trim();

  if (!raw) {
    return null;
  }

  const isoMatch = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);

  if (isoMatch) {
    return {
      year: Number(isoMatch[1]),
      month: Number(isoMatch[2]) - 1,
      day: Number(isoMatch[3]),
    };
  }

  const usMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (usMatch) {
    return {
      year: Number(usMatch[3]),
      month: Number(usMatch[1]) - 1,
      day: Number(usMatch[2]),
    };
  }

  const parsed = new Date(raw);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return {
    year: parsed.getFullYear(),
    month: parsed.getMonth(),
    day: parsed.getDate(),
  };
}

function parseTimeToMinutes(value) {
  const raw = String(value ?? "").trim();

  if (!raw) {
    return null;
  }

  const match = raw.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/i);

  if (!match) {
    return null;
  }

  let hours = Number(match[1]);
  const minutes = Number(match[2] ?? "0");
  const meridiem = match[3]?.toLowerCase();

  if (minutes > 59 || hours > 24) {
    return null;
  }

  if (meridiem) {
    if (hours === 12) {
      hours = 0;
    }

    if (meridiem === "pm") {
      hours += 12;
    }
  }

  if (hours === 24 && minutes > 0) {
    return null;
  }

  return hours * 60 + minutes;
}

function createDateTime(dateValue, timeValue, options = {}) {
  const dateParts = parseDateParts(dateValue);

  if (!dateParts) {
    return null;
  }

  const date = new Date(
    dateParts.year,
    dateParts.month,
    dateParts.day,
    0,
    0,
    0,
    0,
  );

  if (options.allDay) {
    if (options.endOfDay) {
      date.setHours(23, 59, 59, 999);
    }

    return date;
  }

  const timeInMinutes = parseTimeToMinutes(timeValue);

  if (timeInMinutes == null) {
    if (options.endOfDay) {
      date.setHours(23, 59, 59, 999);
    }

    return date;
  }

  date.setHours(
    Math.floor(timeInMinutes / 60),
    timeInMinutes % 60,
    options.endOfDay ? 59 : 0,
    options.endOfDay ? 999 : 0,
  );

  return date;
}

function normalizeRow(headers, row, index) {
  const item = headers.reduce((event, header, headerIndex) => {
    event[header] = String(row[headerIndex] ?? "").trim();
    return event;
  }, {});

  const allDay = isTruthy(item.allday);
  const startAt = createDateTime(item.date, item.starttime, { allDay });
  let endAt = createDateTime(item.date, item.endtime, { allDay, endOfDay: allDay });

  if (!startAt) {
    return null;
  }

  if (!endAt || endAt < startAt) {
    endAt = allDay ? createDateTime(item.date, item.endtime, { allDay, endOfDay: true }) : startAt;
  }

  return {
    id: `${item.title || "event"}-${item.date || index}-${index}`,
    title: item.title || "Upcoming Event",
    date: item.date,
    startTime: item.starttime,
    endTime: item.endtime,
    allDay,
    description: item.description,
    location: item.location,
    category: item.category,
    imageUrl: item.imageurl,
    startAt,
    endAt,
  };
}

function extractRows(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return [];
  }

  const firstRowHeaders = values[0].map(normalizeHeader);
  const headerRowLooksValid = EXPECTED_HEADERS.every((header) =>
    firstRowHeaders.includes(header),
  );

  const headers = headerRowLooksValid ? firstRowHeaders : EXPECTED_HEADERS;
  const rows = headerRowLooksValid ? values.slice(1) : values;

  return rows
    .map((row, index) => normalizeRow(headers, row, index))
    .filter(Boolean);
}

export function getGoogleSheetsConfig() {
  return {
    apiKey: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY?.trim(),
    spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID?.trim(),
    range: import.meta.env.VITE_GOOGLE_SHEETS_RANGE?.trim(),
  };
}

export async function fetchEventsFromGoogleSheets(signal) {
  const { apiKey, spreadsheetId, range } = getGoogleSheetsConfig();

  if (!apiKey || !spreadsheetId || !range) {
    throw new Error("Missing Google Sheets configuration.");
  }

  const params = new URLSearchParams({
    key: apiKey,
    majorDimension: "ROWS",
  });

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?${params.toString()}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Google Sheets request failed with status ${response.status}.`);
  }

  const data = await response.json();
  return extractRows(data.values);
}

export function selectEventsForDisplay(events, now = new Date()) {
  return [...events]
    .sort((left, right) => left.startAt - right.startAt)
    .map((event) => ({ ...event, isPast: event.endAt < now }));
}
