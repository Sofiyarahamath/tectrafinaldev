"use client";

import { useState } from "react";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const FAQ_ITEMS = [
  {
    question: "What SaaS SEO services do you provide?",
    answer:
      "We provide end-to-end SaaS SEO: technical SEO audits, product-led content strategy, programmatic SEO for scaling landing pages, bottom-of-funnel content (comparison and alternative pages), link building, competitor SEO analysis, content cluster development, and international/multi-region SEO. We handle the full funnel, not just rankings.",
  },
  {
    question: "Do you provide SEO services for SaaS companies in the USA as well as India?",
    answer:
      "Yes. We specialise in dual-market SaaS SEO for both India and the USA. We develop market-specific strategies for Indian SMB buyers and US-based decision-makers, covering keyword research, content localisation, and competitive positioning for each region.",
  },
  {
    question: "What kind of content do you provide as part of your SEO service?",
    answer:
      "We create product-led content, bottom-of-funnel comparison and alternative pages, use-case and integration landing pages, content clusters for topical authority, and programmatic page templates. Every piece is aligned with buyer intent and measurable conversion goals.",
  },
  {
    question: "Do you provide link building as part of your SaaS SEO service?",
    answer:
      "Yes. Link building is included as part of our SaaS SEO engagements. We focus on high-quality editorial placements from relevant SaaS, industry, and business publications to strengthen authority and support ranking growth.",
  },
  {
    question: "What kind of reporting do you provide once the SEO work is live?",
    answer:
      "We provide clear reporting tied to business outcomes—rankings, organic traffic, demo requests, trial signups, and pipeline attribution. Reports show what moved, what it delivered, and the next actions for continued growth.",
  },
] as const;

function PlusIcon() {
  return (
    <svg viewBox="0 0 12 12" className="size-3" aria-hidden fill="none">
      <path
        d="M6 2.5v7M2.5 6h7"
        stroke="#171717"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden fill="none">
      <path
        d="M5 5l6 6M11 5l-6 6"
        stroke="#ffffff"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="inline-flex w-full flex-col items-center justify-start bg-white px-4 md:px-8 py-16 xl:py-24">
      <div className="flex w-full max-w-7xl mx-auto flex-col items-start justify-start">
        <div className="flex w-full flex-col items-center justify-start self-stretch">
          <div className="inline-flex items-center justify-center gap-3">
            <div className="relative h-4 w-3.5">
              <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                —
              </div>
            </div>
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
              FAQ
            </div>
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
              —
            </div>
          </div>
          <div className="flex w-full max-w-[780px] flex-col items-start justify-start">
            <div className="flex w-full flex-col items-center justify-start pt-4 lg:h-16">
              <div
                className={`${funnelDisplay.className} text-center text-3xl font-light leading-tight text-neutral-900 sm:text-4xl sm:leading-[44px] lg:text-5xl lg:leading-[49.68px]`}
              >
                SaaS SEO Questions, Answered
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start pt-10 lg:pt-16">
          <div className="flex w-full max-w-[820px] flex-col items-start justify-start">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={`flex w-full flex-col items-start justify-start ${
                    index === 0 ? "" : "pt-3"
                  }`}
                >
                  <div
                    className={`flex w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white outline outline-[0.80px] outline-offset-[-0.80px] ${
                      isOpen ? "outline-zinc-300" : "outline-gray-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="inline-flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <div className="min-w-0 text-sm leading-6 text-neutral-900 sm:text-base font-['Aspekta']">
                        {item.question}
                      </div>
                      {isOpen ? (
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-950 outline outline-[0.80px] outline-offset-[-0.80px] outline-neutral-950">
                          <CloseIcon />
                        </div>
                      ) : (
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full outline outline-[0.80px] outline-offset-[-0.80px] outline-zinc-300">
                          <PlusIcon />
                        </div>
                      )}
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex w-full flex-col items-start justify-start px-4 pb-5 sm:px-6 sm:pb-6">
                          <div className="w-full max-w-[771px] text-sm font-normal leading-6 text-neutral-600 font-['Aspekta']">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
