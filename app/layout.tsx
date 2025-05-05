import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PatternBackground } from "@/components/pattern-background"
import Script from "next/script" // 👈 Import Script

export const metadata = {
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Adinkra Institute</title>
        <meta name="description" content="A global hub for Leadership, Black excellence, and Transformative action." />
        <link rel="icon" href="/images/adinkra-logo.png" />

        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JS8CJN2J15"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JS8CJN2J15', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <PatternBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
