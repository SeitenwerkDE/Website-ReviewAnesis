import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, ReserveButton } from "@/components/site/layout";
import { MenuViewer } from "@/components/site/menu-viewer";

const title = "Speisekarte – ANESIS SOLTAU | Griechisches Restaurant Soltau";
const description = "Die Speisekarte des ANESIS in Soltau: griechische Vorspeisen, Spezialitäten, Fleisch, Vegetarisches, Desserts und Getränke.";

export const Route = createFileRoute("/speisekarte")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow">Speisekarte</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Unsere Speisekarte</h1>
        <MenuViewer />
        <div className="mt-12"><ReserveButton /></div>
      </section>
    </SiteLayout>
  );
}
