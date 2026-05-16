"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const rows = [
  {
    eyebrow: "Diagnose",
    title: "Root-cause diagnosis in seconds",
    body: "When ROAS slips, VyloMedia traces it down to the campaign, ad set, creative — and the upstream signal (audience drift, frequency, competitor spend) that caused it.",
    bullets: ["Drill from blended metrics to ad-level cause", "Cross-channel correlation engine", "Cites the metric and window for every claim"],
    art: <DiagArt />,
  },
  {
    eyebrow: "Mine",
    title: "Creative pattern mining at scale",
    body: "Auto-tagged hooks, formats, claims, and pacing across every ad you and your competitors run. VyloMedia tells you which patterns are correlated with wins.",
    bullets: ["Hook-type taxonomy across 50+ dimensions", "Compares your wins to category wins", "Generate brief recommendations from patterns"],
    art: <MineArt />,
    reverse: true,
  },
  {
    eyebrow: "Act",
    title: "Autonomous agent, with guardrails",
    body: "Agent Mode can pause, scale, edit, and launch — but only inside the rules you set. Every action ships with a diff and your approval gate.",
    bullets: ["Rule-based autopilot (e.g., pause < 1.2 ROAS 48h)", "Diff-based approval for every change", "Audit trail and undo on every action"],
    art: <ActArt />,
  },
];

export function CapabilityRows() {
  return (
    <section className="section-pad">
      <Container>
        <div className="space-y-24 sm:space-y-32">
          {rows.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                r.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="eyebrow tracking-[0.22em] text-accent-2">
                  {r.eyebrow}
                </p>
                <h3 className="mt-3 text-[clamp(24px,2.8vw,34px)] font-semibold tracking-[-0.02em] leading-tight">
                  {r.title}
                </h3>
                <p className="text-text-muted mt-4 text-[15px] leading-relaxed">
                  {r.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-text text-[14px]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>{r.art}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DiagArt() {
  return (
    <div className="glass-strong rounded-3xl p-5">
      <p className="eyebrow">Why ROAS dropped 18%</p>
      <div className="mt-4 space-y-2 text-sm">
        {[
          { l: "Meta CPM", v: "+22%", bad: true },
          { l: "Search conv rate", v: "-12%", bad: true },
          { l: "Competitor spend", v: "+31%", bad: true },
          { l: "Branded search vol", v: "+9%", bad: false },
        ].map((r) => (
          <div
            key={r.l}
            className="flex items-center justify-between rounded-lg bg-surface-1 border border-border px-3 py-2.5"
          >
            <span className="text-text-muted">{r.l}</span>
            <span className={r.bad ? "text-danger" : "text-accent"}>{r.v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-accent/10 border border-accent/30 p-3 text-xs text-text">
        Likely cause: <b>competitor spend on branded keywords</b>. Shift $1.2k
        from prospecting → branded defense for 7 days to test.
      </div>
    </div>
  );
}

function MineArt() {
  return (
    <div className="glass-strong rounded-3xl p-5">
      <div className="grid grid-cols-2 gap-3">
        {[
          { k: "Pattern interrupt", v: 86 },
          { k: "Founder-led", v: 64 },
          { k: "Vertical 9:16", v: 72 },
          { k: "Sub-2s cuts", v: 58 },
          { k: "Claim stack", v: 48 },
          { k: "UGC tone", v: 41 },
        ].map((b) => (
          <div
            key={b.k}
            className="rounded-xl bg-surface-1 border border-border p-3"
          >
            <p className="text-text-muted text-[11px]">{b.k}</p>
            <p className="text-text text-sm mt-1">{b.v}% of winners</p>
            <div className="mt-2 h-1.5 bg-surface-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent"
                style={{ width: `${b.v}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActArt() {
  return (
    <div className="glass-strong rounded-3xl p-5">
      <p className="eyebrow">Pending actions · 7</p>
      <div className="mt-4 space-y-2 text-sm">
        {[
          "Pause Meta · Cold AU 7d ROAS 0.8",
          "Scale +20% TikTok Lookalike 2%",
          "Launch UGC variant on Spring set",
          "Cap freq < 3.5 on Retargeting CA",
        ].map((t) => (
          <div
            key={t}
            className="flex items-center justify-between rounded-lg bg-surface-1 border border-border px-3 py-2.5"
          >
            <span className="text-text-muted truncate">{t}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0 ml-2">
              Approve
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
