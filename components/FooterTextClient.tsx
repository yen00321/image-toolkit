"use client";

import { useI18n } from "@/components/LanguageProvider";

export function FooterTextClient() {
  const { t } = useI18n();
  return <p>{t("footerText")}</p>;
}
