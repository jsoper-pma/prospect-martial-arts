import Image from "next/image";
import GymDeskWidget from "@/components/GymDeskWidget";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const STEPS = [
  "Fill out the short form",
  "We confirm your free trial class date and time",
  "Show up — we take care of the rest",
  "No uniform needed, just comfortable clothes",
] as const;

export default function TrialSplit() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start text-left">
      <div className="w-full min-w-0">
        <GymDeskWidget />
      </div>
      <div className="rounded-2xl bg-pma-navy text-white p-6 md:p-8">
        <h3 className="text-2xl font-extrabold mb-6">Here&apos;s what happens</h3>
        <ol className="space-y-4 mb-6">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pma-red text-white font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <span className="pt-1 leading-snug">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-blue-100 text-sm leading-relaxed mb-4">
          First class is free. No experience needed. No commitment.
        </p>
        <p className="mb-6">
          <a href={PHONE_HREF} className="font-semibold text-white hover:underline">
            Call or text {PHONE_DISPLAY}
          </a>
        </p>
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/gallery/promo-class.jpg"
            alt="Kids class punching in formation at Prospect Martial Arts"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
