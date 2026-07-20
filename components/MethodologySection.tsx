import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const PHASES = [
  {
    phase: "Discover",
    titleLines: ["SaaS SEO Audit & Strategy"],
    descriptionLines: [
      "We begin with a comprehensive technical",
      "SEO audit and commercial keyword",
      "analysis, mapping your product features to",
      "ICP search intent across TOFU, MOFU, and",
      "BOFU stages. We analyse your top organic",
      "competitors, identify content gaps and",
      "backlink opportunities, and develop a",
      "phased SEO roadmap with clear targets",
      "for traffic growth, demo-request",
      "attribution, and visibility across your most",
      "important keyword categories.",
    ],
    icon: "search" as const,
  },
  {
    phase: "Build",
    titleLines: ["Foundation & Content", "Architecture"],
    descriptionLines: [
      "We address critical technical SEO issues",
      "first, including JavaScript rendering, Core",
      "Web Vitals, crawl architecture, and",
      "schema implementation, before designing",
      "your content cluster architecture and",
      "BOFU page strategy. We build your first",
      "pillar page, set up GA4 attribution",
      "tracking, create scalable templates for",
      "integration and use-case pages, and",
      "establish editorial guidelines to ensure",
      "consistency across all future content.",
    ],
    icon: "foundation" as const,
  },
  {
    phase: "Execute",
    titleLines: ["Content Production & Link", "Building"],
    descriptionLines: [
      "Consistent monthly execution focused on",
      "growth: 4–8 pieces of product-led",
      "content, 2–4 SaaS-relevant authoritative",
      "backlinks, expansion of programmatic",
      "pages, and conversion rate optimisation of",
      "key organic landing pages. Every content",
      "asset is tracked from publication through",
      "to pipeline impact, allowing us to focus",
      "resources on the topics, formats, and",
      "clusters that generate the most qualified",
      "traffic and engagement.",
    ],
    icon: "bolt" as const,
  },
  {
    phase: "Scale",
    titleLines: ["Authority & Pipeline Growth"],
    descriptionLines: [
      "By months 5–8, the foundations built in",
      "earlier phases begin to deliver stronger",
      "organic results. We accelerate growth by",
      "expanding high-performing content",
      "clusters, developing additional BOFU",
      "assets, targeting featured snippets and",
      "other high-visibility SERP features, and",
      "moving into adjacent keyword categories.",
      "Every scaling decision is guided by",
      "performance data, ensuring investment is",
      "focused on content and initiatives that",
      "contribute to demo requests, trial signups,",
      "and pipeline growth.",
    ],
    icon: "growth" as const,
  },
];

function PhaseIcon({ icon }: { icon: (typeof PHASES)[number]["icon"] }) {
  return (
    <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-black outline outline-[0.80px] outline-offset-[-0.80px] outline-zinc-800 shadow-[inset_-2.4035820960998535px_5.608357906341553px_28px_0px_rgba(255,255,255,0.24),inset_-2.4035820960998535px_5.608357906341553px_6px_0px_rgba(255,255,255,0.15)]">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        {icon === "search" && (
          <>
            <circle cx="10.5" cy="10.5" r="6.2" fill="none" stroke="white" strokeWidth="1.7" />
            <path
              d="m15.2 15.2 4.1 4.1"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </>
        )}
        {icon === "foundation" && (
          <>
            <path
              d="M5 8.5 12 4l7 4.5v10H5z"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path d="M9 19v-6h6v6" fill="none" stroke="white" strokeWidth="1.7" />
          </>
        )}
        {icon === "bolt" && (
          <path
            d="m13.2 2.8-7 10h5.2l-.6 8.4 7-10h-5.2z"
            fill="none"
            stroke="white"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        )}
        {icon === "growth" && (
          <>
            <path
              d="M4 17.5 9 13l3.5 2.5L20 8"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 8H20v4.5"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </div>
  );
}

export default function MethodologySection() {
  return (
    <div className="inline-flex w-full flex-col items-center justify-start overflow-hidden bg-neutral-950 px-4 md:px-8 py-16 xl:py-24">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex w-full max-w-7xl mx-auto flex-col items-start justify-start self-stretch">
          <div className="flex self-stretch flex-col items-start justify-start">
            <div className="flex w-full max-w-[780px] flex-col items-start justify-start">
              <div className="relative h-6 self-stretch">
                <div className="absolute left-0 top-[9px] inline-flex items-center justify-center gap-3">
                  <div className="relative h-4 w-3.5">
                    <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-300 font-['Aspekta']">
                      —
                    </div>
                  </div>
                  <div className="text-xs font-medium uppercase leading-4 text-color-neutral-300 font-['Aspekta']">
                    Our methodology
                  </div>
                  <div className="text-xs font-medium uppercase leading-4 text-color-neutral-300 font-['Aspekta']">
                    —
                  </div>
                </div>
              </div>
              <div className="flex self-stretch flex-col items-start justify-start pt-4">
                <div
                  className={`${funnelDisplay.className} w-full max-w-[780px] whitespace-normal text-3xl font-light leading-tight text-white sm:text-4xl xl:text-5xl xl:leading-[49.68px]`}
                >
                  How We Build SaaS SEO Campaigns
                  <br className="hidden xl:inline" />
                  <span className="xl:hidden"> </span>
                  That Drive Consistent ARR
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-4">
                <div className="w-full max-w-[639px] text-lg font-normal leading-7 text-stone-300 font-['Aspekta']">
                  A strategic 4-phase SaaS SEO framework built to attract high-intent buyers,
                  generate a qualified pipeline, and gain sustainable ARR growth.
                </div>
              </div>
            </div>
          </div>

          <div className="flex self-stretch flex-col items-start justify-start pt-16">
            <div className="flex w-full flex-col items-start justify-start gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
              {PHASES.map((item) => (
                <div key={item.phase} className="inline-flex w-full min-w-0 flex-col items-start justify-start lg:w-64 lg:shrink-0">
                  <div className="flex self-stretch flex-col items-start justify-start">
                    <PhaseIcon icon={item.icon} />
                    <div className="flex h-10 w-full flex-col items-start justify-start pt-6 lg:w-64">
                      <div className="text-xs uppercase leading-4 tracking-widest text-green-300 font-['Aspekta']">
                        {item.phase}
                      </div>
                    </div>
                    <div className="flex min-h-16 w-full flex-col items-start justify-start pt-2 lg:w-64">
                      <div
                        className={`${funnelDisplay.className} text-xl font-light leading-8 text-white`}
                      >
                        {item.titleLines.map((line) => (
                          <span key={line} className="block lg:whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex self-stretch flex-col items-start justify-start pt-3">
                      <div className="w-full text-sm font-normal leading-6 text-neutral-400 font-['Aspekta'] lg:hidden">
                        {item.descriptionLines.join(" ")}
                      </div>
                      <div className="hidden w-full text-sm font-normal leading-6 text-neutral-400 font-['Aspekta'] lg:block lg:w-64">
                        {item.descriptionLines.map((line) => (
                          <span key={line} className="block whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </div>
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
