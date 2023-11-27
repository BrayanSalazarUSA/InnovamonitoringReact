import React from "react";
import Fade from "react-reveal/Fade";
import { Button2 } from "../button/button";
import "./Locations.css";
import medellinImg from "../../assets/images/Components/Locations/medellin.jpg";
import floridaImg from "../../assets/images/Components/Locations/florida-locations.jpg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Locations = () => {
  const [t] = useTranslation("global");
  return (
    <section className="text-gray-600 body-font locations py-32">
      <Fade top>
        <div className="container px-5 sm:py-40 mx-auto">
          <div className="flex flex-wrap w-4/5 mx-auto mb-10 pt-20 ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
                {t("locations.title")}
              </h1>
              <div className="h-1 w-20 bg-yellow-600 rounded"></div>
            </div>

            <div className="lg:w-1/2 p-4 w-full bg-half-transparent">
              <p className="text-xl mb-3 leading-relaxed text-gray-200">
                {t("locations.welcome")}
              </p>
              <Link target="_top" to="/contact">
                <Button2 text={"locations.schedule"}></Button2>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto justify-center">
            <div className="xl:w-1/3 md:w-1/2  p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={floridaImg}
                  alt="content"
                />
                <h4 className="tracking-widest text-yellow-600 text-xs font-medium title-font">
                  {t("locations.mainTitle")}
                </h4>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {t("locations.south_florida")}
                </h2>
                <p className="p-0 leading-relaxed text-base">
                  {t("locations.mainDesc")}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={medellinImg}
                  alt="content"
                />
                <h4 className="tracking-widest text-yellow-600 text-xs font-medium title-font">
                  {t("locations.secondTitle")}
                </h4>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {t("locations.Medellin_Col")}
                </h2>
                <p className="leading-relaxed text-base">
                  {t("locations.secondDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Locations;
