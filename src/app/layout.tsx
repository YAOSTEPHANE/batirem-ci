import { SiteEffects } from "@/components/client/SiteEffects";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { allGlobalJsonLd, rootMetadata } from "@/lib/seo";
import "@/styles/site.css";

export const metadata = rootMetadata();

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
        <JsonLd data={allGlobalJsonLd()} />
        <SiteEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
