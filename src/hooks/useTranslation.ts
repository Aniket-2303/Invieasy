import en from "../../messages/en.json";
import hi from "../../messages/hi.json";
import gu from "../../messages/gu.json";
import { useLanguage } from "../context/LanguageContext";

const translations: Record<string, any> = { en, hi, gu };

export function useTranslation() {
  const { language } = useLanguage();
  return (key: string) => translations[language][key] || key;
} 