export function SustainabilitySection() {
  const features = [
    {
      icon: "♻️",
      title: "Recycled Glass",
      description: "All our glass vessels are made from 100% recycled materials",
    },
    {
      icon: "🌿",
      title: "Bamboo Lids",
      description: "Sustainable bamboo fermentation lids that last for years",
    },
    {
      icon: "⚡",
      title: "Energy-Efficient",
      description: "Smart temperature monitors that minimize power consumption",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Copper wire pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,10 50,20 T100,20" stroke="#A45A2A" strokeWidth="0.5" fill="none" />
          <path d="M0,50 Q25,40 50,50 T100,50" stroke="#A45A2A" strokeWidth="0.5" fill="none" />
          <path d="M0,80 Q25,70 50,80 T100,80" stroke="#A45A2A" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">Sustainably Crafted Tools</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">Brewing with respect for nature</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center text-4xl group-hover:bg-primary/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
