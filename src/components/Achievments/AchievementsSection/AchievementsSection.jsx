import React, { useEffect, useState } from "react";
import LanguageImageSwitcher from "../../LanguageImageSwitcher/LanguageImageSwitcher";
import Fade from 'react-reveal/Fade';
import logo from "../../../assets/images/Pages/Achievements/smartPSS.jpg";
import { useTranslation } from "react-i18next";

const AchievementsSection = () => {
    const [t, i18n] = useTranslation("global");
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    useEffect(() => {
        setCurrentLanguage(i18n.language || window.localStorage.i18nextLng);
    }, [i18n.language]);
    return (

        <div className="container mx-auto text-center lg:px-8 margin ">
            <div className="container text-center">
                <Fade top>
                    <h1 className="tittle">{t("achievments.tittle")}</h1>
                </Fade>
            </div>
            <div className="w-full pt-10 flex">
                <div className="flex-1 p-4 text-xl text-gray-600 mr-7 sm:mt-2">
                    <Fade left>
                        <p>{t("achievments.paragraph")}</p>
                    </Fade>
                    <div className="w-full pt-10 flex">
                        <div className="flex-1 p-4 text-xl text-gray-600 mr-7 sm:mt-2">
                            <Fade left>
                                <img className="img-logo" src={logo} alt="" />
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="info-container relative">
                    <Fade right>
                        <LanguageImageSwitcher currentLanguage={currentLanguage} />
                    </Fade>
                </div>
            </div>
            <div className="txtinfo flex-1 p-4 text-xl  text-gray-600 mt-10 sm:mt-2">
                <Fade bottom>
                    <p>{t("achievments.paragraph2")}</p>
                </Fade>
            </div>
        </div>

    );
};

export default AchievementsSection;