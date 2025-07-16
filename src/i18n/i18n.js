import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; //local file loader
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend) 
    .use(LanguageDetector) 
    .use(initReactI18next)
    .init({
        fallbackLng: "ar",
        supportedLngs: ["en", "ar"],

        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        },

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        },

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
