import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Navbar from "../../Navbar/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import "./Instalations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Button2 } from "../../button/button";
import Footer from "../../Footer/Footer";
import { MdOutlineInstallDesktop, MdUpdate } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import image from "../../../assets/images/asesoria.webp";
import vms4200 from "../../../assets/images/Logos/IVMS4200.png";
import EZ_Station from "../../../assets/images/Logos/EZ_Station.jpeg";
import OpenEye from "../../../assets/images/Logos/OpenEye.webp";
import smartPSS from "../../../assets/images/Logos/smartPSS.jpg";
import vms from "../../../assets/images/Logos/vms.png";
import techTeam from "../../../assets/images/tech-team.jpg";
import support from "../../../assets/images/support_image.jpg";
import { useTranslation } from "react-i18next";
import CTA from "../../CTA/CTA";

const Installation = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Navbar efecto="efecto2"></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-12 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            {t("support.support")}
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-yellow-600 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-yellow-600 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-yellow-600 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-2/3 xl:gap-16 md:grid-cols-2 ">
              <div class="space-y-3">
                <span class="inline-block p-3 text-yellow-600 bg-gray-100 rounded-xl dark:text-white dark:bg-yellow-600">
                  <BiSupport className="w-8 h-8 p-0 object-cover"></BiSupport> 
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("support.title1")}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  {t("support.item1Desc")}
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-yellow-600 bg-gray-100 rounded-xl dark:text-white dark:bg-yellow-600">
                  <MdOutlineInstallDesktop className="w-8 h-8 p-0 object-cover"></MdOutlineInstallDesktop>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("support.title2")}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  {t("support.item2Desc")}
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-yellow-600 bg-gray-100 rounded-xl dark:text-white dark:bg-yellow-600">
                  <BsCameraVideo className="w-8 h-8 p-0 object-cover"></BsCameraVideo>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("support.title3")}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  {t("support.item3Desc")}
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block text-yellow-600 bg-gray-100 rounded-xl dark:text-white dark:bg-yellow-600">
                  <MdUpdate className="w-8 h-8 p-0 object-cover"></MdUpdate>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {t("support.title4")}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  {t("support.item4Desc")}
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover  rounded-full"
                src={techTeam}
                alt=""
              />
            </div>
          </div>
          <hr class="my-12 border-gray-200 dark:border-gray-700" />
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            {t("support.softwares")}
          </h1>
          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-yellow-600 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-yellow-600 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-yellow-600 rounded-full"></span>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-700" />
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img className="w-16 h-16" src={vms4200} alt="" />
                <span className="pt-2 text-gray-600 text-sm">IVMS4200</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img className="w-28 h-16" src={EZ_Station} alt="" />
                <span className="pt-2 text-gray-600 text-sm">Ez Station</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div class="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img
                  className="w-28 h-16 object-contain"
                  src={OpenEye}
                  alt=""
                />
                <span className=" text-gray-600 text-sm">Open Eye</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img className="w-16 h-16" src={smartPSS} />
                <span className="pt-2 text-gray-600 text-sm"> Smart PSS</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img className="w-16 h-16" src={vms} alt="" />
                <span className="pt-2 text-gray-600 text-sm">VMS 2.0</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default Installation;
