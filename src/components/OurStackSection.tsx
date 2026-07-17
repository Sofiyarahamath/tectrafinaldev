import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const TOOLS = [
  {
    name: "Search Console",
    src: "/icons/stack/search-console.png",
    width: 44,
    height: 44,
    className: "size-11 object-contain",
  },
  {
    name: "GA4",
    src: "/icons/stack/ga4.png",
    width: 40,
    height: 44,
    className: "h-11 w-10 object-contain",
  },
  {
    name: "Ahrefs",
    src: "/icons/stack/ahrefs.png",
    width: 90,
    height: 25,
    className: "h-6 w-24 object-contain",
  },
  {
    name: "Semrush",
    src: "/icons/stack/semrush.png",
    width: 59,
    height: 44,
    className: "h-11 w-14 object-contain",
  },
  {
    name: "Screaming Frog",
    src: "/icons/stack/screaming-frog.png",
    width: 59,
    height: 44,
    className: "h-11 w-14 object-contain",
  },
  {
    name: "Looker Studio",
    src: "/icons/stack/looker-studio.png",
    width: 44,
    height: 44,
    className: "size-11 object-contain",
  },
] as const;

const cardShadow =
  "shadow-[inset_-2.4035820960998535px_5.608357906341553px_26.439401626586914px_0px_rgba(0,0,0,0.08),inset_-2.4035820960998535px_5.608357906341553px_9px_0px_rgba(0,0,0,0.08)]";

export default function OurStackSection() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-neutral-50 px-[160px] py-24">
      <div className="flex w-full max-w-[1240px] flex-col items-start justify-start self-stretch">
        <div className="flex w-full flex-col items-center justify-start self-stretch">
          <div className="flex w-[780px] max-w-[780px] flex-col items-start justify-start">
            <div className="relative h-6 self-stretch">
              <div className="absolute left-1/2 top-[4px] inline-flex -translate-x-1/2 items-center justify-center gap-3">
                <div className="relative h-4 w-3.5">
                  <div className="absolute left-0 top-[-0.40px] text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                    —
                  </div>
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  Our stack
                </div>
                <div className="text-xs font-medium uppercase leading-4 text-color-neutral-600 font-['Aspekta']">
                  —
                </div>
              </div>
            </div>

            <div className="flex w-[780px] flex-col items-center justify-start pt-4">
              <div
                className={`${funnelDisplay.className} w-[548px] text-center text-5xl font-light leading-[49.68px] text-neutral-900`}
              >
                <span className="block whitespace-nowrap">Platforms &amp; Tools We Use</span>
                <span className="block whitespace-nowrap">for SaaS SEO</span>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-start pt-4">
              <div className="w-[638px] text-center text-lg font-normal leading-7 text-neutral-600 font-['Aspekta']">
                <span className="block whitespace-nowrap">
                  We use the best tools for every aspect of SaaS SEO, from technical
                </span>
                <span className="block whitespace-nowrap">
                  auditing and keyword research to content optimisation, rank tracking, and
                </span>
                <span className="block whitespace-nowrap">pipeline attribution.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-52 w-full flex-col items-start justify-start pt-16">
          <div className="grid w-full grid-cols-6 gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className={`inline-flex h-36 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white outline outline-[0.80px] outline-offset-[-0.80px] outline-gray-200 ${cardShadow}`}
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={tool.width}
                  height={tool.height}
                  className={tool.className}
                />
                <div className="text-center text-sm leading-5 text-neutral-700 font-['Aspekta']">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
