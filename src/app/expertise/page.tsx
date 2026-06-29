import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand, StatsBar } from "@/components/sections/TickerStatsCta";
import { WhyUs } from "@/components/sections/WhyUs";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Expertise",
  description: `L'expertise ${siteConfig.name} — immobilier, foncier, BTP et accompagnement personnalisé en Côte d'Ivoire.`,
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        label="Notre Expertise"
        title={
          <>
            L&apos;excellence à chaque <em>étape</em>
          </>
        }
        subtitle="Double compétence immobilier et matériaux, qualité contrôlée, transparence tarifaire et conseiller dédié pour chaque projet."
        image={siteImages.whyus}
        imageAlt={`Chantier et construction ${siteConfig.name}`}
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <WhyUs showHeading={false} />
      <StatsBar />
      <Testimonials />
      <RelatedPages current={routes.expertise} />
      <CtaBand />
    </>
  );
}
