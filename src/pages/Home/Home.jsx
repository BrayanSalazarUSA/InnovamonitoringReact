import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../pages/Header/Header";
import Locations from "../../components/Locations/Locations";
import Services from "../Services/Services";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import DashInfo from "../../components/DashInfo/DashInfo";
import ReportsSection from "../ReportsSection/ReportsSection";


const Home = () => {
  const [t, i18n] = useTranslation("global");
  localStorage.clear("propertySelected")
  localStorage.clear("user")
  return (
    <>
      <Header></Header> 
      <Services></Services>
      <About></About>
      <ReportsSection></ReportsSection>
      <DashInfo></DashInfo>
      <Locations></Locations>
      <Footer /> 
    </>
  );
};

export default Home;
