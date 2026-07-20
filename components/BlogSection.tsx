"use client";

import React from "react";

type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
};

const POSTS: BlogPost[] = [
  {
    id: "ai-tasks",
    title: "Five Tasks AI Can Handle Better in 2026",
    category: "AI & AUTOMATION",
    date: "June 5, 2026",
    description: "From code review to customer triage — here are the workflows where AI has proven its ROI this year.",
  },
  {
    id: "website-costs",
    title: "What a Business Website Actually Costs in 2026",
    category: "STRATEGY",
    date: "May 22, 2026",
    description: "A frank breakdown of design, development, and maintenance costs — without the agency spin.",
  },
  {
    id: "marketing-agencies",
    title: "Top Digital Marketing Agencies in Chennai 2026",
    category: "DIGITAL MARKETING",
    date: "May 10, 2026",
    description: "Our curated list of Chennai's most effective digital marketing firms — ranked by client outcomes.",
  },
];

const TectraLogoMark = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5163 7.37332C13.8354 7.57637 12.8821 7.98248 12.4054 8.27577C11.9061 8.61419 11.5883 8.99773 11.6337 9.22334C11.6564 9.4264 11.9968 9.67457 12.36 9.78737C12.7232 9.87762 13.9943 9.85506 15.1519 9.74225C16.2867 9.60689 17.6032 9.35871 18.0345 9.17822C18.4657 8.99773 18.9197 8.65931 19.0559 8.4337C19.1921 8.18553 19.1694 7.91479 18.9878 7.64406C18.7835 7.37332 18.3069 7.21539 17.2401 7.14771C16.2868 7.08003 15.3107 7.17027 14.5163 7.37332ZM9.04613 11.7502C8.50137 12.1112 7.72964 12.6978 7.36647 13.0813C6.91251 13.5476 6.74606 13.901 6.86711 14.1417C6.98061 14.4124 7.63884 14.5027 9.70436 14.6155C11.157 14.7057 14.3574 14.7057 16.7861 14.638C19.2148 14.5704 22.0293 14.3899 23.028 14.2545C24.0267 14.1191 25.5021 13.7807 26.2965 13.51C27.1137 13.2392 27.8627 12.8331 27.9989 12.6301C28.1578 12.3368 28.1351 12.1563 27.9308 11.9533C27.7265 11.7502 26.183 11.6148 22.279 11.502C19.3283 11.4343 15.3561 11.299 13.4722 11.2313L10.0675 11.0959L9.04613 11.7502ZM14.7433 16.5106L5.80031 16.646C5.09668 18.6314 4.9832 19.3985 5.07399 19.8497C5.16478 20.3686 5.36906 20.6619 5.82301 20.8424C6.25427 21.0003 8.54677 21.0454 13.3587 20.9326C17.172 20.8649 22.2336 20.6845 24.5942 20.5716C26.9775 20.4363 30.4049 20.1881 32.198 20.0076C34.0138 19.8271 36.3063 19.4887 37.305 19.218C38.3037 18.9698 39.2797 18.6539 39.4386 18.496C39.6883 18.2704 39.6429 18.135 39.2116 17.7064C38.9166 17.4131 38.1675 17.007 37.532 16.8039C36.6014 16.5106 35.2622 16.4429 30.0417 16.4204C26.5462 16.3978 19.6687 16.4429 14.7433 16.5106ZM7.50266 23.3692C7.09409 23.5497 6.64014 23.8656 6.52664 24.0686C6.41316 24.2717 6.36777 24.6552 6.43587 24.9485C6.50395 25.2193 6.93521 25.8284 7.41187 26.3022C7.86583 26.776 8.61487 27.2723 9.04613 27.3851C9.47739 27.5205 10.7712 27.6784 11.8834 27.7461C13.0183 27.8138 16.4229 27.701 19.4872 27.498C22.5514 27.2949 26.4327 26.979 28.1124 26.7986C29.792 26.5955 31.744 26.3473 32.425 26.212C33.1059 26.0766 34.1954 25.7382 34.8083 25.4674C35.4438 25.1741 36.2836 24.565 36.5787 24.204C36.8738 23.843 36.8738 23.7753 36.556 23.5497C36.3125 23.3692 33.6342 23.2339 28.391 23.1211C24.1011 23.031 17.8818 22.8955 14.5679 22.8278C9.73329 22.715 8.4168 22.7602 7.80397 23.0083C7.50266 23.3692 7.50266 23.3692 7.50266 23.3692ZM14.7206 29.19C13.4495 29.2803 12.2692 29.4833 11.838 29.709C11.4294 29.912 11.0889 30.2053 11.0889 30.3632C11.0662 30.5212 11.2932 30.837 11.5656 31.0852C11.838 31.3334 12.587 31.6718 13.2225 31.8297C13.8581 31.9876 15.6058 32.1907 17.1039 32.2584C18.7835 32.3261 20.3497 32.2809 21.1895 32.123C21.9385 31.9876 22.9145 31.6943 23.3231 31.4687C23.7544 31.2657 24.1402 30.9724 24.1856 30.8145C24.231 30.6565 23.8225 30.3407 23.3004 30.0925C22.7557 29.8443 21.7116 29.551 20.9625 29.4157C20.2135 29.3029 18.9878 29.1449 18.2388 29.1224C17.4897 29.0772 15.9009 29.0998 14.7206 29.19Z"
      fill="white"
    />
  </svg>
);

