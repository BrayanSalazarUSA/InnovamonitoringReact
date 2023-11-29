import React from "react";
import dashboardImage from "../../assets/images/Components/DashInfo/Dashboard2.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { RiVidiconLine } from "react-icons/ri"
import { BsCardImage } from "react-icons/bs"
import { HiDocumentReport } from "react-icons/hi"
import { useTranslation } from "react-i18next";
import Slide from 'react-reveal/Slide';

const DashInfo = () => {
  const [t, i18n] = useTranslation("global");


  return (
    <div className="overflow-hidden bg-white py-5 sm:py-12 mb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Slide top>
                <h2 className="text-4xl font-bold leading-7 text-yellow-600">
                  {t("DashInfo.prev")}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  IDS - Innova Dashboard System
                </p>
              </Slide>
              <Slide left>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {t("DashInfo.desc")}
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CloudArrowUpIcon
                        className="absolute left-1 top-1 h-6 w-6 text-yellow-600"
                        aria-hidden="true"
                      />
                      {t("DashInfo.item1")}
                    </dt>
                    {""}
                    <dd className="inline pl-2"> {t("DashInfo.item1Desc")}</dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <RiVidiconLine
                        className="absolute left-1 top-1 h-6 w-6 text-yellow-600"
                        aria-hidden="true"
                      />
                      {t("DashInfo.item2")}
                    </dt>
                    {""}
                    <dd className="inline pl-2">  {t("DashInfo.item2Desc")}</dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <HiDocumentReport
                        className="absolute left-1 top-1 h-6 w-6 text-yellow-600"
                        aria-hidden="true"
                      />
                      {t("DashInfo.item3")}
                    </dt>
                    {""}
                    <dd className="inline pl-2">{t("DashInfo.item3Desc")}</dd>
                  </div>
                </dl>
              </Slide>
            </div>
          </div>
          <Slide right>
          <img
            src={dashboardImage}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 sm:py-16"
            width={2432}
            height={1442}
          />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default DashInfo;
