import React from "react";
import Face from "react-reveal/Fade";
import incident from "../../assets/images/Pages/ReportSection/incident.png";
import weapon from "../../assets/images/Pages/ReportSection/incident2.jpg";
import Report3 from "../../assets/images/Pages/ReportSection/Report3.jpg";
import { Button2 } from "../../components/button/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReportsSection = () => {
  const [t] = useTranslation("global");
  return (
      <section className="my-20 w-full h-auto py-12 md:flex justify-center items-center logo-side">
        <Face>
          <div className="px-4 sm:ml-6 w-full md:w-1/2 flex flex-col justify-center items-center ">
            <img className="w-2/3 object-cover rounded-lg" src={weapon} alt="weapon"/>
          <img className="w-full my-4 rounded-lg" src={incident} alt="Burning cars"/>
          <img className="w-2/3 h-40 object-cover rounded-lg  "src={Report3} alt="Buildings"/>
          </div>

          <div className="sm:mx-10 py-28 px-4 md:px-2 w-full md:w-2/3">
            <h1 className="text-yellow-600 text-6xl font-semibold py-4">
              {t("reports.title")}
            </h1>
            <h2 className="rounded-md  text-gray-700 text-lg text-base py-2">
              {t("reports.desc1")}
            </h2>
            <p className="rounded-md  text-gray-700 text-lg text-base py-2  mb-6">
              {t("reports.desc2")}
            </p>
          <Link target="_top" to={"/monitoring"}>
              <Button2 text="buttons.learn"></Button2>
            </Link>
          </div>
        </Face>
      </section>
  );
};

export default ReportsSection;
