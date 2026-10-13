import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { restaurant } from "@/config/restaurant";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – ANESIS SOLTAU" },
      { name: "description", content: "Impressum des griechischen Restaurants ANESIS in Soltau nach § 5 DDG." },
      { property: "og:title", content: "Impressum – ANESIS SOLTAU" },
      { property: "og:description", content: "Anbieterkennzeichnung nach § 5 DDG." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

// Platzhalter werden in src/config/restaurant.ts (legal) gepflegt.
function Impressum() {
  const l = restaurant.legal;
  const a = restaurant.address;
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-20 leading-relaxed md:px-8 md:py-28">
        <h1 className="text-5xl md:text-6xl">Impressum</h1>
        <section><h2 className="text-2xl">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">{l.owner}<br />{l.legalForm}<br />{a.street}<br />{a.zip} {a.city}</p></section>
        <section><h2 className="text-2xl">Vertreten durch</h2><p className="mt-2">{l.representatives}</p></section>
        <section><h2 className="text-2xl">Kontakt</h2>
          <p className="mt-2">Telefon: <a className="link-accent" href={restaurant.phone.href}>{restaurant.phone.display}</a><br />
          E-Mail: <a className="link-accent" href={`mailto:${restaurant.email}`}>{restaurant.email}</a></p></section>
        <section><h2 className="text-2xl">Registereintrag</h2><p className="mt-2">Registergericht: {l.registerCourt}<br />Registernummer: {l.registerNumber}</p></section>
        <section><h2 className="text-2xl">Umsatzsteuer-ID</h2><p className="mt-2">{l.vatId}</p></section>
        <section><h2 className="text-2xl">Verbraucherstreitbeilegung</h2>
          <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section>
      </article>
    </SiteLayout>
  );
}
