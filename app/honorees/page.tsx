import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HonoreesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-teal-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center py-12">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Adinkra Distinguished Black Achievers
              </h1>
              <p className="text-gray-700 text-justify mx-auto max-w-2xl">
                Celebrating Excellence, Leadership, and Impact in the Black Community
              </p>
            </div>
          </div>
        </section>

        {/* About the Program */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">About the Program</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-justify">
                  The Adinkra Distinguished Black Achievers USA Leadership List is an annual recognition program that
                  celebrates outstanding Black leaders who have made significant contributions to their fields and
                  communities.
                </p>
                <p className="text-justify">
                  Each year, the Adinkra Alliance Institute curates this prestigious list to honor individuals across
                  diverse fields who embody excellence, resilience, and a commitment to community advancement. This
                  initiative celebrates leadership that inspires, empowers, and catalyzes progress across generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-12 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">Selection Criteria</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Leadership Excellence</h3>
                  <p className="text-gray-700 text-sm text-justify">
                    Demonstrated exceptional leadership within their organization, industry, or community, with a track
                    record of innovation, growth, and positive impact.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Community Impact</h3>
                  <p className="text-gray-700 text-sm text-justify">
                    Made significant contributions to advancing the Black community through mentorship, philanthropy,
                    advocacy, or other forms of service and engagement.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Professional Achievement</h3>
                  <p className="text-gray-700 text-sm text-justify">
                    Achieved notable success in their professional field, demonstrating excellence, innovation, and
                    breaking barriers for future generations.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Cultural Influence</h3>
                  <p className="text-gray-700 text-sm text-justify">
                    Used their platform to promote positive cultural values, heritage preservation, and cross-cultural
                    understanding that benefits society at large.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2023 Honorees */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 text-center">2023 Honorees</h2>
              <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-justify">
                Meet the exceptional individuals recognized in our inaugural Adinkra Distinguished Black Achievers USA
                Leadership List.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Honoree ${index}`}
                        alt={`Honoree ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-teal-900 mb-1">Dr. Jane Smith</h3>
                      <p className="text-teal-700 font-medium text-sm mb-2">Healthcare Leadership</p>
                      <p className="text-gray-700 text-sm mb-3 text-justify">
                        Pioneering physician and healthcare advocate who has transformed community health outcomes.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 text-sm"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">View All Honorees</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nomination Process */}
        <section className="py-12 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">Nomination Process</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="prose max-w-none text-gray-700">
                  <p className="text-justify">
                    The nomination process for the Adinkra Distinguished Black Achievers USA Leadership List is designed
                    to identify and recognize outstanding Black leaders across various sectors.
                  </p>

                  <h3 className="text-lg font-semibold text-teal-800 mt-4 mb-2">How It Works</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="text-justify">
                      <strong>Open Nominations:</strong> Each year, we open a public nomination period where individuals
                      can nominate deserving candidates.
                    </li>
                    <li className="text-justify">
                      <strong>Review Process:</strong> Our selection committee carefully reviews all nominations based
                      on our established criteria.
                    </li>
                    <li className="text-justify">
                      <strong>Final Selection:</strong> The committee selects the final honorees who exemplify
                      excellence in leadership and community impact.
                    </li>
                    <li className="text-justify">
                      <strong>Recognition:</strong> Selected honorees are celebrated through our annual publication and
                      recognition ceremony.
                    </li>
                  </ol>

                  <p className="mt-4 text-sm text-justify">
                    Nominations for the next Adinkra Distinguished Black Achievers USA Leadership List will open in
                    early 2024. Sign up for our newsletter to receive updates.
                  </p>
                </div>

                <div className="mt-6">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm">Sign Up for Updates</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
