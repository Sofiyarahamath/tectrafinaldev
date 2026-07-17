import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const COMPARISON_ROWS = [
  {
    typical:
      "Optimises for rankings and traffic volume as the end goal.",
    title: "Pipeline-First SEO Strategy",
    description:
      "Most SEO agencies optimise for rankings and traffic. We optimise for business outcomes. Every keyword, content asset, and landing page is aligned with a measurable conversion goal, whether that's a demo request, free trial signup, or qualified lead. Success isn't measured by visibility alone but by the pipeline and revenue organic search generates.",
  },
  {
    typical: "Prioritises top-of-funnel blog content to inflate traffic.",
    title: "BOFU-First Content Prioritisation",
    description:
      "While many agencies focus on top-of-funnel content to increase traffic, we prioritise pages that influence buying decisions. Comparison pages, competitor alternatives, feature-focused landing pages, and commercial-intent content are often the fastest path to qualified leads and revenue for SaaS companies.",
  },
  {
    typical: "Generic technical checklists ignore SaaS architecture.",
    title: "Technical SEO Built for SaaS",
    description:
      "SaaS websites come with unique technical complexities, from JavaScript-rendered content and app subdomains to authentication barriers and large-scale programmatic page structures. Our strategies are built specifically for SaaS environments, ensuring technical SEO supports growth without compromising user experience or product functionality.",
  },
  {
    typical: "Layers of account managers slow everything down.",
    title: "Dedicated SaaS SEO Strategist",
    description:
      "Work directly with the strategist responsible for your SEO campaign. No unnecessary layers, delayed communication, or account-management bottlenecks. You'll have a dedicated point of contact who understands your product, growth objectives, and organic acquisition strategy from day one.",
  },
  {
    typical: "One-size-fits-all playbook regardless of market.",
    title: "India & USA SaaS Market Expertise",
    description:
      "Search behaviour, buying journeys, and competitive landscapes vary significantly across markets. We develop market-specific SEO strategies personalised to the needs of Indian SMB buyers and US-based decision-makers, ensuring your content, keywords, and positioning resonate with the audiences you want to attract.",
  },
] as const;

function TypicalHeaderIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <circle cx="8" cy="8" r="5.25" stroke="#737373" strokeWidth="1.33" />
      <path d="M5.5 8h5" stroke="#737373" strokeWidth="1.33" strokeLinecap="round" />
    </svg>
  );
}

function TectraHeaderIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M8 1.8l1.05 3.35h3.5l-2.85 2.1 1.1 3.4L8 8.7l-2.8 1.95 1.1-3.4-2.85-2.1h3.5L8 1.8z"
        stroke="#86efac"
        strokeWidth="1.33"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M5 5l6 6M11 5l-6 6"
        stroke="#a1a1aa"
        strokeWidth="1.33"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M3.5 8.2l3 3.1 6-6.4"
        stroke="#15803d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseTectraSection() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-white px-[160px] py-24">
      <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
        <div className="flex w-full flex-col items-start justify-start">
          <div className="relative h-6 self-stretch">
            <div className="absolute left-0 top-[8px] inline-flex items-center justify-center gap-3">
              <div className="relative h-4 w-3.5">
                <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                Why choose Tectra
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                —
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4">
            <div
              className={`${funnelDisplay.className} whitespace-nowrap text-5xl font-light leading-[49.68px] text-neutral-900`}
            >
              What Makes Our SaaS SEO Different
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-start pt-16">
          <div className="flex w-full flex-col items-start justify-start overflow-hidden rounded-2xl outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
            <div className="grid h-16 w-full grid-cols-2">
              <div className="inline-flex items-center justify-start gap-2.5 border-b-[0.80px] border-r-[0.80px] border-gray-200 bg-neutral-50 px-7 py-5">
                <TypicalHeaderIcon />
                <div className="text-sm leading-5 tracking-wide text-neutral-500 font-['Aspekta']">
                  Typical SEO agency
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-2.5 border-b-[0.80px] border-neutral-950 bg-neutral-950 px-7 py-5">
                <TectraHeaderIcon />
                <div className="text-sm leading-5 tracking-wide text-white font-['Aspekta']">
                  The Tectra approach
                </div>
              </div>
            </div>

            {COMPARISON_ROWS.map((row, index) => {
              const isLast = index === COMPARISON_ROWS.length - 1;
              return (
                <div
                  key={row.title}
                  className={`grid w-full grid-cols-2 items-stretch ${
                    isLast ? "" : "border-b-[0.80px] border-gray-200"
                  }`}
                >
                  <div className="inline-flex items-start justify-start gap-2 border-r-[0.80px] border-gray-200 bg-neutral-50 px-7 py-6">
                    <div className="inline-flex size-4 shrink-0 flex-col items-start justify-start pt-0.5">
                      <CrossIcon />
                    </div>
                    <div className="min-w-0 flex-1 text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
                      {row.typical}
                    </div>
                  </div>
                  <div className="inline-flex min-w-0 flex-col items-start justify-start bg-white px-7 py-6">
                    <div className="inline-flex h-6 w-full items-center justify-start gap-2">
                      <CheckIcon />
                      <div className="min-w-0 text-base leading-6 text-neutral-900 font-['Aspekta']">
                        {row.title}
                      </div>
                    </div>
                    <div className="flex w-full min-w-0 flex-col items-start justify-start pt-1.5">
                      <div className="w-full text-sm font-normal leading-5 text-neutral-600 font-['Aspekta']">
                        {row.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
