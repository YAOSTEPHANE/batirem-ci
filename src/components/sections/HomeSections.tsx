import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Lotissement } from "@/components/sections/Lotissement";
import { Materials } from "@/components/sections/Materials";
import { Properties } from "@/components/sections/Properties";
import { QuickNav } from "@/components/sections/QuickNav";
import { Terrains } from "@/components/sections/Terrains";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand, StatsBar, Ticker } from "@/components/sections/TickerStatsCta";
import { WhyUs } from "@/components/sections/WhyUs";

/**
 * Parcours premium : accroche → identité → preuves → navigation offres →
 * expertise → catalogue foncier → matériaux → confiance → conversion.
 */
export function HomeSections() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <StatsBar />
      <QuickNav />
      <WhyUs />
      <div className="catalog-zone">
        <Properties />
        <Lotissement />
        <Terrains />
      </div>
      <Materials />
      <Testimonials />
      <CtaBand />
      <Contact />
    </>
  );
}
