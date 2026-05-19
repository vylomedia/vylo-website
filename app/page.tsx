import { Hero } from "@/components/sections/landing/Hero";
import { TrustStrip } from "@/components/sections/landing/TrustStrip";
import { WhatYouGet } from "@/components/sections/landing/WhatYouGet";
import { FaqSection } from "@/components/sections/landing/Faq";
import { FinalCta } from "@/components/sections/landing/FinalCta";
import { landingFaq } from "@/lib/copy";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatYouGet />
      <FaqSection items={landingFaq} />
      <FinalCta />
    </>
  );
}
