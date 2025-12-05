import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { drinks, products } from "@/lib/data"
import { Clock, Gauge, MapPin, ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return drinks.map((drink) => ({
    id: drink.id,
  }))
}

export default async function RecipePage({ params }: Props) {
  const { id } = await params
  const drink = drinks.find((d) => d.id === id)

  if (!drink) {
    notFound()
  }

  // Get related products
  const relatedProducts = products.filter((p) => p.category === drink.id || p.category === "all").slice(0, 3)

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img src={drink.image || "/placeholder.svg"} alt={drink.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Recipes
              </Link>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-4">{drink.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-background/80">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {drink.fermentTime}
                </span>
                <span className="flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  {drink.difficulty}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {drink.origin}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">About This Brew</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{drink.description}</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {drink.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">Basic Process</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Prepare</h3>
                        <p className="text-muted-foreground text-sm">
                          Gather all ingredients and sanitize your equipment thoroughly.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Combine</h3>
                        <p className="text-muted-foreground text-sm">
                          Mix your base ingredients according to the recipe ratios.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Ferment</h3>
                        <p className="text-muted-foreground text-sm">
                          Allow fermentation at the proper temperature for {drink.fermentTime}.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Bottle & Enjoy</h3>
                        <p className="text-muted-foreground text-sm">
                          Transfer to bottles for secondary fermentation or enjoy fresh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Quick Facts</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">Origin</dt>
                      <dd className="font-medium">{drink.origin}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Fermentation Time</dt>
                      <dd className="font-medium">{drink.fermentTime}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Difficulty</dt>
                      <dd className="font-medium">{drink.difficulty}</dd>
                    </div>
                  </dl>
                </div>

                {relatedProducts.length > 0 && (
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Recommended Equipment</h3>
                    <div className="space-y-4">
                      {relatedProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/equipment/${product.slug}`}
                          className="flex gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-medium text-sm">{product.name}</h4>
                            <p className="text-accent font-bold text-sm">${product.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                      <Link href="/equipment">View All Equipment</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
