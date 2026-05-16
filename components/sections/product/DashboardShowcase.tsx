"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const chips = [
  "Live spend tracker",
  "Anomaly alerts",
  "Creative DNA",
  "Slack delivery",
  "Cohort LTV",
  "Branded search guard",
  "Forecast & pacing",
  "Audit trail",
];

export function DashboardShowcase() {
  return (
    <section id="agent" className="section-pad bg-bg-soft">
      <Container>
        <SectionHeading
          eyebrow="The workspace"
          title="A workspace built for one job: better ad decisions."
          lead="Every panel is grounded in your live data — no static dashboards, no stale screenshots."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative max-w-5xl mx-auto"
        >
          <div
            className="absolute -inset-x-10 -top-10 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(92,95,255,0.3), rgba(92,95,255,0) 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative glass-strong rounded-3xl p-3">
            <div className="rounded-2xl bg-bg-base/40 border border-border p-6">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-8 rounded-xl bg-surface-1 border border-border p-4 h-56 flex items-end gap-1.5">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = 30 + Math.sin(i / 2.6) * 25 + (i % 4) * 4;
                    return (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent/90"
                      />
                    );
                  })}
                </div>
                <div className="col-span-12 md:col-span-4 space-y-3">
                  {[
                    { k: "Daily spend", v: "$6,142" },
                    { k: "Live anomalies", v: "3" },
                    { k: "Agent actions today", v: "11" },
                  ].map((m) => (
                    <div
                      key={m.k}
                      className="rounded-xl bg-surface-1 border border-border p-3"
                    >
                      <p className="text-text-faint text-xs">{m.k}</p>
                      <p className="text-text text-2xl font-semibold mt-1">
                        {m.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="text-[12px] px-2.5 py-1 rounded-full bg-surface-2 border border-border text-text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
