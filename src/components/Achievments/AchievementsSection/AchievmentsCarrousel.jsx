import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import img1 from "../../../assets/images/Pages/Achievements/Carrousel/atlant_seal.png";
import img2 from "../../../assets/images/Pages/Achievements/Carrousel/homstead_seal.png";
import img3 from "../../../assets/images/Pages/Achievements/Carrousel/jacksonVille_seal.png";
import img4 from "../../../assets/images/Pages/Achievements/Carrousel/Millville_police_seal.png";
import img5 from "../../../assets/images/Pages/Achievements/Carrousel/opa_locka_seal.png";
import { useTranslation } from "react-i18next";



const AchievementsCarrousel = () => {
    const [t] = useTranslation("global");
    return (
     <>
            <div className="flex container-carrousel">
                <Fade left>
                    <p>{t("achievments.tittle_carrousel")}</p>
                </Fade>
            </div>
            <Fade right>
                <div className="container mr-auto lg:px-8 lg:-mr-30 w-full pt-10 md:flex">
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img className="img" src={img1} alt="Atlanta police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img2} alt="Homstead police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img3} alt="Jacksonville police seal  "></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img4} alt="Milville police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img5} alt="Opa locka seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img1} alt="Atlanta police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img2} alt="Homstead police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img3} alt="Jacksonville police seal  "></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img4} alt="Milville police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img5} alt="Opa locka seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img1} alt="Atlanta police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img2} alt="Homstead police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img3} alt="Jacksonville police seal  "></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img4} alt="Milville police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img5} alt="Opa locka seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img1} alt="Atlanta police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img2} alt="Homstead police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img3} alt="Jacksonville police seal  "></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img4} alt="Milville police seal"></img>
                            </div>
                            <div className="slide">
                                <img className="img" src={img5} alt="Opa locka seal"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            </>
    );

};

export default AchievementsCarrousel;