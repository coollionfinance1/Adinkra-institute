"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-teal-50 relative">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/aban-small.png"
            alt="Aban symbol"
            fill
            sizes="300px"
            style={{
              objectFit: "contain",
              filter: "invert(33%) sepia(30%) saturate(832%) hue-rotate(132deg) brightness(91%) contrast(93%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4 text-center">Get Involved</h2>
          <p className="text-gray-700 text-center mb-8 text-justify mx-auto max-w-xl">
            We would love to hear from you! Please fill out the form below to connect with the Adinkra Alliance
            Institute team.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-justify mx-auto max-w-md">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="fullName" className="text-sm text-black">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm text-black">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-sm text-black">
                      Phone Number (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="organization" className="text-sm text-black">
                      Organization (optional)
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter your organization"
                      className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-sm text-black">
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger id="subject" className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-teal-700">
                      <SelectItem value="Apply to Program">Apply to Program</SelectItem>
                      <SelectItem value="Become a Mentor">Become a Mentor</SelectItem>
                      <SelectItem value="Donate">Donate</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      <SelectItem value="Media Inquiry">Media Inquiry</SelectItem>
                      <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                      <SelectItem value="Attend an Event">Attend an Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-sm text-black">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
