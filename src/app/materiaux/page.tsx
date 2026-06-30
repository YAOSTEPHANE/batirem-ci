import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Materials } from "@/components/sections/Materials";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/TickerStatsCta";
import { createPageMetadata, seoPages } from "@/lib/seo";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(seoPages.materiaux);

export default function MateriauxPage() {
  return (
    <>
      <PageHero
        label="Matériaux BTP"
        title={
          <>
            Construire avec <em>les meilleurs</em>
          </>
        }
        subtitle="Ciment, acier, finitions et équipements certifiés — livraison rapide sur Abidjan et dans tout le territoire national."
        image={siteImages.materials.cement}
        imageAlt="Matériaux de construction BATIREM GROUP"
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <Materials showHeader={false} />
      <RelatedPages current={routes.materiaux} />
      <CtaBand />
    </>
  );
}
