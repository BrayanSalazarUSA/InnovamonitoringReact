import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const FooterDash = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © {currentYear} {t("dashboard.footer")}
      </p>
    </div>
  );
};

export default FooterDash;