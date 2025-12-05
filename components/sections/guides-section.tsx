import Link from "next/link"
import { ChevronRight } from "lucide-react"

const guides = [
  {
    slug: "fermentation-science",
    title: "The Science of Fermentation",
    description: "Understanding the biology behind the bubbles",
    readTime: "8 min read",
  },
  {
    slug: "mead-modern-tools",
    title: "How to Brew Mead with Modern Tools",
    description: "Ancient honey wine meets contemporary technique",
    readTime: "12 min read",
  },
  {
    slug: "keeping-kombucha-alive",
    title: "Keeping Your Kombucha Alive",
    description: "SCOBY care and maintenance guide",
    readTime: "6 min read",
  },
  {
    slug: "temperature-control",
    title: "Best Temperature Control for Ferments",
    description: "Precision brewing for consistent results",
    readTime: "10 min read",
  },
]

export function GuidesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Learn the Art</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Educational guides to master the craft
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm">{guide.description}</p>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <span className="text-xs text-muted-foreground hidden sm:block">{guide.readTime}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            View All Guides
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
