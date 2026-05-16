"use client";
import { motion } from "framer-motion";
import { ArrowRight, Cable, ScanSearch, GitFork, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: Cable, title: "Connect", body: "OAuth into every ad platform, analytics tool, and warehouse — in under two minutes." },
  { icon: ScanSearch, title: "Analyze", body: "VyloMedia reads your live data, surfaces anomalies, and ranks the moves that matter." },
  { icon: GitFork, title: "Decide", body: "Every recommendation comes with a citation. Approve, edit, or shelve in one tap." },
  { icon: Rocket, title: "Execute", body: "Push edits, budgets, and new campaigns straight to Meta, Google, or TikTok." },
];

export function Workflow() {
  return (
    <section className="bg-bg-soft section-pad">
      <Container>
        <SectionHeading
          eyebrow="The flow"
          title="From connection to launch — in one continuous loop."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative glass rounded-3xl p-6 hover:border-accent/40 transition-colors"
            >
              <span className="absolute top-5 right-5 text-text-faint text-xs font-mono">
                0{i + 1}
              </span>
              <span className="h-11 w-11 rounded-2xl bg-accent/15 grid place-items-center">
                <s.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-5 text-text font-semibold text-lg">{s.title}</h3>
              <p className="text-text-muted text-[14px] mt-2 leading-relaxed">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-faint" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
