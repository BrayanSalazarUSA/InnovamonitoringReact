import React from "react";
import "./About.css";
import { Button, Button2 } from "../button/button";
import logo from "../../assets/innova-monitoring.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const About = () => {

  const [t, i18n] = useTranslation("global");
  return (
    <>
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
            <Link reloadDocument to={"/about"}>
              <Button2 text="buttons.learn"></Button2>
            </Link>
          </div>
        </Fade>
        <Fade clear>
          <div className="w-full lg:w-1/3 mr-32 flex justify-center">
            <img className="logo-about" src={logo} alt="" />
          </div>
        </Fade>
      </section>
    </>
  );
};

export default About;
