import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const RELATED_SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    descriptionLines: [
      "Full-spectrum SEO services covering technical SEO,",
      "E-E-A-T content, local SEO, and international SEO for",
      "businesses across the Indian and the USA markets.",
    ],
  },
  {
    title: "International SEO",
    descriptionLines: [
      "Multi-region SEO for companies expanding across",
      "India, the USA, the UAE, and Southeast Asia, including",
      "hreflang implementation, localised content, and",
      "region-specific link building.",
    ],
  },
  {
    title: "PPC / Pay-Per-Click Advertising",
    descriptionLines: [
      "Performance-driven Google Ads, Meta Ads, and",
      "LinkedIn Ads campaigns for SaaS companies focused",
      "on demo requests and trial signups, not just clicks.",
    ],
  },
  {
    title: "Content Marketing",
    descriptionLines: [
      "End-to-end content strategy and production,",
      "including blogs, case studies, whitepapers, and",
      "landing page copy built with E-E-A-T principles and",
      "conversion focus.",
    ],
  },
  {
    title: "Web Design & Development",
    descriptionLines: [
      "SEO-ready SaaS marketing websites designed for",
      "speed, performance, and conversions — optimised for",
      "both organic discovery and demo generation.",
    ],
  },
  {
    title: "Social Media Marketing",
    descriptionLines: [
      "LinkedIn and X (Twitter) growth strategies for B2B",
      "SaaS, focused on thought leadership, demand",
      "generation, and community building for software",
      "companies.",
    ],
  },
] as const;

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H6.5M11.5 4.5v5"
        stroke="#a1a1aa"
        strokeWidth="1.42"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RelatedServicesSection() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-neutral-50 px-[160px] py-24">
      <div className="flex w-full flex-col items-start justify-start self-stretch">
        <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
          <div className="flex w-[780px] max-w-[780px] flex-col items-start justify-start">
            <div className="relative h-6 w-full self-stretch">
              <div className="absolute left-0 top-[9px] inline-flex items-center justify-center gap-3">
                <div className="relative h-4 w-3.5">
                  <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    —
                  </div>
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  Related Services
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-4">
              <div
                className={`${funnelDisplay.className} text-5xl font-light leading-[49.68px] text-neutral-900`}
              >
                <span className="block whitespace-nowrap">Explore Our Digital Marketing</span>
                <span className="block whitespace-nowrap">Services</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start pt-16">
            <div className="grid w-full grid-cols-3 items-stretch gap-4">
              {RELATED_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex h-44 w-full flex-col items-start justify-start rounded-2xl bg-white p-6 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200"
                >
                  <div className="inline-flex h-9 w-full items-center justify-between gap-2 pb-2">
                    <div
                      className={`${funnelDisplay.className} min-w-0 whitespace-nowrap text-lg font-light leading-7 text-neutral-900`}
                    >
                      {service.title}
                    </div>
                    <ArrowUpRightIcon />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <div className="w-full text-sm font-normal leading-5 text-neutral-600 font-['Aspekta']">
                      {service.descriptionLines.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
