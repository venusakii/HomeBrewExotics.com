import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { guides } from "@/lib/data"
import { ChevronRight, Clock } from "lucide-react"

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background mb-4">Brewing Guides</h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">Master the art and science of fermentation</p>
          </div>
        </section>

        {/* Guides List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {guide.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
