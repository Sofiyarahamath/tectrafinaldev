import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const CASE_STUDIES = [
  {
    title: "HR & Payroll Software",
    image: "/case-study-hr-payroll.png",
    descriptionLines: [
      "SaaS SEO strategy for a B2B HR software targeting",
      "Indian SMBs. We developed a 12-cluster content",
      "architecture focused on payroll, compliance, and",
      "HRMS-related keywords, launched programmatic",
      "pages covering 180+ use-case and integration",
      "keyword combinations, and secured 24 editorial",
      "backlinks from HR media and leading business",
      "publications. Over a 9-month period, organic-driven",
      "demo requests increased from 17 per month to 68",
      "per month.",
    ],
    metric: "17→68",
    metricLabel: "monthly demo requests in 9 months",
  },
  {
    title: "Legal Tech Platform",
    image: "/case-study-legal-tech.png",
    descriptionLines: [
      "US-market SaaS SEO for a legaltech platform",
      "competing against larger, well-funded competitors.",
      "We built comparison pages targeting eight",
      "competitor alternatives, launched a BOFU keyword",
      'cluster around "legal document software"',
      "variations, and published six product-led tutorial",
      "articles that now rank on page one. The result:",
      "within 12 months, organic search became the",
      "platform's highest-converting acquisition channel,",
      "surpassing paid search.",
    ],
    metric: "#1",
    metricLabel: "converting channel surpassing paid search",
  },
  {
    title: "Project Management Tool",
    image: "/case-study-project-management.png",
    descriptionLines: [
      "Dual-market SaaS SEO for a project management",
      "platform targeting both Indian SMBs and US-based",
      "teams. We launched 340 programmatic pages",
      "covering industry-specific use cases across",
      "construction, marketing agencies, and IT teams,",
      "built content clusters around six core feature",
      "categories, and increased domain authority through",
      "strategic editorial link building. The result: organic",
      "trial signups grew by 189% within 14 months.",
    ],
    metric: "+189%",
    metricLabel: "organic trial signups in 14 months",
  },
] as const;

export default function CaseStudiesSection() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-neutral-50 px-[160px] py-24">
      <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
        <div className="flex w-full flex-col items-start justify-start self-stretch">
          <div className="flex w-[780px] max-w-[780px] flex-col items-start justify-start">
            <div className="relative h-6 self-stretch">
              <div className="absolute left-[-0.01px] top-[9px] inline-flex items-center justify-center gap-3">
                <div className="relative h-4 w-3.5">
                  <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    —
                  </div>
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  Prove and track record
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
            </div>
            <div className="flex self-stretch flex-col items-start justify-start pt-4">
              <div
                className={`${funnelDisplay.className} w-[780px] text-5xl font-light leading-[49.68px] text-neutral-900`}
              >
                Results We&apos;ve Delivered for Our Clients
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-start pt-16">
          <div className="inline-flex w-full items-stretch justify-start gap-4">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.title}
                className="inline-flex min-w-0 flex-1 flex-col items-start justify-start"
              >
                <div className="flex w-full flex-1 flex-col items-start justify-start overflow-hidden rounded-2xl bg-white outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
                  <div className="relative h-28 w-full shrink-0 overflow-hidden border-b-[0.80px] border-gray-200">
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="400px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col items-start justify-start self-stretch px-6 pt-6">
                    <div className="flex self-stretch flex-col items-start justify-start">
                      <div
                        className={`${funnelDisplay.className} text-2xl font-light leading-9 text-neutral-900`}
                      >
                        {study.title}
                      </div>
                    </div>
                    <div className="flex w-full min-w-0 flex-1 flex-col items-start justify-start pt-3">
                      <div className="w-full text-sm font-normal leading-6 text-neutral-600 font-['Aspekta']">
                        {study.descriptionLines.map((line) => (
                          <span key={line} className="block whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto inline-flex items-center justify-center gap-2.5 pt-6">
                      <div
                        className={`${funnelDisplay.className} text-base font-light leading-9 text-color-info-main`}
                      >
                        Read Full Case Study →
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start self-stretch p-6">
                    <div className="inline-flex w-full items-center justify-start gap-4 self-stretch rounded-2xl bg-neutral-950 p-5">
                      <div className="inline-flex shrink-0 flex-col items-start justify-start">
                        <div
                          className={`${funnelDisplay.className} bg-[linear-gradient(120deg,#BFE3E0_7.74%,#F4D6E6_48.31%,#F7E6C0_92.26%)] bg-clip-text text-4xl font-light leading-9 text-transparent`}
                          style={{ WebkitTextFillColor: "transparent" }}
                        >
                          {study.metric}
                        </div>
                      </div>
                      <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                        <div className="w-full text-xs font-normal leading-4 text-zinc-400 font-['Aspekta']">
                          {study.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
