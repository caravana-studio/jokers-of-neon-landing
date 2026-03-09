import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { presskitResources } from "./presskitResources";

i18n.use(initReactI18next).init({
  resources: presskitResources,
  fallbackLng: "en",
  lng: "en",
  defaultNS: "presskit",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