export default function BlogSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[50px] pb-20 md:pt-[50px] md:pb-28 px-4 md:px-8 lg:px-16 xl:px-24 select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col">

        {/* ── Header ── */}
        <div className="flex flex-col gap-4">
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
            — BLOGS —
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
            Perspectives from Our Team
          </h2>
        </div>

        {/* ── Blog Grid ── */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 mt-10 md:mt-16 md:mt-20 snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {POSTS.map((post) => (
            <div key={post.id} className="group flex flex-col items-start w-[85vw] sm:w-[400px] md:w-full shrink-0 snap-center md:snap-align-none cursor-pointer">

              {/* Dark Cover Card Box */}
              <div
                style={{
                  background: "#0D0D0D",
                  borderRadius: "20px",
                  aspectRatio: "1.5/1",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "28px",
                }}
                className="transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              >
                {/* Logo in top left */}
                <div className="opacity-80">
                  <TectraLogoMark />
                </div>

                {/* White title at bottom */}
                <h3
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  {post.title}
                </h3>
              </div>

              {/* Category and Date details */}
              <div className="flex items-center gap-1.5 mt-6">
                <span
                  style={{
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#737373",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {post.category}
                </span>
                <span className="text-neutral-300 text-xs">•</span>
                <span
                  style={{
                    fontFamily: "Aspekta, sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "#737373",
                  }}
                >
                  {post.date}
                </span>
              </div>

              {/* Title under the box */}
              <h4
                style={{
                  color: "#0A0A0A",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginTop: "12px",
                  lineHeight: "24px",
                }}
                className="group-hover:text-neutral-800 transition-colors duration-300"
              >
                {post.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#525252",
                  lineHeight: "22px",
                  marginTop: "8px",
                  maxWidth: "360px",
                }}
              >
                {post.description}
              </p>

              {/* Read article link */}
              <span
                style={{
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  marginTop: "20px",
                }}
                className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 underline decoration-neutral-200 group-hover:decoration-neutral-800 underline-offset-4"
              >
                Read article <span>→</span>
              </span>

            </div>
          ))}
        </div>

        {/* ── View All Articles Button ── */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            style={{
              display: "flex",
              width: "174.338px",
              height: "49.6px",
              padding: "15.4px 33.537px 14.2px 32.8px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100px",
              border: "0.8px solid var(--color-primary-main, #000)",
              color: "var(--color-neutral-950, #0A0A0A)",
              textAlign: "center",
              fontFamily: "Aspekta, sans-serif",
              fontSize: "var(--font-size-sm, 14px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--font-lineheight-sm, 20px)",
              background: "transparent",
            }}
            className="hover:bg-neutral-50 hover:border-neutral-800 transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            View All Articles
          </button>
        </div>

      </div>
    </section>
  );
}
