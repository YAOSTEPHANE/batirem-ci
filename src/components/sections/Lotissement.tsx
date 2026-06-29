import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";
import { siteImages } from "@/lib/images";
import { lotissementServices, lotissements } from "@/lib/lotissements";

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

function PlotsIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
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

function StatusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function Lotissement({
  showIntro = true,
  showProgramsHeader = true,
}: {
  showIntro?: boolean;
  showProgramsHeader?: boolean;
}) {
  return (
    <section className="lotissement section-premium" id="lotissement">
      <div className="container">
        {showIntro ? (
        <div className="lot-intro">
          <div className="lot-intro-visual reveal r-left">
            <div className="lot-intro-img premium-frame">
              <SectionPhoto
                src={siteImages.lotissements.main}
                alt="Vue aérienne d'un lotissement viabilisé à Abidjan"
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="lot-intro-accent" />
          </div>
          <div className="lot-intro-content">
            <div className="sec-hd-meta reveal">
              <span className="sec-hd-num">06</span>
              <span className="lbl">Lotissement</span>
            </div>
            <h2 className="sec-title reveal d1">
              Créer des quartiers <em>d&apos;avenir</em>
            </h2>
            <p className="lot-intro-text reveal d2">{siteConfig.company.lotissement}</p>
            <div className="lot-services reveal d3">
              {lotissementServices.map((service) => (
                <div key={service.title} className="lot-service">
                  <div className="lot-service-dot" />
                  <div>
                    <div className="lot-service-title">{service.title}</div>
                    <div className="lot-service-desc">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href={routes.contact} className="btn btn-gold reveal d4">
              Demander une visite
              <ArrowIcon />
            </Link>
          </div>
        </div>
        ) : (
          <div className="lot-services-only reveal">
            {lotissementServices.map((service) => (
              <div key={service.title} className="lot-service">
                <div className="lot-service-dot" />
                <div>
                  <div className="lot-service-title">{service.title}</div>
                  <div className="lot-service-desc">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showProgramsHeader ? (
        <SectionHeader
          className={showIntro ? "sec-hd-spaced" : undefined}
          label="Nos Programmes"
          title={
            <>
              Lotissements <em>disponibles</em>
            </>
          }
          action={
            <Link href={routes.contact} className="btn btn-outline">
              Tous les programmes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          }
        />
        ) : null}

        <div className="lot-grid">
          {lotissements.map((lot) => (
            <div
              key={lot.name}
              className={`lot-card reveal ${lot.delay}${lot.featured ? " featured" : ""}`}
            >
              <div className="lot-img">
                <SectionPhoto
                  src={lot.image}
                  alt={lot.imageAlt}
                  sizes={lot.featured ? "50vw" : "33vw"}
                />
                <div className="lot-img-overlay" />
                <span className={`lot-badge${lot.badgeGreen ? " green" : ""}`}>
                  {lot.badge}
                </span>
              </div>
              <div className="lot-info">
                <div className="lot-type">Programme lotissement</div>
                <div className="lot-name">{lot.name}</div>
                <div className="lot-loc">
                  <PinIcon />
                  {lot.location}
                </div>
                <div className="lot-features">
                  <div className="lot-feat">
                    <PlotsIcon />
                    {lot.plots}
                  </div>
                  <div className="lot-feat">
                    <AreaIcon />
                    {lot.surface}
                  </div>
                  <div className="lot-feat">
                    <StatusIcon />
                    {lot.status}
                  </div>
                </div>
                <div className="lot-footer">
                  <div>
                    <span className="lot-price-lbl">À partir de</span>
                    <div className="lot-price">{lot.price}</div>
                  </div>
                  <Link href={routes.contact} className="lot-cta">
                    Réserver <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
