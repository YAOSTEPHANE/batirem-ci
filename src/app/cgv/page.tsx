import type { Metadata } from "next";
import { LegalPage, legalMeta } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = legalMeta("Conditions générales de vente");

export default function CgvPage() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p>
        Les présentes conditions générales s&apos;appliquent aux prestations immobilières,
        foncières et de fourniture de matériaux proposées par {siteConfig.name}.
      </p>
      <h3>Devis et commandes</h3>
      <p>
        Toute commande fait l&apos;objet d&apos;un devis détaillé validé par le client.
        Les prix sont exprimés en FCFA, hors frais administratifs le cas échéant.
      </p>
      <h3>Livraison</h3>
      <p>
        Les délais de livraison des matériaux et d&apos;exécution des travaux sont
        communiqués lors de la signature du contrat et peuvent varier selon la
        disponibilité des produits.
      </p>
      <h3>Contact</h3>
      <p>
        Pour toute question relative à une commande : {siteConfig.contact.phoneMobile} ou{" "}
        {siteConfig.contact.phone} — {siteConfig.contact.email}
      </p>
    </LegalPage>
  );
}
