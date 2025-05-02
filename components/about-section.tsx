import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/gye-nyame-small.png"
            alt="Gye Nyame symbol"
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 text-center">About Us</h2>
          <div className="bg-teal-50 rounded-lg shadow-sm p-8">
            <p className="text-gray-700 leading-relaxed text-justify">
              Founded in 2023, the Adinkra Alliance Institute is dedicated to advancing leadership, development, and
              positive impact across diverse communities worldwide. Through initiatives that champion development,
              environmental justice, and equity, the Institute celebrates and uplifts those making a lasting impact.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-teal-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-900 mb-2">Leadership</h3>
                <p className="text-gray-700 text-sm text-justify">
                  Cultivating visionary leaders who drive positive change in their communities.
                </p>
              </div>

              <div className="bg-teal-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-900 mb-2">Excellence</h3>
                <p className="text-gray-700 text-sm text-justify">
                  Celebrating and promoting Black excellence across diverse fields and disciplines.
                </p>
              </div>

              <div className="bg-teal-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-900 mb-2">Impact</h3>
                <p className="text-gray-700 text-sm text-justify">
                  Creating transformative action that addresses critical challenges facing our communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
