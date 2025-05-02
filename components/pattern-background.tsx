"use client"

export function PatternBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundImage: `url('/images/adinkra-logo.png')`,
        backgroundSize: "80px",
        backgroundRepeat: "repeat",
        opacity: 0.02, // Reduced from 0.03 to 0.02
      }}
      aria-hidden="true"
    />
  )
}
