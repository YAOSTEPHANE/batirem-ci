import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
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
              <Logo variant="footer" link={false} />
              <div className="foot-sub" style={{ marginTop: 3 }}>
                {siteConfig.tagline}
              </div>
            </div>
            <p className="foot-desc">
              {siteConfig.company.shortBio} {siteConfig.company.expertise.charAt(0).toUpperCase()}
              {siteConfig.company.expertise.slice(1)}
            </p>
            <div className="foot-social">
              <a
                href={siteConfig.social.facebook}
                className="soc soc--facebook"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={siteConfig.social.messenger}
                className="soc soc--messenger"
                title="Messenger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessengerIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="soc soc--whatsapp"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
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
