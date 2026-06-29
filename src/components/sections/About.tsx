import Link from "next/link";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/constants";

export function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-visual reveal r-left">
          <div className="about-img-main">
            <SectionPhoto
              src={siteImages.about}
              alt={`Équipe ${siteConfig.name} sur un chantier à Abidjan`}
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
          <div className="about-img-accent" />
          <div className="about-exp-badge">
            <div className="about-exp-n">{siteConfig.company.locationBadge.title}</div>
            <div className="about-exp-t">
              {siteConfig.company.locationBadge.subtitle.split(" · ").map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="about-content">
          {showHeading ? (
            <>
              <div className="reveal d1">
                <span className="lbl">Notre Histoire</span>
              </div>
              <h2 className="sec-title reveal d2">
                Une vision <em>africaine</em>
                <br />
                de l&apos;excellence
              </h2>
            </>
          ) : null}
          <p className="about-text reveal d2">{siteConfig.company.about}</p>
          <div className="about-pillars">
            {[
              {
                title: "Construction & BTP",
                text: "Réalisation de projets résidentiels et commerciaux, du gros œuvre aux finitions, sur Abidjan et en Côte d'Ivoire.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                delay: "d2",
              },
              {
                title: "Matériaux de Bâtiment",
                text: "Fourniture de ciment, acier, finitions et équipements pour chantiers et particuliers.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                ),
                delay: "d3",
              },
              {
                title: "Foncier & Lotissement",
                text: "Vente de terrains, programmes de lotissement et accompagnement pour sécuriser vos acquisitions foncières.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                delay: "d4",
              },
              {
                title: "Accompagnement Projet",
                text: "Un interlocuteur dédié pour vos demandes de devis, visites et suivi de chantier.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
                delay: "d5",
              },
            ].map((p) => (
              <div key={p.title} className={`pillar reveal ${p.delay}`}>
                <div className="pillar-ico">{p.icon}</div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-txt">{p.text}</div>
              </div>
            ))}
          </div>
          <div className="reveal d3">
            <Link href={routes.expertise} className="btn btn-outline">
              Découvrir notre expertise
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
