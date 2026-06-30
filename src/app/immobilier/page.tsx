import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Properties } from "@/components/sections/Properties";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/TickerStatsCta";
import { createPageMetadata, seoPages } from "@/lib/seo";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(seoPages.immobilier);

export default function ImmobilierPage() {
  return (
    <>
      <PageHero
        label="Catalogue Immobilier"
        title={
          <>
            Propriétés <em>d&apos;exception</em>
          </>
        }
        subtitle="Villas, appartements et résidences sélectionnées pour leur emplacement, leurs finitions et leur potentiel patrimonial à Abidjan et sur le littoral ivoirien."
        image={siteImages.properties.villaEden}
        imageAlt="Villa de prestige BATIREM GROUP — Abidjan"
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <Properties showHeader={false} />
      <RelatedPages current={routes.immobilier} />
      <CtaBand />
    </>
  );
}
