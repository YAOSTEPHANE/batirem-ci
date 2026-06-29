import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "BATIREM GROUP",
  displayName: "Batirem Group Ci",
  shortName: "BATIREM",
  tagline: "BTP — Lotissement — Terrains",
  slogan: "Bâtir avec Emmanuel",
  description:
    "Propriétés d'exception et matériaux de construction haut de gamme pour concrétiser vos projets les plus ambitieux en Côte d'Ivoire.",
  heroLabel: "Immobilier de Prestige · Côte d'Ivoire",
  url: "https://batirem.ci",
  locale: "fr-CI",
  social: {
    facebook: "https://www.facebook.com/batiremgroup",
    facebookDirectory: "https://www.facebook.com/batiremgroup/directory_links",
    messenger: "https://m.me/batiremgroup",
  },
  contact: {
    phone: "+225 01 71 02 87 87",
    phoneMobile: "+225 07 13 79 79 19",
    email: "batirem01@gmail.com",
    address: "Boulevard Mitterrand, Cocody",
    district: "Bonoumin",
    city: "Abidjan, Côte d'Ivoire",
    whatsapp: "2250171028787",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Batirem+Group+Ci+Boulevard+Mitterrand+Cocody+Abidjan",
  },
  hours: {
    weekdays: "Lun – Ven : sur rendez-vous",
    saturday: "Samedi : sur rendez-vous",
    note: "Appelez-nous ou écrivez-nous sur Facebook Messenger.",
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
