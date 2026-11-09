import type { Metadata } from "next";
import AdLanding, { getAdLandingMetadata } from "@/components/AdLanding";

export const generateMetadata = (): Metadata => getAdLandingMetadata();

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Meta ads landing page. noindex always; keep out of nav and sitemap.
export default async function MetaLandingPage({ searchParams }: Props) {
  const sp = await searchParams;
  return <AdLanding source="meta" preview={sp.promoPreview} />;
}
