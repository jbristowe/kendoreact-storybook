export const findLocale = (locales: string[], locale: string) => {
  if (locales.includes(locale)) {
    return locale;
  }
  for (const localeToMatch of locales) {
    if (localeToMatch.includes(locale.split("-")[0])) {
      console.warn(
        `Locale ${locale} was not found. Using ${localeToMatch} as a fallback`,
      );
      return localeToMatch;
    }
  }
  throw new LocaleNotSupportedError(`Locale ${locale} was not found`);
};

export const getDateFnsLocale = (locale: string) => {
  return locale.replace("-", "");
};

export class LocaleNotSupportedError extends Error {}