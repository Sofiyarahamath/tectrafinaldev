import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

type IndustryCard = {
  title: string;
  titleLines: string[];
  descriptionLines: string[];
  tagRows: string[][];
  tagAreaHeight: string;
  cta: string;
  icon: "hr" | "project" | "fintech" | "healthcare" | "retail" | "edtech";
};

const INDUSTRY_CARDS: IndustryCard[] = [
  {
    title: "HR & Workforce Software",
    titleLines: ["HR & Workforce Software"],
    descriptionLines: [
      "From payroll and HRMS platforms to ATS and",
      "workforce management solutions, we help HR",
      "software companies attract decision-makers",
      "through feature-led content, compliance-focused",
      "resources, use-case pages, and authoritative",
      "backlink building from HR and business",
      "publications. Our strategies are designed to",
      "capture demand across every stage of the",
      "buying journey.",
    ],
    tagRows: [
      ["Payroll Software", "HRMS Platforms"],
      ["ATS Solutions", "Workforce Management"],
    ],
    tagAreaHeight: "h-20",
    cta: "Get a Free HR SEO Audit",
    icon: "hr",
  },
  {
    title: "Project Management & Productivity Software",
    titleLines: ["Project Management &", "Productivity Software"],
    descriptionLines: [
      "Project management and productivity tools",
      "serve a wide range of industries, team sizes,",
      "and workflows, which is why we build scalable",
      "SEO strategies around real-world use cases,",
      "integrations, industry-specific applications,",
      "and searches based on the type of team using",
      "the tool to help your product reach the right",
      "audience at scale, supported by high-quality",
      "editorial backlinks that strengthen topical",
      "authority.",
    ],
    tagRows: [
      ["Industry Use Cases", "Integration Pages"],
      ["Team-Based Solutions", "Programmatic SEO"],
    ],
    tagAreaHeight: "h-20",
    cta: "Get a Free Project Management SEO Audit",
    icon: "project",
  },
  {
    title: "Fintech & Accounting Software",
    titleLines: ["Fintech & Accounting", "Software"],
    descriptionLines: [
      "Whether you're offering invoicing, expense",
      "management, accounting, financial planning, or",
      "business finance solutions, we create SEO",
      "strategies that balance search visibility with",
      "trust and compliance. Every content initiative",
      "is built to strengthen authority while earning",
      "relevant backlinks from finance and business",
      "publications to support customer acquisition.",
    ],
    tagRows: [
      ["Accounting Software", "Expense Management"],
      ["Billing Solutions", "Financial Platforms"],
    ],
    tagAreaHeight: "h-20",
    cta: "Get a Free Fintech SEO Audit",
    icon: "fintech",
  },
  {
    title: "Healthcare & MedTech Software",
    titleLines: ["Healthcare & MedTech", "Software"],
    descriptionLines: [
      "Healthcare software requires a higher standard",
      "of accuracy, trust, and expertise. We develop",
      "content strategies for healthcare technology",
      "platforms that align with E-E-A-T principles",
      "while also building authoritative backlinks",
      "from healthcare and medical publications to",
      "boost credibility.",
    ],
    tagRows: [
      ["Healthcare Management", "Telemedicine Platforms"],
      ["Patient Management", "Medical Technology"],
    ],
    tagAreaHeight: "h-20",
    cta: "Get a Free Healthcare SEO Audit",
    icon: "healthcare",
  },
  {
    title: "E-Commerce & Retail Technology",
    titleLines: ["E-Commerce & Retail", "Technology"],
    descriptionLines: [
      "From inventory management and order processing",
      "to marketplace integrations and retail",
      "operations, we help e-commerce technology",
      "companies increase visibility across",
      "high-intent searches, industry-specific use",
      "cases, and integration-focused searches,",
      "supported by contextual backlink acquisition",
      "from niche commerce and technology sites.",
    ],
    tagRows: [
      ["Inventory Management", "Marketplace Integrations"],
      ["Retail Operations", "E-Commerce Platforms"],
    ],
    tagAreaHeight: "h-28",
    cta: "Get a Free Retail SEO Audit",
    icon: "retail",
  },
  {
    title: "EdTech & Learning Platforms",
    titleLines: ["EdTech & Learning", "Platforms"],
    descriptionLines: [
      "We help learning management systems, online",
      "education platforms, and corporate training",
      "solutions reach students, educators, and",
      "business decision-makers through content",
      "strategies aligned with real-world learning",
      "and training requirements.",
    ],
    tagRows: [
      ["Learning Management Systems"],
      ["Online Education Platforms"],
      ["Corporate Training Software"],
      ["Skills Development Solutions"],
    ],
    tagAreaHeight: "h-36",
    cta: "Get a Free EdTech SEO Audit",
    icon: "edtech",
  },
];

