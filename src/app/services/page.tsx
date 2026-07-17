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

function StarIcon() {
  return (
    <div className="size-3.5 relative overflow-hidden">
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
      <header className="flex w-full shrink-0 justify-center bg-neutral-950 px-[160px] py-3">
        <div className="flex h-16 w-full max-w-[1118px] flex-col items-center justify-center rounded-[1000px] border-b-[0.80px] border-color-primary-main bg-color-alpha-white-08 pl-7 pr-3">
          <div className="inline-flex w-full items-center justify-between">
            <div className="flex max-w-[1240px] flex-1 items-center justify-between">
              <Link href="/" className="relative h-7 w-52 shrink-0">
                <Image
                  src="/tectra-logo.png"
                  alt="Tectra Technologies"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
              <div className="flex items-center gap-6">
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
              <div className="flex items-center gap-2 rounded-[100px] bg-color-neutral-0 px-5 py-2.5">
                <div className="text-sm font-normal leading-5 text-color-primary-main font-['Aspekta']">
                  Book a Strategy Call
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="flex w-full justify-center bg-neutral-950">
          <div className="flex w-full flex-col items-stretch bg-neutral-950">
            {/* Hero frame */}
            <div className="inline-flex h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950">
          <div className="inline-flex h-[716px] w-full items-center justify-center">
            <div className="inline-flex h-[554px] w-full flex-col items-start justify-start px-[160px]">
              <div className="relative inline-flex w-[1200px] flex-col items-start justify-start self-stretch">
                <div className="relative h-20 w-full self-stretch">
                  <div className="absolute left-[0.18px] top-[-0.18px] inline-flex items-center justify-start gap-2.5 rounded-full bg-white/5 px-4 py-2 outline outline-[0.80px] outline-offset-[-0.80px] outline-white/10">
                    <div className="flex items-start justify-start">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <div className="text-xs leading-5 text-white font-['Aspekta']">150+</div>
                    </div>
                    <div className="text-xs font-normal leading-5 text-neutral-200 font-['Aspekta']">
                      SaaS brands · Certified Google Partner
                    </div>
                  </div>
                  <div className="absolute left-0 top-[65px] inline-flex items-center justify-center gap-3">
                    <div className="relative h-4 w-3.5">
                      <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-400 font-['Aspekta']">
                        —
                      </div>
                    </div>
                    <div className="text-xs font-medium uppercase leading-4 text-color-neutral-400 font-['Aspekta']">
                      SAAS SEO Agency India &amp; USA
                    </div>
                    <div className="text-xs font-medium uppercase leading-4 text-color-neutral-400 font-['Aspekta']">
                      —
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start self-stretch pt-5">
                  <div
                    className={`${funnelDisplay.className} w-[674px] text-5xl font-light leading-[56px] text-white`}
                  >
                    SaaS SEO That Converts Organic Traffic into Demo Requests &amp; ARR
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start self-stretch pt-5">
                  <div className="w-[548px] text-base font-normal text-stone-300 font-['Aspekta']">
                    Tectra Technologies is a SaaS SEO agency based in Chennai that helps B2B
                    and B2C SaaS companies in India and the USA grow organic traffic and
                    convert it into demo requests, trial signups, and real revenue (ARR)
                    using content, pages, and links.
                  </div>
                </div>

                <div className="inline-flex items-center justify-start gap-3 pt-8">
                  <div className="inline-flex h-14 items-center justify-start gap-2 rounded-full bg-white px-8 py-4">
                    <div className="justify-start text-base leading-6 text-neutral-950 font-['Aspekta']">
                      Get a Free SEO Audit
                    </div>
                    <div className="relative size-4 overflow-hidden">
                      <svg
                        viewBox="0 0 16 16"
                        className="absolute left-[3.33px] top-[4px] size-2.5"
                        aria-hidden
                      >
                        <path
                          d="M3.5 8H12.5M12.5 8 9 4.5M12.5 8 9 11.5"
                          stroke="#0a0a0a"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="inline-flex h-14 items-center justify-center gap-3 rounded-[100px] bg-white/10 px-7 py-4">
                    <div className="justify-start text-base font-medium leading-4 text-white font-['Aspekta']">
                      Talk to Our team
                    </div>
                  </div>
                </div>

                <div className="absolute left-[617px] top-[102px] flex h-80 w-[548px] flex-col items-start justify-start">
                  <Image
                    src="/analytics-panel.png"
                    alt="Organic Growth · GA4 Attribution"
                    width={548}
                    height={320}
                    className="h-80 w-[548px] rounded-2xl object-cover shadow-[0px_24px_70px_0px_rgba(0,0,0,0.16)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="inline-flex w-full flex-col items-start justify-start border-b-[0.80px] border-gray-200 bg-neutral-50 px-[160px] py-24">
          <div className="flex w-full flex-col items-start justify-start self-stretch">
            <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
              <div className="inline-flex w-full items-stretch justify-start gap-4 self-stretch">
                <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                  <div className="flex h-52 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
                    <div className="flex w-full flex-col items-start justify-start self-stretch">
                      <div
                        className={`${funnelDisplay.className} text-6xl font-light leading-[56px] text-neutral-900`}
                      >
                        9+ yrs
                      </div>
                    </div>
                    <div className="flex h-10 w-52 flex-col items-start justify-start pt-4">
                      <div className="text-base leading-6 text-neutral-900 font-['Aspekta']">
                        Strategic SEO Execution
                      </div>
                    </div>
                    <div className="flex h-7 w-52 flex-col items-start justify-start pt-2">
                      <div className="text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
                        Serving SaaS Brands
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                  <div className="flex h-52 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
                    <div className="flex w-full flex-col items-start justify-start self-stretch">
                      <div
                        className={`${funnelDisplay.className} text-6xl font-light leading-[56px] text-neutral-900`}
                      >
                        150+
                      </div>
                    </div>
                    <div className="flex h-10 w-52 flex-col items-start justify-start pt-4">
                      <div className="text-base leading-6 text-neutral-900 font-['Aspekta']">
                        Businesses trust Tectra
                      </div>
                    </div>
                    <div className="flex w-52 flex-col items-start justify-start pt-2">
                      <div className="w-52 text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
                        For their organic search growth across India and the USA
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                  <div className="flex h-52 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
                    <div className="flex w-full flex-col items-start justify-start self-stretch">
                      <div
                        className={`${funnelDisplay.className} text-6xl font-light leading-[56px] text-neutral-900`}
                      >
                        3.5K
                      </div>
                    </div>
                    <div className="flex h-10 w-52 flex-col items-start justify-start pt-4">
                      <div className="text-base leading-6 text-neutral-900 font-['Aspekta']">
                        Monthly Organic Traffic
                      </div>
                    </div>
                    <div className="flex w-52 flex-col items-start justify-start pt-2">
                      <div className="w-52 text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
                        Achieved from near-zero traffic, without relying on paid ads
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex min-w-0 flex-1 flex-col items-start justify-start">
                  <div className="flex h-52 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-8 outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200">
                    <div className="flex w-full flex-col items-start justify-start self-stretch">
                      <div
                        className={`${funnelDisplay.className} text-6xl font-light leading-[56px] text-neutral-900`}
                      >
                        48 hrs
                      </div>
                    </div>
                    <div className="flex h-10 w-52 flex-col items-start justify-start pt-4">
                      <div className="text-base leading-6 text-neutral-900 font-['Aspekta']">
                        Free SEO audit
                      </div>
                    </div>
                    <div className="flex w-52 flex-col items-start justify-start pt-2">
                      <div className="w-52 text-sm font-normal leading-5 text-neutral-500 font-['Aspekta']">
                        Manually reviewed by our SEO lead, delivered to your inbox
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </main>
  );
}
