"use client";

import React, { useState } from "react";

type Discipline = {
  id: string;
  title: string;
  bullets: string[];
  gradient: string;
  previewGradient: string;
};

const DISCIPLINES: Discipline[] = [
  {
    id: "[01]",
    title: "Software Development",
    bullets: [
      "— Web Development",
      "— Mobile App Development",
      "— SaaS Development",
      "— API Development & Integration",
      "— Blockchain Technology",
      "— 3+ more services"
    ],
    // Software Development color wash (Figma background image)
    gradient: 'url("/images/Rectangle 9 (2).png") center/cover no-repeat',
    previewGradient: 'url("/images/Rectangle 9 (2).png") center/cover no-repeat'
  },
  {
    id: "[02]",
    title: "Digital Marketing",
    bullets: [
      "— SEO",
      "— Content Marketing",
      "— Social Media Marketing",
      "— Pay Per Click (PPC)",
      "— Email Marketing & Automation"
    ],
    // Digital Marketing color wash (Figma background image)
    gradient: 'url("/images/Rectangle 9 (3).png") center/cover no-repeat',
    previewGradient: 'url("/images/Rectangle 9 (3).png") center/cover no-repeat'
  },
  {
    id: "[03]",
    title: "Brand & Identity",
    bullets: [
      "— Brand Strategy",
      "— Brand Identity Design",
      "— Marketing Collateral Design",
      "— Video Production"
    ],
    // Brand & Identity color wash (Figma background image)
    gradient: 'url("/images/Rectangle 9 (4).png") center/cover no-repeat',
    previewGradient: 'url("/images/Rectangle 9 (4).png") center/cover no-repeat'
  },
  {
    id: "[04]",
    title: "UI/UX Design",
    bullets: [
      "— Product Design",
      "— Mobile UX Design",
      "— Web UX Design",
      "— Conversion Optimisation (CRO)"
    ],
    // UI/UX Design color wash (Figma background image)
    gradient: 'url("/images/Rectangle 9 (5).png") center/cover no-repeat',
    previewGradient: 'url("/images/Rectangle 9 (5).png") center/cover no-repeat'
  }
];

export default function Disciplines() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 border-b border-neutral-100 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-start items-stretch gap-16 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col justify-start items-start">
            {/* Overline */}
            <div className="inline-flex justify-center items-center gap-3 mb-4">
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
                — WHAT WE DO —
              </span>
            </div>
            {/* Heading */}
            <h2
              style={{
                color: "var(--color-neutral-900, #171717)",
                fontFamily: '"Funnel Display", sans-serif',
                fontSize: "clamp(30px, 5vw, 48px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "clamp(36px, 5.5vw, 54px)",
                letterSpacing: "var(--font-tracking-snug, -1px)",
              }}
              className="max-w-7xl mx-autol"
            >
              Four disciplines. One connected engine.
            </h2>
          </div>
          
          <div className="lg:col-span-5 pt-0 lg:pt-8">
            <p
              style={{
                color: "#262626",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "var(--font-lineheight-sm, 20px)",
              }}
              className="max-w-md lg:ml-auto text-left lg:text-right"
            >
              From strategy and design to software engineering, AI, and growth marketing, every capability works together as one connected system to help your business move faster and grow smarter.
            </p>
          </div>
        </div>

        {/* Disciplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINES.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className={`relative rounded-2xl border border-neutral-100 overflow-hidden cursor-pointer h-[380px] transition-all duration-500 ease-in-out bg-[#F8F8F8] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.4)] ${isHovered ? 'md:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.4)]' : 'md:shadow-none'}`}
              >
                {/* Smooth background opacity layer for crossfading the Figma images */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-100 md:opacity-0'}`}
                  style={{
                    background: item.gradient,
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* 1. Default (Not Hovered) State Panel */}
                <div 
                  className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ease-in-out opacity-0 pointer-events-none transform -translate-y-4 blur-[2px] ${
                    isHovered 
                      ? "md:opacity-0 md:pointer-events-none md:-translate-y-4 md:blur-[2px]" 
                      : "md:opacity-100 md:pointer-events-auto md:translate-y-0 md:blur-none"
                  }`}
                  style={{ zIndex: 10 }}
                >
                  {/* Top: Index */}
                  <span 
                    style={{
                      color: "var(--color-neutral-950, #0A0A0A)",
                      fontFamily: '"Funnel Display", sans-serif',
                      fontSize: "var(--font-size-xl, 24px)",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "var(--font-lineheight-xl, 32px)",
                    }}
                  >
                    {item.id}
                  </span>
                  
                  {/* Bottom: Title & Preview Pill */}
                  <div className="w-full flex flex-col gap-4">
                    <h3 
                      style={{
                        color: "var(--color-neutral-950, #0A0A0A)",
                        fontFamily: '"Funnel Display", sans-serif',
                        fontSize: "var(--font-size-lg, 18px)",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "var(--font-lineheight-md, 24px)",
                        letterSpacing: "var(--font-tracking-snug, -1px)",
                      }}
                    >
                      {item.title}
                    </h3>
                    {/* Tiny gradient wash preview pill at the bottom */}
                    <div 
                      className="w-full rounded-xl opacity-90 border border-white/20"
                      style={{ background: item.previewGradient, height: "75px" }}
                    />
                  </div>
                </div>

                {/* 2. Hovered (Active Colorful) State Panel */}
                <div 
                  className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ease-in-out opacity-100 transform translate-y-0 blur-none ${
                    isHovered 
                      ? "md:opacity-100 md:translate-y-0 md:blur-none md:pointer-events-auto" 
                      : "md:opacity-0 md:pointer-events-none md:translate-y-4 md:blur-[2px]"
                  }`}
                  style={{ zIndex: 10 }}
                >
                  {/* Top Row: Title & Arrow */}
                  <div className="flex justify-between items-start w-full">
                    <h3 
                      style={{
                        color: "var(--color-neutral-950, #0A0A0A)",
                        fontFamily: '"Funnel Display", sans-serif',
                        fontSize: "var(--font-size-lg, 18px)",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "var(--font-lineheight-md, 24px)",
                        letterSpacing: "var(--font-tracking-snug, -1px)",
                      }}
                      className="max-w-[80%]"
                    >
                      {item.title}
                    </h3>
                    {/* Top-Right Arrow button */}
                    <div className="w-6 h-6 flex justify-center items-center shrink-0">
                      <img 
                        src="/images/arrow_outward.svg" 
                        alt="Outward arrow" 
                        style={{
                          width: "12.394px",
                          height: "12.394px",
                          aspectRatio: "1/1",
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom: Bullets list */}
                  <div className="flex flex-col gap-2.5 pb-2">
                    {item.bullets.map((bullet, bIndex) => (
                      <span 
                        key={bIndex}
                        style={{
                          color: "var(--color-neutral-900, #171717)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-sm, 14px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "var(--font-lineheight-sm, 20px)",
                        }}
                      >
                        {bullet}
                      </span>
                    ))}
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
