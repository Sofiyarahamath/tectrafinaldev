"use client";

import React, { useEffect, useRef, useState } from "react";

const AI_FEATURES = [
  {
    number: "01",
    title: "LLM Integration",
    description:
      "Deploy GPT and Claude models securely using your proprietary business data to power intelligent applications.",
  },
  {
    number: "02",
    title: "Autonomous AI Agents",
    description:
      "Automate repetitive workflows with AI agents that perform tasks across your existing software ecosystem.",
  },
  {
    number: "03",
    title: "Enterprise RAG",
    description:
      "Build secure retrieval-augmented generation systems that transform internal knowledge into instant answers.",
  },
  {
    number: "04",
    title: "Computer Vision",
    description:
      "Automate inspections, image recognition, and operational workflows for manufacturing, logistics, and enterprise applications.",
  },
];

const CHAT_MESSAGES = [
  {
    id: 1,
    role: "ai",
    text: "Analyzing 12,847 transactions... Q3 revenue was $2.4M (+18% YoY). 3 churn risks identified.",
    delay: 0,
  },
  {
    id: 2,
    role: "user",
    text: "Identify specific factors driving churn in enterprise segment.",
    delay: 1500,
  },
  {
    id: 3,
    role: "ai",
    text: "Processing...\nPrimary factor: Integration latency in EMEA region accounts for 65% of negative sentiment scores.",
    delay: 3000,
  },
];

export default function AIInnovation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [typingVisible, setTypingVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          // Typing indicator appears after the third message finishes (around 4200ms)
          setTimeout(() => setTypingVisible(true), 4500);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visible = !mounted || hasIntersected;

  return (
    <section
      ref={sectionRef}
      style={{ background: "#0A0A0A" }}
      className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left Column ── */}
        <div
          className="lg:col-span-6 flex flex-col gap-8 md:gap-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Overline */}
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
            — AI INNOVATION —
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: '"Funnel Display", sans-serif',
                fontSize: "clamp(36px, 4vw, 48px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "clamp(42px, 4.5vw, 56px)",
                letterSpacing: "-1px",
              }}
            >
              AI Built Into the Product. Not Added Later.
            </h2>
            <p
              style={{
                color: "var(--color-neutral-400, #a3a3a3)",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "22px",
                maxWidth: "480px",
              }}
            >
              We integrate AI where it creates measurable business value,
              improving workflows, decision-making, and customer experiences.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-6 md:gap-8">
            {AI_FEATURES.map((feature, i) => (
              <div
                key={feature.number}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s ease ${0.2 + i * 0.1}s, transform 0.7s ease ${0.2 + i * 0.1}s`,
                }}
                className="group flex gap-4 items-start cursor-default"
              >
                {/* Number */}
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.3)",
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "var(--font-size-sm, 14px)",
                    fontWeight: 500,
                    width: "36px",
                    flexShrink: 0,
                    transition: "color 0.3s ease",
                  }}
                  className="group-hover:text-white"
                >
                  {feature.number} /
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "var(--font-size-sm, 14px)",
                      fontWeight: 500,
                      lineHeight: "var(--font-lineheight-sm, 20px)",
                    }}
                  >
                    {feature.title}
                  </span>
                  <span
                    style={{
                      color: "var(--color-neutral-400, #a3a3a3)",
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "var(--font-size-sm, 14px)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      maxWidth: "460px",
                    }}
                  >
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: AI Chat Tablet Mockup ── */}
        <div
          className="lg:col-span-6 flex justify-center lg:justify-end"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {/* Stacked Tablet Container */}
          <div 
            style={{ paddingTop: "15px", paddingLeft: "15px" }}
            className="relative w-full max-w-[440px] aspect-[4/5] min-h-[500px]"
          >
            
            {/* Main Tablet Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                background: "var(--color-primary-main, #000)",
                borderRadius: "34px",
                border: "1px solid var(--color-neutral-500, #737373)",
                boxShadow: "-15px -15px 0 0 rgba(255, 255, 255, 0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "36px 24px",
                zIndex: 10,
                overflow: "hidden",
              }}
            >
              {/* Chat Messages Log */}
              <div className="flex flex-col gap-6 w-full">
                {CHAT_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      display: "flex",
                      justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                      alignItems: "flex-start",
                      gap: "12px",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(16px)",
                      transition: `opacity 0.6s ease ${0.5 + msg.delay / 1000}s, transform 0.6s ease ${0.5 + msg.delay / 1000}s`,
                    }}
                  >
                    {/* AI Avatar */}
                    {msg.role === "ai" && (
                      <img
                        src="/images/chaticon.png"
                        alt="Tectra Avatar"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                    )}

                    {/* Chat Bubble */}
                    <div
                      style={{
                        background: msg.role === "ai" ? "var(--color-neutral-700, #404040)" : "var(--color-neutral-800, #262626)",
                        borderRadius: "12px",
                        padding: "14px 18px",
                        maxWidth: "75%",
                        color: "#FFFFFF",
                        fontFamily: "Aspekta, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: "19px",
                        whiteSpace: "pre-line",
                        border: msg.role === "ai" ? "1px solid var(--color-neutral-600, #525252)" : "none",
                        boxShadow: "-2.404px 5.608px 9px 0 rgba(255, 255, 255, 0.08) inset, -2.404px 5.608px 26.439px 0 rgba(255, 255, 255, 0.08) inset",
                      }}
                    >
                      {msg.text}
                    </div>

                    {/* User Avatar */}
                    {msg.role === "user" && (
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFF",
                          fontSize: "10px",
                          fontWeight: 500,
                          fontFamily: "Aspekta, sans-serif",
                          marginTop: "2px",
                        }}
                      >
                        YOU
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {typingVisible && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      opacity: 1,
                      animation: "fadeSlideUp 0.5s ease forwards",
                    }}
                  >
                    <img
                      src="/images/chaticon.png"
                      alt="Tectra Avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <div
                      style={{
                        background: "var(--color-neutral-700, #404040)",
                        borderRadius: "12px",
                        padding: "14px 20px",
                        border: "1px solid var(--color-neutral-600, #525252)",
                        boxShadow: "-2.404px 5.608px 9px 0 rgba(255, 255, 255, 0.08) inset, -2.404px 5.608px 26.439px 0 rgba(255, 255, 255, 0.08) inset",
                        display: "flex",
                        gap: "6px",
                        alignItems: "center",
                      }}
                    >
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.5)",
                            display: "inline-block",
                            animation: `typingDot 1.2s ease-in-out ${dot * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
