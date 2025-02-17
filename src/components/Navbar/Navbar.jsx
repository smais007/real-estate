import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import UserAvartar from "../UserProfile/UserAvarta";
import MiniUserAvartar from "../UserProfile/MiniUserAvartar";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Property Detais", href: "/properties" },
  { name: "Agents", href: "/agent" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto"
              src="https://i.ibb.co/6Rw3qLp/Discover-Your-Paradise.png"
              alt=""
            />
          </a>
          <Link to={"/"}>
            <p className="text-xl font-bold leading-none">Paradice Cove</p>
            <p className="text-xs">Discover Your Paradise</p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            (item.name === "Details" || item.name === "Agents") &&
            !user ? null : (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  location.pathname === item.href
                    ? "text-indigo-600" // Apply active style if the current path matches the href
                    : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div>
            {user ? (
              <>
                <div className="flex items-center gap-4">
                  <UserAvartar></UserAvartar>
                </div>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://i.ibb.co/6Rw3qLp/Discover-Your-Paradise.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  (item.name === "Details" || item.name === "Agents") &&
                  !user ? null : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="py-6">
                {user ? (
                  <>
                    <div className="flex gap-3 items-center">
                      <MiniUserAvartar></MiniUserAvartar>
                      <div>
                        <p className="text-lg font-bold leading-0">Profile</p>
                        <p className="text-sm leading-0">Manage Your Profile</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
