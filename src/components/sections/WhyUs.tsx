import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/constants";

export function WhyUs({ showHeading = true }: { showHeading?: boolean }) {
  const advantages = [
    {
      n: "01",
      title: "Expertise Intégrée",
      text: "Notre double expertise immobilier et matériaux vous offre un guichet unique — de la recherche du terrain à la clé en main.",
      delay: "",
    },
    {
      n: "02",
      title: "Qualité Sans Compromis",
      text: "Chaque matériau est contrôlé à réception, chaque bien est inspecté avant présentation.",
      delay: "d1",
    },
    {
      n: "03",
      title: "Prix Justes & Transparents",
      text: "Pas de frais cachés. Nos devis détaillés sont clairs et nos tarifs compétitifs.",
      delay: "d2",
    },
    {
      n: "04",
      title: "Accompagnement Personnalisé",
      text: "Un conseiller dédié vous accompagne de la première visite jusqu'à la remise des clés.",
      delay: "d3",
    },
  ] as const;

  return (
    <section className="whyus section-premium" id="whyus">
      <div className="container">
        <div className="whyus-left">
          <div className="whyus-hd">
            {showHeading ? (
              <>
                <div className="sec-hd-meta reveal">
                  <span className="sec-hd-num">04</span>
                  <span className="lbl">Notre Expertise</span>
                </div>
                <h2 className="sec-title reveal d1">
                  L&apos;excellence à chaque <em>étape</em>
                </h2>
              </>
            ) : null}
            <p
              className="reveal d2"
              style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--slate)",
              }}
            >
              Chez {siteConfig.displayName}, {siteConfig.company.expertise}
            </p>
          </div>
          <div className="advantages">
            {advantages.map((adv) => (
              <div key={adv.n} className={`adv reveal ${adv.delay}`}>
                <div className="adv-n">{adv.n}</div>
                <div className="adv-body">
                  <div className="adv-title">{adv.title}</div>
                  <div className="adv-txt">{adv.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="whyus-visual reveal r-right">
          <div className="whyus-img">
            <SectionPhoto
              src={siteImages.whyus}
              alt={`Accompagnement et qualité — ${siteConfig.name}`}
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
          <div className="cert-card">
            <div className="cert-ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="cert-title">ISO 9001 : 2015</div>
            <div className="cert-txt">Système de management de la qualité certifié</div>
          </div>
          <div className="whyus-badge">
            <div className="wb-n">98%</div>
            <div className="wb-l">
              Clients
              <br />
              Satisfaits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
