import React from "react";

export default function CaseStudies() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 select-none">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="flex flex-col justify-start items-start">
            <div className="inline-flex justify-center items-center gap-3">
              <span className="overline-text">—</span>
              <h2 className="overline-text">SELECTED CASE STUDIES</h2>
              <span className="overline-text">—</span>
            </div>
            <div className="pt-4 flex flex-col justify-start items-start">
              <h3
                className="max-w-7xl mx-autog"
                style={{
                  color: "var(--color-neutral-900, #171717)",
                  fontFamily: '"Funnel Display", sans-serif',
                  fontSize: "clamp(30px, 5vw, 48px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "clamp(36px, 5.5vw, 54px)",
                  letterSpacing: "var(--font-tracking-snug, -1px)",
                }}
              >
                Real Result for Real Business
              </h3>
            </div>
          </div>
          <div className="max-w-[543.38px] w-full flex flex-col justify-center items-start lg:items-end">
            <p
              className="w-full lg:w-96 text-left lg:text-right"
              style={{
                color: "#262626",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "var(--font-lineheight-sm, 20px)",
              }}
            >
              Every project reflects the same approach. Understand the business, solve the right problem, and measure success through meaningful outcomes.
            </p>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-stretch">
          {/* Card 1: Carpenter's Finance */}
          <div className="flex flex-col justify-between items-start gap-4 h-full bg-white group">
            <div className="flex flex-col gap-4 w-full">
              <div
                className="w-full h-[449px] rounded-3xl flex justify-end items-end p-4 bg-neutral-900 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage: "url('/images/407fbc4a480fff280544e6a93a47cea8ae9199b0.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="w-36 flex flex-col justify-center items-end gap-3">
                  {/* Stat 1 */}
                  <div
                    className="self-stretch p-3 flex flex-col justify-start items-start"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(0, 0, 0, 0.25) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.05), inset -3px -3px 8px rgba(0, 0, 0, 0.35), inset -8px -8px 20px rgba(255, 255, 255, 0.12), 0 10px 20px -6px rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(15px) saturate(110%)",
                      WebkitBackdropFilter: "blur(15px) saturate(110%)",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <span
                        style={{
                          color: "var(--color-neutral-0, #FFF)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-40, 40px)",
                          fontStyle: "normal",
                          fontWeight: 100,
                          lineHeight: "var(--font-lineheight-44, 44px)",
                        }}
                      >
                        3×
                      </span>
                    </div>
                    <div className="pt-1 flex flex-col justify-start items-start">
                      <span
                        style={{
                          color: "var(--color-neutral-0, #FFF)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-xs, 12px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "var(--font-lineheight-xs, 16px)",
                        }}
                      >
                        Faster approvals
                      </span>
                    </div>
                  </div>
                  {/* Stat 2 */}
                  <div
                    className="self-stretch p-3 flex flex-col justify-start items-start"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(0, 0, 0, 0.25) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.05), inset -3px -3px 8px rgba(0, 0, 0, 0.35), inset -8px -8px 20px rgba(255, 255, 255, 0.12), 0 10px 20px -6px rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(15px) saturate(110%)",
                      WebkitBackdropFilter: "blur(15px) saturate(110%)",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="justify-start">
                        <span
                          style={{
                            color: "var(--color-neutral-0, #FFF)",
                            fontFamily: "Aspekta, sans-serif",
                            fontSize: "var(--font-size-40, 40px)",
                            fontStyle: "normal",
                            fontWeight: 100,
                            lineHeight: "var(--font-lineheight-44, 44px)",
                          }}
                        >
                          6
                        </span>
                        <span className="text-color-neutral-0 text-sm font-normal font-['Aspekta'] leading-5">mon</span>
                      </div>
                    </div>
                    <div className="pt-1 flex flex-col justify-start items-start">
                      <span
                        style={{
                          color: "var(--color-neutral-0, #FFF)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-xs, 12px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "var(--font-lineheight-xs, 16px)",
                        }}
                      >
                        Delivery timeline
                      </span>
                    </div>
                  </div>
                  {/* Stat 3 */}
                  <div
                    className="self-stretch p-3 flex flex-col justify-start items-start"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(0, 0, 0, 0.25) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.05), inset -3px -3px 8px rgba(0, 0, 0, 0.35), inset -8px -8px 20px rgba(255, 255, 255, 0.12), 0 10px 20px -6px rgba(0, 0, 0, 0.45)",
                      backdropFilter: "blur(15px) saturate(110%)",
                      WebkitBackdropFilter: "blur(15px) saturate(110%)",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <span
                        style={{
                          color: "var(--color-neutral-0, #FFF)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-40, 40px)",
                          fontStyle: "normal",
                          fontWeight: 100,
                          lineHeight: "var(--font-lineheight-44, 44px)",
                        }}
                      >
                        60%
                      </span>
                    </div>
                    <div className="pt-1 flex flex-col justify-start items-start">
                      <span
                        style={{
                          color: "var(--color-neutral-0, #FFF)",
                          fontFamily: "Aspekta, sans-serif",
                          fontSize: "var(--font-size-xs, 12px)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "var(--font-lineheight-xs, 16px)",
                        }}
                      >
                        Cost reduction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "#404040",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                }}
              >
                Built a modern lending platform that delivered 3× faster loan approvals while reducing operational costs by 60% through streamlined digital workflows.
              </p>
            </div>
            <a
              href="#carpenter-case-study"
              className="hover:underline"
              style={{
                color: "var(--color-neutral-900, #171717)",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--font-lineheight-sm, 20px)",
              }}
            >
              Read the Carpenter&apos;s Finance Case Study →
            </a>
          </div>

          {/* Card 2: IJM */}
          <div className="flex flex-col justify-between items-start gap-4 h-full bg-white group">
            <div className="flex flex-col gap-4 w-full">
              <img
                className="w-full h-[449px] rounded-3xl object-cover bg-neutral-100 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                src="/images/66052b0b20caa3127afe7d1a62be72d42e4dc87b.png"
                alt="IJM Case Study"
              />
              <p
                style={{
                  color: "#404040",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                }}
              >
                Designed an offline-first field operations platform deployed across 40+ countries, enabling reliable performance in low-connectivity environments.
              </p>
            </div>
            <a
              href="#ijm-case-study"
              className="hover:underline"
              style={{
                color: "var(--color-neutral-900, #171717)",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--font-lineheight-sm, 20px)",
              }}
            >
              Read the IJM Case Study →
            </a>
          </div>

          {/* Card 3: AVMC */}
          <div className="flex flex-col justify-between items-start gap-4 h-full bg-white group">
            <div className="flex flex-col gap-4 w-full">
              <img
                className="w-full h-[449px] rounded-3xl object-cover bg-neutral-100 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                src="/images/80b4224d5d92fabdfb3900a6cc3bd44efa55ba51.png"
                alt="AVMC Case Study"
              />
              <p
                style={{
                  color: "#404040",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "var(--font-size-sm, 14px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "var(--font-lineheight-sm, 20px)",
                }}
              >
                Designed and developed a modern university platform that unified departments under one consistent digital experience.
              </p>
            </div>
            <a
              href="#avmc-case-study"
              className="hover:underline"
              style={{
                color: "var(--color-neutral-900, #171717)",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "var(--font-size-sm, 14px)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--font-lineheight-sm, 20px)",
              }}
            >
              Read the AVMC Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
