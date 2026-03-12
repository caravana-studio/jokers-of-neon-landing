import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LEGACY_PRESSKIT_LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  supportedLanguages,
} from "./constants";
import { landingResources } from "./landingResources";
import { presskitResources } from "./presskitResources";

const resources = {
  en: {
    ...presskitResources.en,
    ...landingResources.en,
  },
  es: {
    ...presskitResources.es,
    ...landingResources.es,
  },
  pt: {
    ...presskitResources.pt,
    ...landingResources.pt,
  },
} as const;

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguageCandidates = [
    window.localStorage.getItem(LANGUAGE_STORAGE_KEY),
    window.localStorage.getItem(LEGACY_PRESSKIT_LANGUAGE_STORAGE_KEY),
  ];

  for (const language of storedLanguageCandidates) {
    if (language && isSupportedLanguage(language)) {
      return language;
    }
  }

  return DEFAULT_LANGUAGE;
};

i18n.use(initReactI18next).init({
  resources,
  supportedLngs: supportedLanguages,
  fallbackLng: DEFAULT_LANGUAGE,
  lng: getInitialLanguage(),
  defaultNS: "presskit",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
