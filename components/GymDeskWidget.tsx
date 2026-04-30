"use client";

const BOOKING_URL = "https://prospect-martial-arts.gymdesk.com/book/v/Ayw2q";

export default function GymDeskWidget() {
  return (
    <div className="w-full">
      {/* Main booking card */}
      <div
        className="rounded-2xl p-8 md:p-10 text-left shadow-inner"
        style={{ backgroundColor: "#f0f4f9", border: "2px solid #e2e8f0" }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8">

          {/* Left: What to expect */}
          <div className="flex-1">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#E22D33" }}
            >
              No experience needed · All ages welcome
            </p>
            <h3
              className="text-2xl font-extrabold mb-4"
              style={{ color: "#003B6F" }}
            >
              Here&apos;s what happens when you sign up:
            </h3>
            <ul className="space-y-3">
              {[
                "Fill out the short form on our booking page",
                "We confirm your free trial class date and time",
                "Show up — we take care of the rest",
                "No uniform needed, just comfortable clothes",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#003B6F" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-center text-center gap-4 md:min-w-[220px]">
            <div className="text-5xl">🥋</div>
            <p className="font-bold text-gray-800 text-sm leading-snug">
              Your first class is completely free.<br />No commitment required.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#E22D33" }}
              className="inline-block w-full text-white font-bold text-base px-6 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity text-center"
            >
              Book My Free Trial →
            </a>
            <p className="text-gray-400 text-xs">
              Opens our secure booking page
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