function IndustryIcon({ type }: { type: IndustryCard["icon"] }) {
  const stroke = "#0a0a0a";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      {type === "hr" && (
        <>
          <rect x="6" y="8" width="12" height="11" rx="1.5" {...common} />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" {...common} />
          <circle cx="12" cy="13" r="1.5" {...common} />
        </>
      )}
      {type === "project" && (
        <>
          <rect x="4" y="5" width="16" height="14" rx="2" {...common} />
          <path d="M8 10h8M8 14h5" {...common} />
        </>
      )}
      {type === "fintech" && (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" {...common} />
          <path d="M8 14l3-3 2 2 4-4" {...common} />
        </>
      )}
      {type === "healthcare" && (
        <>
          <path
            d="M12 20s-6.5-4.2-6.5-9A3.5 3.5 0 0 1 12 8.2 3.5 3.5 0 0 1 18.5 11c0 4.8-6.5 9-6.5 9z"
            {...common}
          />
          <path d="M12 10.5v3M10.5 12h3" {...common} />
        </>
      )}
      {type === "retail" && (
        <>
          <path d="M6 9h12l-1.2 9H7.2L6 9z" {...common} />
          <path d="M9 9V7.5a3 3 0 0 1 6 0V9" {...common} />
        </>
      )}
      {type === "edtech" && (
        <>
          <path d="M4 10l8-4 8 4-8 4-8-4z" {...common} />
          <path d="M8 12v4c2 1.5 6 1.5 8 0v-4" {...common} />
        </>
      )}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden fill="none">
      <path
        d="M3.5 8H12.5M12.5 8 9 4.5M12.5 8 9 11.5"
        stroke="#171717"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <div className="inline-flex h-6 items-center rounded-full bg-neutral-50 px-3 py-1 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
      <span className="whitespace-nowrap text-xs font-medium leading-4 tracking-tight text-neutral-600 font-['Aspekta']">
        {label}
      </span>
    </div>
  );
}

function IndustryCardItem({ card }: { card: IndustryCard }) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
      <div className="inline-flex w-full items-start justify-start gap-3.5 pb-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200 shadow-[inset_-2.4035820960998535px_5.608357906341553px_26.439401626586914px_0px_rgba(0,0,0,0.08),inset_-2.4035820960998535px_5.608357906341553px_9px_0px_rgba(0,0,0,0.08)]">
          <IndustryIcon type={card.icon} />
        </div>
        <div className={`${funnelDisplay.className} min-w-0 flex-1 text-lg font-light leading-7 text-neutral-900`}>
          <span className="lg:hidden">{card.title}</span>
          <span className="hidden lg:block">
            {card.titleLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start justify-start self-stretch">
        <div className="w-full text-sm font-normal leading-6 text-neutral-600 font-['Aspekta'] lg:hidden">
          {card.descriptionLines.join(" ")}
        </div>
        <div className="hidden w-full text-sm font-normal leading-6 text-neutral-600 font-['Aspekta'] lg:block">
          {card.descriptionLines.map((line, index) => (
            <span key={`${card.title}-d-${index}`} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex w-full flex-col justify-center gap-2 max-lg:h-auto ${card.tagAreaHeight}`}>
        {card.tagRows.map((row, rowIndex) => (
          <div key={`${card.title}-row-${rowIndex}`} className="flex flex-wrap gap-2">
            {row.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-auto w-full pt-4">
        <div className="flex w-full items-center border-t-[0.80px] border-gray-200 pt-5">
          <button type="button" className="inline-flex items-center justify-start gap-2">
            <span className="whitespace-nowrap text-sm leading-5 text-neutral-900 font-['Aspekta']">
              {card.cta}
            </span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <div className="inline-flex w-full flex-col items-center justify-start bg-neutral-50 px-4 md:px-8 py-16 xl:py-24">
      <div className="flex w-full max-w-7xl mx-auto flex-col items-start justify-start self-stretch">
        <div className="flex w-full flex-col items-start justify-start">
          <div className="relative h-6 self-stretch">
            <div className="absolute left-0 top-[8px] inline-flex items-center justify-center gap-3">
              <div className="relative h-4 w-3.5">
                <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                Industries we serve.
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                —
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4">
            <div
              className={`${funnelDisplay.className} whitespace-normal text-3xl font-light leading-tight text-neutral-900 sm:text-4xl xl:text-5xl xl:leading-[49.68px] xl:whitespace-nowrap`}
            >
              SaaS SEO for All Key SaaS Industries
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4">
            <div className="text-lg font-normal leading-7 text-neutral-600 font-['Aspekta'] lg:hidden">
              The best SaaS SEO agency with SEO strategies personalised to the unique buyer journeys, search behaviours, and competitive dynamics of different SaaS industries.
            </div>
            <div className="hidden text-lg font-normal leading-7 text-neutral-600 font-['Aspekta'] lg:block">
              <span className="block whitespace-nowrap">
                The best SaaS SEO agency with SEO strategies personalised to the unique
              </span>
              <span className="block whitespace-nowrap">
                buyer journeys, search behaviours, and competitive dynamics of different
              </span>
              <span className="block whitespace-nowrap">SaaS industries.</span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-start pt-16">
          <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRY_CARDS.map((card) => (
              <IndustryCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
