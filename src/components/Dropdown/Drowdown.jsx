import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdSecurity } from "react-icons/md";
import { TbDeviceCctv } from "react-icons/tb";
import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { useTranslation } from "react-i18next";


export default function Dropdown({ TextColor = "text-gray-300", efecto = "efecto1" }) {
  const [t] = useTranslation("global");
  return (
    <Menu as="div" className="z-50  inline-block text-left">
      <div>
        <Menu.Button className=" px-3 z-50 inline-flex w-full justify-center gap-x-1.5 rounded-md hover:text-yellow-600 text-base font-semibold  items-center py-2">
          <p className={`efecto-basic ${efecto}`}> {t("navbar.services")}</p>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-yellow-700"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  target="_top"
                  to="/monitoring"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center al  px-4 py-2 text-sm hover:text-yellow-600")
                  }
                >
                  <TbDeviceCctv />

                  <span className="ml-2">{t("dropdown.monitoring")}</span>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  target="_top"
                  to="/installations"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center al  px-4 py-2 text-sm hover:text-yellow-600")
                  }
                >
                  <GrTechnology />
                  <span className="ml-2">{t("dropdown.support")}</span>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  target="_top"
                  to="/consulting"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex items-center al  px-4 py-2 text-sm hover:text-yellow-600")
                  }
                >
                  <MdSecurity />
                  <span className="ml-2">{t("dropdown.consulting")}</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
