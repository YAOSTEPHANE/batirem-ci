import type { Metadata } from "next";
import { LegalPage, legalMeta } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = legalMeta("Mentions légales");

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        <strong>{siteConfig.name}</strong> — {siteConfig.displayName}
      </p>
      <p>
        Siège : {siteConfig.contact.address}, {siteConfig.contact.district},{" "}
        {siteConfig.contact.city}
      </p>
      <p>
        Téléphone : {siteConfig.contact.phone} — Email : {siteConfig.contact.email}
      </p>
      <p>
        Directeur de la publication : Emmanuel — {siteConfig.slogan}
      </p>
      <h3>Hébergement</h3>
      <p>
        Ce site est hébergé par un prestataire cloud. Pour toute question relative au
        site, contactez-nous à {siteConfig.contact.email}.
      </p>
    </LegalPage>
  );
}
