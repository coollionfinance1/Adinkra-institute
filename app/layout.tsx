import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PatternBackground } from "@/components/pattern-background"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Adinkra Institute</title>
        <meta name="description" content="A global hub for Leadership, Black excellence, and Transformative action." />
        <link rel="icon" href="/images/adinkra-logo.png" />
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

export const metadata = {
      generator: 'v0.dev'
    };
