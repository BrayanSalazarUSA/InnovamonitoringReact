import React from "react";
import { MultiStepForm } from "../MultiStepForm/MultiStepForm";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import contract from "../../assets/images/Components/FormPage/contract.jpg"
import { FormProvider } from "../../context/FormProvide";
import { useTranslation } from "react-i18next";
export const FormPage = () => {
  const [t] = useTranslation("global");
  return (
    <FormProvider>

    <Navbar efecto="efecto2"></Navbar>
      <section className="bg-hero-magnolia py-10 bg-no-repeat bg-cover bg-center my-3 ">
        <div className="container rounded-xl bg-half-transparent  w-full sm:w-10/12  grid gap-8 px-1 sm:px-6 py-12 mx-auto lg:grid-cols-2 ">
          <div>
            <div className=" p-3 px-5">
            <p className="font-medium text-yellow-600 ">
                  {t("form_Page.contact_Us")}
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-300 md:text-3xl dark:text-white">
                  {t("form_Page.monitorin_plan")}
            </h1>

            <p className="my-3 text-gray-300">
                  {t("form_Page.friendly_Team")}
            </p>
                <img className="hidden my-3 object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={contract} alt="Contract" />
            </div>
          </div>
          <MultiStepForm></MultiStepForm>
        </div>
      </section>
      <Footer></Footer>
    </FormProvider>
  );
};
