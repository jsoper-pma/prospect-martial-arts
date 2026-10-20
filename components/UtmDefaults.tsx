"use client";
import { useEffect } from "react";

// Adds default utm_* params to the address bar when an ad click arrives without them,
// so Gymdesk/analytics see the source. Existing params are never overwritten.
export default function UtmDefaults({ defaults }: { defaults: Record<string, string> }) {
  useEffect(() => {
    const url = new URL(window.location.href);
    let changed = false;
    for (const [k, v] of Object.entries(defaults)) {
      if (!url.searchParams.get(k)) {
        url.searchParams.set(k, v);
        changed = true;
      }
    }
    if (changed) window.history.replaceState(null, "", url.toString());
  }, [defaults]);
  return null;
}
