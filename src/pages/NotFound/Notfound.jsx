import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "../NotFound/NotFound.css";

const NotFound = () =>{
    const [t] = useTranslation("global");
    return(
    <>
        <Navbar efecto="efecto2"></Navbar>
        <section className="section">
                <div className="container px-4 py-20 mx-auto r mb-80">
                            <h1 className="titulo"> {t("not_found.tittle")}</h1>
                            <div className="mt-2">
                                <span className="inline-block w-80 h-2 bg-yellow-600 rounded-full"></span>
                                <span className="inline-block w-11 h-2 ml-1 bg-yellow-600 rounded-full"></span>
                                <span className="inline-block w-9 h-2 ml-1 bg-yellow-600 rounded-full"></span>
                            </div>
                            <p className="paragraph">{t("not_found.paragraph")}</p>
                            <p className="paragraph">{t("not_found.paragraph1")}</p>
                            <a href="http://localhost:3000/">
                                <p className="paragraph2 ">{t("not_found.paragraph2")}</p>
                            </a> 
                </div>
        </section>
        <Footer></Footer>            
    </>   
    );
};

export default NotFound