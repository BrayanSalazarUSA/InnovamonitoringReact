import React from "react";
import esp from "../../assets/images/Pages/Achievements/Esp_version.png";
import en from "../../assets/images/Pages/Achievements/En_version.png";
import { useTranslation } from "react-i18next";

const LanguageImageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language || window.localStorage.i18nextLng;
    const imagePath = currentLanguage.includes("es")  ? esp : en;
    return <img className="infografia" src={imagePath} alt="infografia" />;
};

export default LanguageImageSwitcher;