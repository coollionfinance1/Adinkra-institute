"use client"

import { useEffect, useRef } from "react"

export default function PatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }

    // Load the Adinkra logo
    const logo = new Image()
    logo.crossOrigin = "anonymous"
    logo.src = "/images/adinkra-logo.png"

    // Draw the pattern once the image is loaded
    const drawPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate the size and spacing
      const size = 120
      const spacingX = 240
      const spacingY = 240

      // Draw the pattern with alternating rows offset
      for (let y = -size; y < canvas.height + size; y += spacingY) {
        for (let x = -size; x < canvas.width + size; x += spacingX) {
          // Add offset to alternate rows
          const offsetX = (Math.floor(y / spacingY) % 2) * (spacingX / 2)
          ctx.globalAlpha = 0.05 // Very subtle opacity
          ctx.drawImage(logo, x + offsetX, y, size, size)
        }
      }
    }

    logo.onload = () => {
      updateCanvasSize()
      window.addEventListener("resize", updateCanvasSize)
    }

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.1 }}
    />
  )
}
