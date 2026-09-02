import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import TrialSplit from "@/components/TrialSplit";
import JsonLd from "@/components/JsonLd";
import ScheduleTable from "@/components/ScheduleTable";
import SchoolNotices from "@/components/SchoolNotices";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import {
  ADDRESS,
  EMAIL,
  MAPS_EMBED_URL,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
  SOCIALS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location — Prospect, CT",
  description: `Contact Prospect Martial Arts at ${ADDRESS.full}. Call or text (203) 441-5358, email info@prospectma.com, or book a free trial class online. Directions, schedule, and more.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Prospect Martial Arts",
    description: `Visit us at ${ADDRESS.full}. First class free.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ])}
      />

      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section className="py-20 px-4 text-center text-white bg-pma-navy">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact &amp; Location</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
            The fastest way to get started is to book a free trial class online. You can also
            contact us directly via phone or email, and we&apos;ll guide you to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trial"
              className="bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book a Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO + MAP ────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-extrabold mb-8 text-pma-navy">Get in Touch</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white bg-pma-navy">
                  <MapPin className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Address</p>
                  <p className="text-gray-600">{ADDRESS.street}</p>
                  <p className="text-gray-600">
                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                  </p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold mt-1 inline-block hover:underline text-pma-red"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white bg-pma-navy">
                  <Phone className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a href={PHONE_HREF} className="text-gray-600 hover:underline text-lg">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-gray-400 text-xs mt-0.5">Call or text — texting is fastest</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white bg-pma-navy">
                  <Mail className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white bg-pma-navy">
                  <Globe className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Follow Us</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href={SOCIALS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline text-pma-navy"
                    >
                      Facebook — @Pmatangsoodo
                    </a>
                    <a
                      href={SOCIALS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline text-pma-navy"
                    >
                      Instagram — @prospectmartialartsct
                    </a>
                    <a
                      href={SOCIALS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline text-pma-navy"
                    >
                      YouTube — @ProspectMartialArts
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time note */}
              <div className="rounded-2xl p-5 mt-2 bg-pma-cream border border-pma-gold/40">
                <p className="font-bold text-gray-900 mb-1">Best Way to Reach Us</p>
                <p className="text-gray-700 text-sm">
                  Text <strong>{PHONE_DISPLAY}</strong> or email{" "}
                  <a href={`mailto:${EMAIL}`} className="underline text-pma-navy">
                    {EMAIL}
                  </a>{" "}
                  — we respond to all messages within 24 hours. Or skip the wait entirely and{" "}
                  <a
                    href="#trial"
                    className="underline font-semibold text-pma-navy"
                  >
                    book your free trial class online
                  </a>
                  .
                </p>
              </div>

            </div>
          </div>

          {/* Storefront photo + Google Map */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/storefront.jpg"
                alt={`Prospect Martial Arts storefront at ${ADDRESS.full}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Prospect Martial Arts Location — 73 Waterbury Road, Unit 2, Prospect, CT 06712"
                src={MAPS_EMBED_URL}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL CLASS SCHEDULE ───────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white mb-4">Class Schedule</h2>
          <p className="text-blue-200 text-center mb-10 text-sm">
            Classes run Monday through Thursday evenings — each class has its own color.
          </p>

          <SchoolNotices />

          {/* Weekday table */}
          <div className="mb-8">
            <ScheduleTable />
          </div>

          <div className="text-center rounded-2xl p-5 bg-white/10 border border-white/20">
            <p className="text-white font-semibold">
              <strong>Birthday Parties</strong> available Saturdays 1–3 PM &nbsp;·&nbsp;{" "}
              <strong>Private Lessons</strong> available by appointment — $30 / 30 min
            </p>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL CTA ────────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 text-center bg-pma-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-pma-navy">Ready to Try a Free Class?</h2>
            <p className="text-gray-600 text-lg mb-8">
              No commitment, no experience needed — just come see what we&apos;re all about. Booking
              takes less than a minute.
            </p>
          </div>
          <TrialSplit />
          <p className="mt-6">
            <a
              href={PHONE_HREF}
              className="inline-block text-pma-navy font-bold text-lg px-10 py-4 rounded-full border-2 border-pma-navy hover:bg-pma-navy hover:text-white transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
