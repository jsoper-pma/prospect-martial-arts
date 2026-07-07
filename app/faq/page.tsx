import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about Prospect Martial Arts — cost, age requirements, what to wear, how long to black belt, special needs accommodation, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Prospect Martial Arts",
    description:
      "Everything you want to know before your first martial arts class in Prospect, CT.",
  },
};

const faqs = [
  {
    question: "What is Tang Soo Do?",
    answer:
      "Tang Soo Do is a traditional Korean martial art with a history spanning centuries. The name translates to \"the way of the China hand\" — a reference to its ancient roots. It is a complete martial arts system that develops striking, kicking, blocking, forms (called hyungs), weapons, and self-defense. Unlike arts focused purely on competition, Tang Soo Do is designed to develop the whole person — building discipline, focus, and confidence alongside physical skill.",
  },
  {
    question: "What age can my child start?",
    answer:
      "Three years old is the youngest we enroll. Children ages 3–4 join our Little Tigers program, which is designed specifically for very young learners. Ages 5–7 join Little Dragons. Our main Tang Soo Do program starts at age 8 and continues through teens and into adulthood.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Membership pricing is published right on each program page — Preschool memberships start at $149/month, Kids & Teens at $159/month, with Gold (unlimited) options available. For adults, the Adult Founders Membership is $139/month for unlimited training — a limited-time rate, so lock it in while spots last. Family discounts apply automatically, and the 5th family member always trains free. Visit the program page that fits your family, or text us at (203) 441-5358 and we'll walk you through the options — no pressure, no sales pitch.",
  },
  {
    question: "What should my child wear to their first class?",
    answer:
      "For the free trial class, comfortable athletic clothes are all you need — shorts and a t-shirt work great. No special gear or equipment is required to start. If your child decides to enroll, a uniform (dobok) will be provided or purchased as part of the membership they choose.",
  },
  {
    question: "How long does it take to earn a black belt?",
    answer:
      "For a student who trains consistently, earning a black belt realistically takes about four years. This varies depending on how often a student attends and how quickly they progress — but the belt system is designed to reward real skill and character development, not just time in class. The journey is the point.",
  },
  {
    question: "Is martial arts safe for kids?",
    answer:
      "Yes. Safety is our top priority. All PMA instructors are First Aid trained, and multiple instructors are present on the floor at all times. Classes are structured by rank so students are always training with others at an appropriate level. Sparring is introduced gradually and always done with proper gear and instructor supervision.",
  },
  {
    question: "Do adults need prior experience to join?",
    answer:
      "None whatsoever. Our adult program welcomes complete beginners. If you have never set foot on a martial arts mat, that's perfectly fine — our instructors will meet you exactly where you are and build from there. Many of our adult students start from zero and go on to earn their black belts.",
  },
  {
    question: "Do you accommodate kids with ADHD or special needs?",
    answer:
      "Yes. Our instructors have experience training children with ADHD, sensory processing differences, and other special needs. Martial arts is often an excellent fit for these students — the structured environment, clear expectations, and physical outlet can be genuinely transformative. If you have specific questions about how we work with your child, text or email us and we'll talk it through.",
  },
  {
    question: "What is the class schedule?",
    answer:
      "We run classes Monday through Thursday evenings, with Little Tigers and Little Dragons starting at 4:30 PM and the main program running through the evening. Saturday classes are also available depending on instructor availability. You can see the full schedule on our home page or contact us directly.",
  },
  {
    question: "Do you offer classes for adults?",
    answer:
      "Yes — our Adult Tang Soo Do program is for students ages 17 and up. Classes run Monday and Wednesday evenings at 7:00 PM. No experience is needed, and your first class is free. See our Adults page for details.",
  },
  {
    question: "What is the difference between Little Tigers, Little Dragons, and the main program?",
    answer:
      "Little Tigers (ages 3–4) is designed for our youngest students — short classes focused on listening, coordination, and fun. Little Dragons (ages 5–7) builds on that foundation with more structure, belt progressions, and age-appropriate technique. The main Tang Soo Do program (ages 8+) is a full curriculum with forms, self-defense, sparring, and a belt system that goes all the way to black belt and beyond.",
  },
  {
    question: "Do you offer birthday parties?",
    answer:
      "Yes! Birthday parties are available on Saturdays from 1:00–3:00 PM. It's a fun, active, memorable experience for kids of all ages. Contact us for details on what's included and how to book.",
  },
  {
    question: "Are private lessons available?",
    answer:
      "Private lessons are available on Fridays, Saturdays, and Sundays at $30 per 30-minute session. Private lessons are a great way to accelerate progress, work on specific techniques, or give a student one-on-one attention. Contact us or check with an instructor to schedule.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to book a free trial class. Come in, try a class, and see if it's the right fit — no commitment, no pressure. You can book directly on our website or text us at (203) 441-5358. We'll handle the rest.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          getFaqSchema(faqs),
          getBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "FAQ", url: `${SITE_URL}/faq` },
          ]),
        ]}
      />
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center text-white bg-pma-navy"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Everything you want to know before you walk through the door.
            Don&apos;t see your question? Text us and we&apos;ll answer it.
          </p>
        </div>
      </section>

      {/* ── FAQ LIST ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-sm overflow-hidden border border-gray-200"
            >
              <div
                className="px-6 py-5 bg-pma-cream"
              >
                <h2 className="font-extrabold text-base leading-snug text-pma-navy">
                  {faq.question}
                </h2>
              </div>
              <div className="px-6 py-5 bg-white">
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ──────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-pma-navy">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Text us at{" "}
            <a href={PHONE_HREF} className="font-bold hover:underline text-pma-navy">
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="font-bold hover:underline text-pma-navy">
              {EMAIL}
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
            Or just come in — your first class is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity bg-pma-red"
            >
              Book Your Free Trial Class
            </a>
            <Link
              href="/contact"
              className="text-gray-700 font-bold text-lg px-8 py-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
