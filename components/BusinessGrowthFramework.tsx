"use client";

import React, { useState } from "react";

type PhaseItem = {
  number: string;
  phase: string;
  action: string;
  subtext: string;
  icon: () => React.ReactNode;
};

const PHASES: PhaseItem[] = [
  {
    number: "01",
    phase: "Discover",
    action: "Audit & Diagnose",
    subtext: "Growth Audit · Market Research · Competitive Analysis",
    icon: () => (
      <img
        src="/images/Group 332.svg"
        alt="Discover Icon"
        className="w-8 h-8 object-contain invert md:invert-0 md:group-hover:invert transition-all duration-300"
      />
    ),
  },
  {
    number: "02",
    phase: "Strategize",
    action: "Plan & Prioritize",
    subtext: "Revenue Modeling · Roadmap Design · KPI Framework",
    icon: () => (
      <img
        src="/images/Group 328.svg"
        alt="Strategize Icon"
        className="w-8 h-8 object-contain invert md:invert-0 md:group-hover:invert transition-all duration-300"
      />
    ),
  },
  {
    number: "03",
    phase: "Build",
    action: "Design & Develop",
    subtext: "Product Development · UI/UX · Automation Stack",
    icon: () => (
      <img
        src="/images/Group 329.svg"
        alt="Build Icon"
        className="w-8 h-8 object-contain invert md:invert-0 md:group-hover:invert transition-all duration-300"
      />
    ),
  },
  {
    number: "04",
    phase: "Launch",
    action: "Activate & Acquire",
    subtext: "GTM Strategy · Paid Channels · SEO · Performance Creative",
    icon: () => (
      <img
        src="/images/Group 330.svg"
        alt="Launch Icon"
        className="w-8 h-8 object-contain invert md:invert-0 md:group-hover:invert transition-all duration-300"
      />
    ),
  },
  {
    number: "05",
    phase: "Scale",
    action: "Optimize & Compound",
    subtext: "Analytics · CRO · Lifecycle Marketing · Expansion Revenue",
    icon: () => (
      <img
        src="/images/Group 331.svg"
        alt="Scale Icon"
        className="w-8 h-8 object-contain filter-none md:brightness-[.32] md:group-hover:brightness-100 md:group-hover:filter-none transition-all duration-300"
      />
    ),
  },
];

export default function BusinessGrowthFramework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FFFFFF] pt-20 pb-[50px] md:pt-28 md:pb-[50px] px-4 md:px-8 lg:px-16 xl:px-24 select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col">

        {/* Wrapper for Header and Grid */}
        <div className="flex flex-col gap-16 md:gap-20">
          {/* ── Header Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span
                style={{
                  color: "var(--color-neutral-600, #525252)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-xs, 12px)",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "var(--font-lineheight-xs, 16px)",
                  letterSpacing: "var(--font-tracking-normal, 0)",
                  textTransform: "uppercase",
                }}
              >
                — BUSINESS GROWTH FRAMEWORK —
              </span>
              <h2
                style={{
                  color: "#0A0A0A",
                  fontFamily: '"Funnel Display", sans-serif',
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "clamp(38px, 4.5vw, 56px)",
                  letterSpacing: "-1px",
                }}
              >
                A Proven Process Behind Every Successful Project
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 lg:pt-8 flex flex-col items-start lg:items-end w-full">
              <p
                style={{
                  color: "#262626",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                  maxWidth: "520px",
                }}
                className="text-left lg:text-right"
              >
                Every engagement follows the same five-phase framework, providing clarity,
                consistency, and measurable outcomes from discovery to long-term growth.
              </p>
            </div>
          </div>

          {/* ── Cards Grid ── */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 hide-scrollbar">
            <div className="grid grid-cols-5 lg:grid-cols-5 gap-3 min-w-[220vw] sm:min-w-[700px] lg:min-w-0">
              {PHASES.map((item) => {
                return (
                  <div
                    key={item.number}
                    className="group flex flex-col cursor-pointer transition-all duration-300"
                  >
                    {/* Top Icon Box */}
                    <div
                      className="flex items-center justify-center h-[100px] rounded-[15px] transition-all duration-300 bg-[#404040] text-white md:bg-[#EBEBEB] md:text-[#525252] md:group-hover:bg-[#404040] md:group-hover:text-white"
                    >
                      {item.icon()}
                    </div>

                    {/* Bottom Content Box */}
                    <div
                      className="flex flex-col h-[234px] justify-center items-center rounded-[15px] p-5 text-center transition-all duration-300 bg-[#1C1C1E] text-white md:bg-[#D6D6D6] md:text-[#0A0A0A] md:group-hover:bg-[#1C1C1E] md:group-hover:text-white"
                    >
                      <span
                        style={{
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-xs, 12px)",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "var(--font-lineheight-xs, 16px)",
                          letterSpacing: "var(--font-tracking-normal, 0)",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                        }}
                        className="transition-colors duration-300 text-[#A3A3A3] md:text-[#262626] md:group-hover:text-[#A3A3A3]"
                      >
                        {item.number}
                      </span>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          fontFamily: "Aspekta, sans-serif",
                        }}
                      >
                        {item.phase}
                      </span>
                      <span
                        style={{
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-xs, 12px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "var(--font-lineheight-xs, 16px)",
                          marginTop: "6px",
                        }}
                        className="transition-colors duration-300 text-[#ADADAD] md:text-[#262626] md:group-hover:text-[#ADADAD]"
                      >
                        {item.action}
                      </span>
                    </div>

                  {/* Outer Subtext Label */}
                  <div
                    style={{
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "var(--font-size-xs, 12px)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "var(--font-lineheight-xs, 16px)",
                      paddingTop: "14px",
                      maxWidth: "200px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      textAlign: "center",
                    }}
                    className="transition-colors duration-300 text-[#737373] md:text-[#262626] md:group-hover:text-[#737373]"
                  >
                    {item.subtext}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
          {/* ── End scroll wrapper ── */}
        </div>
        {/* ── End flex flex-col gap-16 wrapper ── */}

        {/* ── Bottom CTA Banner ── */}
        <div
          style={{
            border: "0.8px solid var(--color-neutral-300, #D6D6D6)",
            background: "var(--color-neutral-0, #FFF)",
            boxShadow: "-2.404px 5.608px 26.439px 0 rgba(0, 0, 0, 0.04) inset",
            marginTop: "50px",
          }}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-8 md:px-10 md:py-6 rounded-3xl md:rounded-[1000px]"
        >
          {/* Text block */}
          <p
            style={{
              color: "var(--color-neutral-600, #525252)",
              fontFamily: "Aspekta, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              maxWidth: "760px",
            }}
            className="text-center md:text-left font-normal"
          >
            Enterprise strategy, product execution, and measurable outcomes. Every engagement follows a structured
            framework that transforms ideas into scalable digital products.
          </p>

          {/* CTA Button */}
          <button
            style={{
              background: "#0A0A0A",
              color: "#FFFFFF",
              fontFamily: "Aspekta, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
            className="group px-4 md:px-6 py-3.5 rounded-full inline-flex justify-center items-center gap-2 hover:bg-neutral-800 transition-all duration-300 transform active:scale-95 cursor-pointer shrink-0 whitespace-nowrap text-[11px] md:text-[13px]"
          >
            GET YOUR FREE GROWTH AUDIT <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
