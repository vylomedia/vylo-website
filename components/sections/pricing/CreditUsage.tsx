"use client";
import { motion } from "framer-motion";
import {
  Bot,
  Compass,
  FileBarChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tiles = [
  {
    icon: FileBarChart,
    title: "Performance Reports",
    body: "Pull full performance digests across channels, with anomaly call-outs and next-move suggestions.",
    cost: "3–6 credits",
  },
  {
    icon: Sparkles,
    title: "Analysis & Insights",
    body: "Diagnose performance shifts, isolate causes by channel, ad set, and creative.",
    cost: "5–10 credits",
  },
  {
    icon: Wand2,
    title: "Creative Breakdowns",
    body: "Tag hooks, claims, formats, and pacing across your top 50 ads — surface the patterns that work.",
    cost: "8–12 credits",
  },
  {
    icon: Compass,
    title: "Competitor Research",
    body: "Continuous radar over your category, ranked by spend trajectory and angle freshness.",
    cost: "10–15 credits",
  },
  {
    icon: Bot,
    title: "Agent Mode",
    body: "Multi-step actions: launch a campaign, build creative briefs, ship updates with approval diffs.",
    cost: "12–20 credits",
  },
];

export function CreditUsage() {
  return (
    <section className="section-pad bg-bg-soft">
      <Container>
        <SectionHeading
          eyebrow="Credit usage"
          title="What a credit gets you, by task complexity."
          lead="Every action shows its credit cost before you run it. No surprise bills."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="h-11 w-11 rounded-2xl bg-accent/15 grid place-items-center">
                  <t.icon className="h-5 w-5 text-accent" />
                </span>
                <span className="text-[11px] px-2 py-1 rounded-full bg-accent/15 text-accent font-medium">
                  {t.cost}
                </span>
              </div>
              <h3 className="text-text font-semibold">{t.title}</h3>
              <p className="text-text-muted text-[13.5px] mt-2 leading-relaxed">
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
