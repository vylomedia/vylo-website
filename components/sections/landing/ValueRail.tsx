"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { helpFeatures } from "@/lib/copy";
import { FeatureMockup } from "./FeatureMockup";

export function ValueRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const activeIdx = useTransform(
    scrollYProgress,
    [0, 1],
    [0, helpFeatures.length - 0.001],
  );

  return (
    <section className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="The Platform"
          title="How VyloMedia helps you run paid media"
          lead="Five jobs your team used to spread across five tools. One agent that does them all — and brings receipts."
        />
      </Container>
      <Container size="wide" className="mt-16">
        <div ref={ref} className="relative grid lg:grid-cols-2 gap-12">
          {/* Left rail */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:max-h-[80vh] flex flex-col gap-6">
            {helpFeatures.map((f, i) => (
              <ActiveItem key={f.id} index={i} feature={f} active={activeIdx} />
            ))}
          </div>

          {/* Right scrolling mockups */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {helpFeatures.map((f, i) => (
              <div
                key={f.id}
                className="min-h-[60vh] flex items-center"
                id={f.id}
              >
                <FeatureMockup index={i} title={f.title} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ActiveItem({
  index,
  feature,
  active,
}: {
  index: number;
  feature: { title: string; body: string };
  active: import("framer-motion").MotionValue<number>;
}) {
  const opacity = useTransform(active, (v) => {
    const d = Math.abs(v - index);
    if (d < 0.5) return 1;
    if (d < 1.5) return 0.55;
    return 0.3;
  });
  const scale = useTransform(active, (v) => (Math.abs(v - index) < 0.5 ? 1 : 0.99));
  return (
    <motion.div style={{ opacity, scale }}>
      <h3 className="text-[clamp(22px,2.4vw,28px)] font-semibold text-text tracking-[-0.02em]">
        {feature.title}
      </h3>
      <p className="text-text-muted mt-2 text-[15px] leading-relaxed max-w-md">
        {feature.body}
      </p>
      <a
        href="/product"
        className="mt-3 inline-flex items-center gap-1.5 text-accent text-sm hover:gap-2 transition-all"
      >
        Learn more <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}
