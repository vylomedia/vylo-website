"use client";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";

export function ProductHero() {
  const { open } = useBookDemo();
  return (
    <section className="relative overflow-hidden">
      <GlowBackdrop />
      <Container className="relative z-10 pt-20 sm:pt-24 pb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-text-muted mb-7"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          The VyloMedia Platform
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[clamp(34px,4.8vw,60px)] font-semibold tracking-[-0.025em] leading-[1.05] max-w-3xl mx-auto"
        >
          The full anatomy of your AI{" "}
          <span className="text-accent">paid-media analyst</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-muted mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Every signal, every channel, every creative — synthesised into the
          next move. VyloMedia reads, decides, and executes alongside your team.
        </motion.p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <Button size="lg" onClick={() => open()}>
            Start free trial
          </Button>
          <Button size="lg" variant="outline" onClick={() => open()}>
            Book a demo
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <DashboardMock />
        </motion.div>
      </Container>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="glass-strong rounded-3xl p-3 shadow-2xl">
      <div className="rounded-2xl bg-bg-deep border border-border p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <span className="eyebrow text-text-faint">VyloMedia · Workspace</span>
        </div>
        <div className="grid lg:grid-cols-[200px_1fr] gap-5">
          <div className="hidden lg:flex flex-col gap-1.5">
            {["Overview", "Performance", "Creatives", "Competitors", "Reports", "Agent"].map((n, i) => (
              <div
                key={n}
                className={`rounded-lg px-3 py-2 text-sm ${i === 1 ? "bg-accent/15 text-accent" : "text-text-muted hover:text-text"}`}
              >
                {n}
              </div>
            ))}
          </div>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { k: "Spend", v: "$184,210", d: "+8%", up: true },
                { k: "ROAS", v: "2.84x", d: "+0.41", up: true },
                { k: "CAC", v: "$42.10", d: "-12%", up: true },
                { k: "CTR", v: "1.84%", d: "+0.2", up: true },
              ].map((m) => (
                <div key={m.k} className="rounded-xl bg-surface-1 border border-border p-3">
                  <p className="text-text-faint text-xs">{m.k}</p>
                  <p className="text-text text-xl font-semibold mt-1">{m.v}</p>
                  <p className="text-accent text-[11px] mt-0.5 inline-flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> {m.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-surface-1 border border-border p-4 h-44 flex items-end gap-1.5">
              {Array.from({ length: 32 }).map((_, i) => {
                const h = 25 + Math.sin(i / 2.4) * 22 + (i % 5) * 4;
                return (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent/90"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
