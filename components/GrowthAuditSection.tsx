"use client";

import React from "react";

const CHECKLIST_ITEMS = [
  "A visual map of your revenue leaks",
  "Your funnel scored stage by stage",
  "Top 3 growth priorities, ranked by impact",
  "A rough revenue projection",
  "Strategic recommendations, not a pitch",
];

export default function GrowthAuditSection() {
  return (
    <section
      style={{
        background: 'url("/images/f56fa2325f81246b300226c1b472dd97cdab371b.png") center/cover no-repeat',
      }}
      className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-24 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Off-White Container Card */}
        <div
          style={{
            background: "#F6F6F6",
            borderRadius: "40px",
          }}
          className="w-full p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch"
        >
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
            {/* Overline */}
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
              — YOU ARE SAFE FIRST STEP —
            </span>

            {/* Heading & Subtext */}
            <div className="flex flex-col gap-4">
              <h2
                style={{
                  color: "#0A0A0A",
                  fontFamily: '"Funnel Display", sans-serif',
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "clamp(38px, 5vw, 60px)",
                  letterSpacing: "-1.5px",
                }}
              >
                See exactly where your growth is leaking.
              </h2>
              <p
                style={{
                  color: "var(--color-neutral-600, #525252)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  maxWidth: "580px",
                }}
                className="mt-2"
              >
                In a free 30-minute Growth Audit, a senior strategist maps your
                funnel, finds the leaks, and shows you the 3 highest-impact fixes
                visually, in numbers. You keep the plan either way.
              </p>
            </div>

            {/* Bullet Point Checklist */}
            <div className="flex flex-col gap-4 w-full">
              {CHECKLIST_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 w-full">
                  <span
                    style={{
                      color: "#737373",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    className="shrink-0"
                  >
                    →
                  </span>
                  <span
                    style={{
                      color: "#262626",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "22px",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-between items-stretch">
            {/* Stats grid */}
            <div>
              <div className="grid grid-cols-3 gap-4 border-b border-neutral-200/80 pb-8">
                {/* Stat 1 */}
                <div className="flex flex-col items-start">
                  <span
                    style={{
                      color: "#0A0A0A",
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: "clamp(24px, 3.2vw, 36px)",
                      fontWeight: 300,
                      lineHeight: "1.1",
                    }}
                  >
                    30min
                  </span>
                  <span
                    style={{
                      color: "#737373",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    SESSION
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-start">
                  <span
                    style={{
                      color: "#0A0A0A",
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: "clamp(24px, 3.2vw, 36px)",
                      fontWeight: 300,
                      lineHeight: "1.1",
                    }}
                  >
                    24h
                  </span>
                  <span
                    style={{
                      color: "#737373",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    REPLY TIME
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-start">
                  <span
                    style={{
                      color: "#0A0A0A",
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: "clamp(24px, 3.2vw, 36px)",
                      fontWeight: 300,
                      lineHeight: "1.1",
                    }}
                  >
                    Free
                  </span>
                  <span
                    style={{
                      color: "#737373",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    NO COST
                  </span>
                </div>
              </div>

              {/* Sub-info details */}
              <div className="flex flex-col gap-1 mt-8">
                <p
                  style={{
                    color: "#737373",
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  Free • No obligation • NDA on request
                </p>
                <p
                  style={{
                    color: "#737373",
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  A senior strategist replies within 24 hours.
                </p>
              </div>
            </div>

            {/* CTA Button bottom aligned */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-auto">
              <button
                style={{
                  background: "#0A0A0A",
                  color: "#FFFFFF",
                  fontFamily: "Aspekta, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  borderRadius: "9999px",
                }}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-neutral-800 transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap text-[11px] md:text-[13px] py-[15px] px-4 md:px-[30px]"
              >
                GET YOUR FREE GROWTH AUDIT{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
