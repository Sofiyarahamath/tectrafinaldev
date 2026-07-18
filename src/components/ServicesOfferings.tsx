import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

type ServiceCard = {
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  tags: string[];
  tallTitle?: boolean;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "SaaS Technical SEO Audit",
    icon: "/icons/service-technical-seo-audit.png",
    description:
      "Identify technical issues that prevent your SaaS website from ranking and converting.",
    bullets: [
      "Find critical SEO issues before they affect traffic.",
      "Improve Core Web Vitals and site performance.",
      "Fix JavaScript rendering and indexing problems.",
      "Get a clear action plan your team can implement.",
    ],
    tags: ["Core Web Vitals", "JS Rendering", "Crawl Budget", "Schema Markup"],
  },
  {
    title: "Product-Led Content Strategy",
    icon: "/icons/service-product-led-content.png",
    description:
      "Create content that attracts high-intent buyers and converts them into customers.",
    bullets: [
      "Target keywords with real buying intent.",
      "Build product-focused guides and comparison pages.",
      "Increase demo requests and free trials.",
      "Align every page with the customer journey.",
    ],
    tags: ["Search Intent Mapping", "Feature-Led Content", "Content Calendar", "E-E-A-T"],
    tallTitle: true,
  },
  {
    title: "Programmatic SEO for SaaS",
    icon: "/icons/service-programmatic-seo.png",
    description: "Scale organic traffic with hundreds of targeted landing pages.",
    bullets: [
      "Generate pages for industries and use cases.",
      "Capture long-tail search traffic at scale.",
      "Maintain consistent SEO structure.",
      "Grow without sacrificing user experience.",
    ],
    tags: ["Use-Case Pages", "Integration Pages", "Template SEO"],
    tallTitle: true,
  },
  {
    title: "Bottom-of-Funnel SaaS Content",
    icon: "/icons/service-bottom-funnel-content.png",
    description: "Help buyers choose your product when they're ready to make a decision.",
    bullets: [
      "Create comparison and alternative pages.",
      "Answer common purchase questions.",
      "Increase high-converting organic traffic.",
      "Drive more qualified leads.",
    ],
    tags: ["Comparison Pages", "Alternative Pages", "Best-Of Guides", "ROI Pages"],
    tallTitle: true,
  },
  {
    title: "SaaS Link Building",
    icon: "/icons/service-link-building.png",
    description: "Build authority with high-quality backlinks from trusted websites.",
    bullets: [
      "Earn links from relevant SaaS publications.",
      "Improve search rankings naturally.",
      "Increase brand credibility.",
      "Drive qualified referral traffic.",
    ],
    tags: ["Editorial Placements", "SaaS Publications", "Guest Posts", "Authority Websites"],
  },
  {
    title: "SaaS Competitor SEO Analysis",
    icon: "/icons/service-competitor-analysis.png",
    description:
      "Discover what's working for competitors and turn it into your growth strategy.",
    bullets: [
      "Find keyword opportunities.",
      "Identify content gaps.",
      "Analyze competitor backlinks.",
      "Build a practical SEO roadmap.",
    ],
    tags: ["Keyword Gap Analysis", "Content Gap Analysis", "Backlink Analysis", "Growth Roadmap"],
    tallTitle: true,
  },
  {
    title: "SaaS Content Cluster Development",
    icon: "/icons/service-content-cluster.png",
    description: "Build topical authority with connected content that ranks together.",
    bullets: [
      "Strengthen internal linking.",
      "Improve keyword coverage.",
      "Increase topical authority.",
      "Boost rankings across related topics.",
    ],
    tags: ["Pillar Pages", "Cluster Articles", "Internal Linking", "Topical Authority"],
    tallTitle: true,
  },
  {
    title: "International SaaS SEO",
    icon: "/icons/service-international-seo.png",
    description: "Expand into new markets with a localized SEO strategy.",
    bullets: [
      "Optimize for multiple countries.",
      "Implement hreflang correctly.",
      "Reach global audiences.",
      "Avoid duplicate content issues.",
    ],
    tags: ["Hreflang", "India SEO", "Global SEO", "Localisation"],
  },
  {
    title: "SaaS SEO Reporting & Attribution",
    icon: "/icons/service-reporting-attribution.png",
    description: "Measure SEO performance using real business metrics.",
    bullets: [
      "Track rankings and conversions.",
      "Measure demo requests and MQLs.",
      "Connect SEO to revenue.",
      "Identify growth opportunities.",
    ],
    tags: ["GA4 Attribution", "Pipeline Reporting", "MQL Tracking", "ROI Dashboard"],
    tallTitle: true,
  },
];

