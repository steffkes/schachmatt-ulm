export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Schachmatt Ulm",
  description: "Feuerwehr-Treppenlauf im K.O.-System",
  startDate: "2026-02-01",
  endDate: "2026-02-01",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan.matheis@schachmatt-ulm.de",
    telephone: "+49 160 970 48 114",
  },
  location: {
    "@type": "Place",
    name: "Maritim Hotel Ulm",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Basteistraße 40",
      postalCode: "89073",
      addressLocality: "Ulm",
      addressRegion: "BW",
      addressCountry: "DE",
    },
  },
  image: ["https://www.schachmatt-ulm.de/og.jpg"],
};
export const formattedDate = new Date(event.startDate).toLocaleDateString(
  "de-DE",
  {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  },
);
