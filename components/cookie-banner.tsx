"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-4 bg-background/80 backdrop-blur-md border border-border rounded-lg shadow-lg">
      <p className="text-sm text-foreground mb-3">
        This website uses cookies to enhance flavor — and your browsing experience.
      </p>
      <div className="flex gap-2">
        <Button onClick={acceptCookies} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Accept
        </Button>
        <Button onClick={() => setVisible(false)} variant="outline" size="sm">
          Decline
        </Button>
      </div>
    </div>
  )
}
