import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { siteImages } from "@/lib/images";
import { terrainTypes, terrains } from "@/lib/terrains";

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function Terrains({ showTop = true }: { showTop?: boolean }) {
  return (
    <section className="terrains section-premium" id="terrains">
      <div className="container">
        {showTop ? (
        <div className="ter-top">
          <SectionHeader
            number="07"
            label="Vente de Terrains"
            title={
              <>
                Investir dans <em>la terre</em>
              </>
            }
            subtitle="Parcelles résidentielles, commerciales et d&apos;investissement avec documents sécurisés. Visite sur rendez-vous et accompagnement jusqu&apos;à la signature."
          />
          <div className="ter-header-visual reveal r-right">
            <div className="ter-header-img premium-frame">
              <SectionPhoto
                src={siteImages.terrains.main}
                alt="Terrain à vendre avec clôture — Abidjan, Côte d'Ivoire"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
        ) : null}

        <div className="ter-types reveal d2">
          {terrainTypes.map((t) => (
            <div key={t.label} className="ter-type-pill">
              <span className="ter-type-label">{t.label}</span>
              <span className="ter-type-count">{t.count}</span>
            </div>
          ))}
        </div>

        <div className="ter-grid">
          {terrains.map((terrain) => (
            <div key={terrain.name} className={`ter-card reveal ${terrain.delay}`}>
              <div className="ter-img">
                <SectionPhoto
                  src={terrain.image}
                  alt={terrain.imageAlt}
                  sizes="25vw"
                />
                <div className="ter-img-overlay" />
                <span className={`ter-badge${terrain.badgeGreen ? " green" : ""}`}>
                  {terrain.badge}
                </span>
              </div>
              <div className="ter-info">
                <div className="ter-type">{terrain.type}</div>
                <div className="ter-name">{terrain.name}</div>
                <div className="ter-loc">
                  <PinIcon />
                  {terrain.location}
                </div>
                <div className="ter-features">
                  <div className="ter-feat">
                    <AreaIcon />
                    {terrain.surface}
                  </div>
                  <div className="ter-feat">
                    <DocIcon />
                    {terrain.title}
                  </div>
                </div>
                <div className="ter-footer">
                  <div>
                    <span className="ter-price-m2">{terrain.priceM2}</span>
                    <div className="ter-price">{terrain.price}</div>
                  </div>
                  <Link href={routes.contact} className="ter-cta">
                    Visiter <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ter-cta-band reveal">
          <p>
            Vous avez un terrain à vendre ou cherchez une parcelle sur mesure ?
            Notre équipe vous accompagne de A à Z.
          </p>
          <Link href={routes.contact} className="btn btn-gold">
            Contactez-nous
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
