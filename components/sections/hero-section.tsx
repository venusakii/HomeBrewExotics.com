"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Animated bubbles background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-foreground" />

        {/* Animated bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-accent/20"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-5%`,
                animation: `rise ${Math.random() * 10 + 10}s infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Copper shimmer lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Steam effect above text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-48 h-24 bg-background/5 rounded-full blur-3xl" />

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 text-balance">
          Brew Like an <span className="text-accent">Alchemist</span>
        </h1>

        <p className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto mb-4 text-pretty">
          Create exotic drinks at home.
        </p>
        <p className="text-lg text-background/60 max-w-xl mx-auto mb-10">From ancient elixirs to modern brews.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Link href="/equipment">Shop Kits</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/30 text-background hover:bg-background/10 px-8 bg-transparent"
          >
            <Link href="/guides">Learn Brewing</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
