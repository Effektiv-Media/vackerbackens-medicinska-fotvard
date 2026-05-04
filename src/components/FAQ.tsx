"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="section-4b"
      aria-labelledby="faq-heading"
      className="py-24 bg-background"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading-eyebrow">FAQ</span>
          <h2 id="faq-heading" className="section-heading">
            Vanliga frågor om fotvård
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans text-pretty">
            Här svarar vi på de vanligaste frågorna om vår medicinska fotvård i
            Luleå.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-brand-accent/60 shadow-lg shadow-brand-accent/8"
                    : "border-border hover:border-brand-navy/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-serif text-lg font-bold text-brand-navy">
                    {faq.q}
                  </span>
                  <Icon
                    name="chevron-down"
                    className={`w-5 h-5 text-brand-accent shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-sans text-pretty">
                      <p>{faq.a}</p>
                      {faq.cta && (
                        <a
                          href={faq.cta.href}
                          target={faq.cta.external ? "_blank" : undefined}
                          rel={
                            faq.cta.external ? "noopener noreferrer" : undefined
                          }
                          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-brand-accent-light transition-colors"
                        >
                          {faq.cta.label}
                          {faq.cta.external && (
                            <Icon name="external" className="w-4 h-4" />
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
