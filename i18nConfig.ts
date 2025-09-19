import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["en", "pt", "es"],
  defaultLocale: "en",
  localeDetector: () => {
    return "en";
  },
};

export default i18nConfig;
