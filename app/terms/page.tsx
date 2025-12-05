import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="font-serif">Agreement to Terms</h2>
              <p>
                By accessing or using HomeBrewExotics.com, you agree to be bound by these Terms of Service. If you
                disagree with any part of the terms, you may not access the website.
              </p>

              <h2 className="font-serif">Affiliate Disclosure</h2>
              <p>
                HomeBrewExotics.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                advertising program designed to provide a means for sites to earn advertising fees by advertising and
                linking to Amazon.com.
              </p>
              <p>
                When you click on product links and make a purchase, we may receive a small commission at no additional
                cost to you. This helps support our content and allows us to continue providing valuable brewing
                resources.
              </p>

              <h2 className="font-serif">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions, specifications, and pricing information. However, we
                do not warrant that product descriptions or other content is accurate, complete, reliable, current, or
                error-free.
              </p>
              <p>
                Products are sold by third-party retailers (primarily Amazon), and all purchases are subject to their
                respective terms and conditions.
              </p>

              <h2 className="font-serif">Educational Content</h2>
              <p>
                The brewing guides, recipes, and educational content provided on this website are for informational
                purposes only. While we strive for accuracy, we make no guarantees about the completeness or reliability
                of this information.
              </p>
              <p>
                Users are responsible for following all local laws and regulations regarding home brewing and
                fermentation.
              </p>

              <h2 className="font-serif">Intellectual Property</h2>
              <p>
                The content, features, and functionality of this website are owned by HomeBrewExotics and are protected
                by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="font-serif">User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Collect or harvest any information from the website</li>
              </ul>

              <h2 className="font-serif">Limitation of Liability</h2>
              <p>
                HomeBrewExotics shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of or inability to use the website.
              </p>

              <h2 className="font-serif">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-serif">Contact</h2>
              <p>Questions about these Terms should be sent to legal@homebrewexotics.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
