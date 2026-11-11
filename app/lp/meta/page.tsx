import type { Metadata } from "next";
import AdLanding, { getAdLandingMetadata } from "@/components/AdLanding";

export const revalidate = 3600; // re-check the sale window hourly

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  return getAdLandingMetadata(sp.promoPreview);
}

// Meta ads landing page. noindex always; keep out of nav and sitemap.
export default async function MetaLandingPage({ searchParams }: Props) {
  const sp = await searchParams;
  return <AdLanding source="meta" preview={sp.promoPreview} />;
}
