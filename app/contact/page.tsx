import Link from "next/link";

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
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: "#003B6F" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact &amp; Location</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you. Stop by, give us a call, or send us a message — we&apos;re always happy to help.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + MAP ────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#003B6F" }}>
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl"
                  style={{ backgroundColor: "#003B6F" }}
                >
                  📍
                </div>
                <div>
                  <p className="font-bold text-gray-900">Address</p>
                  <p className="text-gray-600">73 Waterbury Road</p>
                  <p className="text-gray-600">Prospect, CT</p>
                  <a
                    href="https://maps.google.com/?q=73+Waterbury+Road+Prospect+CT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold mt-1 inline-block hover:underline"
                    style={{ color: "#E22D33" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl"
                  style={{ backgroundColor: "#003B6F" }}
                >
                  📞
                </div>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a
                    href="tel:2034415358"
                    className="text-gray-600 hover:underline text-lg"
                  >
                    (203) 441-5358
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl"
                  style={{ backgroundColor: "#003B6F" }}
                >
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <a
                    href="mailto:info@prospectma.com"
                    className="text-gray-600 hover:underline"
                  >
                    info@prospectma.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl"
                  style={{ backgroundColor: "#003B6F" }}
                >
                  🌐
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Follow Us</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://www.facebook.com/Pmatangsoodo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#1877F2" }}
                    >
                      Facebook — @Pmatangsoodo
                    </a>
                    <a
                      href="https://www.instagram.com/prospectmartialartsct"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#E1306C" }}
                    >
                      Instagram — @prospectmartialartsct
                    </a>
                    <a
                      href="https://www.youtube.com/@ProspectMartialArts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#FF0000" }}
                    >
                      YouTube — @ProspectMartialArts
                    </a>
                  </div>
                </div>
              </div>

              {/* Private Lessons */}
              <div
                className="rounded-2xl p-5 mt-4"
                style={{ backgroundColor: "#f4f7fb", border: "1px solid #e2e8f0" }}
              >
                <p className="font-bold text-gray-900 mb-1">🥋 Private Lessons Available</p>
                <p className="text-gray-600 text-sm">
                  Available Friday, Saturday, and Sunday — $30 per 30 minutes.
                  Contact us or check with an instructor for availability.
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Prospect Martial Arts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.0!2d-73.0!3d41.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b4a0a0a0a0a1%3A0x0!2s73+Waterbury+Rd%2C+Prospect%2C+CT+06712!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── FULL CLASS SCHEDULE ───────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white mb-4">
            Class Schedule
          </h2>
          <p className="text-blue-200 text-center mb-10 text-sm">
            New schedule begins June 8, 2026 following the promotion ceremony.
          </p>

          {/* Weekday table */}
          <div className="overflow-x-auto rounded-2xl shadow-lg mb-8">
            <table className="w-full text-sm text-center">
              <thead>
                <tr style={{ backgroundColor: "#E22D33" }}>
                  <th className="text-white font-bold px-4 py-3 text-left">Time</th>
                  <th className="text-white font-bold px-4 py-3">Monday &amp; Wednesday</th>
                  <th className="text-white font-bold px-4 py-3">Tuesday &amp; Thursday</th>
                </tr>
              </thead>
              <tbody>
                {weekdaySchedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-3 font-semibold text-left" style={{ color: "#003B6F" }}>
                      {row.time}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.monWed}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tuesThu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Saturday */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4 text-center" style={{ color: "#003B6F" }}>
              Saturday Classes
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {saturdaySchedule.map((row) => (
                <div key={row.time} className="text-center px-6 py-3 rounded-xl" style={{ backgroundColor: "#f4f7fb" }}>
                  <p className="font-bold text-sm" style={{ color: "#E22D33" }}>{row.time}</p>
                  <p className="font-semibold text-gray-800 mt-1">{row.cls}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              * Saturday classes depend on instructor availability. Check with instructors for dates.
            </p>
          </div>

          <div
            className="text-center rounded-2xl p-5"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p className="text-white font-semibold">
              🎂 <strong>Birthday Parties</strong> available Saturdays 1–3 PM &nbsp;·&nbsp;
              🥋 <strong>Private Lessons</strong> Fri, Sat &amp; Sun — $30 / 30 min
            </p>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL CTA ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Ready to Try a Free Class?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Head back to our home page to book your free trial class — no commitment, no experience needed.
          </p>
          <Link
            href="/#trial"
            style={{ backgroundColor: "#E22D33" }}
            className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Book Your Free Trial Class
          </Link>
        </div>
      </section>
    </>
  );
}
