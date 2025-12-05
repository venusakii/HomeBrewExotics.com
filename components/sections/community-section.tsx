const testimonials = [
  {
    quote: "My kitchen smells like an apothecary — and I love it.",
    author: "Sophia L.",
    location: "London",
    image: "/woman-brewing-herbal-tea-in-cozy-kitchen-with-copp.jpg",
  },
  {
    quote: "Finally, brewing equipment that looks as good as the drinks taste.",
    author: "Marcus T.",
    location: "Portland",
    image: "/man-with-beard-checking-fermentation-vessel-in-mod.jpg",
  },
  {
    quote: "The guides made fermentation science accessible and fun.",
    author: "Yuki M.",
    location: "Tokyo",
    image: "/asian-woman-pouring-kombucha-from-glass-jar-in-bri.jpg",
  },
  {
    quote: "My kvass has never been better. The temperature control is a game changer.",
    author: "Elena K.",
    location: "Berlin",
    image: "/woman-tasting-homemade-kvass-in-rustic-kitchen-set.jpg",
  },
]

export function CommunitySection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Our Community of Modern Brewers</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Join thousands of home brewers crafting extraordinary drinks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`${testimonial.author} brewing`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Ripple effect overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300" />

              {/* Quote overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-background text-sm italic mb-3">"{testimonial.quote}"</p>
                <p className="text-accent text-sm font-medium">
                  — {testimonial.author}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
