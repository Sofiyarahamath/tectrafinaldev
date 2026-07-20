import React from "react";
import Image from "next/image";
import Stats from "./Stats";






export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] md:h-[783px] overflow-hidden select-none shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/herosection.png"
          alt="We Build It Like It's Our Own"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] w-full h-full mx-auto flex flex-col justify-end md:justify-between pt-36 md:pt-48 pb-8 px-5 md:px-16 lg:px-24">

        {/* Main Content Area */}
        <div className="w-full max-w-4xl flex flex-col items-start text-left mt-6 md:mt-16">

          {/* Sub-label */}
          <div className="flex items-center gap-x-2 text-[#D6D6D6] text-[11px] md:text-[12px] font-medium leading-[16px] tracking-normal mb-3 md:mb-[24px] uppercase">
            <span className="w-4 h-[1px] bg-[#D6D6D6]/60" />
            360-degree growth partner
            <span className="w-4 h-[1px] bg-[#D6D6D6]/60" />
          </div>

          {/* Headline */}
          <h1 className="text-white text-[32px] sm:text-[36px] md:text-6xl lg:text-[72px] font-light leading-[1.1] tracking-[-1.5px] lg:tracking-[-3.6px] font-funnel mb-4 md:mb-6 select-text">
            We Build It Like <br />
            It&apos;s Our Own.
          </h1>

          {/* Sub-headline */}
          <p className="text-[#FFF] text-[13px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] max-w-7xl mx-autol mb-6 md:mb-10 select-text">
            A Chennai-based software development company building custom software, UI/UX design, and digital marketing systems for teams worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
            <a
              href="#growth-audit"
              className="flex items-center justify-center gap-[10px] bg-[#FFF] text-[#000] text-[11px] md:text-[12px] font-medium leading-[16px] tracking-normal px-[20px] md:px-[28px] py-[13px] md:py-[16px] rounded-[100px] border-[0.8px] border-[#FFF] transition-all duration-200 hover:bg-neutral-200 shadow-lg uppercase w-full sm:w-[260px] md:w-[295px] shrink-0"
            >
              Get your free growth audit
              <span className="text-base font-semibold leading-none">→</span>
            </a>

            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-[10px] bg-white/[0.10] text-[#FFF] text-[11px] md:text-[12px] font-medium leading-[16px] tracking-normal px-[20px] md:px-[28px] py-[13px] md:py-[16px] rounded-[100px] border-[0.8px] border-white/[0.09] transition-all duration-200 hover:bg-white/20 shadow-lg uppercase w-full sm:w-[220px] md:w-[295px] shrink-0"
            >
              See how it works
              <span className="text-base font-semibold leading-none">→</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full mt-6 md:mt-10">
          <Stats />
        </div>

      </div>
    </section>
  );
}
