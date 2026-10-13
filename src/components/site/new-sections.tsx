import { useState } from "react";
import { ChevronDown, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "./layout";
import { MenuViewer } from "./menu-viewer";
import { restaurant, mapsUrl } from "@/config/restaurant";

const container = "mx-auto max-w-7xl px-5 md:px-8";
const dishes = [
  { name: "Gyros", price: "17,90 €", text: "Würzig mariniertes Fleisch vom Spieß, mit Tzatziki und Grillsauce." },
  { name: "Souvlaki vom Schweinefilet", price: "18,90 €", text: "Saftig gegrillte Spieße aus zartem Schweinefilet." },
  { name: "Bifteki", price: "18,90 €", text: "Gehacktes Rindersteak vom Grill mit mediterranem Gemüse." },
  { name: "Gyros überbacken", price: "20,90 €", text: "In Metaxasauce mit Edamer überbacken, dazu Pommes frites oder Reis." },
  { name: "Bauernsalat", price: "12,90 €", text: "Frischer Salat mit Schafskäse, Oliven, Peperoni und Olivenöl-Dressing." },
];

export function MenuSection() {
  return <section id="speisekarte" className="py-20 md:py-28"><div className={`${container} max-w-5xl`}><SectionHead eyebrow="Speisekarte" title="Unsere Speisekarte" /><MenuViewer /></div></section>;
}

export function Recommendations() {
  return <section className="bg-ink py-20 text-ink-foreground md:py-28"><div className={container}>
    <p className="text-xs uppercase">Griechische Klassiker</p><h2 className="mt-4 text-4xl md:text-6xl">Empfehlung des Hauses</h2>
    <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">{dishes.map((d, i) => <li key={d.name} className="flex flex-col border-t border-ink-foreground/30 pt-5"><span className="text-sm text-ink-foreground/60">0{i + 1}</span><h3 className="mt-4 text-3xl">{d.name}</h3><p className="mt-3 text-sm leading-relaxed text-ink-foreground/75">{d.text}</p><p className="mt-auto pt-6 text-lg font-medium tabular-nums">{d.price}</p></li>)}</ol>
  </div></section>;
}

const faqs = [
  { q: "Wie kann ich einen Tisch reservieren?", a: `Rufen Sie uns unter ${restaurant.phone.display} an. Wir nehmen Ihre Tischreservierung gern telefonisch entgegen.` },
  { q: "Kann ich Speisen zum Mitnehmen bestellen?", a: "Ja, unsere Speisen können Sie auch zum Mitnehmen bestellen. Geben Sie Ihre Bestellung gern telefonisch auf." },
  { q: "Gibt es vegetarische Gerichte?", a: "Unsere Speisekarte enthält unter anderem Salate, Käse-Vorspeisen und Kritharaki. Fragen Sie uns gern nach einer passenden Auswahl." },
  { q: "Wo finde ich Angaben zu Allergenen?", a: "Bitte sprechen Sie unser Personal auf Allergene und Unverträglichkeiten an. Die entsprechenden Angaben erhalten Sie bei uns im Restaurant." },
  { q: "Sind Feiern und Catering möglich?", a: "Für private Feiern und Catering besprechen wir Ihre Wünsche gern persönlich. Kontaktieren Sie uns telefonisch oder per E-Mail." },
  { q: "Welche Zahlungsarten werden akzeptiert?", a: restaurant.payments.join(", ") + "." },
];

export function FAQ() {
  return <section id="fragen" className="py-20 md:py-28"><div className={`${container} max-w-4xl`}><SectionHead eyebrow="Ihre Fragen" title="Häufig gestellte Fragen" /><div className="mt-10">{faqs.map((f) => <details key={f.q} name="restaurant-faq" className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium hover:underline [&::-webkit-details-marker]:hidden">{f.q}<ChevronDown aria-hidden className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div></div></section>;
}

export function Directions() {
  const [enabled, setEnabled] = useState(false);
  const address = `${restaurant.address.street}, ${restaurant.address.zip} ${restaurant.address.city}`;
  return <section id="kontakt" className="bg-card py-20 md:py-28"><div className={container}>
    <SectionHead eyebrow="Anfahrt & Kontakt" title="Ihr Weg zu ANESIS" />
    <div className="mt-8 flex flex-wrap items-center justify-between gap-6"><address className="flex items-center gap-3 not-italic"><MapPin className="size-5" />{address}</address><Button asChild><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><Navigation />Route planen</a></Button></div>
    <div className="mt-8 h-[400px] overflow-hidden border border-border md:h-[480px]">{enabled ? <iframe title="ANESIS SOLTAU auf Google Maps" src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="flex h-full flex-col items-center justify-center gap-5 bg-background px-6 text-center"><MapPin className="size-10" strokeWidth={1.2} /><p className="font-display text-3xl">ANESIS SOLTAU</p><p className="max-w-md text-sm text-muted-foreground">Beim Laden der Karte werden Daten an Google übermittelt.</p><Button variant="outline" onClick={() => setEnabled(true)}>Google-Karte laden</Button></div>}</div>
    <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4"><a className="link-accent" href={restaurant.phone.href}>{restaurant.phone.display}</a><a className="link-accent break-all" href={`mailto:${restaurant.email}`}>{restaurant.email}</a></div>
  </div></section>;
}