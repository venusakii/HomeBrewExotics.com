import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const timeline = [
  {
    year: "7000 BCE",
    title: "Ancient Ferments",
    description: "Humanity discovers the magic of fermentation in ancient China and the Middle East.",
  },
  {
    year: "3000 BCE",
    title: "Mead & Wine",
    description: "Honey wine becomes the drink of gods and warriors across cultures.",
  },
  {
    year: "1000 CE",
    title: "Medieval Brewing",
    description: "Monasteries preserve brewing knowledge through the Dark Ages.",
  },
  { year: "1800s", title: "Scientific Revolution", description: "Pasteur unlocks the science behind fermentation." },
  { year: "2020", title: "HomeBrewExotics", description: "We bring ancient wisdom and modern tools to your kitchen." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background mb-4">Our Story</h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              From ancient elixirs to modern brews — we&apos;re on a mission to bring the art of fermentation home.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HomeBrewExotics was born from a simple belief: everyone deserves access to the transformative experience
                of crafting their own fermented beverages. We&apos;re not just selling equipment — we&apos;re reviving
                an ancient practice that connects us to our ancestors and to the natural world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our carefully curated selection of tools, combined with our educational resources, empowers you to
                create extraordinary drinks in your own kitchen. Whether it&apos;s your first kombucha or your hundredth
                batch of mead, we&apos;re here to support your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">The History of Fermentation</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                    >
                      <span className="text-primary font-mono font-bold">{item.year}</span>
                      <h3 className="font-serif text-xl font-bold mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Every product we recommend is chosen with environmental impact in mind. From recycled glass to bamboo
                  accessories.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Education</h3>
                <p className="text-muted-foreground">
                  Knowledge is power. Our guides and resources help you understand the science behind the magic.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We&apos;re building a global community of home brewers who share knowledge, recipes, and passion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
