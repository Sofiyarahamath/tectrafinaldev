import { Funnel_Display } from "next/font/google";
import Image from "next/image";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const AUDIT_FEATURES = [
  "200-point technical SEO audit",
  "Keyword opportunity map for your SaaS category",
  "Top 3 competitor content gap analysis",
  "Prioritised BOFU page recommendations",
] as const;

const HEALTH_SCORES = [
  { label: "Technical SEO", score: 82, barWidth: "w-20" },
  { label: "Content & BOFU coverage", score: 64, barWidth: "w-14" },
  { label: "Authority & backlinks", score: 71, barWidth: "w-16" },
] as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-5 shrink-0" aria-hidden fill="none">
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="#86efac"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CTAGradientSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-[160px] xl:py-16">
      <Image
        src="/cta-gradient.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-stretch justify-start gap-8 rounded-[24px] bg-white p-6 sm:rounded-[32px] sm:p-8 lg:flex-row lg:items-center lg:gap-12 lg:rounded-[40px] xl:h-[674.70px] xl:p-11">
        <div className="inline-flex w-full max-w-[521px] flex-col items-start justify-between lg:self-stretch">
          <div className="relative h-6 w-full self-stretch">
            <div className="absolute left-0 top-[8.63px] inline-flex items-center justify-center gap-3">
              <div className="relative h-4 w-3.5">
                <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                Best SaaS SEO Agency
              </div>
              <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                —
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start pt-4">
            <div
              className={`${funnelDisplay.className} w-full max-w-[550px] text-2xl font-light leading-tight text-black sm:text-3xl sm:leading-[40px] xl:text-4xl xl:leading-[49.68px]`}
            >
              Get Your Free SaaS SEO Audit in 48 Hours
            </div>
          </div>

          <div className="flex w-full max-w-[510.72px] flex-col items-start justify-start pt-4">
            <div className="w-full text-sm font-normal text-color-neutral-700 font-['Aspekta']">
              Tell us about your SaaS product, current organic traffic, and target
              market: India, the USA, or both. We&apos;ll deliver a manual audit with
              prioritised recommendations, competitor analysis, and an initial
              keyword opportunity map. No automated reports. No commitment
              required.
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start pt-6">
            <div className="inline-flex w-full max-w-[522px] flex-col items-start justify-start">
              {AUDIT_FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="inline-flex w-full items-center justify-start gap-3"
                >
                  <CheckIcon />
                  <div className="text-xs font-normal leading-6 text-black font-['Aspekta']">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start pt-8">
            <div className="flex h-48 w-full max-w-96 flex-col items-start justify-start overflow-hidden rounded-2xl bg-neutral-900 outline outline-[0.80px] outline-offset-[-0.80px] outline-neutral-800">
              <div className="inline-flex h-10 w-full items-center justify-start gap-2 border-b-[0.80px] border-neutral-800 px-4 py-3">
                <div className="relative size-2 rounded-full bg-green-300" />
                <div className="text-xs font-normal leading-4 tracking-tight text-neutral-400 font-['Aspekta']">
                  Sample audit — SaaS Health Score
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start p-4">
                {HEALTH_SCORES.map((item, index) => (
                  <div
                    key={item.label}
                    className={`inline-flex w-full items-center justify-between py-2.5 ${
                      index < HEALTH_SCORES.length - 1
                        ? "border-b-[0.80px] border-neutral-800"
                        : ""
                    }`}
                  >
                    <div className="text-xs font-normal leading-5 text-stone-300 font-['Aspekta']">
                      {item.label}
                    </div>
                    <div className="flex items-center justify-start gap-3">
                      <div className="inline-flex h-1.5 w-24 flex-col items-start justify-start overflow-hidden rounded-full bg-neutral-800">
                        <div
                          className={`${item.barWidth} relative h-1.5 rounded-full bg-gradient-to-r from-slate-300 via-pink-200 to-amber-100`}
                        />
                      </div>
                      <div className="inline-flex min-w-6 flex-col items-end justify-start">
                        <div
                          className={`${funnelDisplay.className} text-right text-xs font-light leading-5 text-white`}
                        >
                          {item.score}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex w-full flex-col items-stretch justify-between lg:flex-1 lg:self-stretch">
          <div className="flex w-full flex-col items-start justify-center rounded-2xl bg-neutral-900 p-5 outline outline-[0.80px] outline-offset-[-0.80px] outline-neutral-800 shadow-[0px_24px_70px_0px_rgba(0,0,0,0.16)] sm:p-6 lg:flex-1">
            <div className="flex w-full flex-col items-start justify-start">
              <div
                className={`${funnelDisplay.className} text-xl font-light leading-8 text-white`}
              >
                Request your free audit
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-1.5">
              <div className="text-xs font-normal leading-5 text-neutral-400 font-['Aspekta']">
                Manually reviewed by our SEO lead.
              </div>
            </div>

            <label className="flex w-full flex-col items-start justify-start pt-6">
              <div className="flex w-full flex-col items-start justify-start pb-1.5">
                <span className="text-xs leading-5 tracking-wide text-stone-300 font-['Aspekta']">
                  Full name
                </span>
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Your name"
                className="h-12 w-full rounded-2xl bg-stone-950 px-4 py-3.5 text-sm font-normal text-white outline outline-[0.80px] outline-offset-[-0.80px] outline-zinc-800 placeholder:text-neutral-500 font-['Aspekta']"
              />
            </label>

            <label className="flex w-full flex-col items-start justify-start pt-4">
              <div className="flex w-full flex-col items-start justify-start pb-1.5">
                <span className="text-xs leading-5 tracking-wide text-stone-300 font-['Aspekta']">
                  Work email
                </span>
              </div>
              <input
                type="email"
                name="workEmail"
                placeholder="you@company.com"
                className="h-12 w-full rounded-2xl bg-stone-950 px-4 py-3.5 text-sm font-normal text-white outline outline-[0.80px] outline-offset-[-0.80px] outline-zinc-800 placeholder:text-neutral-500 font-['Aspekta']"
              />
            </label>

            <label className="flex w-full flex-col items-start justify-start pt-4">
              <div className="flex w-full flex-col items-start justify-start pb-1.5">
                <span className="text-xs leading-5 tracking-wide text-stone-300 font-['Aspekta']">
                  Website URL
                </span>
              </div>
              <input
                type="url"
                name="websiteUrl"
                placeholder="https://yourproduct.com"
                className="h-12 w-full rounded-2xl bg-stone-950 px-4 py-3.5 text-sm font-normal text-white outline outline-[0.80px] outline-offset-[-0.80px] outline-zinc-800 placeholder:text-neutral-500 font-['Aspekta']"
              />
            </label>

            <label className="flex w-full flex-col items-start justify-start pt-4">
              <div className="flex w-full flex-col items-start justify-start pb-1.5">
                <span className="text-xs leading-5 tracking-wide text-stone-300 font-['Aspekta']">
                  Target market
                </span>
              </div>
              <input
                type="text"
                name="targetMarket"
                className="h-12 w-full rounded-2xl border-[0.80px] border-zinc-800 bg-stone-950 px-4 py-3.5 text-sm font-normal text-white font-['Aspekta']"
              />
            </label>

            <div className="flex w-full flex-col items-start justify-start pt-4">
              <button
                type="button"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4"
              >
                <span className="text-center text-base leading-6 text-neutral-950 font-['Aspekta']">
                  Get Your Free SaaS SEO Audit
                </span>
              </button>
            </div>

            <div className="flex w-full flex-col items-center justify-start pt-3">
              <div className="text-center text-xs font-normal leading-4 text-neutral-500 font-['Aspekta']">
                Delivered within 48 hours · No commitment required
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
