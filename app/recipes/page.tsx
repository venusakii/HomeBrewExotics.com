import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { drinks } from "@/lib/data"
import { Clock, Gauge } from "lucide-react"

export default function RecipesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background mb-4">Exotic Drink Recipes</h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              Ancient recipes reimagined for the modern home brewer
            </p>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drinks.map((drink) => (
                <Link key={drink.id} href={`/recipes/${drink.id}`} className="group">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                    <img
                      src={drink.image || "/placeholder.svg"}
                      alt={drink.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="font-serif text-3xl font-bold text-background mb-2">{drink.name}</h2>
                      <div className="flex items-center gap-4 text-background/70 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {drink.fermentTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-4 h-4" />
                          {drink.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                    {drink.description}
                  </p>
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
