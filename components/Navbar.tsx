"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Vouchers", href: "/vouchers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="StoryGiraffe"
            className="h-28 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition-colors ${
                pathname === href
                  ? "text-brand-amber"
                  : "text-gray-600 hover:text-brand-navy"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/signin"
            className="text-sm font-semibold text-brand-navy border-2 border-brand-navy px-5 py-2 rounded-full hover:bg-brand-navy hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/create"
            className="text-sm font-semibold text-white bg-brand-amber px-5 py-2 rounded-full hover:bg-brand-amber-hover transition-colors shadow-sm"
          >
            Create
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2.5 text-sm font-medium ${
                pathname === href ? "text-brand-amber" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-gray-100 mt-3">
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-brand-navy border-2 border-brand-navy py-2 rounded-full"
            >
              Sign In
            </Link>
            <Link
              href="/create"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-white bg-brand-amber py-2 rounded-full"
            >
              Create
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
