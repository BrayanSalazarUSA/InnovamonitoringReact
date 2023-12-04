import React from "react";
import { Button2 } from "../button/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imagen from "../../assets/images/Components/CTA/monitoring_images_page.jpg";
import Fade from 'react-reveal/Fade';

const CTA = () => {
  const [t] = useTranslation("global");
  return (

    <section className="bg-white dark:bg-gray-700">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto flex flex-col justify-center items-center ">
          <Fade left>
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl pt-24">
              {t("team.CTATitle")}
            </h1>
            <p className="my-6 text-gray-500 dark:text-gray-300">
              {t("team.CTAText")}
            </p>
          </Fade>
          <Fade bottom>
            <Link target="_top" to={"/plan"}>
              <Button2 text="buttons.start"></Button2>
            </Link>
          </Fade>
        </div>
        <Fade top>
          <div className="flex justify-center mt-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src={imagen}
              alt="imagen"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CTA;
