/** Chemins des pages du site */
export const routes = {
  home: "/",
  about: "/a-propos",
  immobilier: "/immobilier",
  lotissement: "/lotissement",
  terrains: "/terrains",
  materiaux: "/materiaux",
  expertise: "/expertise",
  contact: "/contact",
  legal: {
    mentions: "/mentions-legales",
    privacy: "/politique-de-confidentialite",
    cgv: "/cgv",
  },
} as const;
