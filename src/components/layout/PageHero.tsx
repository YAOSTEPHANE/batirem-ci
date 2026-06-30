import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionPhoto } from "@/components/ui/SectionPhoto";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { routes } from "@/lib/routes";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: BreadcrumbItem[];
}

export function PageHero({
  label,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumb = [{ label: "Accueil", href: routes.home }],
}: PageHeroProps) {
  const crumbs: BreadcrumbItem[] = [...breadcrumb, { label }];

  const breadcrumbSchema = breadcrumbJsonLd(
    crumbs.map((crumb, i) => ({
      name: crumb.label,
      url: i < crumbs.length - 1 && crumb.href ? absoluteUrl(crumb.href) : undefined,
    })),
  );

  return (
    <section className="page-hero">
      <JsonLd data={breadcrumbSchema} />
      <div className="page-hero-bg" />
      <div className="container">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={`${crumb.label}-${i}`} className="page-breadcrumb-item">
                {i > 0 ? <span className="page-breadcrumb-sep">/</span> : null}
                {crumb.href && !isLast ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className={isLast ? "page-breadcrumb-current" : undefined}>
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>

        <div className={`page-hero-grid${image ? " has-image" : ""}`}>
          <div className="page-hero-content">
            <span className="lbl">{label}</span>
            <h1 className="page-hero-title">{title}</h1>
            {subtitle ? <p className="page-hero-sub">{subtitle}</p> : null}
          </div>
          {image && imageAlt ? (
            <div className="page-hero-visual premium-frame">
              <SectionPhoto src={image} alt={imageAlt} sizes="(max-width: 768px) 100vw, 40vw" priority />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
