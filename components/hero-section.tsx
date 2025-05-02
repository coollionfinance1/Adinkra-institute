"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/sankofa-heart-small.png"
            alt="Sankofa symbol"
            fill
            sizes="300px"
            style={{
              objectFit: "contain",
              filter: "invert(33%) sepia(30%) saturate(832%) hue-rotate(132deg) brightness(91%) contrast(93%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-6 single-line-heading">
            Igniting Purpose, Elevating Leadership, Building Legacies.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 text-justify mx-auto max-w-2xl">
            Welcome to the Adinkra Alliance Institute — a global hub for Leadership, Black excellence, and
            Transformative action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2">
              Get Involved
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black border-teal-700 hover:bg-teal-600 hover:text-white px-6 py-2"
              onClick={() => {
                const element = document.getElementById("programs")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button
          onClick={() => {
            const element = document.getElementById("about")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
