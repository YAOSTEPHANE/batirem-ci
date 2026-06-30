import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { createPageMetadata, seoPages } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(seoPages.privacy);

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        {siteConfig.name} s&apos;engage à protéger les données personnelles que vous
        nous transmettez via le formulaire de contact ou par email.
      </p>
      <h3>Données collectées</h3>
      <p>
        Nom, prénom, adresse email, numéro de téléphone et contenu de votre message,
        uniquement pour répondre à votre demande.
      </p>
      <h3>Utilisation</h3>
      <p>
        Vos données ne sont ni vendues ni cédées à des tiers. Elles servent exclusivement
        au traitement de votre demande commerciale ou technique.
      </p>
      <h3>Vos droits</h3>
      <p>
        Pour exercer votre droit d&apos;accès, de rectification ou de suppression,
        écrivez à {siteConfig.contact.email}.
      </p>
    </LegalPage>
  );
}
