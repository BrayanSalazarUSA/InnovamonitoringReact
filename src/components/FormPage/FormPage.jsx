import React from "react";
import { MultiStepForm } from "../MultiStepForm/MultiStepForm";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import contract from "../../assets/images/contract.jpg"
import { FormProvider } from "../../context/FormProvide";
export const FormPage = () => {
  return (
    <>
    <FormProvider>

    <Navbar efecto="efecto2"></Navbar>
      <section className="bg-hero-magnolia py-10 bg-no-repeat bg-cover bg-center my-3 ">
        <div className="container rounded-xl bg-half-transparent  w-full sm:w-10/12  grid gap-8 px-1 sm:px-6 py-12 mx-auto lg:grid-cols-2 ">
          <div>
            <div className=" p-3 px-5">
            <p className="font-medium text-yellow-600 ">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-300 md:text-3xl dark:text-white">
            Set up your monitoring plan!
            </h1>

            <p className="my-3 text-gray-300">
              Our friendly team is always here to chat, we’d love to hear from you.
            </p>
            <img class="hidden my-3 object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={contract} alt="" />
            </div>
          </div>

          <MultiStepForm></MultiStepForm>
        </div>
      </section>
      <Footer></Footer>
    </FormProvider>
    
    </>
  );
};
