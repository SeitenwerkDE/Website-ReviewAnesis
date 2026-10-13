import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { Hero, Reviews, About, Amenities, Hours, Gallery } from "@/components/site/sections";
import { MenuSection, Recommendations, FAQ, Directions } from "@/components/site/new-sections";

const title = "ANESIS SOLTAU – Griechisches Restaurant in Soltau";
const description =
  "Entdecken Sie ANESIS SOLTAU – Ihr griechisches Restaurant in Soltau. Küche, Öffnungszeiten, Kontakt und Catering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <MenuSection />
      <Recommendations />
      <Gallery />
      <About />
      <Reviews />
      <Amenities />
      <Hours />
      <FAQ />
      <Directions />
    </SiteLayout>
  );
}
