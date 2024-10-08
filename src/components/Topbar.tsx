import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import contentEnglish from "../content/contentEnglish";
import { Button } from "@material-tailwind/react";
import Logo from "./Logo";
const Topbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navItems, contact } = contentEnglish.topBar;
  const id = contentEnglish.topBar.navItems.find((item) =>
    item.tag.includes("home")
  )?.tag;
  return (
    <header className="absolute inset-x-0 top-0 z-50" id={id}>
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-6 px-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a
            href={navItems.find((item) => item.tag.includes("home"))?.link}
            className="-m-1.5 p-1.5"
          >
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((navItem) => (
            <div className="" key={navItem.name}>
              <a
                href={navItem.link}
                className="text-sm font-semibold leading-6 text-gray-900 flex justify-start items-center"
              >
                {/* <navItem.Logo /> */}

                {navItem.name}
              </a>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={contact.link}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button size="sm" className="bg-primary">
              {contact.name} <span aria-hidden="true">&rarr;</span>
            </Button>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href={navItems.find((item) => item.tag.includes("home"))?.link}
              className="-m-1.5 p-1.5"
            >
              <Logo />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((navItem) => (
                  <div
                    className="flex justify-start items-start gap-x-2"
                    key={navItem.name}
                  >
                    {/* <navItem.Logo /> */}
                    <a
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold leading-6 text-gray-900 hover:underline transition-all"
                    >
                      {navItem.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <Button className="bg-primary">
                    {contact.name} <span aria-hidden="true">&rarr;</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Topbar;
