import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Copper gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A45A2A]/20 to-transparent pointer-events-none" />

      {/* Steam animation */}
      <div className="absolute bottom-0 left-1/4 w-32 h-48 bg-background/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/3 w-24 h-36 bg-background/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                <path
                  d="M11 4h10v4l5 18c0.5 2-1 4-3 4H9c-2 0-3.5-2-3-4l5-18V4z"
                  fill="currentColor"
                  stroke="#E5B566"
                  strokeWidth="1.5"
                  className="text-foreground"
                />
                <rect x="11" y="2" width="10" height="4" rx="1" fill="#E5B566" />
                <circle cx="14" cy="20" r="1.5" fill="#E5B566" />
              </svg>
              <span className="font-serif text-xl font-bold">
                HomeBrew<span className="text-accent">Exotics</span>
              </span>
            </Link>
            <p className="text-sm text-background/70">Craft consciously. Sip sustainably.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/equipment" className="hover:text-accent transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-accent transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-accent transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/guides/fermentation-science" className="hover:text-accent transition-colors">
                  Fermentation Science
                </Link>
              </li>
              <li>
                <Link href="/guides/beginner-brewing" className="hover:text-accent transition-colors">
                  Beginner Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; 2025 HomeBrewExotics.com — All rights reserved.</p>
            <p>Participant in the Amazon Associates Program.</p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
