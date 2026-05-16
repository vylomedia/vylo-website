"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  BarChart3,
  Compass,
  FileBarChart,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { useBookDemo } from "@/components/modals/BookDemoProvider";
import { platforms } from "@/lib/copy";

const prompts = [
  "Why did ROAS drop last week across Meta?",
  "Find my best-performing hooks of the last 30 days",
  "Pause anything under 1.2 ROAS for 48 hours",
  "Generate a weekly client report and send to Slack",
];

const chips = [
  { label: "Launch & manage ads", icon: Zap, pill: "NEW" as const },
  { label: "Audit account", icon: BarChart3 },
  { label: "Weekly report", icon: FileBarChart },
  { label: "Analyze creatives", icon: Wand2 },
  { label: "Competitor research", icon: Compass },
];

export function Hero() {
  const [pi, setPi] = useState(0);
  const [ti, setTi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPi((v) => (v + 1) % platforms.length), 2800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setTi((v) => (v + 1) % prompts.length), 3400);
    return () => clearInterval(t);
  }, []);

  const { open } = useBookDemo();

  return (
    <section className="relative overflow-hidden">
      <GlowBackdrop />
      <Container className="relative z-10 pt-20 sm:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Built for the next generation of paid-media teams
          </span>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[clamp(36px,5.4vw,68px)] font-semibold tracking-[-0.025em] leading-[1.04]">
            The AI co-pilot to win
            <span className="block mt-2 sm:mt-3 h-[1.15em] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={pi}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center gap-3"
                >
                  <span
                    className="h-9 w-9 sm:h-11 sm:w-11 rounded-full grid place-items-center"
                    style={{
                      background: platforms[pi].color + "22",
                      boxShadow: `0 0 0 1px ${platforms[pi].color}55 inset`,
                    }}
                    aria-hidden
                  >
                    <span
                      className="h-3 w-3 sm:h-4 sm:w-4 rounded-sm"
                      style={{ background: platforms[pi].color }}
                    />
                  </span>
                  <span style={{ color: platforms[pi].color }}>
                    {platforms[pi].name}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-7 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            VyloMedia plugs into your ad stack, finds what&apos;s working, and ships
            the next move for you — so your team stops reporting and starts winning.
          </p>
          <div className="mt-9 flex justify-center">
            <Button size="lg" onClick={() => open()}>
              Start Free Trial
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-3 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-1 rounded-2xl border border-border">
              <div className="flex-1 relative h-7">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ti}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 flex items-center text-text-muted text-[15px]"
                  >
                    {prompts[ti]}
                    <span className="ml-1 inline-block h-4 w-[2px] bg-accent animate-pulse" />
                  </motion.span>
                </AnimatePresence>
              </div>
              <button
                aria-label="Run"
                className="h-9 w-9 rounded-full bg-accent text-white grid place-items-center hover:bg-accent-2 transition"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 px-3 py-2.5">
              <div className="flex items-center gap-2 text-[13px] text-text-muted">
                <span className="h-5 w-5 rounded-full bg-accent/15 grid place-items-center">
                  <Sparkles className="h-3 w-3 text-accent" />
                </span>
                Connect your accounts to VyloMedia
              </div>
              <div className="text-[12px] text-text-faint">2-min setup</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {chips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-text-muted hover:text-text hover:border-accent/40 cursor-pointer transition-colors"
              >
                <c.icon className="h-3.5 w-3.5 text-accent" />
                {c.label}
                {c.pill && (
                  <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-accent text-white font-semibold">
                    {c.pill}
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
