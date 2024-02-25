// i18n.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

const resources = {
  EN: { translation: enTranslation },
  PT: { translation: ptTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "EN",
  fallbackLng: "EN",
  interpolation: { escapeValue: false },
});

export default i18n;
