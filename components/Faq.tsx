"use client";

import { useI18n } from "@/components/LanguageProvider";

type FaqProps = {
  items: Array<{ question: string; answer: string }>;
};

export function Faq({ items }: FaqProps) {
  const { t } = useI18n();

  return (
    <section className="mt-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-ink">
        {t("faqHeading")}
      </h2>
      <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-ink">
              <span>{item.question}</span>
              <span className="float-right text-muted group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
