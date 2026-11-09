import type { Metadata } from "next";
import AdLanding, { getAdLandingMetadata } from "@/components/AdLanding";

export const generateMetadata = (): Metadata => getAdLandingMetadata();

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Google ads landing page. noindex always; keep out of nav and sitemap.
export default async function GoogleLandingPage({ searchParams }: Props) {
  const sp = await searchParams;
  return <AdLanding source="google" preview={sp.promoPreview} />;
}
