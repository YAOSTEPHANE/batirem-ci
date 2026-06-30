import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: "Page introuvable",
  description: `La page demandée n'existe pas sur ${siteConfig.name}. Retournez à l'accueil pour découvrir nos services de construction et immobilier à Abidjan.`,
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="container">
        <div className="page-hero-content">
          <span className="lbl">Erreur 404</span>
          <h1 className="page-hero-title">
            Page <em>introuvable</em>
          </h1>
          <p className="page-hero-sub">
            Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour
            continuer votre visite.
          </p>
          <Link href={routes.home} className="btn btn-gold" style={{ marginTop: 24 }}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
