"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All" },
  { id: "kombucha", label: "Kombucha" },
  { id: "kvass", label: "Kvass" },
  { id: "mead", label: "Mead" },
  { id: "botanical", label: "Botanical Ferments" },
]

const products = [
  { id: 1, name: "Glass Fermentation Jar", category: "kombucha", price: "$34.99", image: "/glass-fermentation-jar-with-kombucha.jpg" },
  { id: 2, name: "Brewing Thermometer Pro", category: "all", price: "$24.99", image: "/digital-brewing-thermometer.jpg" },
  { id: 3, name: "Bamboo Lid Set", category: "kombucha", price: "$19.99", image: "/bamboo-brewing-lid-set.jpg" },
  { id: 4, name: "Ceramic Kvass Crock", category: "kvass", price: "$59.99", image: "/ceramic-fermentation-crock.jpg" },
  { id: 5, name: "Honey Mead Starter Kit", category: "mead", price: "$89.99", image: "/mead-brewing-starter-kit.jpg" },
  { id: 6, name: "Botanical Infuser Set", category: "botanical", price: "$44.99", image: "/botanical-infusion-brewing-set.jpg" },
  { id: 7, name: "Temperature Controller", category: "all", price: "$79.99", image: "/fermentation-temperature-controller.jpg" },
  { id: 8, name: "Glass Bottles 6-Pack", category: "all", price: "$29.99", image: "/swing-top-glass-bottles-for-brewing.jpg" },
  { id: 9, name: "pH Testing Kit", category: "all", price: "$15.99", image: "/ph-testing-kit-for-brewing.jpg" },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory || p.category === "all")

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Featured Brewing Equipment</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Professional-grade tools for every type of ferment
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/equipment/${product.id}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Condensation effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Copper frame shimmer */}
                <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/20 transition-colors duration-300 rounded-lg m-2" />
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/equipment">View All Equipment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
