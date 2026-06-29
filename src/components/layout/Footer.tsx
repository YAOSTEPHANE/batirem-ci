import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { routes } from "@/lib/routes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div>
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={180}
                height={48}
                className="foot-logo-img"
              />
              <div className="foot-sub" style={{ marginTop: 3 }}>
                {siteConfig.tagline}
              </div>
            </div>
            <p className="foot-desc">
              {siteConfig.displayName} — entreprise de construction et d&apos;immobilier
              basée à Cocody, Abidjan. BTP, lotissement, terrains et matériaux de
              construction pour vos projets en Côte d&apos;Ivoire.
            </p>
            <div className="foot-social">
              <a
                href={siteConfig.social.facebook}
                className="soc"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.messenger}
                className="soc"
                title="Messenger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="soc"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.524 5.849L.064 23.5l5.796-1.437A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="foot-col-title">Immobilier</div>
            <ul className="foot-links">
              <li><Link href={routes.immobilier} className="foot-link">Villas de prestige</Link></li>
              <li><Link href={routes.immobilier} className="foot-link">Appartements</Link></li>
              <li><Link href={routes.lotissement} className="foot-link">Lotissements</Link></li>
              <li><Link href={routes.terrains} className="foot-link">Vente de terrains</Link></li>
            </ul>
          </div>

          <div>
            <div className="foot-col-title">Matériaux</div>
            <ul className="foot-links">
              <li><Link href={routes.materiaux} className="foot-link">Ciment &amp; Béton</Link></li>
              <li><Link href={routes.materiaux} className="foot-link">Acier &amp; Ferronnerie</Link></li>
              <li><Link href={routes.materiaux} className="foot-link">Carrelage &amp; Revêtements</Link></li>
              <li><Link href={routes.materiaux} className="foot-link">Toiture &amp; Isolation</Link></li>
            </ul>
          </div>

          <div>
            <div className="foot-col-title">Newsletter</div>
            <div className="foot-newsletter">
              <p className="foot-nl-desc">
                Recevez nos nouvelles annonces et offres exclusives.
              </p>
              <div className="foot-nl-form">
                <input type="email" className="foot-nl-input" placeholder="votre@email.ci" />
                <button type="button" className="foot-nl-btn" aria-label="S'inscrire">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="foot-links" style={{ marginTop: 20 }}>
                <Link href={routes.about} className="foot-link">À Propos</Link>
                <Link href={routes.contact} className="foot-link">Nous Contacter</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="foot-copy">
            © {year} {siteConfig.name}. Tous droits réservés. {siteConfig.contact.city}
          </p>
          <div className="foot-legal">
            <Link href={routes.legal.mentions}>Mentions légales</Link>
            <Link href={routes.legal.privacy}>Politique de confidentialité</Link>
            <Link href={routes.legal.cgv}>CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
