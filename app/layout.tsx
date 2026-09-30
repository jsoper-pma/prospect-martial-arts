import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrialNudge from "@/components/TrialNudge";
import ChromeGate from "@/components/ChromeGate";
import JsonLd from "@/components/JsonLd";
import { baseMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { getLocalBusinessSchema } from "@/lib/structured-data";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

// GA4 property ID — replace the placeholder with the real ID (starts with G-),
// or set NEXT_PUBLIC_GA_ID in the environment.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

// Google Ads tag (account 432-134-1345). One gtag.js loader for the whole site;
// GA4 (when a real ID is set) is configured on this same tag, never a second one.
const GOOGLE_ADS_ID = "AW-17438681850";
const gtagConfig = [GOOGLE_ADS_ID, ...(GA_ID !== "G-XXXXXXXXXX" ? [GA_ID] : [])]
  .map((id) => `gtag('config', '${id}');`)
  .join("\n");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Prospect Martial Arts",
    default: "Prospect Martial Arts — Tang Soo Do Classes in Prospect, CT",
  },
  description: baseMetadata.description,
  keywords: baseMetadata.keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: baseMetadata.siteName,
  },
  twitter: {
    card: "summary_large_image",
    creator: baseMetadata.twitterHandle,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${nunito.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${gtagConfig}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={getLocalBusinessSchema()} />
        {/* /demo ships its own dark-themed header and footer — see ChromeGate. */}
        <ChromeGate>
          <Navbar />
        </ChromeGate>
        <main className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
          <StickyMobileCTA />
          <TrialNudge />
        </ChromeGate>
        <Script src="https://app.gymdesk.com/js/widgets.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
