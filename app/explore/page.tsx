import type { Metadata } from "next";
import { Search, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Stories — StoryGiraffe",
  description:
    "Browse geo-located audio stories from around the world on StoryGiraffe.",
};

// Placeholder tour cards — replace with Firestore data
const PLACEHOLDER_TOURS = [
  {
    id: 1,
    title: "The Lost Harbour District",
    location: "Cape Town, South Africa",
    duration: "45 min",
    category: "History",
  },
  {
    id: 2,
    title: "Legends of the Old Quarter",
    location: "Hanoi, Vietnam",
    duration: "60 min",
    category: "Culture",
  },
  {
    id: 3,
    title: "Street Art & Stories",
    location: "Melbourne, Australia",
    duration: "30 min",
    category: "Art",
  },
  {
    id: 4,
    title: "Secrets of the Medina",
    location: "Marrakech, Morocco",
    duration: "50 min",
    category: "History",
  },
  {
    id: 5,
    title: "Berlin Wall Stories",
    location: "Berlin, Germany",
    duration: "75 min",
    category: "History",
  },
  {
    id: 6,
    title: "The Jazz Neighbourhood",
    location: "New Orleans, USA",
    duration: "40 min",
    category: "Music",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  History: "bg-amber-100 text-amber-700",
  Culture: "bg-blue-100 text-blue-700",
  Art: "bg-purple-100 text-purple-700",
  Music: "bg-green-100 text-green-700",
};

export default function ExplorePage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Explore <span className="text-brand-amber">Stories</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover hundreds of geo-located audio tours from around the world.
          </p>
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="search"
              placeholder="Search by city, landmark, or story…"
              className="w-full pl-11 pr-5 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm shadow-xl focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Tour grid */}
      <section className="bg-brand-cream py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-brand-navy mb-8">
            Featured Stories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_TOURS.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer group"
              >
                {/* Placeholder image area */}
                <div className="h-40 bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center">
                  <MapPin
                    size={32}
                    className="text-brand-amber/60 group-hover:text-brand-amber transition-colors"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${
                      CATEGORY_COLORS[tour.category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tour.category}
                  </span>
                  <h3 className="font-bold text-brand-navy text-base mb-1 group-hover:text-brand-amber transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={12} />
                    <span>{tour.location}</span>
                    <span className="mx-1">·</span>
                    <span>{tour.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
