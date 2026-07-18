# Services Page Design — 2026-07-17

## Goal

Add a `/services` route (first page of the Services section) matching the approved dark-mode reference screenshot, and make the "Services" item in the home page navigation link to it.

## Scope

- New route: `src/app/services/page.tsx` (Next.js 16 App Router, server component, no client state needed).
- Home page change: wrap the existing "Services" nav text in a `next/link` `Link` with `href="/services"`. No other home page changes.
- No shared component extraction in this pass; the services page is self-contained, following the existing single-file page pattern.

## Layout (from reference)

Dark page (`bg-neutral-950`), full viewport height on desktop.

1. **Navigation pill** — centered rounded-full bar on translucent white (`bg-white/10`-style), containing:
   - Logo: "Tectra Technologies" wordmark + simple mark.
   - Menu items: Services (with dropdown chevron), Industries, Products, Case Studies, Pricing, Blogs, About, Careers. Links back to `/` for home via the logo.
   - CTA: white pill button "Book a Strategy Call" with dark text.
2. **Hero (left column)**
   - Rating badge pill: five amber stars, "150+", "SaaS brands · Certified Google Partner".
   - Eyebrow: "— SAAS SEO AGENCY  INDIA & USA —" (uppercase, neutral-400).
   - Headline: "SaaS SEO That Converts Organic Traffic into Demo Requests & ARR" — light weight, Funnel Display family (falls back per existing project pattern), ~text-5xl.
   - Body copy: the Chennai SaaS SEO paragraph, stone-300.
   - CTAs: white pill "Get a Free SEO Audit →" and translucent white pill "Talk to Our team".
3. **Analytics panel (right column)**
   - Card with dark gradient (stone-900 → neutral-900), rounded-2xl, subtle border, shadow.
   - Header row: three dots + "Organic Growth · GA4 Attribution".
   - Three metric tiles in a row: Demo Requests 68 ▲ 300%, Organic Traffic 3.5K ▲, MQLs 189% ▲ (sample data).
   - Trending chart: inline SVG area chart with green line, gradient fill under the line, horizontal grid lines, highlight dots. Static placeholder data.

## Responsiveness

- Desktop (≥ lg): two-column hero (text left, analytics card right), full menu visible.
- Mobile/tablet: nav shows logo + CTA only (menu items hidden below lg); hero stacks vertically, analytics card below the CTAs, full width; CTAs stack or wrap.

## Fonts / tokens

Follow the existing home page pattern: `font-['Funnel_Display']` / `font-['Aspekta']` class names with system fallback (no new font loading), Tailwind v4 utilities and the `--color-color-*` tokens already defined in `globals.css`.

## Testing / verification

No JS behavior beyond routing, and the project has no test runner installed; verification is: `/services` returns 200 from the running dev server, no linter errors, and clicking Services on the home page navigates to the new page.
