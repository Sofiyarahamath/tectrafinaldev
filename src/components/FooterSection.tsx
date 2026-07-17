import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  { name: "Facebook", src: "/icons/social/facebook.png", href: "#" },
  { name: "Instagram", src: "/icons/social/instagram.png", href: "#" },
  { name: "X", src: "/icons/social/x.png", href: "#" },
  { name: "LinkedIn", src: "/icons/social/linkedin.png", href: "#" },
  { name: "YouTube", src: "/icons/social/youtube.png", href: "#" },
] as const;

const SERVICES = [
  "Software Development",
  "Brand and identity",
  "Digital Marketing",
  "UI/UX Design",
] as const;

const DIGITAL_MARKETING = [
  "SEO",
  "Content Marketing",
  "Social Media Marketing",
  "Pay per click (PPC)",
  "Email Marketing and Automation",
] as const;

const COMPANY = ["About", "Case Studies", "Careers", "Blog", "Contact"] as const;

const CONTACT_EMAILS = [
  "info@tectratechnologies.com",
  "sales@tectratechnologies.com",
  "support@tectratechnologies.com",
] as const;

const DESCRIPTION_LINES = [
  "Software development company building",
  "digital products for businesses in the USA",
  "and India since 2015.",
] as const;

function NavLink({ label, isFirst = false }: { label: string; isFirst?: boolean }) {
  if (isFirst) {
    return (
      <div className="flex w-full flex-col items-start justify-start">
        <div className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-8 w-full flex-col items-start justify-start pt-3">
      <div className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
        {label}
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start bg-color-neutral-900 px-[160px] py-24">
      <div className="relative h-72 w-full max-w-[1240px] self-stretch">
        <div className="absolute left-[4.50px] top-0 inline-flex w-[1109px] items-start justify-between">
          <div className="inline-flex h-72 w-64 flex-col items-start justify-between">
            <Image
              src="/tectra-logo-footer.png"
              alt="Tectra Technologies"
              width={251}
              height={44}
              className="h-11 w-64 object-contain object-left"
            />

            <div className="flex w-full flex-col items-start justify-start pt-4">
              <div className="w-64 text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                {DESCRIPTION_LINES.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start pt-6">
              <div className="relative h-14 w-full">
                <div className="absolute left-0 top-0 h-6 w-20 rounded-[100px] outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-800">
                  <div className="absolute left-[10.80px] top-[4.60px] text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                    ISO 27001
                  </div>
                </div>
                <div className="absolute left-[84.65px] top-0 h-6 w-16 rounded-[100px] outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-800">
                  <div className="absolute left-[10.80px] top-[4.60px] text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                    ISO 9001
                  </div>
                </div>
                <div className="absolute left-[163.10px] top-0 h-6 w-24 rounded-[100px] outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-800">
                  <div className="absolute left-[10.80px] top-[4.60px] text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                    Snowflake
                  </div>
                </div>
                <div className="absolute left-0 top-[32.60px] h-6 w-16 rounded-[100px] outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-800">
                  <div className="absolute left-[10.80px] top-[4.60px] text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                    Clutch
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex w-full items-center justify-between">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="relative size-11 overflow-hidden rounded-full"
                >
                  <Image
                    src={social.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="inline-flex h-64 flex-col items-start justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="whitespace-nowrap text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                Services
              </div>
            </div>
            <div className="flex h-56 w-40 flex-col items-start justify-start pt-5">
              {SERVICES.map((item, index) => (
                <NavLink key={item} label={item} isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="inline-flex h-64 flex-col items-start justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="whitespace-nowrap text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                Digital marketing
              </div>
            </div>
            <div className="flex h-56 w-52 flex-col items-start justify-start pt-5">
              {DIGITAL_MARKETING.map((item, index) => (
                <NavLink key={item} label={item} isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="whitespace-nowrap text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                Company
              </div>
            </div>
            <div className="flex h-40 flex-col items-start justify-start pt-5">
              {COMPANY.map((item, index) => (
                <NavLink key={item} label={item} isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="inline-flex w-52 flex-col items-start justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="whitespace-nowrap text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                Contact
              </div>
            </div>
            <div className="flex h-40 w-64 flex-col items-start justify-start pt-5">
              {CONTACT_EMAILS.map((email, index) => (
                <div
                  key={email}
                  className={`flex w-full flex-col items-start justify-start ${
                    index === 0 ? "" : "h-7 pt-2.5"
                  }`}
                >
                  <div className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                    {email}
                  </div>
                </div>
              ))}
              <div className="flex w-full flex-col items-start justify-start pt-2.5">
                <div className="flex w-full flex-col items-start justify-start border-t-[0.80px] border-color-neutral-700 pt-4">
                  <div className="flex w-full flex-col items-start justify-start">
                    <div className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                      Chennai · Tamil Nadu · India
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    <div className="whitespace-nowrap text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                      USA — Nearshore Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1079px] flex-col items-center justify-start pt-16">
        <div className="inline-flex w-full items-center justify-between border-t-[0.80px] border-color-neutral-700 pt-8">
          <div className="relative h-4 w-48">
            <div className="absolute left-0 top-0 whitespace-nowrap text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
              © 2026 Tectra Technologies LLC
            </div>
          </div>
          <div className="flex items-start justify-start gap-6">
            <div className="relative h-4 w-10">
              <div className="absolute left-0 top-0 text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
                Privacy
              </div>
            </div>
            <div className="relative h-4 w-9">
              <div className="absolute left-0 top-0 text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
                Terms
              </div>
            </div>
            <div className="relative h-4 w-12">
              <div className="absolute left-0 top-0 text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
                Sitemap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
