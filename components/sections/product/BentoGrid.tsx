"use client";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  Compass,
  FileBarChart,
  GitBranch,
  Wand2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    span: "md:col-span-2",
    icon: AlertTriangle,
    title: "Real-time anomaly detection",
    body: "Catch ROAS dips, frequency spikes, and creative burnout the moment they happen — and know the cause, not just the symptom.",
    art: <AnomalyArt />,
  },
  {
    icon: Wand2,
    title: "Creative DNA breakdown",
    body: "Tag every hook, claim, and format. See exactly which dimensions move performance.",
  },
  {
    icon: GitBranch,
    title: "Cross-channel attribution",
    body: "Stitched performance across Meta, Google, TikTok, and beyond. No more channel silos.",
  },
  {
    icon: Compass,
    title: "Competitor radar",
    body: "Continuously crawl every ad your category is running, ranked by traction.",
    art: <CompArt />,
  },
  {
    span: "md:col-span-2",
    icon: Bot,
    title: "Agent execution",
    body: "Pause, scale, and launch directly from chat — across Meta, Google, and TikTok. Diffs ship for your approval.",
    art: <AgentArt />,
  },
  {
    icon: FileBarChart,
    title: "Scheduled reporting",
    body: "Weekly and monthly digests, on autopilot. Delivered to Slack with commentary.",
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="section-pad">
      <Container size="wide">
        <SectionHeading
          eyebrow="Features"
          title="Built like a senior analyst. Faster than a junior one."
          lead="Every capability is grounded in your live ad data and shipped with a one-click action."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className={`${it.span ?? ""} relative glass rounded-3xl p-7 overflow-hidden hover:border-accent/40 transition-colors`}
            >
              <span className="h-11 w-11 rounded-2xl bg-accent/15 grid place-items-center mb-5">
                <it.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="text-text font-semibold text-[18px] tracking-[-0.01em]">
                {it.title}
              </h3>
              <p className="text-text-muted mt-2 text-[14px] leading-relaxed">
                {it.body}
              </p>
              {it.art && <div className="mt-5">{it.art}</div>}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AnomalyArt() {
  return (
    <div className="relative h-32 rounded-xl bg-surface-1 border border-border p-3 overflow-hidden">
      <div className="flex items-end gap-1 h-full">
        {Array.from({ length: 22 }).map((_, i) => {
          const isAlert = i === 14;
          const h = isAlert ? 95 : 25 + Math.cos(i / 1.8) * 25 + (i % 3) * 6;
          return (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm ${
                isAlert ? "bg-danger" : "bg-gradient-to-t from-accent/30 to-accent/90"
              }`}
            />
          );
        })}
      </div>
      <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[10px] text-danger bg-danger-soft border border-danger/40 rounded-full px-2 py-0.5">
        ALERT · CPM +38%
      </span>
    </div>
  );
}

function CompArt() {
  return (
    <div className="space-y-2 mt-2">
      {[
        { p: "Brevia", s: "+38%" },
        { p: "Halycon", s: "+24%" },
        { p: "Foundry", s: "+19%" },
      ].map((r) => (
        <div
          key={r.p}
          className="flex items-center justify-between rounded-lg bg-surface-1 border border-border px-3 py-2 text-xs"
        >
          <span className="text-text">{r.p}</span>
          <span className="text-accent">{r.s}</span>
        </div>
      ))}
    </div>
  );
}

function AgentArt() {
  return (
    <div className="rounded-xl bg-surface-1 border border-border p-4 text-sm">
      <p className="text-text-muted text-xs">
        <span className="text-accent">›</span> Pause ad sets under 1.2 ROAS for
        48h
      </p>
      <p className="text-text mt-2 inline-flex items-center gap-1.5 text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        Agent staged 7 changes · Approve to publish
      </p>
      <div className="mt-3 flex gap-2">
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-accent/15 text-accent">
          Approve all
        </span>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-surface-2 text-text-muted">
          Review diff
        </span>
      </div>
    </div>
  );
}
