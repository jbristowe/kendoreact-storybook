export type Locale = {
  code: string;
  englishTitle: string;
  localTitle: string;
};

const locales: Locale[] = [
  {
    code: "en-US",
    englishTitle: "English",
    localTitle: "English",
  },
  {
    code: "de-DE",
    englishTitle: "German",
    localTitle: "Deutsche",
  },
  {
    code: "es-ES",
    englishTitle: "Spanish",
    localTitle: "Español",
  },
  {
    code: "zh-CH",
    englishTitle: "Chinese (Traditional)",
    localTitle: "Chinese (Traditional)",
  },
];

export const supportedLocales = locales.map((l) => l.code);

export default locales;