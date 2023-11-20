import React from "react";
import { Button2 } from "../button/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imagen from "../../assets/images/Components/CTA/monitoring_images_page.jpg";
const CTA = ({url}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <section class="bg-white dark:bg-gray-700">
    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto flex flex-col justify-center items-center ">
        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl pt-24">
          {t("team.CTATitle")}
        </h1>
        <p class="my-6 text-gray-500 dark:text-gray-300">
          {t("team.CTAText")}
        </p>
        <Link to={url} reloadDocument>
          <Button2 text="buttons.start"></Button2>
        </Link>
      </div>

      <div class="flex justify-center mt-10">
        <img
          class="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src={imagen}
          alt="imagen"
        />
      </div>
    </div>
  </section>
  );
};

export default CTA;
