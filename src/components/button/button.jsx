import React from "react";
import "./button.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
export const Button = ({ text = "LEARN MORE", type }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <button className="clase-base flex justify-center items-center primary tracking-wider">
      {" "}
      <p>{t(text)}</p> <MdKeyboardDoubleArrowRight />
    </button>
  );
};
export const Button2 = ({ text }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <button className="clase-base secondary flex justify-center items-cente ">
      <p className="p-2">{t(text)}</p><MdKeyboardDoubleArrowRight />
    </button>
  );
};
