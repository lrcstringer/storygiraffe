import Link from "next/link";
import { Search, Headphones, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Search,
    step: "01",
    title: "Find a Story Near You",
    description:
      "Search by city or landmark, or let the app discover stories around your current location. Browse hundreds of geo-located audio tours curated by locals and travellers.",
  },
  {
    icon: Headphones,
    step: "02",
    title: "Listen & Explore",
    description:
      "Put in your earphones and follow the GPS-guided audio as you walk. Stories play automatically when you reach each location — no tapping required.",
  },
  {
    icon: PenLine,
    step: "03",
    title: "Share Your Own Story",
    description:
      "Have a story to tell about a place you love? Create and publish your own geo-located audio tour and share it with curious explorers worldwide.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-amber text-xs font-bold uppercase tracking-widest">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-3 leading-tight">
            Explore at your own pace with
            <br />
            <span className="text-brand-amber">StoryGiraffe</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            No guides. No schedules. Just you, your earphones, and the stories
            waiting around every corner.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Large step number watermark */}
              <span className="text-[7rem] font-black leading-none text-gray-50 absolute -top-4 -right-2 select-none group-hover:text-amber-50 transition-colors pointer-events-none">
                {step}
              </span>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-amber transition-colors duration-300">
                <Icon
                  size={26}
                  className="text-brand-amber group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="relative text-xl font-bold text-brand-navy mb-3">
                {title}
              </h3>
              <p className="relative text-gray-500 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-navy-light transition-colors shadow-lg text-sm md:text-base"
          >
            Browse All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
