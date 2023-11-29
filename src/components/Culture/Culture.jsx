import React from "react";
import { MdSecurity, MdOutlineHandshake } from "react-icons/md";
import { TbDeviceCctv } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Culture = () => {
  const [t] = useTranslation("global");
  return (
    <section className=" my-8">
        <div className=" container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl ">
            {t("team.our")} <span className="text-yellow-600">{t("team.culture")}</span>
          </h1>

          <div className="sm:mx-14 mx-3 grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center  space-y-3 text-center justify-center items-center drop-shadow-lg bg-gray-100 rounded-xl">
              <span className="h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <MdSecurity size={"50px"} />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.security")}
              </h1>

              <p className="text-gray-500 p-3">
              {t("team.securityText")}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl drop-shadow-lg">
              <span className=" h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <MdOutlineHandshake size={"50px"}/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.confidence")}
              </h1>

              <p className="text-gray-500 p-3">
              {t("team.confidenceText")}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl drop-shadow-lg">
              <span className=" h-20 w-20 inline-block p-3 text-yellow-600 bg-gray-200 rounded-full drop-shadow-lg">
                <TbDeviceCctv size={"50px"}/>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              {t("team.techTitle")}
              </h1>

              <p className="text-gray-500 p-3">
              {t("team.techText")}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Culture;
