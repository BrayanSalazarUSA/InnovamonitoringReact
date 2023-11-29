import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Face from "react-reveal/Fade";
import {  Button2 } from "../../components/button/button";
import "./Services.css";
import consulting from "../../assets/images/Pages/featuredServices/asesoria.jpg";
import instalation from "../../assets/images/Pages/featuredServices/cameras_instalation.jpg";
import monitoring from "../../assets/images/Pages/featuredServices/monitoring_images.jpg";
const Services = () => {
  const [t] = useTranslation("global");


  return (
    <Face left>
      <section className="w-full mt-20 flex flex-col">
        <h1 className="text-4xl font-bold w-10/12 text-gray-800 m-auto my-4 sm:my-12">
          {t("services.title")}
        </h1>

        <div
          href=""
          className="w-10/12  m-auto mb-40 grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10 "
        >
          <div className="h-auto my-16 ">
            <div className="">
              <img
                className="h-72 w-full object-cover m-auto"
                src={monitoring}
                alt="monitoring"
              />
            </div>

            <div className="h-32  ">
              <h3 className="h3-services text-2xl text-gray-700">
                <span className="span-1"> </span>
                <span className="text-2xl font-semibold text-yellow-600">
                  01
                </span>{" "}
                {t("services.service1title")}
              </h3>
              <p className="p-3 mb-3 text-gray-500">
                {t("services.service1description")}
              </p>

              <Link target="_top" to="/monitoring">
                <Button2 text="buttons.learn"></Button2>
              </Link>
            </div>
          </div>
          <div className="h-auto my-16 ">
            <div className="">
              <img
                className="h-72 w-full object-cover m-auto"
                src={instalation}
                alt=""

                />
            </div>

            <div className="h-32 ">
              <h3 className="h3-services text-2xl text-gray-700">
                <span className="span-1"> </span>
                <span className="text-2xl font-semibold text-yellow-600">
                  02
                </span>{" "}
                {t("services.service2title")}
                
              </h3>
              <p className="p-3 mb-3 text-gray-500">
               
                {t("services.service2description")}
              </p>
              <Link target="_top" to="/installations">
                <Button2 text="buttons.learn"></Button2>
              </Link>
            </div>
          </div>
          <div className="h-auto my-16 sm:my-28 md:my-16 ">
            <div className="">
              <img
                className="h-72 w-full object-cover m-auto"
                src={consulting}
                alt="consulting"
              />
            </div>

            <div className="h-32 ">
              <h3 className="h3-services text-2xl text-gray-700">
                <span className="span-1"> </span>
                <span className="text-2xl font-semibold text-yellow-600">
                  03
                </span>{" "}
                
                {t("services.service3title")}
              </h3>
              <p className="p-3 mb-3 text-gray-500">
                {t("services.service3description")}
                
              </p>
              <Link target="_top" to="/consulting" >
                <Button2 text="buttons.learn"></Button2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-1"> </div>
    </Face>
  );
};

export default Services;
