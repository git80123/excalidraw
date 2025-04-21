import { defaultLang, languages } from "@excalidraw/excalidraw";
import LanguageDetector from "i18next-browser-languagedetector";

export const languageDetector = new LanguageDetector();
languageDetector.init({
  languageUtils: {},
});

export const getPreferredLanguage = () => {
  const detectedLanguages = languageDetector.detect();
  const detectedLanguage = Array.isArray(detectedLanguages)
    ? detectedLanguages[0]
    : detectedLanguages;

  // 检测到的语言
  const detectedLang = detectedLanguage
    ? languages.find((lang) => lang.code.startsWith(detectedLanguage))
    : null;

  // 如果检测到的语言存在，使用它；否则使用中文
  return detectedLang ? detectedLang.code : 'zh';
};
