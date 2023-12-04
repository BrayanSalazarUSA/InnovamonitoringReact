import "./MonitoringPage.css";
import { useState } from "react";
import { Button, Button2 } from "../../button/button";
import monitoring from "../../../assets/images/ServicesPages/MonitoringServices/medellin.jpg";
import Navbar from "../../Navbar/Navbar";
import garbage from "../../../assets/images/ServicesPages/MonitoringServices/monitoring-garbage.jpg";
import { HiDocumentReport } from "react-icons/hi";
import InfoMonitoring from "../../InfoMonitoring/InfoMonitoring";
import report1 from "../../../assets/images/ServicesPages/MonitoringServices/report1.png";
import factory from "../../../assets/images/ServicesPages/MonitoringServices/monitoring-factory.jpg";
import building from "../../../assets/images/ServicesPages/MonitoringServices/monitoring-building.webp";
import fire from "../../../assets/images/ServicesPages/MonitoringServices/monitoring-fire.jpg";
import incident2 from "../../../assets/images/ServicesPages/MonitoringServices/incident2.jpg";
import Footer from "../../Footer/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import CTA from "../../CTA/CTA";
import Fade from 'react-reveal/Fade';
import Face from "react-reveal/Fade";
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2500,
    loop: true,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function MonitoringService() {
  const [t, i18n] = useTranslation("global");

  const [hoverImage, sethoverImage] = useState(true);

  const hoverImageFunction = () => {
    sethoverImage(true);
  };

  const hoverImageFunctionLeave = () => {
    sethoverImage(false);
  };

  return (
    <>
      <Navbar efecto="efecto2"></Navbar>
      <div className="overflow-hidden bg-white pt-12 sm:pt-32 md:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <Fade left>
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-yellow-600 ">
                    {t("Monitoring.prev")}
                  </h2>
                  <p className=" text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl py-3">
                    {t("Monitoring.title")}
                  </p>
                  <p className=" text-lg leading-8 text-gray-600 py-3">
                    {t("Monitoring.desc")}
                  </p>
                  <div className=" max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <HiDocumentReport
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {t("Monitoring.reports")}
                      </dt>{" "}
                      <dd className="inline">{t("Monitoring.reportsDesc")}</dd>
                    </div>

                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <HiDocumentReport
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {t("Monitoring.communication")}
                      </dt>{" "}
                      <dd className="inline">
                        {t("Monitoring.communicationDesc")}
                      </dd>
                    </div>

                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <HiDocumentReport
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {t("Monitoring.response")}
                      </dt>{" "}
                      <dd className="inline">{t("Monitoring.responseDesc")}</dd>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div>
              <Fade top>
                <div className="monitoring-images">
                  <img
                    src={monitoring}
                    alt="Product screenshot"
                    className=" duration-700 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                    onMouseOver={hoverImageFunction}
                    onMouseLeave={hoverImageFunctionLeave}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <Fade left>
        <div className="px-4 py-24 sm:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3">
            <div className="text-center md:border-r">
              <h6 className="flex flex-row mt-3 justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">+<Number n={900} /></h6>
              <p className="text-sm font-medium tracking-widest text-gray-700 uppercase lg:text-base">
                {t("Monitoring.reportsNum")}S
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className=" flex flex-row mt-3 justify-center text-4xl font-bold lg:text-5xl xl:text-6xl">+<Number n={800} /></h6>
              <p className="text-sm font-medium tracking-widest text-gray-700 uppercase lg:text-base">
                {t("Monitoring.camerasNum")}
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="flex flex-row mt-3 justify-center  items-end text-4xl font-bold lg:text-5xl xl:text-6xl"><Number n={24} />h/<Number n={7} /></h6>
              <p className="text-sm font-medium tracking-widest text-gray-700 uppercase lg:text-base">
                {t("Monitoring.monitoringTime")}
              </p>
            </div>
          </div>
        </div>
        </Fade>
        <InfoMonitoring></InfoMonitoring>

        <Face>
        <div className="container mx-auto px-5 py-2 lg:px-40 lg:pt-12">
          {/* <p className="text-center text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl py-7">
            SOME INCIDENTES REPORTED
          </p> */}
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={report1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={incident2}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={factory}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={building}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={fire}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={garbage}
                />
              </div>
            </div>
          </div>
        </div>
        </Face>
        <CTA></CTA>
        <Footer></Footer>
      </div>
    </>
  );
}
