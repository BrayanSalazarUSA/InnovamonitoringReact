import React from "react";
import { Button, Button2 } from "../../components/button/button";
import "./Support.css";
import support from "../../assets/images/support_image.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
const Support = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
         <Navbar efecto="efecto2"></Navbar>
      <section class=" 2xl:py-12 2xl:bg-gray-50">
        <div class="px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
          <div class="py-10 sm:py-10 ">
            <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div class="lg:order-2 2xl:-mr-24 absolute suport-image">
                <img
                  class="w-full shadow-xl rounded-xl suport-image"
                  src={support}
                  alt=""
                />
              </div>
              <div class="lg:order-1">
                <p className="inline-block px-1 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-600 uppercase rounded-full bg-teal-accent-400">
                  {t("support1.prev")}
                </p>
                <h2 className="max-w-lg text-3xl font-bold  text-gray-700 sm:text-4xl ">
                {t("support1.title")}
                </h2>
                <p className="text-base py-4 text-gray-700 md:text-lg">
                {t("support1.desc")}
                </p>
                <ul class="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-700">
                      {" "}
                      {t("support1.01")}
                    </span>
                  </li>

                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-70">
                      {" "}
                      {t("support1.02")}
                    </span>
                  </li>

                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-70">
                      {" "}
                      {t("support1.03")}
                    </span>
                  </li>

                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-70">
                      {" "}
                      {t("support1.04")}
                    </span>
                  </li>

                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-700">
                      {" "}
                      {t("support1.05")}
                    </span>
                  </li>

                  <li class="flex items-center">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-3 font-medium text-gray-70">
                      {" "}
                      {t("support1.06")}
                    </span>
                  </li>
                </ul>

                <Link
                  target="_blank"
                  to={
                    "https://assist.innovatechcorp.net/login/join.jsp?language=es"
                  }
                  class="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12"
                >
                  <Button2 ></Button2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Support;
