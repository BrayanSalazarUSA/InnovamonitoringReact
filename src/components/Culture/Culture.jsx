import React from "react";
import { MdSecurity } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { TbDeviceCctv } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Culture = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section class=" my-8">
        <div class=" container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl ">
            Our <span class="text-yellow-600">Culture</span>
          </h1>

          <div class="sm:mx-14 mx-3 grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center  space-y-3 text-center justify-center items-center drop-shadow-lg bg-gray-100 rounded-xl">
              <span class="h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <MdSecurity size={{ size: "50px" }} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.security")}
              </h1>

              <p class="text-gray-500 p-3">
              {t("team.securityText")}
              </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl drop-shadow-lg">
              <span class=" h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <MdOutlineHandshake size={{ size: "50px" }} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.confidence")}
              </h1>

              <p class="text-gray-500 p-3">
              {t("team.confidenceText")}
              </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl drop-shadow-lg">
              <span class=" h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <TbDeviceCctv size={{ size: "50px" }} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.techTitle")}
              </h1>

              <p class="text-gray-500 p-3">
              {t("team.techText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;
