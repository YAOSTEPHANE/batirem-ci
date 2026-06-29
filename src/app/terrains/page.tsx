import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Terrains } from "@/components/sections/Terrains";
import { CtaBand } from "@/components/sections/TickerStatsCta";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vente de Terrains",
  description: `Terrains à vendre ${siteConfig.name} — parcelles résidentielles, commerciales et d'investissement en Côte d'Ivoire.`,
};

export default function TerrainsPage() {
  return (
    <>
      <PageHero
        label="Vente de Terrains"
        title={
          <>
            Investir dans <em>la terre</em>
          </>
        }
        subtitle="Parcelles avec titres fonciers ou ACD, visites sur rendez-vous et accompagnement complet jusqu'à la signature."
        image={siteImages.terrains.main}
        imageAlt="Terrain à vendre BATIREM GROUP — Abidjan"
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <Terrains showTop={false} />
      <RelatedPages current={routes.terrains} />
      <CtaBand />
    </>
  );
}
