"use client";

import { useState } from "react";
import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

type QuoteLine =
  | { type: "text"; text: string }
  | { type: "mixed"; parts: { text: string; highlight?: boolean }[] };

type Testimonial = {
  quoteLines: QuoteLine[];
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quoteLines: [
      {
        type: "text",
        text: "Tectra helped us rebuild our organic acquisition strategy around commercial-intent",
      },
      {
        type: "text",
        text: "pages and competitor alternatives. Their SaaS-focused approach meant every content",
      },
      {
        type: "mixed",
        parts: [
          { text: "asset mapped to a pipeline goal. Within a year, organic search " },
          { text: "became our", highlight: true },
        ],
      },
      {
        type: "mixed",
        parts: [
          { text: "highest-converting channel,", highlight: true },
          { text: " surpassing paid search and driving consistent" },
        ],
      },
      {
        type: "text",
        text: "demo volume.",
      },
    ],
    name: "James Carter",
    role: "Head of Growth, LegalTech Platform",
    company: "LegalTech Platform",
    avatar: "/testimonials/sarah-mitchell.png",
    logo: "/testimonials/la-chos-logo.png",
  },
  {
    quoteLines: [
      {
        type: "text",
        text: "We worked with Tectra Technologies on our HRMS platform SEO and saw a strong shift in",
      },
      {
        type: "text",
        text: "organic-driven growth. The team built a structured content architecture around payroll,",
      },
      {
        type: "text",
        text: "compliance, and HR keywords, along with scalable programmatic pages targeting use cases",
      },
      {
        type: "mixed",
        parts: [
          { text: "and integrations. They also " },
          { text: "secured high-quality editorial backlinks", highlight: true },
          { text: " from relevant HR and" },
        ],
      },
      {
        type: "mixed",
        parts: [
          { text: "business publications. Within 9 months, our organic demo requests " },
          { text: "grew from 17 to 68 per", highlight: true },
        ],
      },
      {
        type: "mixed",
        parts: [
          { text: "month,", highlight: true },
          { text: " making SEO a reliable acquisition channel." },
        ],
      },
    ],
    name: "Sarah Mitchell",
    role: "Director of Technology, International Justice Mission",
    company: "International Justice Mission",
    avatar: "/testimonials/sarah-mitchell.png",
    logo: "/testimonials/la-chos-logo.png",
  },
  {
    quoteLines: [
      {
        type: "text",
        text: "Working with Tectra gave us a dual-market SEO system for India and the USA. They",
      },
      {
        type: "text",
        text: "launched programmatic pages at scale and built feature-led content clusters that",
      },
      {
        type: "mixed",
        parts: [
          { text: "ranked quickly. Organic trial signups " },
          { text: "grew by 189% within 14 months,", highlight: true },
        ],
      },
      {
        type: "text",
        text: "with clear attribution back to SEO.",
      },
    ],
    name: "Priya Nair",
    role: "VP Marketing, Project Management SaaS",
    company: "Project Management SaaS",
    avatar: "/testimonials/sarah-mitchell.png",
    logo: "/testimonials/la-chos-logo.png",
  },
];

