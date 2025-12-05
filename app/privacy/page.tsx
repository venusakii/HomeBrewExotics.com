import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="font-serif">Introduction</h2>
              <p>
                HomeBrewExotics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                committed to protecting your personal data. This privacy policy explains how we collect, use, and
                safeguard your information when you visit our website.
              </p>

              <h2 className="font-serif">Information We Collect</h2>
              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
              </ul>

              <h3>Information You Provide</h3>
              <p>We collect information you voluntarily provide, such as:</p>
              <ul>
                <li>Name and email address (via contact forms)</li>
                <li>Newsletter subscription preferences</li>
                <li>Comments or feedback you submit</li>
              </ul>

              <h2 className="font-serif">How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and improve our website and content</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send newsletters (with your consent)</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-serif">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. These include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Required for basic website functionality
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors use our site
                </li>
                <li>
                  <strong>Affiliate cookies:</strong> Track purchases made through our affiliate links
                </li>
              </ul>
              <p>
                You can control cookie preferences through your browser settings. Disabling cookies may affect website
                functionality.
              </p>

              <h2 className="font-serif">Third-Party Services</h2>
              <p>Our website may contain links to third-party websites and services, including:</p>
              <ul>
                <li>
                  <strong>Amazon:</strong> Product links and affiliate tracking
                </li>
                <li>
                  <strong>Analytics providers:</strong> Website usage analysis
                </li>
              </ul>
              <p>These third parties have their own privacy policies. We encourage you to review them.</p>

              <h2 className="font-serif">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data. However,
                no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-serif">Your Rights</h2>
              <p>Depending on your location, you may have rights to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
              <p>To exercise these rights, contact us at privacy@homebrewexotics.com.</p>

              <h2 className="font-serif">Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>

              <h2 className="font-serif">Changes to This Policy</h2>
              <p>
                We may update this privacy policy periodically. Changes will be posted on this page with an updated
                revision date.
              </p>

              <h2 className="font-serif">Contact Us</h2>
              <p>For privacy-related questions or concerns, contact us at:</p>
              <p>Email: privacy@homebrewexotics.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
