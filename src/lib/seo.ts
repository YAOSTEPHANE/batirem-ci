import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { routes } from "@/lib/routes";

export const SITE_URL = siteConfig.url;

/** Mots-clés globaux — construction & immobilier Côte d'Ivoire */
export const defaultKeywords = [
  "BATIREM GROUP",
  "Batirem Group Ci",
  "construction Abidjan",
  "immobilier Abidjan",
  "BTP Côte d'Ivoire",
  "lotissement Abidjan",
  "vente terrains Cocody",
  "matériaux construction Abidjan",
  "promoteur immobilier Côte d'Ivoire",
  "Bonoumin Cocody",
  "Bâtir avec Emmanuel",
] as const;

export type PageSeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  /** Titre complet sans le template « | BATIREM GROUP » */
  absoluteTitle?: boolean;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export const seoPages = {
  home: {
    title: `${siteConfig.name} — Construction, Immobilier & Matériaux à Abidjan`,
    description: siteConfig.description,
    path: routes.home,
    keywords: [
      ...defaultKeywords,
      "entreprise construction Cocody",
      "villa Abidjan",
      "investissement foncier Côte d'Ivoire",
    ],
    ogImage: "/images/hero.jpg",
    ogImageAlt: `${siteConfig.name} — villas et construction à Abidjan`,
    absoluteTitle: true,
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    title: "À Propos",
    description: `Découvrez ${siteConfig.name} : entreprise ivoirienne de construction, immobilier, lotissement et matériaux basée à Cocody (Bonoumin), Abidjan. ${siteConfig.slogan}.`,
    path: routes.about,
    keywords: [...defaultKeywords, "histoire Batirem", "équipe construction Abidjan"],
    ogImage: "/images/about.jpg",
    ogImageAlt: `Équipe ${siteConfig.name} sur chantier à Abidjan`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  immobilier: {
    title: "Immobilier",
    description: `Catalogue immobilier ${siteConfig.name} : villas, appartements et résidences de prestige à Abidjan et sur le littoral ivoirien. Accompagnement personnalisé.`,
    path: routes.immobilier,
    keywords: [...defaultKeywords, "villa prestige Abidjan", "appartement Cocody", "achat immobilier Côte d'Ivoire"],
    ogImage: "/images/property-1.jpg",
    ogImageAlt: "Villa de prestige — catalogue immobilier BATIREM GROUP",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  lotissement: {
    title: "Lotissement",
    description: `Programmes de lotissement viabilisés par ${siteConfig.name} à Abidjan : routes, éclairage, espaces verts. Parcelles prêtes à bâtir à Cocody, Riviera et Anyama.`,
    path: routes.lotissement,
    keywords: [...defaultKeywords, "lotissement viabilisé Abidjan", "parcelle à bâtir Cocody", "aménagement foncier"],
    ogImage: "/images/lotissement-main.jpg",
    ogImageAlt: "Lotissement viabilisé — BATIREM GROUP Abidjan",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  terrains: {
    title: "Terrains",
    description: `Terrains à vendre à Abidjan avec ${siteConfig.name} : parcelles à Cocody, Riviera, Marcory et Anyama. Titres fonciers, conseil et accompagnement administratif.`,
    path: routes.terrains,
    keywords: [...defaultKeywords, "terrain à vendre Abidjan", "parcelle Cocody", "investissement terrain Côte d'Ivoire"],
    ogImage: "/images/terrain-main.jpg",
    ogImageAlt: "Terrain à vendre — BATIREM GROUP Abidjan",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  materiaux: {
    title: "Matériaux",
    description: `Matériaux de construction ${siteConfig.name} : ciment, acier, carrelage, bois, plomberie et toiture. Livraison sur chantier à Abidjan et environs.`,
    path: routes.materiaux,
    keywords: [...defaultKeywords, "ciment Abidjan", "fer à béton Côte d'Ivoire", "matériaux BTP livraison"],
    ogImage: "/images/material-cement.jpg",
    ogImageAlt: "Matériaux de construction — BATIREM GROUP",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  expertise: {
    title: "Expertise",
    description: `L'expertise ${siteConfig.name} : construction clés en main, foncier, lotissement et matériaux réunis à Cocody. Un interlocuteur unique pour votre projet en Côte d'Ivoire.`,
    path: routes.expertise,
    keywords: [...defaultKeywords, "expert construction Abidjan", "clés en main Côte d'Ivoire", "promoteur immobilier"],
    ogImage: "/images/whyus.jpg",
    ogImageAlt: "Expertise construction — BATIREM GROUP",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  contact: {
    title: "Contact",
    description: `Contactez ${siteConfig.name} — ${siteConfig.contact.address}, ${siteConfig.contact.district}, Abidjan. Tél. ${siteConfig.contact.phoneMobile} / ${siteConfig.contact.phone}. Réponse sous 24 h.`,
    path: routes.contact,
    keywords: [...defaultKeywords, "contact Batirem", "devis construction Abidjan", "rendez-vous Cocody"],
    ogImage: "/images/contact.jpg",
    ogImageAlt: `Contact ${siteConfig.name} — Cocody, Abidjan`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  mentions: {
    title: "Mentions légales",
    description: `Mentions légales de ${siteConfig.name}, ${siteConfig.contact.city}. Informations éditeur, hébergement et propriété intellectuelle.`,
    path: routes.legal.mentions,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  privacy: {
    title: "Politique de confidentialité",
    description: `Politique de confidentialité ${siteConfig.name} — protection des données personnelles, cookies et droits des utilisateurs en Côte d'Ivoire.`,
    path: routes.legal.privacy,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  cgv: {
    title: "CGV",
    description: `Conditions générales de vente ${siteConfig.name} — vente immobilière, terrains, lotissements et matériaux de construction à Abidjan.`,
    path: routes.legal.cgv,
    changeFrequency: "yearly",
    priority: 0.3,
  },
} as const satisfies Record<string, PageSeoEntry>;

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

function resolveOgImageUrl(path: string): string {
  return path.startsWith("http") ? path : absoluteUrl(path);
}

function displayTitle(config: PageSeoEntry): string {
  return config.absoluteTitle ? config.title : `${config.title} | ${siteConfig.name}`;
}

export function createPageMetadata(config: PageSeoEntry): Metadata {
  const canonical = absoluteUrl(config.path);
  const ogImagePath = config.ogImage ?? "/images/hero.jpg";
  const ogImageUrl = resolveOgImageUrl(ogImagePath);
  const ogImageAlt = config.ogImageAlt ?? `${siteConfig.name} — ${siteConfig.tagline}`;
  const title = config.absoluteTitle ? { absolute: config.title } : config.title;

  return {
    title,
    description: config.description,
    keywords: [...(config.keywords ?? defaultKeywords)],
    alternates: { canonical },
    openGraph: {
      title: displayTitle(config),
      description: config.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "fr_CI",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle(config),
      description: config.description,
      images: [ogImageUrl],
    },
    robots: config.noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seoPages.home.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...defaultKeywords],
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "construction",
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: SITE_URL,
      languages: { "fr-CI": SITE_URL },
    },
    openGraph: {
      type: "website",
      locale: "fr_CI",
      url: SITE_URL,
      siteName: siteConfig.name,
      title: seoPages.home.title,
      description: siteConfig.description,
      images: [
        {
          url: absoluteUrl("/images/hero.jpg"),
          width: 1200,
          height: 630,
          alt: seoPages.home.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoPages.home.title,
      description: siteConfig.description,
      images: [absoluteUrl("/images/hero.jpg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    icons: {
      icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    },
    other: {
      "geo.region": "CI-AB",
      "geo.placename": "Abidjan, Cocody",
      "geo.position": "5.3600;-3.9900",
      ICBM: "5.3600, -3.9900",
    },
  };
}

/* ── JSON-LD ─────────────────────────────────────────────── */

export type BreadcrumbSchemaItem = {
  name: string;
  url?: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.displayName,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl("/images/hero.jpg"),
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: siteConfig.contact.email,
    telephone: [siteConfig.contact.phone, siteConfig.contact.phoneMobile],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address}, ${siteConfig.contact.district}`,
      addressLocality: "Abidjan",
      addressRegion: "Lagunes",
      addressCountry: "CI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.36,
      longitude: -3.99,
    },
    areaServed: {
      "@type": "Country",
      name: "Côte d'Ivoire",
    },
    knowsAbout: siteConfig.company.activities,
    sameAs: [siteConfig.social.facebook, siteConfig.social.messenger],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneMobile,
      contactType: "customer service",
      email: siteConfig.contact.email,
      areaServed: "CI",
      availableLanguage: ["French"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: siteConfig.locale,
    description: siteConfig.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith("http") ? item.url : absoluteUrl(item.url) } : {}),
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl("/images/hero.jpg"),
    url: SITE_URL,
    telephone: siteConfig.contact.phoneMobile,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address}, ${siteConfig.contact.district}`,
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.36,
      longitude: -3.99,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function allGlobalJsonLd() {
  return [organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()];
}

export function sitemapEntries() {
  return Object.values(seoPages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency ?? "monthly",
    priority: page.priority ?? 0.7,
  }));
}
