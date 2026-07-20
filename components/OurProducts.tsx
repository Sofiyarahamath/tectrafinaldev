"use client";

import React from "react";

type ProductItem = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  logoBg: string;
  logoIcon: React.ReactNode;
  mockupBg: string;
  mockupContent: React.ReactNode;
};

const PRODUCTS: ProductItem[] = [
  {
    id: "motherly",
    name: "Motherly",
    subtitle: "PREGNANCY & PARENTING COMPANION APP",
    description: "A mobile health platform for expectant and new mothers — tracking, content, and community built by Tectra and run at scale.",
    tags: ["Mobile", "Healthcare", "B2C"],
    logoBg: "transparent",
    logoIcon: (
      <img
        src="/images/image 185.png"
        alt="Motherly Logo"
        className="w-11 h-11 object-contain"
      />
    ),
    mockupBg: "#FAF6F7",
    mockupContent: (
      <img
        src="/images/feature_graphic.png 1.png"
        alt="Motherly"
        className="w-full h-full object-cover object-right transition-all duration-700 group-hover:scale-105"
      />
    ),
  },
  {
    id: "lead101",
    name: "Lead101",
    subtitle: "SALES & LEAD MANAGEMENT PLATFORM",
    description: "A comprehensive lead generation, tracking, and management system designed to optimize conversion pipelines for modern sales teams.",
    tags: ["Mobile", "Healthcare", "B2C"],
    logoBg: "transparent",
    logoIcon: (
      <img
        src="/images/Frame 1984081288.svg"
        alt="Lead101 Logo"
        className="w-11 h-11 object-contain"
      />
    ),
    mockupBg: "#DBEAFE",
    mockupContent: (
      <div className="w-full h-full flex items-center justify-start pl-12 group-hover:scale-105 transition-transform duration-700">
        <img
          src="/images/Institution Leads Dashboard 1.png"
          alt="Lead101"
          className="w-[140%] max-w-none rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/50 transition-all duration-700"
        />
      </div>
    ),
  },
  {
    id: "elderly",
    name: "Elderly",
    subtitle: "SENIOR CARE COORDINATION PLATFORM",
    description: "A family-centric care coordination SaaS connecting seniors, caregivers, and healthcare providers in one unified platform.",
    tags: ["Web", "Healthcare", "SaaS"],
    logoBg: "transparent",
    logoIcon: (
      <img
        src="/images/image 191.png"
        alt="Elderly Logo"
        className="w-11 h-11 object-contain"
      />
    ),
    mockupBg: "#F5F9FC",
    mockupContent: (
      <img
        src="/images/image 181.png"
        alt="Elderly"
        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
      />
    ),
  },
];

export default function OurProducts() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[50px] pb-[50px] md:pt-[50px] md:pb-[50px] px-4 md:px-8 lg:px-16 xl:px-24 select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col">

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
              — OUR PRODUCTS —
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
              Products We Build <br /> & Run Ourselves
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 lg:pt-8 flex flex-col items-end w-full">
            <p
              style={{
                color: "var(--color-neutral-600, #525252)",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "var(--font-lineheight-sm, 20px)",
                maxWidth: "420px",
              }}
              className="text-left lg:text-right"
            >
              A collection of intelligent digital products crafted to empower businesses with speed,
              reliability, and seamless user experiences.
            </p>
          </div>
        </div>

        {/* ── Products Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-16 md:mt-20">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col items-start w-full">
              
              {/* Top Image Mockup Container (Outer Wrapper) */}
              <div
                style={{
                  borderRadius: "24px",
                  aspectRatio: "1/1",
                  position: "relative",
                  width: "100%",
                }}
                className="transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-neutral-100"
              >
                {/* Background & Mockup Layer (Gets Grayscale Effect) */}
                <div
                  style={{
                    background: product.mockupBg,
                    position: "absolute",
                    inset: 0,
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                  className="transition-all duration-700 md:grayscale md:group-hover:grayscale-0"
                >
                  {/* Main Mockup Graphic */}
                  {product.mockupContent}
                </div>

                {/* Floating Logo Container (Always Colored) */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: product.logoBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: product.logoBg === "#FFFFFF" ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none",
                    border: product.logoBg === "#FFFFFF" ? "1px solid rgba(0,0,0,0.08)" : "none",
                  }}
                  className="z-10"
                >
                  {product.logoIcon}
                </div>
              </div>

              {/* Tags block */}
              <div className="flex flex-wrap gap-2 mt-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "Aspekta, sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#737373",
                      background: "#FFFFFF",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "28px",
                  fontWeight: 500,
                  marginTop: "16px",
                }}
              >
                {product.name}
              </h3>

              {/* Subtitle */}
              <span
                style={{
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#737373",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginTop: "6px",
                }}
              >
                {product.subtitle}
              </span>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#525252",
                  lineHeight: "22px",
                  marginTop: "12px",
                  maxWidth: "360px",
                }}
              >
                {product.description}
              </p>

              {/* Visit product link */}
              <a
                href={`#${product.id}`}
                style={{
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  marginTop: "20px",
                }}
                className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 transform active:scale-95 cursor-pointer underline decoration-neutral-200 hover:decoration-neutral-800 underline-offset-4"
              >
                Visit product <span>→</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
