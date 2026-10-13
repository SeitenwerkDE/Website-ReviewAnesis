import { Link } from "@tanstack/react-router";
import {
  Soup, Flame, Beef, Leaf, Salad, CakeSlice, Wine, UtensilsCrossed, PartyPopper, Heart, MessageSquare,
  ShoppingBag, Sun, Car, Accessibility, Wifi, MapPin, Phone, Mail, Star, ChevronLeft, ChevronRight, X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { restaurant, mapsUrl } from "@/config/restaurant";
import { openStatus, formatSlots } from "@/lib/hours";
import { ReserveButton, SectionHead } from "./layout";
import { Button } from "@/components/ui/button";

const container = "mx-auto max-w-7xl px-5 md:px-8";

export function Hero() {
  const img = restaurant.images.hero;
  return (
    <section id="start" className="relative">
      <h1 className="sr-only">ANESIS SOLTAU – Griechisches Restaurant in Soltau</h1>
      <div className="relative bg-card">
        <img src={img.src} alt={img.alt} className="block h-auto w-full" fetchPriority="high" />
        <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-28" />
      </div>
      <div className={`${container} pb-16 pt-10 md:pb-24 md:pt-14`}>
        <p className="fade-up eyebrow">Griechisches Restaurant in Soltau</p>
        <p className="fade-up mt-5 max-w-2xl font-display text-3xl italic leading-tight md:text-4xl">
          Griechische Gastfreundschaft. Frischer Genuss. Besondere Momente.
        </p>
        <p className="fade-up mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Entdecken Sie die Vielfalt der griechischen Küche und genießen Sie entspannte Stunden in herzlicher
          Atmosphäre. Wir freuen uns darauf, Sie bei ANESIS in Soltau willkommen zu heißen.
        </p>
        <div className="fade-up mt-9 flex flex-wrap gap-3">
          <ReserveButton />
          <Link to="/speisekarte" className="btn-outline">Speisekarte entdecken</Link>
        </div>
      </div>
      <div className="border-b border-border bg-card">
        <ul className={`${container} flex flex-col items-center justify-center gap-2 py-5 text-xs tracking-[0.22em] uppercase sm:flex-row sm:gap-6`}>
          <li>Griechische Küche</li>
          <li aria-hidden className="hidden text-primary sm:block">·</li>
          <li>Speisen zum Mitnehmen</li>
          <li aria-hidden className="hidden text-primary sm:block">·</li>
          <li>Catering &amp; Veranstaltungen</li>
        </ul>
      </div>
    </section>
  );
}

// DEMO-DATEN: werden ersetzt, sobald die Google Places API serverseitig angebunden ist.
// Nicht als echte Bewertungen veröffentlichen.
const DEMO_REVIEWS = [
  { name: "Demo-Gast A", date: "Demo", rating: 5, text: "Beispieltext für eine Bewertung. Hier erscheinen später echte Google-Bewertungen." },
  { name: "Demo-Gast B", date: "Demo", rating: 5, text: "Platzhalter – dieser Text wird durch Daten der Google Places API ersetzt." },
  { name: "Demo-Gast C", date: "Demo", rating: 4, text: "Beispielbewertung zur Darstellung des Karussells." },
  { name: "Demo-Gast D", date: "Demo", rating: 5, text: "Platzhaltertext für eine Gästebewertung auf Google." },
];
const DEMO_SUMMARY: { rating: number; count: number } | null = null; // nur echte Daten anzeigen

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-primary" aria-label={`${n} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4" fill={i < Math.round(n) ? "currentColor" : "none"} strokeWidth={1.3} />
      ))}
    </div>
  );
}

