export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Gather",
      description: "Select quality ingredients for your brew",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      number: "02",
      title: "Ferment",
      description: "Let nature work its magic over time",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      number: "03",
      title: "Bottle",
      description: "Preserve your creation with care",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      number: "04",
      title: "Age",
      description: "Patience brings depth and complexity",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      number: "05",
      title: "Enjoy",
      description: "Savor your handcrafted masterpiece",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          The art of brewing in five simple steps
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden lg:block" />

          {/* Steam path effect */}
          <div className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-xl hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 bg-card border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-primary group-hover:text-accent transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>

                  {/* Number */}
                  <span className="text-sm font-mono text-primary mb-2">{step.number}</span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
