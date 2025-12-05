"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background mb-4">Get In Touch</h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              Questions about brewing? Need product recommendations? We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="p-8 bg-secondary/10 rounded-xl text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Jane Brewer"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">Select a topic...</option>
                        <option value="products">Product Questions</option>
                        <option value="brewing">Brewing Help</option>
                        <option value="orders">Order Support</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">hello@homebrewexotics.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Community Forum</h3>
                        <p className="text-muted-foreground">Join our brewing community</p>
                        <p className="text-sm text-muted-foreground mt-1">Connect with fellow brewers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Based in Portland, Oregon</p>
                        <p className="text-sm text-muted-foreground mt-1">Shipping worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ teaser */}
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-serif text-lg font-bold mb-3">Common Questions</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• How long does shipping take?</li>
                    <li>• Do you ship internationally?</li>
                    <li>• What&apos;s your return policy?</li>
                    <li>• How do I track my order?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
