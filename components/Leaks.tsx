"use client";

import React from "react";
import Image from "next/image";

const TraditionalMockup = () => {
  const pillars = [
    {
      name: "Traffic",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500">
          <path d="M18 8a3 3 0 0 0-3-3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a3 3 0 0 0 3-3V8Z" />
          <path d="M11 15v3a2 2 0 0 0 2 2h2" />
          <path d="M21 9v6" />
        </svg>
      )
    },
    {
      name: "Leads",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )
    },
    {
      name: "Customer Experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="M12 7v4" />
          <line x1="12" x2="12" y1="14" y2="14" />
        </svg>
      )
    },
    {
      name: "Operations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 animate-spin" style={{ animationDuration: '8s' }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      name: "Brand",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-[350px] md:w-full shrink-0 origin-center scale-[0.78] min-[360px]:scale-[0.85] min-[400px]:scale-[0.95] md:scale-100 overflow-visible">
        {/* Pillars Container */}
        <div className="relative flex items-center gap-1.5 md:gap-3 z-10 w-full justify-between max-w-full px-1 overflow-visible">
          {/* Curved connecting dotted lines (SVG) */}
          {/* 1. Traffic to Leads (Bottom curve - Vector 9) */}
          <div
            className="absolute pointer-events-none z-0 w-[60px] h-[20px] md:w-[99px] md:h-[31px] bottom-[-20px] md:bottom-[-31px]"
            style={{
              left: "calc(var(--pillar-half) + (100% - var(--pillar-width)) * 0.125 - var(--svg-half))",
            }}
          >
            <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
              <path d="M0.335655 0.244019C15.481 23.4933 56.4841 56.0422 99.3343 0.244019" stroke="#F72400" strokeWidth="0.801194" strokeDasharray="4.81 4.81" />
            </svg>
          </div>

          {/* 2. Leads to Customer Experience (Top curve - Vector 10) */}
          <div
            className="absolute pointer-events-none z-0 w-[60px] h-[20px] md:w-[99px] md:h-[31px] top-[-20px] md:top-[-31px]"
            style={{
              left: "calc(var(--pillar-half) + (100% - var(--pillar-width)) * 0.375 - var(--svg-half))",
            }}
          >
            <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
              <path d="M0.335663 31.156C15.481 7.90676 56.4841 -24.6422 99.3343 31.156" stroke="#F72400" strokeWidth="0.801194" strokeDasharray="4.81 4.81" />
            </svg>
          </div>

          {/* 3. Operations to Brand (Bottom curve - Vector 9) */}
          <div
            className="absolute pointer-events-none z-0 w-[60px] h-[20px] md:w-[99px] md:h-[31px] bottom-[-20px] md:bottom-[-31px]"
            style={{
              left: "calc(var(--pillar-half) + (100% - var(--pillar-width)) * 0.875 - var(--svg-half))",
            }}
          >
            <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
              <path d="M0.335655 0.244019C15.481 23.4933 56.4841 56.0422 99.3343 0.244019" stroke="#F72400" strokeWidth="0.801194" strokeDasharray="4.81 4.81" />
            </svg>
          </div>

          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="traditional-pillar transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-neutral-300 z-10"
            >
              {/* Pillar Name */}
              <span className="traditional-pillar-title w-full px-1" style={{ color: '#000000' }}>
                {pillar.name}
              </span>

              {/* Warning Alert Icon */}
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-red-500/20 bg-red-50/70 flex items-center justify-center text-red-500 shadow-[0_2px_8px_rgba(239,68,68,0.15)] animate-pulse">
                {pillar.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TectraMockup = () => {
  const nodeData = [
    {
      title: "Traffic",
      desc: "Attract the right audience.",
      icon: "/images/speaker.png",
      left: 88,
      top: 30.43,
      width: 229.10,
    },
    {
      title: "Leads",
      desc: "Qualified prospects disappear without follow-up.",
      icon: "/images/people.png",
      left: 49,
      top: 122.86,
      width: 229.10,
    },
    {
      title: "Customer Experience",
      desc: "Friction causes users to leave before converting.",
      icon: "/images/lap.png",
      left: 25,
      top: 219.24,
      width: 229.10,
    },
    {
      title: "Operations",
      desc: "Manual workflows slow teams and reduce efficiency.",
      icon: "/images/tick.png",
      left: 53,
      top: 315.61,
      width: 229.10,
    },
    {
      title: "Brand",
      desc: "Inconsistent experiences weaken trust and recognition.",
      icon: "/images/star.png",
      left: 95,
      top: 411.99,
      width: 229.10,
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-[550px] h-[500px] shrink-0 origin-center scale-[0.56] min-[360px]:scale-[0.6] min-[400px]:scale-[0.66] min-[440px]:scale-[0.73] sm:scale-[0.85] md:scale-100 lg:scale-[0.75] xl:scale-100">
        {/* Connecting dashed line from Traffic card to chatbot orb */}
        <img
          src="/images/Vector 16.svg"
          alt="Connector line"
          style={{
            position: 'absolute',
            left: '291.25px',
            top: '45px',
            width: '172px',
            height: '171px',
            pointerEvents: 'none',
          }}
        />
        {/* Connecting dashed line from Leads card to chatbot orb */}
        <img
          src="/images/Vector 19.svg"
          alt="Connector line 2"
          style={{
            position: 'absolute',
            left: '262.77px',
            top: '142px',
            width: '201px',
            height: '89px',
            pointerEvents: 'none',
          }}
        />
        {/* Connecting dashed line from Customer Experience card to chatbot orb */}
        <img
          src="/images/Vector 15.svg"
          alt="Connector line 3"
          style={{
            position: 'absolute',
            left: '239.77px',
            top: '244.7px',
            width: '224px',
            height: '2px',
            pointerEvents: 'none',
          }}
        />
        {/* Connecting dashed line from Operations card to chatbot orb */}
        <img
          src="/images/Vector 21.svg"
          alt="Connector line 4"
          style={{
            position: 'absolute',
            left: '262.77px',
            top: '259px',
            width: '201px',
            height: '89px',
            pointerEvents: 'none',
          }}
        />
        {/* Connecting dashed line from Brand card to chatbot orb */}
        <img
          src="/images/Vector 20.svg"
          alt="Connector line 5"
          style={{
            position: 'absolute',
            left: '291.25px',
            top: '274px',
            width: '172px',
            height: '171px',
            pointerEvents: 'none',
          }}
        />
        {/* Orb — chaticon background circle */}
        <div
          style={{
            width: '85px',
            height: '85px',
            left: '457.85px',
            top: '202.19px',
            position: 'absolute',
            borderRadius: '100px',
            backgroundImage: "url('/images/chaticon.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0px 0px 24px rgba(221, 221, 221, 0.40)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Tectra Logo */}
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5163 7.37332C13.8354 7.57637 12.8821 7.98248 12.4054 8.27577C11.9061 8.61419 11.5883 8.99773 11.6337 9.22334C11.6564 9.4264 11.9968 9.67457 12.36 9.78737C12.7232 9.87762 13.9943 9.85506 15.1519 9.74225C16.2867 9.60689 17.6032 9.35871 18.0345 9.17822C18.4657 8.99773 18.9197 8.65931 19.0559 8.4337C19.1921 8.18553 19.1694 7.91479 18.9878 7.64406C18.7835 7.37332 18.3069 7.21539 17.2401 7.14771C16.2868 7.08003 15.3107 7.17027 14.5163 7.37332ZM9.04613 11.7502C8.50137 12.1112 7.72964 12.6978 7.36647 13.0813C6.91251 13.5476 6.74606 13.901 6.86711 14.1417C6.98061 14.4124 7.63884 14.5027 9.70436 14.6155C11.157 14.7057 14.3574 14.7057 16.7861 14.638C19.2148 14.5704 22.0293 14.3899 23.028 14.2545C24.0267 14.1191 25.5021 13.7807 26.2965 13.51C27.1137 13.2392 27.8627 12.8331 27.9989 12.6301C28.1578 12.3368 28.1351 12.1563 27.9308 11.9533C27.7265 11.7502 26.183 11.6148 22.279 11.502C19.3283 11.4343 15.3561 11.299 13.4722 11.2313L10.0675 11.0959L9.04613 11.7502ZM14.7433 16.5106L5.80031 16.646C5.09668 18.6314 4.9832 19.3985 5.07399 19.8497C5.16478 20.3686 5.36906 20.6619 5.82301 20.8424C6.25427 21.0003 8.54677 21.0454 13.3587 20.9326C17.172 20.8649 22.2336 20.6845 24.5942 20.5716C26.9775 20.4363 30.4049 20.1881 32.198 20.0076C34.0138 19.8271 36.3063 19.4887 37.305 19.218C38.3037 18.9698 39.2797 18.6539 39.4386 18.496C39.6883 18.2704 39.6429 18.135 39.2116 17.7064C38.9166 17.4131 38.1675 17.007 37.532 16.8039C36.6014 16.5106 35.2622 16.4429 30.0417 16.4204C26.5462 16.3978 19.6687 16.4429 14.7433 16.5106ZM7.50266 23.3692C7.09409 23.5497 6.64014 23.8656 6.52664 24.0686C6.41316 24.2717 6.36777 24.6552 6.43587 24.9485C6.50395 25.2193 6.93521 25.8284 7.41187 26.3022C7.86583 26.776 8.61487 27.2723 9.04613 27.3851C9.47739 27.5205 10.7712 27.6784 11.8834 27.7461C13.0183 27.8138 16.4229 27.701 19.4872 27.498C22.5514 27.2949 26.4327 26.979 28.1124 26.7986C29.792 26.5955 31.744 26.3473 32.425 26.212C33.1059 26.0766 34.1954 25.7382 34.8083 25.4674C35.4438 25.1741 36.102 24.768 36.2836 24.565C36.5787 24.204 36.5787 24.1363 36.2609 23.9107C36.0112 23.7302 33.3329 23.5949 28.0897 23.482C23.7998 23.3918 17.5805 23.2564 14.2666 23.1888C9.43199 23.0759 8.11549 23.1211 7.50266 23.3692ZM14.7206 29.19C13.4495 29.2803 12.2692 29.4833 11.838 29.709C11.4294 29.912 11.0889 30.2053 11.0889 30.3632C11.0662 30.5212 11.2932 30.837 11.5656 31.0852C11.838 31.3334 12.587 31.6718 13.2225 31.8297C13.8581 31.9876 15.6058 32.1907 17.1039 32.2584C18.7835 32.3261 20.3497 32.2809 21.1895 32.123C21.9385 31.9876 22.9145 31.6943 23.3231 31.4687C23.7544 31.2657 24.1402 30.9724 24.1856 30.8145C24.231 30.6565 23.8225 30.3407 23.3004 30.0925C22.7557 29.8443 21.7116 29.551 20.9625 29.4157C20.2135 29.3029 18.9878 29.1449 18.2388 29.1224C17.4897 29.0772 15.9009 29.0998 14.7206 29.19Z"
              fill="#171717"
            />
          </svg>
        </div>

        {/* Absolutely-positioned node cards */}
        {nodeData.map((node) => (
          <div
            key={node.title}
            className="p-1.5 bg-[rgba(38,38,38,0.20)] inline-flex justify-start items-center gap-1.5"
            style={{
              position: 'absolute',
              left: `${node.left}px`,
              top: `${node.top}px`,
              width: `${node.width}px`,
              borderRadius: '15.161px',
            }}
          >
            {/* Left Icon Box */}
            <div className="size-14 bg-[#262626] rounded-lg inline-flex flex-col justify-center items-center gap-1.5 shrink-0">
              <div className="size-11 relative">
                <img className="size-11 left-0 top-0 absolute object-contain" src={node.icon} alt={node.title} />
              </div>
            </div>

            {/* Right Text Box */}
            <div className="flex-1 self-stretch p-2.5 bg-[#262626] rounded-lg inline-flex flex-col justify-center items-start gap-[1.68px]">
              {/* Title row */}
              <div className="self-stretch inline-flex justify-start items-center gap-1">
                <img src="/images/Group 3.svg" alt="checkmark" className="size-3.5 shrink-0" />
                <span className="text-white text-[10.11px] font-normal font-['Aspekta'] leading-3">{node.title}</span>
              </div>
              {/* Description */}
              <div className="self-stretch text-[#ADADAD] text-[10.11px] font-normal font-['Aspekta'] leading-3">{node.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Leaks() {
  return (
    <section 
      className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 select-none"
      style={{ background: "var(--color-neutral-50, #FAFAFA)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div className="flex flex-col gap-4">
            <span className="overline-text self-start text-left">
              — Where growth leaks —
            </span>
            <h2 className="text-[#171717] text-3xl md:text-5xl lg:text-[44px] font-light leading-[1.15] tracking-tight font-funnel max-w-7xl mx-autog">
              Five leaks. One system that closes all of them.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-[#525252] text-[16px] font-normal leading-[24px] max-w-7xl mx-autol">
              Every stage of your business presents an opportunity to gain or lose revenue. We identify where growth slows down and build the systems that keep customers moving forward.
            </p>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Card 1: Traditional Agencies */}
          <div className="flex flex-col gap-6">
            <div
              style={{
                display: 'flex',
                padding: '24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '32px',
                background: 'var(--color-neutral-200, #EBEBEB)',
              }}
              className="h-[360px] min-[400px]:h-[420px] md:h-[520px]"
            >
              <TraditionalMockup />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#E15A3E] text-2xl font-medium tracking-tight">Traditional Agencies</h3>
              <p className="text-[#525252] text-[15px] leading-[22px] min-h-[66px]">
                Different vendors manage different parts of your business. Design, development, and marketing move in separate directions, creating delays, inconsistencies, and disconnected customer experiences.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-[13px] font-medium text-[#737373] mt-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-xs border border-red-200">✕</span>
                <span>Disconnected Systems &rarr; Lost Opportunities &rarr; Slow Growth</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tectra Connected System */}
          <div className="flex flex-col gap-6">
            <div
              style={{
                alignSelf: 'stretch',
                position: 'relative',
                background: 'var(--color-neutral-900, #171717)',
                boxShadow: '37.27px 36.382px 55.017px 0px rgba(255, 255, 255, 0.12) inset',
                overflow: 'hidden',
                borderRadius: '28.40px',
              }}
              className="h-[360px] min-[400px]:h-[420px] md:h-[520px]"
            >
              <TectraMockup />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#171717] text-2xl font-medium tracking-tight">Tectra Connected System</h3>
              <p className="text-[#525252] text-[15px] leading-[22px] min-h-[66px]">
                One connected team builds every part of your digital ecosystem, from strategy and design to software, AI, automation, and marketing. Every decision supports the next, creating systems designed for sustainable business growth.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-[13px] font-medium text-[#171717] mt-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-xs border border-green-200">✓</span>
                <span>Connected Business &rarr; Intelligent Automation &rarr; Predictable Growth</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
