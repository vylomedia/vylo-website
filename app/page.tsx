import { Hero } from "@/components/sections/landing/Hero";
import { TrustStrip } from "@/components/sections/landing/TrustStrip";
import { Testimonials } from "@/components/sections/landing/Testimonials";
import { PullQuote } from "@/components/sections/landing/PullQuote";
import { ValueRail } from "@/components/sections/landing/ValueRail";
import { VsComparison } from "@/components/sections/landing/VsComparison";
import { BrandsAgencies } from "@/components/sections/landing/BrandsAgencies";
import { StackOrbit } from "@/components/sections/landing/StackOrbit";
import { Templates } from "@/components/sections/landing/Templates";
import { FaqSection } from "@/components/sections/landing/Faq";
import { FinalCta } from "@/components/sections/landing/FinalCta";
import { landingFaq } from "@/lib/copy";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Testimonials />
      <PullQuote />
      <ValueRail />
      <VsComparison />
      <BrandsAgencies />
      <StackOrbit />
      <Templates />
      <FaqSection items={landingFaq} />
      <FinalCta />
    </>
  );
}
