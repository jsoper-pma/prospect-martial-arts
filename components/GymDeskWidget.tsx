"use client";

import { useEffect, useRef } from "react";
import { BOOKING_URL, GYMDESK_WIDGET } from "@/lib/site";

declare global {
  interface Window {
    gdWidgets?: {
      init?: () => void;
      initBooking?: () => void;
    };
  }
}

function applyGymdeskAttrs(el: HTMLDivElement) {
  el.classList.add("gymdesk-booking");
  el.setAttribute("attr-gym", GYMDESK_WIDGET.gym);
  el.setAttribute("attr-schedule", GYMDESK_WIDGET.schedule);
  el.setAttribute("attr-form", GYMDESK_WIDGET.form);
  el.setAttribute("attr-labelColor", GYMDESK_WIDGET.labelColor);
  el.setAttribute("attr-placeholderColor", GYMDESK_WIDGET.placeholderColor);
}

function rewriteLocalhostIframe(el: HTMLDivElement) {
  // widgets.js points iframes at gymdesk.test when hostname is localhost.
  const iframe = el.querySelector("iframe");
  if (!iframe) return;
  const src = iframe.getAttribute("src") ?? "";
  if (src.includes("gymdesk.test")) {
    iframe.setAttribute("src", src.replace(/https?:\/\/gymdesk\.test\//, "https://app.gymdesk.com/"));
  }
}

function mountOfficialIframe(el: HTMLDivElement) {
  if (el.querySelector("iframe")) return;
  const params = new URLSearchParams({
    schedule: GYMDESK_WIDGET.schedule,
    form: GYMDESK_WIDGET.form,
    labelColor: GYMDESK_WIDGET.labelColor,
    placeholderColor: GYMDESK_WIDGET.placeholderColor,
  });
  const iframe = document.createElement("iframe");
  iframe.src = `https://app.gymdesk.com/widgets/book/render/gym/${GYMDESK_WIDGET.gym}?${params.toString()}`;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.title = "Book a free trial class";
  iframe.style.width = "100%";
  iframe.style.minHeight = "640px";
  iframe.style.border = "0";
  el.classList.add("gymdesk-frame-container");
  el.appendChild(iframe);
}

function tryInit(el: HTMLDivElement): boolean {
  applyGymdeskAttrs(el);
  if (typeof window.gdWidgets?.initBooking === "function") {
    window.gdWidgets.initBooking();
    rewriteLocalhostIframe(el);
  } else if (typeof window.gdWidgets?.init === "function") {
    window.gdWidgets.init();
    rewriteLocalhostIframe(el);
  }
  return Boolean(el.querySelector("iframe"));
}

export default function GymDeskWidget() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    applyGymdeskAttrs(el);

    let cancelled = false;
    let tries = 0;
    let timer: number | undefined;

    const run = () => {
      if (cancelled || !hostRef.current) return;
      if (tryInit(hostRef.current)) return;
      tries += 1;
      if (tries < 40) {
        timer = window.setTimeout(run, 250);
      } else {
        mountOfficialIframe(hostRef.current);
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={hostRef}
        className="gymdesk-booking w-full min-h-[640px]"
      />
      <p className="mt-4 text-center text-gray-600 text-xs">
        Prefer to book on Gymdesk?{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold text-pma-navy hover:text-pma-red"
        >
          Open the booking page
        </a>
      </p>
    </div>
  );
}
