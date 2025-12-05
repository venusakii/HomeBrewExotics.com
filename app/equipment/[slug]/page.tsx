import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { Star, Check, ExternalLink, ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Back button */}
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Equipment
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-4xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground text-lg">{product.description}</p>

              {/* Features */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-3">Features & Specs</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Sustainability & Materials</h3>
                <p className="text-muted-foreground mb-2">{product.materials}</p>
                <p className="text-secondary text-sm">{product.sustainability}</p>
              </div>

              {/* Ideal For */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-3">Ideal Brewing Use</h3>
                <div className="flex flex-wrap gap-2">
                  {product.idealFor.map((use, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
