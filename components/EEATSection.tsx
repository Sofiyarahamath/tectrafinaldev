import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const EEAT_CARDS = [
  {
    title: "Experience",
    description:
      "We create content rooted in real product usage, customer pain points, and practical industry insights, not generic articles. Every piece is designed to demonstrate firsthand understanding of the challenges your audience faces and how your product helps solve them.",
    icon: "/icons/eeat-experience.png",
  },
  {
    title: "Expertise",
    description:
      "Our content strategy is built around your product, industry, and audience. We develop in-depth guides, use cases, comparison pages, and educational resources that showcase genuine subject-matter expertise while aligning with search intent and buyer journeys.",
    icon: "/icons/eeat-expertise.png",
  },
  {
    title: "Authoritativeness",
    description:
      "We strengthen your authority through comprehensive content clusters, strategic internal linking, high-quality editorial backlinks, and topical coverage that positions your brand as a trusted resource within your category.",
    icon: "/icons/eeat-authority.png",
  },
  {
    title: "Trustworthiness",
    description:
      "Trust is built into every stage of our process. We prioritise accurate, well-researched content, transparent sourcing, clear messaging, and ethical SEO practices that support long-term rankings without relying on shortcuts or manipulative tactics.",
    icon: "/icons/eeat-trust.png",
  },
] as const;

const INTRO_LINES = [
  "In competitive SaaS markets, rankings are earned through",
  "credibility, expertise, and trust. That's why every SEO strategy",
  "we develop is aligned with Google's E-E-A-T framework,",
  "ensuring your content demonstrates real experience,",
  "showcases subject-matter expertise, builds authority within your",
  "niche, and earns trust from both users and search engines.",
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 14 14" className="size-3.5" aria-hidden="true">
      <path
        d="M7 1.6 11.2 3.4v3.5c0 2.7-1.8 4.7-4.2 5.5C4.6 11.6 2.8 9.6 2.8 6.9V3.4Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="m5.6 6.8 1.1 1.1 2-2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EEATSection() {
  return (
    <div className="inline-flex w-full flex-col items-center justify-start bg-neutral-50 px-4 md:px-8 py-16 xl:py-24">
      <div className="flex w-full flex-col items-start justify-start self-stretch">
        <div className="flex w-full max-w-7xl mx-auto flex-col items-start justify-start gap-12 self-stretch lg:flex-row lg:gap-16">
          <div className="inline-flex w-full max-w-[548px] shrink-0 flex-col items-start justify-start gap-6">
            <div className="flex w-full max-w-[548px] flex-col items-start justify-start gap-3">
              <div className="relative h-6 self-stretch">
                <div className="absolute left-0 top-[8px] inline-flex items-center justify-center gap-3">
                  <div className="relative h-4 w-3.5">
                    <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                      —
                    </div>
                  </div>
                  <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    Credibility &amp; trust
                  </div>
                  <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    —
                  </div>
                </div>
              </div>
              <div className="flex self-stretch flex-col items-start justify-start pt-4">
                <div
                  className={`${funnelDisplay.className} w-full max-w-[548px] whitespace-normal text-[32px] sm:text-3xl font-light leading-[1.15] tracking-[-1px] sm:tracking-normal text-neutral-900 sm:text-4xl xl:text-5xl xl:leading-[49.68px] text-balance`}
                >
                  Our SaaS SEO Is Built on <br className="hidden xl:block" />
                  E-E-A-T Principles
                </div>
              </div>
              <div className="flex w-full max-w-[638.40px] flex-col items-start justify-start pt-4">
                <div className="w-full max-w-[548px] text-lg font-normal leading-7 text-neutral-600 font-['Aspekta'] lg:hidden">
                  {INTRO_LINES.join(" ")}
                </div>
                <div className="hidden w-full max-w-[548px] text-lg font-normal leading-7 text-neutral-600 font-['Aspekta'] lg:block">
                  {INTRO_LINES.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="inline-flex w-full max-w-[438px] items-center justify-start gap-6 rounded-3xl bg-white p-6 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
              <div className="flex min-w-0 flex-1 items-center justify-start gap-3">
                <Image
                  src="/rakesh-kumar.png"
                  alt="Rakesh Kumar"
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-full object-cover object-top"
                />
                <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                  <div className="self-stretch font-['Aspekta'] text-[19px] font-normal text-neutral-500 leading-[28.5px]">
                    Reviewed by{" "}
                  </div>
                  <div className="flex flex-col items-start justify-start pb-3">
                    <div
                      className={`${funnelDisplay.className} w-full text-2xl font-light leading-9 text-neutral-900`}
                    >
                      Rakesh Kumar{" "}
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-1">
                    <Image
                      src="/linkedin.png"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="size-4 rounded-sm"
                    />
                    <div className="text-xs font-normal text-neutral-600 font-['Aspekta']">
                      View profile{" "}
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/google-partner.png"
                alt="Google Partner"
                width={56}
                height={56}
                className="size-14 shrink-0 object-contain"
              />
            </div>

            <div className="inline-flex w-full max-w-[548px] flex-wrap items-center justify-center sm:justify-start gap-3.5">
              <div className="w-full shrink-0 text-center sm:text-left text-lg font-normal leading-7 text-neutral-500 font-['Aspekta'] sm:w-auto">
                <span className="block">150+ SaaS</span>
                <span className="block">Brands Served</span>
              </div>
              <div className="hidden h-12 w-px shrink-0 bg-color-neutral-400 sm:block" />
              <div className="relative min-h-14 min-w-0 w-full flex-1 overflow-hidden sm:w-auto">
                <Image
                  src="/saas-brands-logos-dark.png"
                  alt="SaaS brands served"
                  width={403}
                  height={56}
                  className="mx-auto h-14 w-auto max-w-full object-contain object-center sm:mx-0 sm:object-left"
                />
              </div>
            </div>

            <div className="flex w-full max-w-[548px] justify-center sm:justify-start pt-2">
              <div className="inline-flex h-10 items-center justify-start gap-2 rounded-full bg-neutral-950 px-4 py-2">
                <ShieldIcon />
                <div className="text-xs uppercase leading-4 tracking-wider text-white font-['Aspekta']">
                  Aligned with Google E-E-A-T
                </div>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 w-full flex-1 grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {EEAT_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex min-h-80 min-w-0 flex-col items-start justify-start rounded-2xl bg-white p-6 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200"
              >
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(120deg,#BFE3E0_7.74%,#F4D6E6_48.31%,#F7E6C0_92.26%)]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </div>
                <div className="flex shrink-0 flex-col items-start justify-start pt-5">
                  <div
                    className={`${funnelDisplay.className} text-lg font-light leading-7 text-neutral-900`}
                  >
                    {card.title}
                  </div>
                </div>
                <div className="flex w-full min-w-0 flex-col items-start justify-start pt-2">
                  <div className="w-full text-sm font-normal leading-5 text-neutral-600 font-['Aspekta']">
                    {card.description}
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
