"use client";

import { usePathname } from "next/navigation";

// Hides the standard navy site chrome (Navbar / Footer / StickyMobileCTA)
// on routes that supply their own — currently just /demo, which ships a
// dark-themed header and footer of its own.
//
// Server components can still be passed in as `children`; only this
// wrapper is a client component.
export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/demo")) return null;
  return <>{children}</>;
}
