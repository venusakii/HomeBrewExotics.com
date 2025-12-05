import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { guides } from "@/lib/data"
import { ArrowLeft, Clock } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  // Get other guides for sidebar
  const otherGuides = guides.filter((g) => g.slug !== slug).slice(0, 3)

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-foreground py-16">
          <div className="container mx-auto px-4">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Guides
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-background/20 text-background text-sm font-medium rounded">
                {guide.category}
              </span>
              <span className="flex items-center gap-1 text-background/70 text-sm">
                <Clock className="w-4 h-4" />
                {guide.readTime}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4 max-w-3xl">{guide.title}</h1>
            <p className="text-xl text-background/70 max-w-2xl">{guide.description}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground">
                  {guide.description} This comprehensive guide will walk you through everything you need to know.
                </p>

                <h2 className="font-serif">Introduction</h2>
                <p>
                  Welcome to our in-depth exploration of {guide.title.toLowerCase()}. Whether you&apos;re a beginner
                  just starting your brewing journey or an experienced fermenter looking to refine your technique, this
                  guide will provide valuable insights and practical knowledge.
                </p>

                <h2 className="font-serif">Key Concepts</h2>
                <p>
                  Understanding the fundamentals is essential for success. Here we&apos;ll cover the core principles
                  that underpin this topic, from the science behind fermentation to the practical techniques used by
                  master brewers.
                </p>

                <ul>
                  <li>Understanding the biological processes at work</li>
                  <li>Selecting the right equipment for your needs</li>
                  <li>Temperature and environmental control</li>
                  <li>Timing and patience in the brewing process</li>
                  <li>Troubleshooting common issues</li>
                </ul>

                <h2 className="font-serif">Step-by-Step Process</h2>
                <p>
                  Follow these detailed steps to achieve the best results. Each stage is crucial for developing the
                  flavors and characteristics you&apos;re looking for in your final product.
                </p>

                <h3>Preparation</h3>
                <p>
                  Begin by gathering all necessary ingredients and equipment. Sanitation is paramount — clean everything
                  that will come into contact with your brew to prevent contamination.
                </p>

                <h3>Execution</h3>
                <p>
                  With everything prepared, you can begin the main brewing process. Pay close attention to temperatures,
                  timing, and the visual cues that indicate healthy fermentation.
                </p>

                <h3>Finishing</h3>
                <p>
                  The final steps are just as important as the beginning. Proper bottling, storage, and aging can make
                  the difference between a good brew and a great one.
                </p>

                <h2 className="font-serif">Tips from the Experts</h2>
                <blockquote>
                  &quot;The best brewers are those who observe patiently and learn from every batch. Each ferment
                  teaches you something new.&quot;
                </blockquote>

                <h2 className="font-serif">Conclusion</h2>
                <p>
                  Mastering these techniques takes time and practice, but the rewards are well worth the effort. Keep
                  experimenting, keep learning, and most importantly, enjoy the process of creating something unique
                  with your own hands.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                  <h3 className="font-serif text-xl font-bold mb-4">More Guides</h3>
                  <div className="space-y-4">
                    {otherGuides.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="text-xs text-primary font-medium">{g.category}</span>
                        <h4 className="font-medium text-sm mt-1">{g.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{g.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
