import type { Metadata } from "next";
import { HomeSections } from "@/components/sections/HomeSections";
import { createPageMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(seoPages.home);

export default function HomePage() {
  return <HomeSections />;
}
