import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — StoryGiraffe",
  description:
    "Learn about StoryGiraffe — the geo-located audio storytelling app.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-brand-amber text-xs font-bold uppercase tracking-widest">
            Our story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            We believe every place <br />
            <span className="text-brand-amber">has something to say</span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            StoryGiraffe is a geo-located audio storytelling app that connects
            curious people with the hidden histories, local legends, and
            personal narratives tied to real places.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-cream py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-amber text-xs font-bold uppercase tracking-widest">
              Our mission
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-3 mb-5">
              Turning the world into a living library
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We give storytellers the tools to anchor their narratives to
              specific locations, and give explorers the ability to discover
              those stories as they walk through the world. Whether it&apos;s a
              historian sharing the secrets of an old building, a local
              describing a childhood memory, or a novelist weaving fiction into
              a real street — StoryGiraffe brings those voices to life exactly
              where they belong.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-6xl mb-4">🦒</div>
            <div className="text-brand-navy font-extrabold text-2xl">
              StoryGiraffe
            </div>
            <div className="text-gray-400 text-sm mt-1">
              Geo-located audio storytelling
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
