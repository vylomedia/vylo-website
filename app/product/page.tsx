import { ProductHero } from "@/components/sections/product/ProductHero";
import { BentoGrid } from "@/components/sections/product/BentoGrid";
import { Workflow } from "@/components/sections/product/Workflow";
import { CapabilityRows } from "@/components/sections/product/CapabilityRows";
import { DashboardShowcase } from "@/components/sections/product/DashboardShowcase";
import { StackOrbit } from "@/components/sections/landing/StackOrbit";
import { FaqSection } from "@/components/sections/landing/Faq";
import { FinalCta } from "@/components/sections/landing/FinalCta";
import { productFaq } from "@/lib/copy";

export const metadata = {
  title: "Product — VyloMedia",
  description:
    "The full anatomy of your AI paid-media analyst — every signal, every channel, synthesised into the next move.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <BentoGrid />
      <Workflow />
      <CapabilityRows />
      <DashboardShowcase />
      <StackOrbit />
      <FaqSection
        items={productFaq}
        title="Product FAQ"
        lead="The technical questions teams ask before rolling out VyloMedia."
      />
      <FinalCta
        title="See it on your stack."
        lead="A 25-minute walkthrough on your real ad accounts. No slides — only your data."
      />
    </>
  );
}
