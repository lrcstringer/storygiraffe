"use client";

import Link from "next/link";
import { Search, MapPin } from "lucide-react";

function AppleStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="white">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-tight opacity-75">
          Download on the
        </div>
        <div className="text-sm font-semibold leading-tight">App Store</div>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="white">
        <path d="M3.18 23.76c.35.2.74.24 1.12.14l12.8-7.4-2.8-2.8-11.12 10.06zM.2 1.24C.07 1.55 0 1.9 0 2.3v19.4c0 .4.07.75.2 1.06l.1.12 10.86-10.86v-.24L.3 1.12.2 1.24zM20.06 10.56l-2.7-1.56-3.1 3.1 3.1 3.1 2.72-1.57c.78-.45.78-1.63-.02-2.07zM4.3.1L17.1 7.5l-2.8 2.8L3.18.24C3.56.14 3.96.18 4.3.1z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-tight opacity-75">Get it on</div>
        <div className="text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow behind the phone */}
      <div className="absolute inset-0 bg-brand-amber/25 rounded-[3rem] blur-2xl scale-90 pointer-events-none" />
      {/* Phone bezel */}
      <div className="relative bg-gray-900 rounded-[2.8rem] border-[5px] border-gray-700 shadow-2xl overflow-hidden w-64">
        {/* Dynamic island / notch bar */}
        <div className="h-7 bg-gray-900 flex items-center justify-center">
          <div className="w-24 h-4 bg-gray-800 rounded-full" />
        </div>
        {/* Screenshot fills the rest */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Screenshot.jpg"
          alt="StoryGiraffe app screenshot"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Image in normal flow — its natural height drives the section size, no cropping */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Geo.png"
        alt=""
        aria-hidden="true"
        className="w-full h-auto block"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-navy/65" />

      {/* Content — sits over the image, pushed down by navbar height */}
      <div className="absolute inset-0 pt-32 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-14 items-center w-full">
          {/* ── Left: copy ── */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-brand-amber text-xs font-bold uppercase tracking-widest mb-5">
              <MapPin size={13} />
              Geo-located audio storytelling
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.15] mb-6">
              Explore the World Through{" "}
              <span className="text-brand-amber">Untold Stories</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Discover hidden histories, local legends, and personal narratives
              woven into the places around you. Drive the highways and
              countryside. Walk the streets. Hear the stories.
            </p>

            {/* Search bar */}
            <form
              className="relative mb-8 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="search"
                placeholder="Search by city, landmark, or story…"
                className="w-full pl-11 pr-28 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-amber"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-amber text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-amber-hover transition-colors"
              >
                Search
              </button>
            </form>

          </div>

          {/* ── Right: phone + store badges side by side ── */}
          <div className="hidden md:flex flex-row items-center gap-6">
            <PhoneMockup />
            <div className="flex flex-col gap-3">
              <AppleStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="#FFFBF2"
          />
        </svg>
      </div>
    </section>
  );
}
