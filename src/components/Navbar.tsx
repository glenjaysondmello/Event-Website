import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "About", href: "/about", current: location.pathname === "/about" },
    {
      name: "Services",
      href: "/services",
      current: location.pathname === "/services",
    },
    {
      name: "Contact",
      href: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  return (
    <Disclosure as="nav" className="bg-black shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
                >
                  <span className="text-yellow-400">
                    <img src="/logo.png" alt="Logo" width="70" height="70" />
                  </span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-8 sm:items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      relative px-3 py-1 text-sm font-medium transition-all duration-300 rounded-md group
                      ${
                        item.current
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.current && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="p-2 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-gray-900 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden bg-gray-900">
              <div className="space-y-1 px-4 py-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`
                      block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                      ${
                        item.current
                          ? "bg-yellow-400 text-black"
                          : "text-gray-300 hover:bg-yellow-50 hover:text-black"
                      }
                    `}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
