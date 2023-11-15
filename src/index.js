import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import global_es from "./Traslations/es/global.json";
import global_en from "./Traslations/en/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { UserProvider } from "./context/UserProvider";

var idioma = navigator.language || navigator.userLanguage;


i18next.init({
  
  interpolation: { escapeValue: false },
  lng: idioma,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <ContextProvider>
      <ThemeProvider theme={theme}></ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ContextProvider>
  </I18nextProvider>
);