function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="inline-flex size-12 items-center justify-center rounded-xl bg-neutral-900 shadow-[inset_-2.4035820960998535px_5.608357906341553px_28px_0px_rgba(255,255,255,0.24)] shadow-[inset_-2.4035820960998535px_5.608357906341553px_6px_0px_rgba(255,255,255,0.20)]">
      <Image src={src} alt={alt} width={24} height={24} className="size-6" />
    </div>
  );
}

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="inline-flex h-auto w-full flex-col items-start justify-start xl:h-[513px]">
      <div className="flex h-full w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
        <div className="flex flex-col items-start justify-start pb-6">
          <ServiceIcon src={card.icon} alt={card.title} />
        </div>
        <div
          className={`flex w-full max-w-80 shrink-0 flex-col items-start justify-start pb-3 ${
            card.tallTitle ? "xl:min-h-20" : "xl:min-h-12"
          }`}
        >
          <div
            className={`${funnelDisplay.className} w-full max-w-80 text-2xl font-light leading-9 text-neutral-900`}
          >
            {card.title}
          </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-start justify-between self-stretch">
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="w-full max-w-80 text-sm font-normal leading-6 text-neutral-600 font-['Aspekta']">
              {card.description}
            </div>
            <div className="flex flex-col items-start justify-start gap-3.5">
              {card.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="w-full max-w-80 text-xs font-normal text-color-neutral-700 font-['Aspekta']"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-6">
            {card.tags.map((tag) => (
              <div
                key={tag}
                className="inline-flex h-6 items-center rounded-full bg-neutral-50 px-3 py-1 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200"
              >
                <span className="text-xs font-medium leading-4 tracking-tight text-neutral-600 font-['Aspekta']">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOfferings() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-neutral-50 px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[160px] xl:py-24">
      <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
        <div className="flex w-full flex-col items-start justify-start self-stretch">
          <div className="flex w-full max-w-[780px] flex-col items-start justify-start">
            <div className="relative h-6 w-full self-stretch">
              <div className="absolute left-0 top-[8.85px] inline-flex items-center justify-center gap-3">
                <div className="relative h-4 w-3.5">
                  <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    —
                  </div>
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  What we do
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch pt-4">
              <div
                className={`${funnelDisplay.className} w-full max-w-[780px] whitespace-normal text-3xl font-light leading-tight text-neutral-900 sm:text-4xl xl:text-5xl xl:leading-[49.68px]`}
              >
                Full-Funnel SaaS SEO Services for India & USA
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4">
              <div className="w-full max-w-[639px] text-lg font-normal leading-7 text-neutral-600 font-['Aspekta']">
                From technical SEO to growth-focused content, every strategy is focused on one
                outcome: attracting qualified visitors who convert into demos, trials, and
                revenue (ARR).
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1160px] flex-col items-start justify-start pt-16">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <ServiceCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="inline-flex w-full max-w-[1160px] items-start justify-center pt-12">
          <button
            type="button"
            className="inline-flex h-14 items-center justify-start gap-2 rounded-full bg-neutral-950 px-8 py-4"
          >
            <span className="whitespace-nowrap text-base leading-6 text-white font-['Aspekta']">
              Get a Free SaaS SEO Audit
            </span>
            <div className="relative size-4 overflow-hidden">
              <svg
                viewBox="0 0 16 16"
                className="absolute left-[3.33px] top-[4px] size-2.5"
                aria-hidden
              >
                <path
                  d="M3.5 8H12.5M12.5 8 9 4.5M12.5 8 9 11.5"
                  stroke="#ffffff"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
