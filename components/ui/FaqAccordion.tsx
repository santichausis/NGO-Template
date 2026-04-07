"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-emerald-200 bg-emerald-50/50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              {/* The question is the h2/h3 level, but rendered as a button — screen readers still see it */}
              <span className="font-semibold text-slate-900 text-base leading-snug">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isOpen
                    ? "bg-emerald-600 rotate-180"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-white" : "text-slate-500"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
