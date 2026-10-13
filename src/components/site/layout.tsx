import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, CalendarCheck } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { restaurant, reservation } from "@/config/restaurant";
import { formatSlots } from "@/lib/hours";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Startseite", hash: "start" },
  { label: "Speisekarte", hash: "speisekarte" },
  { label: "Über uns", hash: "ueber-uns" },
  { label: "Galerie", hash: "galerie" },
  { label: "Fragen", hash: "fragen" },
  { label: "Kontakt", hash: "kontakt" },
];

export function ReserveButton({ className = "btn-primary" }: { className?: string }) {
  return (
    <a
      href={reservation.href}
      className={className}
      {...(reservation.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {reservation.label}
    </a>
  );
}

export function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-2 leading-none" aria-label="ANESIS SOLTAU – Startseite">
      <span className="font-display text-2xl tracking-[0.18em]">{restaurant.wordmark.primary}</span>
      <span className="text-[0.62rem] tracking-[0.4em] text-primary">{restaurant.wordmark.secondary}</span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Wordmark />
        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex gap-7 text-sm">
            {nav.map((n) => (
              <li key={n.hash}>
                <Link to="/" hash={n.hash} className="transition-colors hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost" size="icon" className="lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Button asChild className="h-10 px-4"><a href={restaurant.phone.href} aria-label="ANESIS anrufen"><Phone /><span className="hidden sm:inline">Anrufen</span></a></Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile Navigation" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4">
            {nav.map((n) => (
              <li key={n.hash}>
                <Link
                  to="/"
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-2xl"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background md:hidden">
      <a href={restaurant.phone.href} className="flex items-center justify-center gap-2 py-4 text-sm tracking-wider uppercase">
        <Phone className="h-4 w-4 text-primary" /> Anrufen
      </a>
      <a
        href={reservation.href}
        {...(reservation.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center justify-center gap-2 bg-primary py-4 text-sm tracking-wider text-primary-foreground uppercase"
      >
        <CalendarCheck className="h-4 w-4" /> Reservieren
      </a>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function Footer() {
  const a = restaurant.address;
  return (
    <footer className="bg-ink pb-24 text-ink-foreground md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.18em]">ANESIS</p>
          <p className="mt-1 text-[0.62rem] tracking-[0.4em] opacity-70">SOLTAU</p>
          <address className="mt-6 space-y-1 text-sm not-italic opacity-80">
            <p>{a.street}</p>
            <p>{a.zip} {a.city}</p>
            <p><a href={restaurant.phone.href} className="hover:underline">{restaurant.phone.display}</a></p>
            <p><a href={`mailto:${restaurant.email}`} className="break-all hover:underline">{restaurant.email}</a></p>
          </address>
          {restaurant.instagramUrl && (
            <a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="ANESIS auf Instagram" className="mt-5 inline-block opacity-80 hover:opacity-100">
              <InstagramIcon />
            </a>
          )}
        </div>
        <div>
          <h2 className="text-xl">Öffnungszeiten</h2>
          <dl className="mt-4 space-y-1.5 text-sm opacity-80">
            {restaurant.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <dt>{h.label.slice(0, 2)}</dt>
                <dd className="text-right">{formatSlots(h.slots)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-xl">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {nav.map((n) => (
              <li key={n.hash}><Link to="/" hash={n.hash} className="hover:underline">{n.label}</Link></li>
            ))}
            {restaurant.googleReviewsUrl && (
              <li><a href={restaurant.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Google-Bewertungen</a></li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-xl">Zahlungsarten</h2>
          <ul className="mt-4 space-y-1.5 text-sm opacity-80">
            {restaurant.payments.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs opacity-70 md:px-8">
          <p>© {new Date().getFullYear()} ANESIS SOLTAU · Griechisches Restaurant in Soltau</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/impressum" className="hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
            {/* Cookie-Einstellungen: wird im Consent-Schritt angebunden */}
            <button type="button" className="hover:underline" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-primary focus:p-3 focus:text-primary-foreground">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}
