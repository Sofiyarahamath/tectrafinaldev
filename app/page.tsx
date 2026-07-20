import Header from "../components/Header";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Leaks from "../components/Leaks";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Disciplines from "../components/Disciplines";
import WhyChooseTectra from "../components/WhyChooseTectra";
import AIInnovation from "../components/AIInnovation";
import BusinessGrowthFramework from "../components/BusinessGrowthFramework";
import OurProducts from "../components/OurProducts";
import BlogSection from "../components/BlogSection";
import GrowthAuditSection from "../components/GrowthAuditSection";
import FooterSection from "../components/FooterSection";
import FloatingWidgets from "../components/FloatingWidgets";





export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Leaks />
        <CaseStudies />
        <Testimonials />
        <Disciplines />
        <WhyChooseTectra />
        <AIInnovation />
        <BusinessGrowthFramework />
        <OurProducts />
        <BlogSection />
        <GrowthAuditSection />
      </main>
      <FooterSection />
      <FloatingWidgets />
    </>
  );
}
