"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/lib/data"
import { Star } from "lucide-react"

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [skillLevel, setSkillLevel] = useState("all")

  const filteredProducts = products.filter((product) => {
    if (activeCategory !== "all" && product.category !== activeCategory && product.category !== "all") {
      return false
    }
    return true
  })

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background mb-4">Brewing Equipment</h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              Professional-grade tools designed for the modern home brewer
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat.id)}
                    className={activeCategory === cat.id ? "bg-primary text-primary-foreground" : ""}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/equipment/${product.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Metal reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <p className="text-accent font-bold text-lg">${product.price.toFixed(2)}</p>
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
