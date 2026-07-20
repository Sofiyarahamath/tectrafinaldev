"use client";

import React, { useEffect, useState, useRef } from "react";

type TextCard = {
  type: "text";
  title: string;
  description: string;
};

type StatCard = {
  type: "stat";
  number: string;
  label: string;
  backgroundImage: string;
};

type CardItem = TextCard | StatCard;

const CARDS: CardItem[] = [
  {
    type: "stat",
    number: "40+",
    label: "Countries Served",
    backgroundImage: "/images/Rectangle 9 (2).png"
  },
  {
    type: "text",
    title: "Built to Fit Your Market Reality",
    description: "We create solutions that are fully personalised to your industry and specific business needs, ensuring outstanding growth."
  },
  {
    type: "text",
    title: "End-to-End Execution",
    description: "We handle everything from idea to execution with consistency while maintaining your industry standards."
  },
  {
    type: "text",
    title: "360-degree Growth Partner",
    description: "You get software, design, marketing, and automation from one single expert team."
  },
  {
    type: "stat",
    number: "10+",
    label: "Years Experience",
    backgroundImage: "/images/Rectangle 9 (2).png"
  },
  {
    type: "text",
    title: "Built for Diverse Business Models",
    description: "We work with startups, SMEs, and enterprises, adapting to different scales, goals, and business structures."
  },
  {
    type: "text",
    title: "Chennai roots ⇌ Global standards",
    description: "Software development company in Chennai with global-quality thinking, delivering solutions that meet international standards and expectations."
  },
  {
    type: "text",
    title: "Industry-Specific Expertise",
    description: "Experience across industries allows us to understand and solve domain-specific business challenges with clear execution."
  },
  {
    type: "stat",
    number: "24",
    label: "hour Strategy Response",
    backgroundImage: "/images/Rectangle 9 (2).png"
  }
];

export default function WhyChooseTectra() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0A] text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

        {/* Left Column: Heading & Call to Action */}
        <div
          className={`lg:col-span-4 flex flex-col justify-between items-start z-10 lg:self-stretch gap-12 lg:gap-0 transition-all duration-1000 ease-out ${!mounted || hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
            }`}
        >

          {/* Top: Overline */}
          <span
            style={{
              color: "var(--color-neutral-400, #a3a3a3)",
              fontFamily: "Aspekta, sans-serif",
              fontSize: "var(--font-size-xs, 12px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--font-lineheight-xs, 16px)",
              letterSpacing: "var(--font-tracking-normal, 0)",
              textTransform: "uppercase",
            }}
          >
            — WHY CHOOSE TECTRA TECHNOLOGIES —
          </span>

          {/* Bottom: Heading, Subtext & CTA Button */}
          <div className="flex flex-col justify-start items-start gap-8 mt-12 lg:mt-0">
            {/* Heading & Subtext */}
            <div className="flex flex-col justify-start items-start gap-4">
              {/* Header */}
              <h2
                style={{
                  color: "#FFFFFF",
                  fontFamily: '"Funnel Display", sans-serif',
                  fontSize: "clamp(30px, 5vw, 48px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "clamp(36px, 5.5vw, 56px)",
                  letterSpacing: "-1px",
                }}
              >
                Why Businesses Choose Tectra
              </h2>
              {/* Subtext */}
              <p
                style={{
                  color: "var(--color-neutral-400, #a3a3a3)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "22px",
                  marginTop: "12px",
                }}
              >
                A strategic technology partner focused on building digital products that deliver measurable business outcomes.
              </p>
            </div>

            {/* CTA Button */}
            <button
              style={{
                background: "#FFFFFF",
                color: "#0A0A0A",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
              className="group px-6 py-3.5 rounded-full inline-flex justify-center items-center gap-2 hover:bg-neutral-100 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              GET YOUR FREE GROWTH AUDIT <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3x3 Grid of Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-[#1A1A1A] p-2 rounded-3xl z-10">
          {CARDS.map((card, index) => {
            const transitionStyle = {
              transitionDelay: !mounted || hasIntersected ? `${index * 80}ms` : "0ms",
            };

            if (card.type === "stat") {
              return (
                <div
                  key={index}
                  style={{
                    background: `url("${card.backgroundImage}") center/cover no-repeat`,
                    ...transitionStyle
                  }}
                  className={`group rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end items-end p-6 relative transition-all duration-700 ease-out hover:scale-[1.04] hover:shadow-[0_20px_40px_rgba(244,63,94,0.18)] hover:border-pink-500/20 border border-transparent cursor-pointer ${!mounted || hasIntersected
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                    }`}
                >
                  {/* Subtle Hover Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/0 via-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col justify-end items-end text-right z-10">
                    <span
                      style={{
                        color: "#0A0A0A",
                        fontFamily: '"Funnel Display", sans-serif',
                        fontSize: "56px",
                        fontWeight: 300,
                        lineHeight: "60px",
                        letterSpacing: "-1px",
                      }}
                    >
                      {card.number}
                    </span>
                    <span
                      style={{
                        color: "var(--color-primary-main, #000000)",
                        textAlign: "right",
                        fontFamily: "Aspekta, sans-serif",
                        fontSize: "var(--font-size-sm, 14px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "var(--font-lineheight-sm, 20px)",
                      }}
                    >
                      {card.label}
                    </span>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  style={transitionStyle}
                  className={`bg-white rounded-2xl p-6 min-h-[200px] flex flex-col justify-between transition-all duration-700 ease-out hover:scale-[1.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-neutral-100 hover:border-neutral-200 cursor-pointer ${!mounted || hasIntersected
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                    }`}
                >
                  <h3
                    style={{
                      color: "var(--color-primary-main, #000)",
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: "var(--font-size-lg, 18px)",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "var(--font-lineheight-md, 24px)",
                      letterSpacing: "var(--font-tracking-snug, -1px)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-primary-main, #000)",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "var(--font-size-md, 16px)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "var(--font-lineheight-md, 24px)",
                    }}
                    className="mt-4"
                  >
                    {card.description}
                  </p>
                </div>
              );
            }
          })}
        </div>

      </div>
    </section>
  );
}
