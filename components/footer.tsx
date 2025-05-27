import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/adinkra-logo.png"
                alt="Adinkra Alliance Institute"
                width={40}
                height={40}
                className="mr-2 invert brightness-0 invert"
              />
            </div>
            <p className="mb-4 text-sm text-teal-100 text-justify">
              A global hub for Leadership, Black excellence, and Transformative action.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/adinkrafellowship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/AdinkraFellows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/adinkrafellows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/adinkra-alliance-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@AdinkraAllianceInstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200 hover:text-white transition-colors"
              >
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-teal-100">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>team@adinkrainstitute.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#hero" className="text-teal-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-teal-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="text-teal-100 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-teal-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-sm text-teal-100 text-justify">Stay updated with our newsletter</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-teal-800 border-teal-700 text-white placeholder:text-teal-300 text-sm"
              />
              <Button className="bg-teal-600 hover:bg-teal-500 text-white text-sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 pt-6 border-t border-teal-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-200 text-justify">
              &copy; {new Date().getFullYear()} Adinkra Alliance Institute. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0 italic text-sm text-teal-200 text-justify">
              "When the roots are deep, there is no reason to fear the wind." – African Proverb
            </p>
          </div>
        </div> */}

        <div className="mt-8 pt-6 border-t border-teal-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-200 text-justify">
              &copy; {new Date().getFullYear()} Adinkra Alliance Institute. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <p className="italic text-sm text-teal-200 text-justify">
                "When the roots are deep, there is no reason to fear the wind." – African Proverb
              </p>
              
              {/* Bouton Donate ajouté ici */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://www.every.org/adinkra-alliance-institute?utm_campaign=donate-link#/donate',
                    'donationPopup',
                    'width=600,height=700,scrollbars=yes,resizable=yes'
                  );
                }}
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-4 py-2 rounded-[10px] transition-colors text-sm whitespace-nowrap"
              >
                Donate Now
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
