import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Vouchers", href: "/vouchers" },
];

const ACCOUNT_LINKS = [
  { label: "Sign In", href: "/signin" },
  { label: "Create a Tour", href: "/create" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-white font-extrabold text-lg mb-3">
              🦒 StoryGiraffe
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Geo-located audio storytelling. Discover the stories behind every
              place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <div className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Account
            </div>
            <ul className="space-y-2.5 text-sm">
              {ACCOUNT_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} StoryGiraffe. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
