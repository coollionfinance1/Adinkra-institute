import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function ProgramsSection() {
  return (
    <section id="programs" className="py-16 bg-white relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-25 pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/adinkrahene-small.png"
            alt="Adinkrahene symbol"
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
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 text-center">Our Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-1 shadow-md hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="bg-teal-50 rounded-t-lg pb-4">
              <CardTitle className="text-xl text-teal-900">The Adinkra Fellowship</CardTitle>
              <CardDescription className="text-teal-700 text-sm">
                Leadership Program for Africa and the Diaspora
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-5 flex-grow">
              <p className="text-gray-700 text-sm text-justify">
                The Adinkra Fellowship is a prestigious leadership program connecting emerging leaders from Africa and
                the Diaspora. Through immersive training, community building, and global exposure, Fellows are equipped
                to drive transformative change rooted in heritage, innovation, and purpose.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                <Link href="https://adinkrafellowship.com/" target="_blank" rel="noopener noreferrer">
                  Learn More
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white border-1 shadow-md hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="bg-teal-50 rounded-t-lg pb-4">
              <CardTitle className="text-xl text-teal-900">The Adinkra Distinguished Black Achievers</CardTitle>
              <CardDescription className="text-teal-700 text-sm">Honoring Excellence and Impact</CardDescription>
            </CardHeader>
            <CardContent className="pt-5 flex-grow">
              <p className="text-gray-700 text-sm text-justify">
                Each year, the Adinkra Alliance Institute curates the Adinkra Distinguished Black Achievers USA
                Leadership List to honor outstanding individuals across diverse fields who embody excellence,
                resilience, and a commitment to community advancement. This initiative celebrates leadership that
                inspires, empowers, and catalyzes progress across generations.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                <Link href="/adba">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white border-1 shadow-md hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="bg-teal-50 rounded-t-lg pb-4">
              <CardTitle className="text-xl text-teal-900">Adinkra Labs</CardTitle>
              <CardDescription className="text-teal-700 text-sm">
                Accelerating Economic Development and Innovation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-5 flex-grow">
              <p className="text-gray-700 text-sm text-justify">
                Adinkra Labs designs forward-thinking programs that drive economic empowerment, entrepreneurship, and
                innovation within Black communities. By merging cultural insight with strategic action, we catalyze
                inclusive growth, foster sustainable livelihoods, and unlock new pathways to prosperity.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                <Link href="">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
