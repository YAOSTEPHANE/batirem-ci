import { siteImages } from "@/lib/images";

export const lotissementServices = [
  {
    title: "Viabilisation complète",
    desc: "Voirie, assainissement, électricité et adduction d'eau potable sur chaque parcelle.",
  },
  {
    title: "Bornage & géomètre",
    desc: "Délimitation précise des parcelles avec piliers de bornage et plans cadastraux.",
  },
  {
    title: "Titres fonciers",
    desc: "Accompagnement administratif pour l'obtention des documents de propriété.",
  },
  {
    title: "VRD & aménagement",
    desc: "Routes bitumées, éclairage public, espaces verts et aires de jeux.",
  },
] as const;

export const lotissements = [
  {
    featured: true,
    image: siteImages.lotissements.residenceBonoumin,
    imageAlt: "Résidence Bonoumin — lotissement viabilisé à Cocody, Abidjan",
    badge: "Nouveau",
    badgeGreen: false,
    name: "Résidence Bonoumin",
    location: "Cocody — Bonoumin, Abidjan",
    plots: "48 parcelles",
    surface: "300 – 800 m²",
    status: "Viabilisé",
    price: "À partir de 18 000 000 FCFA",
    delay: "",
  },
  {
    featured: false,
    image: siteImages.lotissements.domaineRiviera,
    imageAlt: "Domaine Riviera — lotissement haut standing à Riviera, Abidjan",
    badge: "Disponible",
    badgeGreen: true,
    name: "Domaine Riviera",
    location: "Riviera, Abidjan",
    plots: "32 parcelles",
    surface: "500 – 1 200 m²",
    status: "En cours",
    price: "À partir de 28 000 000 FCFA",
    delay: "d1",
  },
  {
    featured: false,
    image: siteImages.lotissements.parcAnyama,
    imageAlt: "Parc Anyama — lotissement périurbain à Anyama",
    badge: "Promo",
    badgeGreen: false,
    name: "Parc Anyama",
    location: "Anyama, Abidjan",
    plots: "64 parcelles",
    surface: "400 – 600 m²",
    status: "Viabilisé",
    price: "À partir de 8 500 000 FCFA",
    delay: "d2",
  },
] as const;
