import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { restaurant } from "@/config/restaurant";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – ANESIS SOLTAU" },
      { name: "description", content: "Informationen zum Datenschutz auf der Website des ANESIS Soltau." },
      { property: "og:title", content: "Datenschutzerklärung – ANESIS SOLTAU" },
      { property: "og:description", content: "Wie wir mit Ihren Daten umgehen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

// Hinweis: Vor Veröffentlichung rechtlich prüfen lassen und um eingebundene Dienste ergänzen.
function Datenschutz() {
  const l = restaurant.legal;
  const a = restaurant.address;
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-20 leading-relaxed md:px-8 md:py-28">
        <h1 className="text-5xl md:text-6xl">Datenschutzerklärung</h1>
        <section><h2 className="text-2xl">1. Verantwortliche Stelle</h2>
          <p className="mt-2">{l.owner}<br />{a.street}, {a.zip} {a.city}<br />Telefon: {restaurant.phone.display}<br />E-Mail: {restaurant.email}</p></section>
        <section><h2 className="text-2xl">2. Ihre Rechte</h2>
          <p className="mt-2">Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.</p></section>
        <section><h2 className="text-2xl">3. Hosting und Server-Logfiles</h2>
          <p className="mt-2">Beim Aufruf dieser Website werden technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite) verarbeitet, um die Website auszuliefern und ihre Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).</p></section>
        <section><h2 className="text-2xl">4. Cookies und Einwilligung</h2>
          <p className="mt-2">Wir verwenden nur technisch notwendige Speichertechniken, sofern Sie nicht ausdrücklich in weitere Kategorien eingewilligt haben (§ 25 TDDDG). Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Fußbereich ändern.</p></section>
        <section><h2 className="text-2xl">5. Kontakt- und Catering-Anfragen</h2>
          <p className="mt-2">Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p></section>
        <section><h2 className="text-2xl">6. Google Maps</h2>
          <p className="mt-2">Die eingebettete Google-Karte wird erst nach Ihrem Klick auf „Google-Karte laden“ aktiviert. Dabei werden unter anderem Ihre IP-Adresse und technische Browserdaten an Google übermittelt. Über „Route planen“ öffnen Sie Google Maps in einem neuen Tab. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine Übermittlung in die USA ist möglich. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.</p></section>
        <section><h2 className="text-2xl">7. Schriftarten</h2>
          <p className="mt-2">Die verwendeten Schriftarten sind lokal eingebunden. Es findet keine Verbindung zu externen Schriftanbietern statt.</p></section>
      </article>
    </SiteLayout>
  );
}
