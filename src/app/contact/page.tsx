import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { createPageMetadata, seoPages } from "@/lib/seo";
import { siteImages } from "@/lib/images";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(seoPages.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Nous Contacter"
        title={
          <>
            Parlons de votre <em>projet</em>
          </>
        }
        subtitle={`${siteConfig.displayName} vous accueille sur rendez-vous à Cocody. Téléphone, WhatsApp, Messenger ou formulaire — nous vous répondons rapidement.`}
        image={siteImages.contact.hero}
        imageAlt={`Accueil ${siteConfig.name} — Cocody, Abidjan`}
        breadcrumb={[{ label: "Accueil", href: routes.home }]}
      />
      <Contact showHeading={false} />
      <RelatedPages current={routes.contact} title="Nos autres services" />
    </>
  );
}