export default function ClientVoicesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = TESTIMONIALS[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative inline-flex w-full flex-col items-center justify-start gap-8 overflow-hidden bg-white px-5 py-16 sm:gap-10 sm:px-8 md:px-12 lg:gap-12 lg:px-16 xl:px-[160px] xl:py-24">
      {/* Soft gradient wash behind the quote — visible, softer than text */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] hidden h-64 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[60px] xl:block"
        style={{
          background: "linear-gradient(160deg, #BFE3E0 0%, #F4D6E6 45%, #F7E6C0 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 inline-flex w-full items-center justify-center self-stretch">
        <div className="inline-flex flex-col items-center justify-start">
          <div className="inline-flex items-start justify-center gap-3">
            <div className="relative h-4 w-3.5">
              <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                —
              </div>
            </div>
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
              Client voices
            </div>
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
              —
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-5">
            <div
              className={`${funnelDisplay.className} w-full max-w-sm text-center text-3xl font-light leading-tight text-neutral-900 sm:text-4xl sm:leading-[49px] lg:max-w-none lg:text-5xl lg:leading-[54px]`}
            >
              <span className="hidden lg:block lg:whitespace-nowrap">What Our SaaS SEO</span>
              <span className="hidden lg:block lg:whitespace-nowrap">Clients Say</span>
              <span className="lg:hidden">What Our SaaS SEO Clients Say</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center lg:h-[360px]">
        <div className="relative flex w-full flex-1 flex-col items-center justify-start">
            {/* Mobile View: single continuous paragraph */}
            <div className="lg:hidden text-center text-neutral-600 font-light leading-relaxed px-2">
              &ldquo;
              {active.quoteLines.map((line, lineIndex) => {
                if (line.type === "text") {
                  return <span key={lineIndex} className="text-neutral-600">{line.text} </span>;
                } else {
                  return line.parts.map((part, partIndex) => (
                    <span
                      key={`${lineIndex}-${partIndex}`}
                      className={part.highlight ? "font-normal text-neutral-900" : "font-light text-neutral-600"}
                    >
                      {part.text}
                    </span>
                  ));
                }
              })}
              &rdquo;
            </div>

            {/* Desktop View: block structure */}
            <div className="hidden lg:block">
              {active.quoteLines.map((line, lineIndex) => (
                <span
                  key={`${active.name}-line-${lineIndex}`}
                  className="block lg:whitespace-nowrap"
                >
                  {line.type === "text" ? (
                    <span className="text-neutral-600">{line.text}</span>
                  ) : (
                    line.parts.map((part, partIndex) => (
                      <span
                        key={`${active.name}-line-${lineIndex}-${partIndex}`}
                        className={
                          part.highlight
                            ? "font-normal text-neutral-950"
                            : "font-light text-neutral-900"
                        }
                      >
                        {part.text}
                      </span>
                    ))
                  )}
                </span>
              ))}
            </div>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-5">
          <Image
            src={active.avatar}
            alt={active.name}
            width={56}
            height={56}
            className="size-14 shrink-0 rounded-full object-cover outline outline-1 outline-neutral-300"
          />
          <div className="flex flex-col items-center justify-center sm:items-start gap-0.5 sm:gap-1 text-center sm:text-left max-w-[280px] sm:max-w-none">
            <div className="text-sm font-medium leading-5 text-color-neutral-950 font-['Aspekta']">
              {active.name}
            </div>
            <div className="text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
              {active.role}
            </div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-neutral-200" />
          <Image
            src={active.logo}
            alt={`${active.company} Logo`}
            width={96}
            height={80}
            className="h-14 w-20 shrink-0 object-contain sm:h-16 sm:w-24"
          />
        </div>
      </div>

      <div className="relative z-10 flex shrink-0 flex-col items-center justify-center gap-6">
        <div className="inline-flex items-start justify-start gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`relative h-1 w-6 rounded-[100px] ${
                index === activeIndex ? "bg-color-neutral-950" : "bg-color-neutral-300"
              }`}
            />
          ))}
        </div>
        <div className="inline-flex items-start justify-start gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="flex size-10 items-center justify-center rounded-[100px] bg-color-neutral-0 outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-200 shadow-[inset_-2.4035820960998535px_5.608357906341553px_26.439401626586914px_0px_rgba(0,0,0,0.08),inset_-2.4035820960998535px_5.608357906341553px_9px_0px_rgba(0,0,0,0.08)]"
          >
            <span className="text-center text-sm font-medium leading-5 text-color-neutral-950 font-['Aspekta']">
              ←
            </span>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="flex size-10 items-center justify-center rounded-[100px] bg-color-neutral-0 outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-200 shadow-[inset_-2.4035820960998535px_5.608357906341553px_26.439401626586914px_0px_rgba(0,0,0,0.08),inset_-2.4035820960998535px_5.608357906341553px_9px_0px_rgba(0,0,0,0.08)]"
          >
            <span className="text-center text-sm font-medium leading-5 text-color-neutral-950 font-['Aspekta']">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
