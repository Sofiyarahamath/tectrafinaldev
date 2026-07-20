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

const CERTIFICATIONS = ["ISO 27001", "ISO 9001", "Snowflake", "Clutch"] as const;

function NavLink({ label, href, isFirst = false }: { label: string; href?: string; isFirst?: boolean }) {
  const inner = (
    <div
      className={`flex w-full min-w-0 flex-col items-start justify-start ${isFirst ? "" : "pt-3"
        }`}
    >
      <div className={`w-full text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta'] ${href ? "hover:text-white transition-colors duration-200 cursor-pointer" : ""}`}>
        {label}
      </div>
    </div>
  );
  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}

export default function FooterSection() {
  return (
    <div className="inline-flex w-full flex-col items-center justify-start bg-color-neutral-900 px-4 md:px-8 py-16 xl:py-24">
      <div className="w-full max-w-7xl mx-auto self-stretch">
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,16rem)_repeat(4,minmax(0,1fr))] lg:gap-x-8 lg:gap-y-10">
          <div className="flex min-w-0 flex-col items-start justify-start gap-6 sm:col-span-2 lg:col-span-1">
            <Image
              src="/tectra-logo-footer.png"
              alt="Tectra Technologies"
              width={251}
              height={44}
              className="h-11 w-full max-w-7xl mx-auto4 object-contain object-left"
            />

            <div className="w-full max-w-7xl mx-auto4 text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
              Software development company building digital products for businesses in
              the USA and India since 2015.
            </div>

            <div className="flex w-full max-w-7xl mx-auto4 flex-wrap items-center gap-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert}
                  className="flex h-6 items-center rounded-[100px] px-3 outline outline-[0.80px] outline-offset-[-0.80px] outline-color-neutral-800"
                >
                  <div className="text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
                    {cert}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full max-w-[280px] sm:max-w-7xl mx-auto4 flex-wrap items-center gap-3 sm:gap-2">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="relative size-11 shrink-0 overflow-hidden rounded-full"
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

          <div className="flex min-w-0 flex-col items-start justify-start">
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
              Services
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-5">
              {SERVICES.map((item, index) => (
                <NavLink key={item} label={item} href="/services" isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start justify-start">
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
              Digital marketing
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-5">
              {DIGITAL_MARKETING.map((item, index) => (
                <NavLink key={item} label={item} isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start justify-start">
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
              Company
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-5">
              {COMPANY.map((item, index) => (
                <NavLink key={item} label={item} isFirst={index === 0} />
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start justify-start sm:col-span-2 lg:col-span-1">
            <div className="text-xs font-medium uppercase leading-4 text-color-neutral-500 font-['Aspekta']">
              Contact
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-5">
              {CONTACT_EMAILS.map((email, index) => (
                <div
                  key={email}
                  className={`flex w-full flex-col items-start justify-start ${index === 0 ? "" : "pt-2.5"
                    }`}
                >
                  <div className="break-words text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                    {email}
                  </div>
                </div>
              ))}
              <div className="flex w-full flex-col items-start justify-start pt-2.5">
                <div className="flex w-full flex-col items-start justify-start border-t-[0.80px] border-color-neutral-700 pt-4">
                  <div className="text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                    Chennai · Tamil Nadu · India
                  </div>
                  <div className="text-sm font-normal leading-5 text-color-neutral-500 font-['Aspekta']">
                    USA — Nearshore Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-7xl mx-auto flex-col items-center justify-start pt-10 lg:pt-16">
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t-[0.80px] border-color-neutral-700 pt-8 sm:flex-row sm:items-center">
          <div className="text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta'] text-center">
            © 2026 Tectra Technologies LLC
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
              Privacy
            </div>
            <div className="text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
              Terms
            </div>
            <div className="text-xs font-normal leading-4 text-color-neutral-500 font-['Aspekta']">
              Sitemap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
