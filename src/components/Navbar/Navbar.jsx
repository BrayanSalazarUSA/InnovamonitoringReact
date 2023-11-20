import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logos/logo.png";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Dropdown from "../Dropdown/Drowdown";
import { Link } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const navigation = [
  { name: "HOME", href: "/", current: false },
  { name: "ABOUT", href: "/about", current: false },
  { name: "SUPPORT", href: "/support", current: false },
  { name: "CONTACT", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ TextColor = "text-gray-700", efecto = "efecto1" }) => {

    const [t, i18n] = useTranslation("global");
    const handleChangeLanguge = (lang) => {
      i18n.changeLanguage(lang);
    };

  return (
    <Disclosure as="nav" className="navbar">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 sm:pt-6  h-28 items-center justify-center md:items-center md:justify-between">
                  <div className="flex flex-shrink-0 mt-6 items-center">
                    <a href="http://localhost:3000/">
                     <img className="block h-48 w-auto logo" src={logo} alt="Your Company"/>
                    </a> 
                  </div>
                  <div className=" mt-6 hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-3">
                      <Link
                        to={"/"}
                        className={`efecto-basic ${efecto} rounded-md px-1 py-2 text-base tracking-wider font-semibold`}
                      >
                        {t("navbar.home")}
                      </Link>

                      <Link
                        to="/about"
                        className={`efecto-basic ${efecto} rounded-md px-1 py-2 text-base tracking-wider font-semibold`}
                      >
                        {t("navbar.about")}
                      </Link>
                        <Link
                        to="/support"
                        className=
                        {`efecto-basic ${efecto} rounded-md px-1 py-2 text-base tracking-wider font-semibold`}
                      >
                        {t("navbar.support")}
                      </Link> 
                      <Link
                        to="/contact"
                        className={`efecto-basic ${efecto} rounded-md px-1 py-2 text-base tracking-wider font-semibold`}
                      >
                        {t("navbar.contact")}
                      </Link>

                      <Dropdown
                        TextColor={TextColor}
                        efecto={efecto}
                      ></Dropdown>
                      <Link
                        to="/login"
                        className="text-xl font-bold leading-6 text-yellow-700 flex items-center hover:text-yellow-600 hover:scale-120"
                      >
                      <span className="mr-2 text-base ">{t("navbar.log_in")}</span>
                        <BiLogInCircle></BiLogInCircle>
                      </Link>
                      <div className=" flex justify-end items-center">
                        <TooltipComponent
                          content="Translate to English"
                          position="bottom"
                        >
                          <button
                            className="text-yellow-700 mx-2 hover:text-yellow-600"
                            onClick={() => handleChangeLanguge("en")}
                          >
                            EN
                          </button>
                        </TooltipComponent>
                        <TooltipComponent
                          content="Traducir a Español"
                          position="Top"
                        >
                          <button
                            className=" text-yellow-700 hover:text-yellow-600"
                            onClick={() => handleChangeLanguge("es")}
                          >
                            ES
                          </button>
                        </TooltipComponent>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className=" space-y-1 absolute px-2 pb-3 pt-2 flex justify-center items-center flex-col w-full bg-yellow-600 z-50">
                <Link
                  to={"/"}
                  className={classNames(
                    "efecto-basic efecto1 block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {t("navbar.home")}
                </Link>

                <Link
                  to="/about"
                  className={classNames(
                    `${TextColor} hover:text-yellow-600 `,
                    "efecto-basic efecto1 rounded-md px-1 py-2 text-base tracking-wider font-semibold"
                  )}
                >
                  {t("navbar.about")}
                </Link>
              
                <Link
                  to="/contact"
                  className={classNames(
                    "efecto-basic efecto1 rounded-md px-1 py-2 text-base tracking-wider font-semibold"
                  )}
                >
                  {t("navbar.contact")}
                </Link>
                <Dropdown></Dropdown>
                <Link
                  to={"/login"}
                  className="efecto-basic efecto1 flex px-3 text-2xl font-semibold leading-6 text-gray-300"
                >
                <span className="mr-2 text-base">{t("navbar.log_in")}</span>{" "}
                  <BiLogInCircle></BiLogInCircle>
                </Link>
                <div className=" lg:flex lg:flex-1 lg:justify-end">
                  <button
                    className="mx-3 text-gray-200 "
                    onClick={() => handleChangeLanguge("en")}
                  >
                    EN
                  </button>
                  <button
                    className=" text-gray-200"
                    onClick={() => handleChangeLanguge("es")}
                  >
                    ES
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  );
};

export default Navbar;