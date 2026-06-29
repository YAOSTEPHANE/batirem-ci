import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { siteImages } from "@/lib/images";

type MaterialItem = {
  wide: boolean;
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  desc: string;
  count: string;
  delay: string;
  linkLabel: string;
  icon?: ReactNode;
};

const materials: MaterialItem[] = [
  {
    wide: true,
    image: siteImages.materials.cement,
    imageAlt: "Ciment et béton haute performance",
    label: "Catégorie Phare",
    title: "Ciment & Béton Haute Performance",
    desc: "Notre gamme de ciments et bétons certifiés répond aux exigences des constructions les plus exigeantes — résistance parasismique, durabilité tropicale et finitions impeccables. Distribués en 48h sur Abidjan et livrables dans tout le territoire.",
    count: "24 références disponibles",
    delay: "",
    linkLabel: "Explorer la gamme",
  },
  {
    wide: false,
    image: siteImages.materials.steel,
    imageAlt: "Acier et ferronnerie de construction",
    label: "Structure",
    title: "Acier & Ferronnerie",
    desc: "Structures métalliques, barres d'armature et profilés certifiés EN 10080 pour vos charpentes et fondations.",
    count: "38 références",
    delay: "d1",
    linkLabel: "Voir la gamme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    wide: false,
    image: siteImages.materials.tile,
    imageAlt: "Carrelage et revêtements",
    label: "Finitions",
    title: "Carrelage & Revêtements",
    desc: "Carrelages espagnols, italiens et locaux, revêtements muraux et sols en toutes finitions pour des intérieurs luxueux.",
    count: "150+ références",
    delay: "d2",
    linkLabel: "Voir la gamme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    wide: false,
    image: siteImages.materials.wood,
    imageAlt: "Menuiseries aluminium et bois",
    label: "Menuiserie",
    title: "Aluminium & Boiseries",
    desc: "Portes, fenêtres, pergolas et menuiseries aluminium sur mesure avec isolation thermique et phonique optimale.",
    count: "62 modèles",
    delay: "d1",
    linkLabel: "Voir la gamme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    wide: false,
    image: siteImages.materials.plumb,
    imageAlt: "Plomberie et sanitaire",
    label: "Équipements",
    title: "Plomberie & Sanitaire",
    desc: "Tuyauteries certifiées, sanitaires de marque et systèmes hydrauliques pour projets résidentiels et commerciaux.",
    count: "89 références",
    delay: "d2",
    linkLabel: "Voir la gamme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    wide: false,
    image: siteImages.materials.roof,
    imageAlt: "Toiture et isolation",
    label: "Enveloppe",
    title: "Toiture & Isolation",
    desc: "Tuiles, tôles bac acier, membranes d'étanchéité et solutions isolantes pour un confort thermique optimal.",
    count: "45 solutions",
    delay: "d3",
    linkLabel: "Voir la gamme",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

export function Materials({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="materials section-premium section-alt" id="materials">
      <div className="container">
        {showHeader ? (
        <SectionHeader
          number="08"
          label="Matériaux de Construction"
          title={
            <>
              Construire avec <em>les meilleurs</em>
            </>
          }
          subtitle="Ciment, acier, finitions et équipements certifiés — livraison rapide sur Abidjan et dans tout le territoire."
          action={
            <Link href={routes.contact} className="btn btn-outline-gold">
              Voir le catalogue
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          }
        />
        ) : null}

        <div className="mat-grid">
          {materials.map((mat) => (
            <div
              key={mat.title}
              className={`mat-card reveal ${mat.delay}${mat.wide ? " wide" : ""}`}
            >
              {!mat.wide && mat.icon ? <div className="mat-ico">{mat.icon}</div> : null}
              <div className="mat-visual">
                <SectionPhoto
                  src={mat.image}
                  alt={mat.imageAlt}
                  sizes={mat.wide ? "33vw" : "25vw"}
                />
              </div>
              <div className="mat-body">
                <div className="mat-lbl">{mat.label}</div>
                <div className="mat-title">{mat.title}</div>
                <div className="mat-desc">{mat.desc}</div>
                <Link href={routes.contact} className="mat-link">
                  {mat.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="mat-count" style={mat.wide ? { marginTop: 14 } : undefined}>
                  {mat.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
