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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
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
