"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const drinks = [
  {
    id: "kombucha",
    name: "Kombucha",
    description: "Fermented tea with probiotics",
    image: "/kombucha-drink-glass.jpg",
  },
  {
    id: "chicha-morada",
    name: "Chicha Morada",
    description: "Peruvian purple corn drink",
    image: "/chicha-morada-purple-corn-drink.jpg",
  },
  {
    id: "ginger-beer",
    name: "Ginger Beer",
    description: "Spicy fermented ginger soda",
    image: "/ginger-beer-brewing.jpg",
  },
  {
    id: "jun-tea",
    name: "Jun Tea",
    description: "Green tea fermented with honey",
    image: "/jun-tea-green-honey.jpg",
  },
  { id: "kvass", name: "Kvass", description: "Traditional Slavic rye beverage", image: "/kvass-rye-bread-drink.jpg" },
  { id: "mead", name: "Mead", description: "Ancient honey wine", image: "/mead-honey-wine-glass.jpg" },
]

export function DrinksCarouselSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Exotic Drinks Collection</h2>
            <p className="text-muted-foreground max-w-xl">Explore ancient recipes reimagined for the modern brewer</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {drinks.map((drink) => (
            <Link key={drink.id} href={`/recipes/${drink.id}`} className="group flex-shrink-0 w-72 snap-start">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <img
                  src={drink.image || "/placeholder.svg"}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay with recipe preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-background mb-2">{drink.name}</h3>
                  <p className="text-background/80 text-sm">{drink.description}</p>
                  <span className="inline-block mt-3 text-accent text-sm font-medium group-hover:underline">
                    View Recipe →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
