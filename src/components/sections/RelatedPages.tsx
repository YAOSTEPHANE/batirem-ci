import Link from "next/link";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";

const related = [
  {
    href: routes.immobilier,
    label: "Immobilier",
    desc: "Villas & résidences",
    image: siteImages.properties.villaEden,
    imageAlt: "Villa de prestige — catalogue immobilier BATIREM",
  },
  {
    href: routes.lotissement,
    label: "Lotissement",
    desc: "Programmes viabilisés",
    image: siteImages.lotissements.main,
    imageAlt: "Lotissement viabilisé — BATIREM GROUP",
  },
  {
    href: routes.terrains,
    label: "Terrains",
    desc: "Parcelles à vendre",
    image: siteImages.terrains.main,
    imageAlt: "Terrain à vendre — BATIREM GROUP",
  },
  {
    href: routes.materiaux,
    label: "Matériaux",
    desc: "Catalogue BTP",
    image: siteImages.materials.cement,
    imageAlt: "Matériaux de construction — BATIREM GROUP",
  },
  {
    href: routes.expertise,
    label: "Expertise",
    desc: "Notre savoir-faire",
    image: siteImages.whyus,
    imageAlt: "Expertise construction — BATIREM GROUP",
  },
  {
    href: routes.contact,
    label: "Contact",
    desc: "Prendre rendez-vous",
    image: siteImages.contact.hero,
    imageAlt: "Contact BATIREM GROUP — Cocody, Abidjan",
  },
] as const;

interface RelatedPagesProps {
  current: string;
  title?: string;
}

export function RelatedPages({
  current,
  title = "Découvrir aussi",
}: RelatedPagesProps) {
  const items = related.filter((item) => item.href !== current);

  return (
    <section className="related-pages">
      <div className="container">
        <h2 className="related-pages-title">{title}</h2>
        <div className="related-pages-grid">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="related-pages-card">
              <div className="related-pages-thumb">
                <SectionPhoto src={item.image} alt={item.imageAlt} sizes="200px" />
              </div>
              <div className="related-pages-body">
                <span className="related-pages-label">{item.label}</span>
                <span className="related-pages-desc">{item.desc}</span>
              </div>
              <span className="related-pages-arrow" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
