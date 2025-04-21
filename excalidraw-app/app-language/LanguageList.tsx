import { useI18n, languages } from "@excalidraw/excalidraw/i18n";
import React from "react";
import { useSetAtom } from "../app-jotai";
import { appLangCodeAtom } from "./language-state";

// 添加中文语言选项
const languagesWithChinese = [
  ...languages,
  { code: 'zh', label: '简体中文' }
];

export const LanguageList = ({ style }: { style?: React.CSSProperties }) => {
  const { t, langCode } = useI18n();
  const setLangCode = useSetAtom(appLangCodeAtom);

  return (
    <select
      className="dropdown-select dropdown-select__language"
      onChange={({ target }) => setLangCode(target.value)}
      value={langCode}
      aria-label={t("buttons.selectLanguage")}
      style={style}
    >
      {languagesWithChinese.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};
