import React from "react";

const LOGOS = [
  { src: "/images/HB.svg", alt: "Healthbridge" },
  { src: "/images/Logo 2.svg", alt: "Logo 2" },
  { src: "/images/MEDDITOUR.svg", alt: "MEDDITOUR" },
  { src: "/images/OCEAN.svg", alt: "OCEAN" },
  { src: "/images/The Schram Academy.svg", alt: "The Schram Academy" },
  { src: "/images/GIEC.svg", alt: "GIEC" },
  { src: "/images/Logo.svg", alt: "Logo" },
  { src: "/images/M & S Tax services.svg", alt: "M & S Tax Services" },
  { src: "/images/My smile.svg", alt: "My Smile" },
  { src: "/images/RG.svg", alt: "RG" },
  { src: "/images/SAS.svg", alt: "SAS" },
];

export default function Logos() {
  return (
    <section 
      className="pt-12 pb-8 md:pt-16 md:pb-10 px-4 md:px-8 select-none overflow-hidden"
      style={{ background: "var(--color-neutral-50, #FAFAFA)" }}
    >
      {/* Header aligned wrapper */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="overline-text text-left mb-8">
          — Trusted by teams shipping serious products —
        </h2>

        {/* Outer Marquee Container - Aligned perfectly with header bounds */}
        <div className="relative w-full flex overflow-x-hidden">
          {/* Gradient Mask Overlays */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex shrink-0 animate-marquee whitespace-nowrap min-w-full">
            {/* First set of logos */}
            <div className="flex items-center gap-x-12 md:gap-x-20 px-6 md:px-10 shrink-0">
              {LOGOS.map((logo, index) => (
                <img
                  key={`logo-1-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-20 w-auto shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              ))}
            </div>

            {/* Second identical set of logos for seamless loop */}
            <div className="flex items-center gap-x-12 md:gap-x-20 px-6 md:px-10 shrink-0">
              {LOGOS.map((logo, index) => (
                <img
                  key={`logo-2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-20 w-auto shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