export function Reviews() {
  const reviews = DEMO_REVIEWS;
  const loop = [...reviews, ...reviews];
  return (
    <section aria-labelledby="reviews-title" className="overflow-hidden border-y border-border bg-background py-24 md:py-32">
      <div className={container}>
        <p className="eyebrow">Stimmen unserer Gäste</p>
        <h2 id="reviews-title" className="mt-4 text-4xl md:text-6xl">Was unsere Gäste sagen</h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <GoogleG className="h-7 w-7" />
          <span className="text-lg font-medium">Google Bewertungen</span>
          {DEMO_SUMMARY && (
            <span className="flex items-center gap-2 text-muted-foreground">
              <Stars n={DEMO_SUMMARY.rating} /> {DEMO_SUMMARY.rating.toFixed(1).replace(".", ",")} · {DEMO_SUMMARY.count} Bewertungen
            </span>
          )}
        </div>
      </div>
      <div className="mt-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" tabIndex={0} aria-label="Bewertungen, horizontal scrollbar">
        <ul className="marquee flex w-max gap-6 px-5">
          {loop.map((r, i) => (
            <li key={i} aria-hidden={i >= reviews.length} className="w-[82vw] max-w-sm shrink-0 border border-border bg-card p-7">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GoogleG /> Bewertung auf Google
              </div>
              <div className="mt-4"><Stars n={r.rating} /></div>
              <p className="mt-4 font-display text-xl leading-snug">„{r.text}“</p>
              <p className="mt-6 text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </li>
          ))}
        </ul>
      </div>
      {restaurant.googleReviewsUrl && (
        <div className={`${container} mt-10`}>
          <a href={restaurant.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Alle Google-Bewertungen ansehen
          </a>
        </div>
      )}
    </section>
  );
}

export function About() {
  const img = restaurant.images.about;
  return (
    <section id="ueber-uns" className="bg-card py-24 md:py-32">
      <div className={`${container} grid items-center gap-12 md:grid-cols-2 md:gap-20`}>
        <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <SectionHead eyebrow="Über uns" title="Gastfreundschaft mit griechischer Seele" />
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Bei ANESIS steht der Gast im Mittelpunkt. Wir möchten, dass Sie sich vom ersten Moment an wohlfühlen –
              ob beim schnellen Mittagessen, beim gemütlichen Abend mit Freunden oder bei einer Feier im größeren Kreis.
            </p>
            <p>
              Unser Gastraum mit seinen Säulen, Rundbögen und mediterranen Wandbildern lädt dazu ein, den Alltag für ein paar
              Stunden hinter sich zu lassen. „Anesis“ bedeutet auf Griechisch so viel wie Entspannung – genau das wünschen
              wir Ihnen bei uns in Soltau.
            </p>
          </div>
          <div className="mt-10"><ReserveButton /></div>
        </div>
      </div>
    </section>
  );
}

const amenities = [
  { icon: UtensilsCrossed, name: "Küche & Mitnahme", text: "Griechische Klassiker und Spezialitäten – auch zum Mitnehmen." },
  { icon: PartyPopper, name: "Feiern & Catering", text: "Private Feiern und Veranstaltungen nach persönlicher Absprache." },
  { icon: Sun, name: "Außenbereich & Parken", text: "Bei schönem Wetter draußen sitzen. Parkmöglichkeiten in der Nähe." },
  { icon: Wifi, name: "WLAN & Zugang", text: "Kostenloses WLAN. Fragen zur Barrierefreiheit beantworten wir gern." },
];

export function Amenities() {
  return (
    <section aria-labelledby="amenities-title" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className={container}>
        <p className="eyebrow !text-ink-foreground/70">Ausstattung &amp; Service</p>
        <h2 id="amenities-title" className="mt-4 text-4xl md:text-6xl">Gut zu wissen</h2>
        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({ icon: Icon, name, text }) => (
            <li key={name} className="border-t border-ink-foreground/20 pt-6">
              <Icon className="h-5 w-5 opacity-80" strokeWidth={1.4} aria-hidden />
              <h3 className="mt-4 text-2xl">{name}</h3>
              <p className="mt-1 text-sm opacity-70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Hours() {
  const [status, setStatus] = useState<ReturnType<typeof openStatus> | null>(null);
  useEffect(() => {
    const tick = () => setStatus(openStatus());
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);
  return (
    <section aria-labelledby="hours-title" className="py-24 md:py-32">
      <div className={`${container} grid gap-12 md:grid-cols-2 md:gap-20`}>
        <div className="min-w-0">
          <p className="eyebrow">Öffnungszeiten</p>
          <h2 id="hours-title" className="mt-4 text-4xl md:text-6xl">Wir sind für Sie da</h2>
          <p className="mt-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border border-border bg-card px-4 py-3 text-sm sm:inline-flex" aria-live="polite">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${status?.open ? "bg-primary" : "bg-foreground/40"}`} aria-hidden />
            <span className="min-w-0">{status ? status.text : "Status wird geladen …"}</span>
          </p>
        </div>
        <dl className="min-w-0 divide-y divide-border border-y border-border">
          {restaurant.hours.map((h) => {
            const today = status?.today === h.day;
            return (
              <div key={h.day} className={`grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-3 py-4 sm:flex sm:justify-between ${today ? "bg-card font-medium" : ""}`}>
                <dt className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                  {h.label}
                  {today && <span className="shrink-0 text-[0.65rem] text-primary uppercase">Heute</span>}
                </dt>
                <dd className={`shrink-0 text-right tabular-nums ${h.slots.length ? "" : "text-muted-foreground"}`}>
                  <span className="hidden sm:inline">{formatSlots(h.slots)}</span>
                  <span className="flex flex-col gap-1 text-sm sm:hidden">{h.slots.length ? h.slots.map(([start, end]) => <span key={start} className="whitespace-nowrap">{start}–{end} Uhr</span>) : "Ruhetag"}</span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = restaurant.images.gallery;
  const [idx, setIdx] = useState<number | null>(null);
  const selected = idx === null ? undefined : imgs[idx];
  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => i === null ? null : (i + 1) % imgs.length);
      if (e.key === "ArrowLeft") setIdx((i) => i === null ? null : (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", on); document.body.style.overflow = ""; };
  }, [idx, imgs.length]);
  return (
    <section id="galerie" className="bg-card py-24 md:py-32">
      <div className={container}>
        <SectionHead eyebrow="ANESIS SOLTAU" title="Galerie" />
        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {imgs.map((im, i) => (
            <li key={i} className={i === 0 ? "col-span-2 md:row-span-2" : ""}>
              <Button variant="ghost" type="button" onClick={() => setIdx(i)} className="group block h-full w-full overflow-hidden rounded-none p-0" aria-label={`Bild vergrößern: ${im.alt}`}>
                <img src={im.src} alt={im.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      {idx !== null && selected && (
        <div role="dialog" aria-modal="true" aria-label="Bildansicht" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4" onClick={() => setIdx(null)}>
          <img src={selected.src} alt={selected.alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <Button variant="ghost" autoFocus type="button" aria-label="Schließen" className="absolute top-4 right-4 p-3 text-ink-foreground" onClick={() => setIdx(null)}><X className="h-7 w-7" /></Button>
          <Button variant="ghost" type="button" aria-label="Vorheriges Bild" className="absolute left-2 p-3 text-ink-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + imgs.length) % imgs.length); }}><ChevronLeft className="h-8 w-8" /></Button>
          <Button variant="ghost" type="button" aria-label="Nächstes Bild" className="absolute right-2 p-3 text-ink-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % imgs.length); }}><ChevronRight className="h-8 w-8" /></Button>
          <p className="absolute bottom-6 px-6 text-center text-sm text-ink-foreground/80">{selected.alt}</p>
        </div>
      )}
    </section>
  );
}

export function Contact() {
  const a = restaurant.address;
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className={container}>
        <SectionHead eyebrow="Kontakt" title="Besuchen Sie uns in Soltau" />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          <div className="bg-background p-8">
            <MapPin className="h-5 w-5 text-primary" strokeWidth={1.4} aria-hidden />
            <h3 className="mt-5 text-2xl">Adresse</h3>
            <address className="mt-2 not-italic text-muted-foreground">{a.street}<br />{a.zip} {a.city}</address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">Route planen</a>
          </div>
          <div className="bg-background p-8">
            <Phone className="h-5 w-5 text-primary" strokeWidth={1.4} aria-hidden />
            <h3 className="mt-5 text-2xl">Telefon</h3>
            <a href={restaurant.phone.href} className="link-accent mt-2 inline-block">{restaurant.phone.display}</a>
            <div className="mt-6"><ReserveButton /></div>
          </div>
          <div className="bg-background p-8">
            <Mail className="h-5 w-5 text-primary" strokeWidth={1.4} aria-hidden />
            <h3 className="mt-5 text-2xl">E-Mail</h3>
            <a href={`mailto:${restaurant.email}`} className="link-accent mt-2 inline-block break-all">{restaurant.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
