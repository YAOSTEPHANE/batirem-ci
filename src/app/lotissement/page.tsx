import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Lotissement } from "@/components/sections/Lotissement";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/TickerStatsCta";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lotissement",
  description: `Lotissements viabilisés ${siteConfig.name} — programmes fonciers à Cocody, Riviera et Anyama, Abidjan.`,
};

export default function LotissementPage() {
  return (
    <>
      <PageHero
        label="Lotissement"
        title={
          <>
            Créer des quartiers <em>d&apos;avenir</em>
          </>
        }
        subtitle="Programmes viabilisés avec voirie, électricité, eau potable et accompagnement administratif pour sécuriser votre investissement foncier."
        image={siteImages.lotissements.main}
        imageAlt="Lotissement viabilisé BATIREM GROUP — Abidjan"
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <Lotissement showIntro={false} showProgramsHeader={false} />
      <RelatedPages current={routes.lotissement} />
      <CtaBand />
    </>
  );
}
