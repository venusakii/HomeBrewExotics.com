import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"] })
const _manrope = Manrope({ subsets: ["latin"] })

// <CHANGE> Updated metadata for HomeBrewExotics theme
export const metadata: Metadata = {
  title: "HomeBrewExotics | Brew Like an Alchemist",
  description:
    "Create exotic drinks at home. From ancient elixirs to modern brews. Professional-grade microbrewing tools for kombucha, kvass, mead, and botanical ferments.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
