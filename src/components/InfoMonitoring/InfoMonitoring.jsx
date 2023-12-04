import React from "react";
import { FaCannabis, FaWineBottle } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { BsCheck, BsFillCheckCircleFill, BsFire } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';
const InfoMonitoring = () => {
  const [t, i18n] = useTranslation("global");

  return (

    <section className="px-5 sm:px-32 w-full">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <Fade left>
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                {t("Monitoring.how")}
              </h2>
            </div>
          </Fade>
          <Fade right>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700 md:text-lg">
                {t("Monitoring.howDesc")}
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                {t("Monitoring.howDesc1")}
              </p>
            </div>
          </Fade>
        </div>
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <Fade top>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <FaWineBottle className="w-8 text-yellow-600 h-8"></FaWineBottle>
              </div>
            </Fade>
            <Fade left>
              <h6 className="mb-2 font-semibold leading-5">{t("Monitoring.level1")}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {t("Monitoring.level1Desc")}
              </p>
            </Fade>
            <Fade bottom>
              <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-center ">
                  <span className="mr-1">
                    <BsCheck className="text-blue-600"></BsCheck>
                  </span>
                  {t("Monitoring.drinking")}
                </li>
                <li className="flex items-center ">
                  <span className="mr-1">
                    <BsCheck className="text-blue-600"></BsCheck>
                  </span>
                  {t("Monitoring.debris")}
                </li>
                <li className="flex items-center ">
                  <span className="mr-1">
                    <BsCheck className="text-blue-600"></BsCheck>
                  </span>
                  {t("Monitoring.Traffic")}
                </li>
              </ul>
            </Fade>
          </div>

          <div>
            <Fade top>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FaCannabis className="h-9 w-9 text-yellow-600"></FaCannabis>
            </div>
            </Fade>
            <Fade left>
            <h6 className="mb-2 font-semibold leading-5">{t("Monitoring.level2")}</h6>
            <p className="mb-3 text-sm text-gray-900">
              {t("Monitoring.level2Desc")}
            </p>
            </Fade>
            <Fade bottom>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-green-600"></BsCheck>
                </span>
                {t("Monitoring.narcotics")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-green-600"></BsCheck>
                </span>
                {t("Monitoring.damage")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-green-600"></BsCheck>
                </span>
                {t("Monitoring.medical")}
              </li>
            </ul>
            </Fade>
          </div>
          <div>
            <Fade top>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <GiPistolGun className="h-9 w-9 text-yellow-600"></GiPistolGun>
            </div>
            </Fade>
            <Fade left>
            <h6 className="mb-2 font-semibold leading-5">{t("Monitoring.level3")}</h6>
            <p className="mb-3 text-sm text-gray-900">
              {t("Monitoring.level3Desc")}
            </p>
            </Fade>
            <Fade bottom>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-orange-500"></BsCheck>
                </span>
                {t("Monitoring.weapon")}
              </li>

              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-orange-500"></BsCheck>
                </span>
                {t("Monitoring.arrest")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-orange-500"></BsCheck>
                </span>
                {t("Monitoring.vandalism")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-orange-500"></BsCheck>
                </span>
                {t("Monitoring.thef")}
              </li>
            </ul>
            </Fade>
          </div>
          <div>
            <Fade top>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <BsFire className="h-9 w-9 text-yellow-600"></BsFire>
            </div>
            </Fade>
            <Fade left>
            <h6 className="mb-2 font-semibold leading-5">{t("Monitoring.level4")}</h6>
            <p className="mb-3 text-sm text-gray-900">
              {t("Monitoring.level4Desc")}
            </p>
            </Fade>
            <Fade bottom>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-red-500"></BsCheck>
                </span>
                {t("Monitoring.naturalDisasters")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-red-500"></BsCheck>
                </span>
                {t("Monitoring.shooting")}
              </li>
              <li className="flex items-center ">
                <span className="mr-1">
                  <BsCheck className="text-red-500"></BsCheck>
                </span>
                {t("Monitoring.Death")}
              </li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMonitoring;
