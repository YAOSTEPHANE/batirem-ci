import type { Metadata } from "next";
import { SiteEffects } from "@/components/client/SiteEffects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/constants";
import "@/styles/site.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Immobilier & Matériaux de Construction`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth" style={{ colorScheme: "light" }}>
      <body>
        <SiteEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
