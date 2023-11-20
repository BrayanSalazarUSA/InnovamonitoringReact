import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Features from "../../components/Culture/Culture";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import { Button2 } from "../../components/button/button";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import CTA from "../../components/CTA/CTA";

const AboutPage = () => {
  const style1 = {
    color: "#ebedef",
    fontSize: "60px",
  };
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Navbar efecto="efecto2"></Navbar>
      <section className="w-full mt-5">
        <div className="h-52 banner-about ">
          <h1 className="text-6xl font-semibold text-white ml-3 sm:ml-40 py-16  ">
            {t("team.title")}
          </h1>
        </div>
        <div className="w-3/4 m-auto mt-20 h-auto">
          <h3 className="text-2xl text-yellow-700">{t("team.h1")}</h3>
          <h1 className="text-4xl font-semibold mt-2 text-gray-800">
            {t("team.h3")}
          </h1>
          <Reveal>
            <div className="w-full pt-10 md:flex">
              <p className="text-xl text-gray-600 mr-7 sm:mt-2">
                {t("team.desc1")}
              </p>

              <p className="text-xl  text-gray-600 mt-10 sm:mt-2">
                {t("team.desc2")}
              </p>
            </div>
          </Reveal>
        </div>
        <Fade left>
          <Features></Features>
        </Fade>
      </section>
    <CTA url="/plan"></CTA>
      <Footer></Footer>
    </>
  );
};

export default AboutPage;
