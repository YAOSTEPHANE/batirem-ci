import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { properties } from "@/lib/properties";

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

function BedroomIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12h16M4 6h16M4 18h7" />
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

export function Properties({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="properties section-premium" id="properties">
      <div className="container">
        {showHeader ? (
          <SectionHeader
            number="05"
            label="Catalogue Immobilier"
            title={
              <>
                Propriétés <em>d&apos;exception</em>
              </>
            }
            subtitle="Villas, appartements et résidences sélectionnées pour leur emplacement, leurs finitions et leur potentiel patrimonial."
            action={
              <Link href={routes.contact} className="btn btn-outline">
                Tout le catalogue
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            }
          />
        ) : null}

        <div className="prop-grid">
          {properties.map((prop) => (
            <div
              key={prop.name}
              className={`prop-card reveal ${prop.delay}${prop.featured ? " featured" : ""}`}
            >
              <div className="prop-img">
                <SectionPhoto
                  src={prop.image}
                  alt={prop.imageAlt}
                  sizes={prop.featured ? "50vw" : "33vw"}
                />
                <div className="prop-img-overlay" />
                <span className={`prop-badge${prop.badgeGreen ? " green" : ""}`}>
                  {prop.badge}
                </span>
                <div className="prop-like">
                  <HeartIcon />
                </div>
              </div>
              <div className="prop-info">
                <div className="prop-type">{prop.type}</div>
                <div className="prop-name">{prop.name}</div>
                <div className="prop-loc">
                  <PinIcon />
                  {prop.location}
                </div>
                <div className="prop-features">
                  <div className="prop-feat">
                    <BedroomIcon />
                    {prop.bedrooms}
                  </div>
                  <div className="prop-feat">
                    <BathIcon />
                    {prop.bathrooms}
                  </div>
                  <div className="prop-feat">
                    <AreaIcon />
                    {prop.area}
                  </div>
                </div>
                <div className="prop-footer">
                  <div>
                    <span className="prop-price-lbl">Prix</span>
                    <div className="prop-price">{prop.price}</div>
                  </div>
                  <Link href={routes.contact} className="prop-cta">
                    Voir détails <ArrowIcon />
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
