"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  commonTranslations,
  defaultLanguage,
  languages,
  toolTranslations,
  type LanguageCode,
} from "@/lib/i18n";
import type { ToolInfo } from "@/lib/site";

type I18nContextValue = {
  lang: LanguageCode;
  setLang: (language: LanguageCode) => void;
  t: (key: keyof (typeof commonTranslations)["en"]) => string;
  toolText: (tool: ToolInfo) => Pick<ToolInfo, "name" | "shortName" | "description">;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLanguageCode(value: string | null): value is LanguageCode {
  return Boolean(value && languages.some((language) => language.code === value));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem("image-toolkit-language");
    if (isLanguageCode(stored)) {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    function setLang(language: LanguageCode) {
      setLangState(language);
      document.documentElement.lang = language;
      window.localStorage.setItem("image-toolkit-language", language);
    }

    function t(key: keyof (typeof commonTranslations)["en"]) {
      return commonTranslations[lang][key] || commonTranslations.en[key];
    }

    function toolText(tool: ToolInfo) {
      const translated = toolTranslations[lang][tool.slug];
      return {
        name: translated?.name || tool.name,
        shortName: translated?.shortName || tool.shortName,
        description: translated?.description || tool.description,
      };
    }

    return { lang, setLang, t, toolText };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider.");
  }
  return context;
}
