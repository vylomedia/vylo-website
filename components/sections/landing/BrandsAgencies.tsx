"use client";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Building2,
    title: "For Brands",
    headline: "Everything your paid-media team needs",
    body:
      "Ship better creatives, make smarter campaign calls, and uncover what&apos;s actually driving growth.",
  },
  {
    icon: Briefcase,
    title: "For Agencies",
    headline: "Scale every client without scaling headcount",
    body:
      "Diagnose every account, auto-generate reports, and execute optimizations — without the platform-hopping.",
  },
];

export function BrandsAgencies() {
  return (
    <section className="bg-bg-soft section-pad">
      <Container>
        <SectionHeading title="For Brands. For Agencies. For Growth." />
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden border border-border bg-white p-8 hover:border-accent/40 hover:-translate-y-1 transition-all shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-30px_rgba(30,29,27,0.18)]"
            >
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <span className="h-12 w-12 rounded-2xl bg-accent/15 grid place-items-center mb-6">
                <it.icon className="h-5 w-5 text-accent" />
              </span>
              <p className="eyebrow tracking-[0.25em] text-text-faint">
                {it.title}
              </p>
              <h3 className="mt-3 text-[clamp(22px,2.4vw,30px)] font-semibold tracking-[-0.02em]">
                {it.headline}
              </h3>
              <p
                className="text-text-muted mt-3 leading-relaxed text-[15px] max-w-md"
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
              <Link
                href="/product"
                className="mt-6 inline-flex items-center gap-1.5 text-accent text-sm group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
