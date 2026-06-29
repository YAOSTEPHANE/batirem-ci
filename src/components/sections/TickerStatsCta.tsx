import Link from "next/link";
import { phoneHref, siteConfig } from "@/lib/constants";
import { routes } from "@/lib/routes";

const tickerItems = [
  "Immobilier de Prestige",
  "Matériaux Haute Qualité",
  "Lotissement Viabilisé",
  "Terrains Sécurisés",
  "Expert depuis 2010",
  "Présence Nationale",
  "Accompagnement Personnalisé",
  "Certifié ISO 9001",
] as const;

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((label, i) => (
          <div key={`${label}-${i}`} className="ticker-item">
            <span>{label}</span>
            <div className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { target: 520, label: "Propriétés Vendues" },
    { target: 1200, label: "Projets de Construction" },
    { target: 850, label: "Clients Fidèles" },
    { target: 14, label: "Villes Couvertes" },
  ] as const;

  return (
    <div className="statsbar">
      <div className="container">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`sbi reveal d${i + 1}`}>
            <div className="sbi-n" data-target={stat.target}>
              0<sup>+</sup>
            </div>
            <div className="sbi-l">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta">
      <div className="cta-bg-grid" />
      <div className="cta-glow" />
      <div className="container">
        <span className="lbl reveal">Passez à l&apos;action</span>
        <h2 className="cta-title reveal d1">
          Votre projet mérite <em>le meilleur</em> partenaire
        </h2>
        <p className="cta-sub reveal d2">
          Que vous cherchiez un bien immobilier d&apos;exception ou des matériaux de
          qualité premium, nos experts sont prêts à vous accompagner.
        </p>
        <div className="cta-btns reveal d3">
          <Link href={routes.contact} className="btn btn-gold">
            Consulter un expert
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a href={phoneHref(siteConfig.contact.phone)} className="btn btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
