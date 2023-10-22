import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ReactWhatsapp from "react-whatsapp";

import Navbar from "../../components/Navbar/Navbar";
import { Button, Button2 } from "../../components/button/button";
import "./Header.css";
import logo from "../../assets/innova-monitoring-removebg-preview.jpg";
import Fade from "react-reveal/Fade";

const style1 = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40px",
  overflow: "hidden",
};
const style2 = {
  height: "100%",
  width: "100%",
};
const style3 = {
  stroke: "none",
  fill: "#fff",
};

const button2 = {
  background: "#b785074f",
  color: "#B78607",
};

const Header = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Fade top>
        <div className="h-auto md:h-screen header overflow-visible">
          <Navbar TextColor="text-gray-200" efecto="efecto1"></Navbar>

          <section className="pb-15 pt-16 sm:my-12 lg:my-6 mx-auto lg:mx-auto w-full h-3/4 sm:flex-none md:flex justify-center items-center">
            <div className=" md:w-9/12 mx-auto">
              <h1 className="text-4xl px-3 md:text-1xl lg:text-6xl text-gray-100 font-bold leading-tight text-center">
                {t("header.message1")}
              </h1>
              <p className="text-gray-300 text-center text-xl my-5 p-7">
                {t("header.message2")}
              </p>
              <div className=" flex justify-center items-center gap-4">
                <Link target="_top" to="/contact">
                  <Button text="buttons.contact" type="" />
                </Link>
                <Link target="_top" to="/monitoring">
                  <Button2 text="buttons.learn" type="" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Fade>
      <ReactWhatsapp number="+573106319140" message="Hello World!!!" />
      <FloatingWhatsApp
        accountName="Innova Monitoring"
        notificationSound={true}
        chatboxHeight={400}
        avatar={logo}
        phoneNumber="+13054872372"
      />
    </>
  );
};

export default Header;
