import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand, StatsBar } from "@/components/sections/TickerStatsCta";
import { WhyUs } from "@/components/sections/WhyUs";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez ${siteConfig.name} — immobilier, BTP, lotissement et terrains à Abidjan depuis 2010.`,
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        label="Notre Histoire"
        title={
          <>
            Une vision <em>africaine</em> de l&apos;excellence
          </>
        }
        subtitle={`Fondée en 2010 à Abidjan, ${siteConfig.name} accompagne particuliers, investisseurs et promoteurs avec une expertise intégrée en immobilier, foncier et matériaux de construction.`}
        image={siteImages.about}
        imageAlt={`Équipe ${siteConfig.name} sur un chantier à Abidjan`}
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <About showHeading={false} />
      <StatsBar />
      <WhyUs showHeading={false} />
      <Testimonials />
      <RelatedPages current={routes.about} />
      <CtaBand />
    </>
  );
}
