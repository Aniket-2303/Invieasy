import { useLanguage } from "../context/LanguageContext";

// Import translations using dynamic imports to avoid Turbopack HMR issues
const getTranslations = () => {
  try {
    return {
      en: require("../../messages/en.json"),
      hi: require("../../messages/hi.json"),
      gu: require("../../messages/gu.json"),
      mr: require("../../messages/mr.json"),
    };
  } catch (error) {
    console.warn("Translation files not found, using fallback");
    return {
      en: {},
      hi: {},
      gu: {},
      mr: {},
    };
  }
};

const translations = getTranslations();

export function useTranslation() {
  const { language } = useLanguage();
  return (key: string) => {
    const langTranslations = translations[language] || translations.en;
    return langTranslations[key] || key;
  };
} 