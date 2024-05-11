import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Logo from "../Logo/Logo2.png";

function NavBar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1sancvf_dwRP-X40qa5S80kxq0rsVtgcs/view?usp=sharing";

  const navigation = [
    { name: "Mason Myles", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/portfolio", current: false },
    { name: "Contact", href: "/contact", current: false },
    { name: "Resume", href: resumeUrl, current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    const img = new Image();
    img.src = Logo;
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-transparent"
      style={{ color: "#d99330", fontFamily: "Merriweather, serif" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex-shrink-0 mr-2">
                {open ? null : (
                  <img src={Logo} alt="Company Logo" className="h-8 w-auto" />
                )}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href={navigation[0].href}>
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#d99330" }}
                    >
                      {navigation[0].name}
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-auto sm:mr-6">
                  <div className="flex space-x-4">
                    {navigation.slice(1).map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                          "mr-4"
                        )}
                        style={{
                          color: "#d99330",
                          ...(item.name === "Resume" && {
                            textDecoration: "none",
                          }),
                        }}
                        aria-current={item.current ? "page" : undefined}
                        target={item.name === "Resume" ? "_blank" : undefined}
                        rel={
                          item.name === "Resume"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.slice(1).map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  style={{ color: "#d99330" }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
