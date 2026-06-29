import Link from "next/link";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { routes } from "@/lib/routes";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow-a" />
      <div className="hero-glow-b" />
      <div className="hero-rule" />

      <div className="hero-visual">
        <div className="hero-vis-bg">
          <SectionPhoto
            src={siteImages.hero}
            alt={`${siteConfig.name} — immobilier de prestige en Côte d'Ivoire`}
            priority
            sizes="50vw"
          />
        </div>
        <div className="hero-vis-overlay" />
      </div>

      <div className="hero-property-card">
        <div className="hpc-thumb">
          <SectionPhoto
            src={siteImages.properties.villaEden}
            alt="Villa Éden — Riviera Golf, Abidjan"
            sizes="200px"
          />
        </div>
        <span className="hpc-badge">Coup de Cœur</span>
        <p className="hpc-name">Villa Éden</p>
        <p className="hpc-loc">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Riviera Golf, Abidjan
        </p>
        <p className="hpc-price">
          795 000 000 <span>FCFA</span>
        </p>
      </div>

      <div className="hero-content">
        <div className="hero-label lbl">{siteConfig.heroLabel}</div>
        <h1 className="hero-title">
          <span className="block">Bâtir votre</span>
          <em className="block">excellence</em>
          <span className="block">à l&apos;africaine</span>
        </h1>
        <p className="hero-sub">{siteConfig.description}</p>
        <div className="hero-btns">
          <Link href={routes.immobilier} className="btn btn-gold">
            Voir les propriétés
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href={routes.materiaux} className="btn btn-outline">
            Matériaux de construction
          </Link>
        </div>

        <div className="hero-search">
          <div className="hs-field">
            <label className="hs-label">Type de bien</label>
            <select className="hs-input" defaultValue="">
              <option value="">Tous les types</option>
              <option>Villa</option>
              <option>Appartement</option>
              <option>Terrain</option>
              <option>Bureau / Commercial</option>
            </select>
          </div>
          <div className="hs-field">
            <label className="hs-label">Localisation</label>
            <select className="hs-input" defaultValue="">
              <option value="">Toute la Côte d&apos;Ivoire</option>
              <option>Cocody, Abidjan</option>
              <option>Le Plateau, Abidjan</option>
              <option>Riviera, Abidjan</option>
              <option>Marcory, Abidjan</option>
            </select>
          </div>
          <div className="hs-field">
            <label className="hs-label">Budget max.</label>
            <select className="hs-input" defaultValue="">
              <option value="">Budget flexible</option>
              <option>≤ 150 M FCFA</option>
              <option>≤ 300 M FCFA</option>
              <option>≤ 500 M FCFA</option>
              <option>+ de 500 M FCFA</option>
            </select>
          </div>
          <button type="button" className="hs-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Rechercher
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hstat">
          <div className="hstat-n">
            14<span>+</span>
          </div>
          <div className="hstat-l">Années d&apos;expérience</div>
        </div>
        <div className="hstat">
          <div className="hstat-n">
            520<span>+</span>
          </div>
          <div className="hstat-l">Biens livrés</div>
        </div>
        <div className="hstat">
          <div className="hstat-n">
            98<span>%</span>
          </div>
          <div className="hstat-l">Clients satisfaits</div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-txt">Défiler</span>
      </div>
    </section>
  );
}
