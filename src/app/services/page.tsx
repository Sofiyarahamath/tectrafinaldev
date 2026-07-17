import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 14 14" className="size-3.5 shrink-0" aria-hidden>
      <path
        d="M3.25 5.25 7 9 10.75 5.25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden bg-neutral-950">
      <header className="flex w-full shrink-0 justify-center bg-neutral-950 px-4 py-3 sm:px-6 md:px-10 xl:px-[160px]">
        <div className="flex h-14 w-full max-w-[1118px] items-center justify-between rounded-[1000px] border-b-[0.80px] border-color-primary-main bg-color-alpha-white-08 pl-4 pr-2 sm:h-16 sm:pl-7 sm:pr-3">
          <Link href="/" className="relative h-6 w-36 shrink-0 sm:h-7 sm:w-52">
            <Image
              src="/tectra-logo.png"
              alt="Tectra Technologies"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/services"
              className="flex items-center gap-0.5 text-sm font-normal leading-5 text-color-neutral-0 font-['Aspekta']"
            >
              Services
              <ChevronDownIcon />
            </Link>
            {NAV_LINKS.map((label) => (
              <span
                key={label}
                className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-0 font-['Aspekta']"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-[100px] bg-color-neutral-0 px-3 py-2 sm:px-5 sm:py-2.5">
            <div className="whitespace-nowrap text-xs font-normal leading-5 text-color-primary-main sm:text-sm font-['Aspekta']">
              Book a Strategy Call
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="flex w-full flex-col bg-neutral-950">
          {/* Hero */}
          <section className="flex w-full flex-col items-center bg-neutral-950 px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[160px] xl:py-24">
            <div className="relative flex w-full max-w-[1200px] flex-col items-start xl:min-h-[554px]">
              <div className="inline-flex max-w-full flex-wrap items-center justify-start gap-2.5 rounded-full bg-white/5 px-3 py-2 outline outline-[0.80px] outline-offset-[-0.80px] outline-white/10 sm:px-4">
                <div className="flex items-start justify-start">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="text-xs leading-5 text-white font-['Aspekta']">150+</div>
                <div className="text-xs font-normal leading-5 text-neutral-200 font-['Aspekta']">
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
                    className={`${funnelDisplay.className} w-full max-w-[674px] text-3xl font-light leading-tight text-white sm:text-4xl sm:leading-[48px] xl:text-5xl xl:leading-[56px]`}
                  >
                    SaaS SEO That Converts Organic Traffic into Demo Requests &amp; ARR
                  </h1>
                  <p className="mt-5 w-full max-w-[548px] text-sm font-normal leading-6 text-stone-300 sm:text-base font-['Aspekta']">
                    Tectra Technologies is a SaaS SEO agency based in Chennai that helps B2B
                    and B2C SaaS companies in India and the USA grow organic traffic and
                    convert it into demo requests, trial signups, and real revenue (ARR)
                    using content, pages, and links.
                  </p>
                  <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <button
                      type="button"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:h-14 sm:px-8 sm:py-4"
                    >
                      <span className="text-sm leading-6 text-neutral-950 sm:text-base font-['Aspekta']">
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
                    <button
                      type="button"
                      className="inline-flex h-12 items-center justify-center gap-3 rounded-[100px] bg-white/10 px-6 py-3 sm:h-14 sm:px-7 sm:py-4"
                    >
                      <span className="text-sm font-medium leading-4 text-white sm:text-base font-['Aspekta']">
                        Talk to Our team
                      </span>
                    </button>
                  </div>
                </div>

                <div className="relative w-full max-w-[548px] justify-self-start xl:justify-self-end">
                  <Image
                    src="/analytics-panel.png"
                    alt="Organic Growth · GA4 Attribution"
                    width={548}
                    height={320}
                    className="h-auto w-full rounded-2xl object-cover shadow-[0px_24px_70px_0px_rgba(0,0,0,0.16)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="flex w-full flex-col items-start border-b-[0.80px] border-gray-200 bg-neutral-50 px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[160px] xl:py-24">
            <div className="grid w-full max-w-[1240px] grid-cols-1 gap-4 self-stretch sm:grid-cols-2 xl:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="flex min-h-44 w-full flex-col items-start justify-start rounded-2xl bg-white p-6 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200 sm:min-h-52 sm:p-8"
                >
                  <div
                    className={`${funnelDisplay.className} text-4xl font-light leading-tight text-neutral-900 sm:text-5xl xl:text-6xl xl:leading-[56px]`}
                  >
                    {stat.value}
                  </div>
                  <div className="pt-4 text-base leading-6 text-neutral-900 font-['Aspekta']">
                    {stat.title}
                  </div>
                  <div className="pt-2 text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
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
        </div>
      </div>
    </main>
  );
}
