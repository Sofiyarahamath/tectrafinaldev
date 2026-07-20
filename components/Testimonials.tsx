"use client";

import React, { useState } from "react";

type HighlightedText = {
  text: string;
  highlight: boolean;
};

type Testimonial = {
  quote: HighlightedText[];
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: [
      { text: "Working with Tectra ", highlight: false },
      { text: "transformed how our field staff operate", highlight: true },
      { text: ". The offline-first app they built has been successfully deployed across more than ", highlight: false },
      { text: "40 countries", highlight: true },
      { text: ", delivering a fast, reliable experience even in low-connectivity environments. Their attention to usability, performance, and ", highlight: false },
      { text: "scalability", highlight: true },
      { text: " made adoption seamless for teams worldwide.\"", highlight: false }
    ],
    name: "Sarah Mitchell",
    role: "Director of Technology",
    company: "International Justice Mission",
    avatar: "/images/sarah_mitchell_avatar.png",
    logo: "/images/IJM.svg"
  },
  {
    quote: [
      { text: "Tectra delivered our new digital lending portal ", highlight: false },
      { text: "on time and under budget", highlight: true },
      { text: ". The system has cut our loan processing cycle from 48 hours to ", highlight: false },
      { text: "just 15 minutes", highlight: true },
      { text: ", boosting our team efficiency and customer satisfaction scores to an ", highlight: false },
      { text: "all-time high", highlight: true },
      { text: ".\"", highlight: false }
    ],
    name: "Alex Mercer",
    role: "VP of Product",
    company: "Carpenter's Finance",
    avatar: "/images/alex_mercer_avatar.png",
    logo: "/images/Logo 2.svg"
  },
  {
    quote: [
      { text: "Unifying our campus departments onto a single, consistent web platform was a ", highlight: false },
      { text: "massive engineering challenge", highlight: true },
      { text: ". Tectra's team handled the migration flawlessly, creating a highly performant and accessible experience for our ", highlight: false },
      { text: "12,000+ active students", highlight: true },
      { text: " and faculty members.\"", highlight: false }
    ],
    name: "Dr. Vikram Rao",
    role: "Dean of IT",
    company: "AVMC University",
    avatar: "/images/vikram_rao_avatar.png",
    logo: "/images/AVMC.svg"
  }
];

export default function Testimonials() {
  const [isFading, setIsFading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];

  const triggerSlideChange = (nextIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 200);
  };

  const handlePrev = () => {
    const nextIndex = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    triggerSlideChange(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
    triggerSlideChange(nextIndex);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 border-b border-neutral-100 relative overflow-hidden select-none">
      {/* Background Soft Glow Image from Figma */}
      <img
        src="/images/Rectangle 9 (1).png"
        alt=""
        style={{
          width: "240px",
          height: "328px",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: "45%",
          opacity: 0.95,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col justify-start items-center">
          <div className="inline-flex justify-center items-center gap-3">
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
              —
            </span>
            <h2 
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
              WHAT CLIENTS SAY
            </h2>
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
              —
            </span>
          </div>
          <div className="pt-4 flex flex-col justify-start items-center">
            <h3
              className="max-w-7xl mx-autol"
              style={{
                color: "var(--color-neutral-900, #171717)",
                textAlign: "center",
                fontFamily: '"Funnel Display", sans-serif',
                fontSize: "clamp(28px, 5vw, 48px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "clamp(34px, 5.5vw, 54px)",
                letterSpacing: "var(--font-tracking-snug, -1px)",
              }}
            >
              The Words Behind Our Work
            </h3>
          </div>
        </div>

        {/* Testimonial Quote Area */}
        <div 
          className={`flex flex-col justify-center items-center gap-6 w-full max-w-[800px] min-h-[220px] transition-all duration-300 ease-in-out ${
            isFading ? "opacity-0 transform translate-y-2 scale-[0.98] blur-[2px]" : "opacity-100 transform translate-y-0 scale-100 blur-0"
          }`}
          style={{ zIndex: 10 }}
        >
          <div className="justify-start transition-all duration-300 px-2" style={{ textAlign: "center" }}>
            {active.quote.map((part, index) => (
              <span
                key={index}
                style={{
                  color: part.highlight ? "#262626" : "var(--color-neutral-600, #525252)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 24px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "clamp(24px, 3.5vw, 32px)",
                }}
              >
                {index === 0 ? `"` : ""}{part.text}
              </span>
            ))}
          </div>

          {/* Client Bio Row */}
          <div className="py-6 inline-flex justify-center items-center gap-4 flex-wrap">
            <img 
              className="w-14 h-14 rounded-full border border-neutral-200 object-cover bg-neutral-50 shrink-0" 
              src={active.avatar} 
              alt={active.name}
            />
            <div className="flex flex-col justify-center items-start shrink-0">
              <span 
                style={{
                  color: "var(--color-neutral-950, #0a0a0a)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                }}
              >
                {active.name}
              </span>
              <span 
                style={{
                  color: "var(--color-neutral-500, #737373)",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                }}
              >
                {active.role}, {active.company}
              </span>
            </div>
            <div className="h-10 w-px bg-neutral-200 mx-2 hidden sm:block" />
            <img 
              className="h-12 md:h-14 max-w-[160px] object-contain shrink-0" 
              src={active.logo} 
              alt={`${active.company} Logo`}
            />
          </div>
        </div>

        {/* Carousel Indicators & Actions Block */}
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Progress Indicators */}
          <div className="inline-flex justify-start items-start gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => triggerSlideChange(index)}
                className={`w-6 h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-neutral-950" : "bg-neutral-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="inline-flex justify-start items-start gap-2">
            <button 
              onClick={handlePrev}
              className="text-neutral-950 hover:bg-neutral-50 active:bg-neutral-100 transition-all cursor-pointer font-medium font-['Aspekta']"
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",
                border: "0.8px solid var(--color-neutral-200, #EBEBEB)",
                background: "var(--color-neutral-0, #FFF)",
                boxShadow: "-2.404px 5.608px 9px 0 rgba(0, 0, 0, 0.08) inset, -2.404px 5.608px 26.439px 0 rgba(0, 0, 0, 0.08) inset",
              }}
              aria-label="Previous testimonial"
            >
              <img 
                src="/images/→.svg" 
                alt="Previous" 
                style={{ width: "11px", height: "11px", transform: "rotate(180deg)" }} 
              />
            </button>
            <button 
              onClick={handleNext}
              className="text-neutral-950 hover:bg-neutral-50 active:bg-neutral-100 transition-all cursor-pointer font-medium font-['Aspekta']"
              style={{
                display: "flex",
                width: "40px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",
                border: "0.8px solid var(--color-neutral-200, #EBEBEB)",
                background: "var(--color-neutral-0, #FFF)",
                boxShadow: "-2.404px 5.608px 9px 0 rgba(0, 0, 0, 0.08) inset, -2.404px 5.608px 26.439px 0 rgba(0, 0, 0, 0.08) inset",
              }}
              aria-label="Next testimonial"
            >
              <img 
                src="/images/→.svg" 
                alt="Next" 
                style={{ width: "11px", height: "11px" }} 
              />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
