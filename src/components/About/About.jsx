import React from "react";
import "./About.css";
import logo from "../../assets/images/Logos/innova-monitoring.png";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import Pulse from 'react-reveal/Pulse';

const About = () => {
  const [t] = useTranslation("global");
  return (
      <section className="mt-20 w-full h-auto about lg:flex justify-center items-center py-12">
        <Fade left>
          <div className="mx-4 sm:ml-20 px-2 w-11/12 lg:w-2/3">
            <h1 className="text-yellow-600 text-6xl font-semibold py-4">
              {t("about.title")}
            </h1>
            <h2 className="text-yellow-600 font-semibold text-2xl  py-2">
              {t("about.desc1")}
            </h2>
            <p className="rounded-md  text-gray-200 text-lg text-base py-2 mr-20 mb-6">
              {t("about.desc2")}
            </p>
            
          </div>
        </Fade>
        <Pulse >
          <div className="w-full lg:w-1/3 mr-32 flex justify-center">
            <img className="logo-about" src={logo} alt="Logo" />
          </div>
      </Pulse>
      </section>
  );
};

export default About;
