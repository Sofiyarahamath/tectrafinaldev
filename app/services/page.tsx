import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ServicesOfferings from "@/components/ServicesOfferings";
import MethodologySection from "@/components/MethodologySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import EEATSection from "@/components/EEATSection";
import WhyChooseTectraSection from "@/components/WhyChooseTectraSection";
import IndustriesSection from "@/components/IndustriesSection";
import OurStackSection from "@/components/OurStackSection";
import ClientVoicesSection from "@/components/ClientVoicesSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import CTAGradientSection from "@/components/CTAGradientSection";
import FooterSection from "@/components/FooterSection";
import GlareHover from "@/components/GlareHover";
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "SaaS SEO Services | Tectra Technologies",
  description:
    "Tectra Technologies is a SaaS SEO agency based in Chennai that helps B2B and B2C SaaS companies grow organic traffic and convert it into demo requests, trial signups, and ARR.",
};

const NAV_LINKS = [
  "Industries",
  "Products",
  "Case Studies",
  "Pricing",
  "Blogs",
  "About",
  "Careers",
] as const;

const STATS = [
  {
    value: "9+ yrs",
    title: "Strategic SEO Execution",
    subtitle: "Serving SaaS Brands",
  },
  {
    value: "150+",
    title: "Businesses trust Tectra",
    subtitle: "For their organic search growth across India and the USA",
  },
  {
    value: "3.5K",
    title: "Monthly Organic Traffic",
    subtitle: "Achieved from near-zero traffic, without relying on paid ads",
  },
  {
    value: "48 hrs",
    title: "Free SEO audit",
    subtitle: "Manually reviewed by our SEO lead, delivered to your inbox",
  },
] as const;

function StarIcon() {
  return (
    <div className="relative size-3.5 overflow-hidden">
      <Image
        src="/star.png"
        alt=""
        width={10}
        height={10}
        className="absolute left-[2.45px] top-[1.17px] size-2.5"
      />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col bg-neutral-950">
          {/* Hero */}
          <section className="flex w-full flex-col items-center bg-neutral-950 px-4 md:px-8 pt-32 pb-16 xl:pt-40 xl:pb-24">
            <div className="relative flex w-full max-w-7xl mx-auto flex-col items-start xl:min-h-[554px]">
              <div className="inline-flex max-w-full flex-row items-center justify-start gap-2 sm:gap-2.5 rounded-full bg-white/5 px-3 py-2 sm:px-4 sm:py-2 outline outline-[0.80px] outline-offset-[-0.80px] outline-white/10 overflow-hidden">
                <div className="flex shrink-0 items-center justify-start gap-2 sm:gap-2.5">
                  <div className="flex items-center justify-start">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="font-['Aspekta'] text-[11px] sm:text-[13px] font-[450] text-[#FFF] leading-normal sm:leading-[19.5px] whitespace-nowrap">150+</div>
                </div>
                <div className="font-['Aspekta'] text-[11px] sm:text-[13px] font-[400] text-[#E6E6E6] leading-normal sm:leading-[19.5px] whitespace-nowrap truncate">
                  SaaS brands · Certified Google Partner
                </div>
              </div>

              <div className="mt-4 inline-flex flex-wrap items-center justify-start gap-3">
                <span className="text-xs font-medium uppercase leading-4 text-color-neutral-400 font-['Aspekta']">
                  — SAAS SEO Agency India &amp; USA —
                </span>
              </div>

              <div className="mt-5 grid w-full grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,674px)_minmax(0,548px)] xl:gap-12">
                <div className="flex min-w-0 flex-col items-start">
                  <h1
                    className={`${funnelDisplay.className} w-full max-w-[674px] text-[36px] font-light leading-[1.15] tracking-[-1px] text-white sm:text-4xl sm:leading-[48px] sm:tracking-normal xl:text-5xl xl:leading-[56px] text-balance`}
                  >
                    SaaS SEO That Converts Organic Traffic into Demo Requests &amp; ARR
                  </h1>
                  <p className="mt-5 w-full max-w-[548px] font-['Aspekta'] text-[16px] font-normal text-[#CACACA] leading-normal">
                    Tectra Technologies is a SaaS SEO agency based in Chennai that helps B2B
                    and B2C SaaS companies in India and the USA grow organic traffic and
                    convert it into demo requests, trial signups, and real revenue (ARR)
                    using content, pages, and links.
                  </p>
                  <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <button
                      type="button"
                      className="flex flex-1 self-stretch px-[32px] py-[16px] items-center justify-center gap-[8px] rounded-full bg-white"
                    >
                      <span className="font-['Aspekta'] text-[15px] font-[450] text-[#0A0A0A] leading-[22.5px]">
                        Get a Free SEO Audit
                      </span>
                      <svg viewBox="0 0 16 16" className="size-2.5" aria-hidden>
                        <path
                          d="M3.5 8H12.5M12.5 8 9 4.5M12.5 8 9 11.5"
                          stroke="#0a0a0a"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </button>
                    <GlareHover
                      className="flex flex-1 outline outline-[0.80px] outline-offset-[-0.80px] outline-white/10"
                      width="100%"
                      height="56px"
                      background="rgba(255,255,255,0.10)"
                      borderRadius="100px"
                      borderColor="transparent"
                      glareColor="#ffffff"
                      glareOpacity={0.2}
                      glareSize={250}
                    >
                      <button
                        type="button"
                        className="flex w-full h-full px-[28px] py-[16px] justify-center items-center gap-[12px] bg-transparent outline-none cursor-pointer"
                      >
                        <span className="font-['Aspekta'] text-[15px] font-medium text-[#FFF] leading-[16px] tracking-normal">
                          Talk to Our team
                        </span>
                      </button>
                    </GlareHover>
                  </div>
                </div>

                <div className="relative w-full max-w-[548px] justify-self-start xl:justify-self-end">
                  <Image
                    src="/analytics-panel.png"
                    alt="Organic Growth · GA4 Attribution"
                    width={548}
                    height={320}
                    quality={100}
                    className="h-auto w-full rounded-2xl object-cover shadow-[0px_24px_70px_0px_rgba(0,0,0,0.16)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="flex w-full flex-col items-center border-b-[0.80px] border-gray-200 bg-neutral-50 px-4 md:px-8 py-16 xl:py-24">
            <div className="grid w-full max-w-7xl mx-auto grid-cols-2 gap-3 self-stretch sm:gap-4 xl:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="flex min-h-36 w-full flex-col items-start justify-start rounded-2xl bg-white p-4 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200 sm:min-h-52 sm:p-8"
                >
                  <div
                    className={`${funnelDisplay.className} text-[28px] font-light leading-tight text-neutral-900 sm:text-5xl xl:text-6xl xl:leading-[56px]`}
                  >
                    {stat.value}
                  </div>
                  <div className="pt-3 sm:pt-4 text-[13px] leading-[18px] sm:text-base sm:leading-6 text-neutral-900 font-['Aspekta']">
                    {stat.title}
                  </div>
                  <div className="pt-1.5 sm:pt-2 text-[11px] sm:text-sm font-normal leading-[16px] sm:leading-5 text-neutral-500 font-['Aspekta']">
                    {stat.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <ServicesOfferings />
          <MethodologySection />
          <CaseStudiesSection />
          <EEATSection />
          <WhyChooseTectraSection />
          <IndustriesSection />
          <OurStackSection />
          <ClientVoicesSection />
          <FAQSection />
          <RelatedServicesSection />
          <CTAGradientSection />
          <FooterSection />
      </main>
    </>
  );
}
