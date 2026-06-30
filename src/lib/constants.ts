import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "BATIREM GROUP",
  displayName: "Batirem Group Ci",
  shortName: "BATIREM",
  tagline: "BTP — Lotissement — Terrains",
  slogan: "Bâtir avec Emmanuel",
  description:
    "Entreprise de construction, immobilier et matériaux de bâtiment à Cocody (Bonoumin), Abidjan. Projets résidentiels et commerciaux, terrains, lotissements et fourniture de matériaux en Côte d'Ivoire.",
  heroLabel: "Construction & Immobilier · Cocody, Abidjan",
  url: "https://www.batiremgroup.com",
  locale: "fr-CI",
  social: {
    facebook: "https://www.facebook.com/batiremgroup",
    facebookDirectory: "https://www.facebook.com/batiremgroup/directory_links",
    messenger: "https://m.me/batiremgroup",
  },
  contact: {
    phone: "+225 01 01 00 36 84",
    phoneMobile: "+225 07 07 92 51 18",
    email: "batirem01@gmail.com",
    address: "Boulevard Mitterrand",
    district: "Bonoumin, Cocody",
    city: "Abidjan, Côte d'Ivoire",
    whatsapp: "2250707925118",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Batirem+Group+Ci+Boulevard+Mitterrand+Cocody+Abidjan",
  },
  hours: {
    weekdays: "Lun – Ven : sur rendez-vous",
    saturday: "Samedi : sur rendez-vous",
    note: "Appelez le 07 07 92 51 18 ou le 01 01 00 36 84, ou contactez-nous sur Messenger.",
  },
  company: {
    shortBio:
      "Entreprise de construction et d'immobilier basée à Cocody (Bonoumin), sur le Boulevard Mitterrand à Abidjan.",
    about:
      "Batirem Group Ci est une société ivoirienne de construction implantée à Cocody, quartier Bonoumin. Nous réalisons des projets de bâtiment, commercialisons des terrains et des lotissements, et fournissons des matériaux de construction pour accompagner particuliers, investisseurs et promoteurs en Côte d'Ivoire.",
    lotissement:
      "Depuis Cocody, Batirem Group Ci développe et commercialise des programmes fonciers sur Abidjan et sa périphérie : découpe parcellaire, viabilisation et accompagnement administratif pour sécuriser votre investissement.",
    expertise:
      "nous réunissons construction, foncier et matériaux de bâtiment au même endroit — pour vous faire gagner du temps et sécuriser chaque étape de votre projet à Abidjan et en Côte d'Ivoire.",
    activities: [
      "Construction de bâtiments résidentiels et commerciaux",
      "Vente et commercialisation de terrains",
      "Lotissement et aménagement foncier",
      "Vente et livraison de matériaux de construction",
      "Conseil et suivi de projets immobiliers",
    ],
    locationBadge: {
      title: "Cocody",
      subtitle: "Bonoumin · Abidjan",
    },
  },
} as const;

export const navLinks = [
  { href: routes.about, label: "À Propos" },
  { href: routes.immobilier, label: "Immobilier" },
  { href: routes.lotissement, label: "Lotissement" },
  { href: routes.terrains, label: "Terrains" },
  { href: routes.materiaux, label: "Matériaux" },
  { href: routes.expertise, label: "Expertise" },
  { href: routes.contact, label: "Contact" },
] as const;

/** Navigation desktop groupée (menu déroulant Foncier) */
export const navGroups = [
  { href: routes.about, label: "À Propos" },
  {
    label: "Foncier",
    items: [
      { href: routes.immobilier, label: "Immobilier", desc: "Villas & résidences" },
      { href: routes.lotissement, label: "Lotissement", desc: "Programmes viabilisés" },
      { href: routes.terrains, label: "Terrains", desc: "Vente de parcelles" },
    ],
  },
  { href: routes.materiaux, label: "Matériaux" },
  { href: routes.expertise, label: "Expertise" },
  { href: routes.contact, label: "Contact" },
] as const;

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
