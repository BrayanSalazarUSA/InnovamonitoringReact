import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Culture from "../../components/Culture/Culture";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import CTA from "../../components/CTA/CTA";

const AboutPage = () => {
  const style1 = {
    color: "#ebedef",
    fontSize: "60px",
  };
  console.log()
  const [t] = useTranslation("global");

  return (
    <>
      <Navbar efecto="efecto2"></Navbar>
      <section className="w-full mt-5">
        <Reveal>
          <div className="h-52 banner-about ">
            <Fade left>
              <h1 className="text-6xl font-semibold text-white ml-3 sm:ml-40 py-16  ">
                {t("team.title")}
              </h1>
            </Fade>
          </div>
        </Reveal>
        <div className="w-3/4 m-auto mt-20 h-auto">
          <Fade left>
            <h3 className="text-2xl text-yellow-700">{t("team.h1")}</h3>
            <h1 className="text-4xl font-semibold mt-2 text-gray-800">
              {t("team.h3")}
            </h1>
          </Fade>
          <Slide bottom>
            <div className="w-full pt-10 md:flex">
              <p className="text-xl text-gray-600 mr-7 sm:mt-2">
                {t("team.desc1")}
              </p>

              <p className="text-xl  text-gray-600 mt-10 sm:mt-2">
                {t("team.desc2")}
              </p>
            </div>
          </Slide>
        </div>
        <Fade left>
          <Culture></Culture>
        </Fade>
      </section>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default AboutPage;
