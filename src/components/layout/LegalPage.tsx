import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <PageHero
        label="Informations légales"
        title={title}
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <section className="legal-page">
        <div className="container">
          <div className="legal-content">{children}</div>
          <p className="legal-back">
            <Link href={routes.home}>← Retour à l&apos;accueil</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export function legalMeta(title: string) {
  return {
    title,
    description: `${title} — ${siteConfig.name}, ${siteConfig.contact.city}.`,
  };
}
