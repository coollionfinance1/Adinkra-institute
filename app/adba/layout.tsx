import type React from "react"

export default function AdbaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Adinkra Institute</title>
        <meta name="description" content="Adinkra Institute" />
        <link rel="icon" href="/images/adinkra-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
