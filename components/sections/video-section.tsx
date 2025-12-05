export function VideoSection() {
  return (
    <section className="relative py-32 bg-foreground overflow-hidden">
      {/* Video background placeholder */}
      <div className="absolute inset-0">
        <img src="/atmospheric-dark-brewing-room-with-copper-kettles-.jpg" alt="Brewing ritual" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
          The Ritual of Brewing
        </h2>
        <p className="text-2xl md:text-3xl text-accent font-serif italic">Every bubble tells a story.</p>

        {/* Play button */}
      </div>
    </section>
  )
}
