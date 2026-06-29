import Link from "next/link";
import { routes } from "@/lib/routes";

const offerings = [
  {
    href: routes.immobilier,
    num: "01",
    label: "Immobilier",
    desc: "Villas & résidences d'exception",
  },
  {
    href: routes.lotissement,
    num: "02",
    label: "Lotissement",
    desc: "Programmes viabilisés clés en main",
  },
  {
    href: routes.terrains,
    num: "03",
    label: "Terrains",
    desc: "Parcelles sécurisées à investir",
  },
  {
    href: routes.materiaux,
    num: "04",
    label: "Matériaux",
    desc: "BTP premium & livraison rapide",
  },
] as const;

export function QuickNav() {
  return (
    <section className="quicknav" aria-label="Nos domaines d'expertise">
      <div className="container">
        <div className="quicknav-grid">
          {offerings.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`quicknav-card reveal d${i + 1}`}
            >
              <span className="quicknav-num">{item.num}</span>
              <span className="quicknav-label">{item.label}</span>
              <span className="quicknav-desc">{item.desc}</span>
              <span className="quicknav-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
