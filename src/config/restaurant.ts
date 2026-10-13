// Zentrale Konfiguration für ANESIS SOLTAU.
// Leere Strings ("") sind Platzhalter – die zugehörigen Elemente werden dann ausgeblendet
// bzw. fallen auf eine sinnvolle Alternative zurück (z. B. Anruf statt Reservierungslink).
import brandHero from "@/assets/anesis-hero.jpg";
import saal from "@/assets/interior-saal.png";
import lounge from "@/assets/anesis-lounge.png";
import bar from "@/assets/interior-bar.png";

export const restaurant = {
  name: "ANESIS SOLTAU",
  wordmark: { primary: "ANESIS", secondary: "SOLTAU" },
  siteUrl: "https://anesis-soltau.de", // PLATZHALTER: endgültige Domain eintragen
  address: {
    street: "Wilhelmstraße 4",
    zip: "29614",
    city: "Soltau",
    country: "DE",
  },
  phone: { display: "+49 5191 18700", href: "tel:+49519118700" },
  email: "restaurantanesis26@gmail.com",
  reservationUrl: "", // PLATZHALTER: z. B. Link eines Reservierungssystems
  googleReviewsUrl: "", // PLATZHALTER: Link zu den Google-Bewertungen
  instagramUrl: "", // PLATZHALTER: Instagram-Profil
  menuPdfUrl: "/downloads/anesis-speisekarte.pdf",
  // Öffnungszeiten, Wochentag 0 = Sonntag … 6 = Samstag
  hours: [
    { day: 1, label: "Montag", slots: [["11:30", "14:30"], ["17:00", "22:00"]] },
    { day: 2, label: "Dienstag", slots: [] },
    { day: 3, label: "Mittwoch", slots: [["11:30", "14:30"], ["17:00", "22:00"]] },
    { day: 4, label: "Donnerstag", slots: [["11:30", "14:30"], ["17:00", "22:00"]] },
    { day: 5, label: "Freitag", slots: [["11:30", "14:30"], ["17:00", "22:00"]] },
    { day: 6, label: "Samstag", slots: [["17:00", "22:00"]] },
    { day: 0, label: "Sonntag", slots: [["17:00", "22:00"]] },
  ] as { day: number; label: string; slots: [string, string][] }[],
  payments: ["Barzahlung", "Visa", "Mastercard", "Girocard", "Kontaktlos", "Apple Pay"],
  // Rechtliche Angaben – PLATZHALTER, bitte vor Veröffentlichung ausfüllen
  legal: {
    owner: "[Inhaber/in bzw. Firmenname]",
    legalForm: "[Rechtsform]",
    representatives: "[Vertretungsberechtigte Person(en)]",
    registerCourt: "[Registergericht]",
    registerNumber: "[Registernummer]",
    vatId: "[USt-IdNr. gemäß § 27a UStG]",
  },
  images: {
    hero: {
      src: brandHero,
      alt: "ANESIS Griechisches Restaurant – Schriftzug auf warmer Wand mit Olivenzweigen",
    },
    about: { src: lounge, alt: "Renovierte Restaurantlounge mit Sonnenuntergangsmural und gedeckten Tischen" },
    gallery: [
      { src: saal, alt: "Gastraum mit Säulen, Rundbögen und Meeresmotiven" },
      { src: lounge, alt: "Renovierte Lounge mit Wandbild und gemütlicher Sitzbank" },
      { src: bar, alt: "Bar mit Kaminfeuer, Statuen und Kerzenlicht" },
    ],
  },
};

export const reservation = restaurant.reservationUrl
  ? { href: restaurant.reservationUrl, label: "Tisch reservieren", external: true }
  : { href: restaurant.phone.href, label: "Telefonisch reservieren", external: false };

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${restaurant.address.street}, ${restaurant.address.zip} ${restaurant.address.city}`,
)}`;
