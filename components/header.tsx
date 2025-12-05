"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/equipment", label: "Equipment" },
    { href: "/recipes", label: "Recipes" },
    { href: "/guides", label: "Guides" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path
                d="M11 4h10v4l5 18c0.5 2-1 4-3 4H9c-2 0-3.5-2-3-4l5-18V4z"
                fill="currentColor"
                stroke="#A45A2A"
                strokeWidth="1.5"
                className="text-background"
              />
              <rect x="11" y="2" width="10" height="4" rx="1" fill="#A45A2A" />
              <circle cx="14" cy="20" r="1.5" fill="#E5B566" className="animate-pulse" />
              <circle
                cx="18"
                cy="17"
                r="1.2"
                fill="#E5B566"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <circle cx="15" cy="14" r="1" fill="#E5B566" className="animate-pulse" style={{ animationDelay: "1s" }} />
            </svg>
            {/* Vapor effect */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">
            HomeBrew<span className="text-primary">Exotics</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 px-3 py-1.5 text-sm bg-muted border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-accent transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
