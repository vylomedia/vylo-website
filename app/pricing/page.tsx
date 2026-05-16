"use client";
import { useState } from "react";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PlanGrid } from "@/components/sections/pricing/PlanGrid";
import { CreditUsage } from "@/components/sections/pricing/CreditUsage";
import { TrustStrip } from "@/components/sections/landing/TrustStrip";
import { FaqSection } from "@/components/sections/landing/Faq";
import { FinalCta } from "@/components/sections/landing/FinalCta";
import { pricingFaq } from "@/lib/copy";
import type { Billing } from "@/lib/pricing";

export default function PricingPage() {
  const [spend, setSpend] = useState(30_000);
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <>
      <PricingHero
        spend={spend}
        setSpend={setSpend}
        billing={billing}
        setBilling={setBilling}
      />
      <PlanGrid spend={spend} billing={billing} />
      <TrustStrip />
      <CreditUsage />
      <FaqSection
        items={pricingFaq}
        title="Pricing FAQ"
        lead="Credits, plan limits, free trials — answered."
      />
      <FinalCta
        title="Ready to give your team an unfair edge?"
        lead="Start a 7-day free trial. 200 credits included. No card."
      />
    </>
  );
}
