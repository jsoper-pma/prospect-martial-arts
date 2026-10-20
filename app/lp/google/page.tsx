import type { Metadata } from "next";
import AdLanding from "@/components/AdLanding";

export const metadata: Metadata = {
  title: "Free Tang Soo Do Trial Class | Prospect Martial Arts",
  description: "Book a free Tang Soo Do trial class at Prospect Martial Arts in Prospect, CT.",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Google ads landing page. noindex always; keep out of nav and sitemap.
export default async function GoogleLandingPage({ searchParams }: Props) {
  const sp = await searchParams;
  return <AdLanding source="google" preview={sp.promoPreview} />;
}
