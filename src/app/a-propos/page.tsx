import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand, StatsBar } from "@/components/sections/TickerStatsCta";
import { WhyUs } from "@/components/sections/WhyUs";
import { createPageMetadata, seoPages } from "@/lib/seo";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(seoPages.about);

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
        subtitle={siteConfig.company.about}
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
