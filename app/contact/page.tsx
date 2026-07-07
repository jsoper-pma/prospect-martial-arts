import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import {
  ADDRESS,
  BOOKING_URL,
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

const weekdaySchedule = [
  { time: "4:30 – 5:00 PM", monWed: "Little Tigers", tuesThu: "Little Tigers" },
  { time: "5:00 – 5:30 PM", monWed: "Little Dragons", tuesThu: "Little Dragons" },
  { time: "5:30 – 6:15 PM", monWed: "Beginners", tuesThu: "Intermediate" },
  { time: "6:15 – 7:00 PM", monWed: "Intermediate", tuesThu: "Beginners" },
  { time: "7:00 – 7:15 PM", monWed: "Leadership", tuesThu: "—" },
  { time: "7:00 – 7:45 PM", monWed: "Adult Gups 17+", tuesThu: "Black Belts" },
  { time: "7:45 – 8:30 PM", monWed: "Advanced", tuesThu: "Advanced" },
];

const saturdaySchedule = [
  { time: "9:00 – 9:30 AM", cls: "Little Dragons" },
  { time: "9:40 – 10:40 AM", cls: "Sparring & Endurance" },
  { time: "10:50 – 11:30 AM", cls: "Weapons" },
];

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
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
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
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold text-pma-navy"
                  >
                    book your free trial class online
                  </a>
                  .
                </p>
              </div>

              {/* Private Lessons */}
              <div className="rounded-2xl p-5 bg-pma-light border border-gray-200">
                <p className="font-bold text-gray-900 mb-1">Private Lessons Available</p>
                <p className="text-gray-600 text-sm">
                  Available Friday, Saturday, and Sunday — $30 per 30 minutes. Text or email us to
                  check instructor availability.
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
            Current schedule — classes run Monday through Thursday, plus Saturdays.
          </p>

          {/* Weekday table */}
          <div className="overflow-x-auto rounded-2xl shadow-lg mb-8">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-pma-red">
                  <th className="text-white font-bold px-4 py-3 text-left">Time</th>
                  <th className="text-white font-bold px-4 py-3">Monday &amp; Wednesday</th>
                  <th className="text-white font-bold px-4 py-3">Tuesday &amp; Thursday</th>
                </tr>
              </thead>
              <tbody>
                {weekdaySchedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-3 font-semibold text-left text-pma-navy">{row.time}</td>
                    <td className="px-4 py-3 text-gray-700">{row.monWed}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tuesThu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Saturday */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4 text-center text-pma-navy">Saturday Classes</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {saturdaySchedule.map((row) => (
                <div key={row.time} className="text-center px-6 py-3 rounded-xl bg-pma-light">
                  <p className="font-bold text-sm text-pma-red">{row.time}</p>
                  <p className="font-semibold text-gray-800 mt-1">{row.cls}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              * Saturday classes depend on instructor availability. Check with instructors for dates.
            </p>
          </div>

          <div className="text-center rounded-2xl p-5 bg-white/10 border border-white/20">
            <p className="text-white font-semibold">
              <strong>Birthday Parties</strong> available Saturdays 1–3 PM &nbsp;·&nbsp;{" "}
              <strong>Private Lessons</strong> Fri, Sat &amp; Sun — $30 / 30 min
            </p>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL CTA ────────────────────────────────────── */}
      <section className="py-16 px-4 text-center bg-pma-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-pma-navy">Ready to Try a Free Class?</h2>
          <p className="text-gray-600 text-lg mb-8">
            No commitment, no experience needed — just come see what we&apos;re all about. Booking
            takes less than a minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pma-red text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block text-pma-navy font-bold text-lg px-10 py-4 rounded-full border-2 border-pma-navy hover:bg-pma-navy hover:text-white transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
