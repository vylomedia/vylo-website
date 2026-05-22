"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  BarChart3,
  Compass,
  FileBarChart,
  LineChart,
  Search,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { useBookDemo } from "@/components/modals/BookDemoProvider";

const prompts = [
  "What's the fastest path to $50K MRR for a US wellness brand?",
  "Pause anything under 1.2 ROAS for 48 hours",
  "Where are we losing market share to competitors this month?",
  "What hooks are working for DTC food brands in Q1?",
  "Diagnose the CAC spike from last Tuesday",
];

const roles = [
  "Head of Paid",
  "Growth Lead",
  "Performance Marketer",
  "Media Buyer",
];

const chips = [
  { label: "Market share analysis", icon: LineChart },
  { label: "Audit account", icon: BarChart3 },
  { label: "Diagnose performance drops", icon: Sparkles },
  { label: "Analyze creatives", icon: Wand2 },
  { label: "Competitor research", icon: Search },
  { label: "Weekly client report", icon: FileBarChart },
];

export function Hero() {
  const [ti, setTi] = useState(0);
  const [ri, setRi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTi((v) => (v + 1) % prompts.length), 3400);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setRi((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  const { open } = useBookDemo();
  const scrollToIncluded = () => {
    document.getElementById("included")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <GlowBackdrop />
      <Container className="relative z-10 pt-12 sm:pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Boutique Paid Media Agency, for US SMBs who deserve senior attention
          </span>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[clamp(34px,4.8vw,60px)] font-semibold tracking-[-0.025em] leading-[1.04]">
            Your fractional
            <span className="relative mt-1 grid h-[1.08em] place-items-center text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[ri]}
                  initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="col-start-1 row-start-1"
                >
                  {roles[ri]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block mt-2">
              for a fraction of what a bad hire costs.
            </span>
          </h1>
          <p className="mt-5 text-text-muted text-[17px] leading-relaxed max-w-3xl mx-auto">
            We&apos;ve run paid media for 150 Brands including McDonald&apos;s,
            PepsiCo, Loreal, Diageo, and HelloFresh for the last 10 years. Now
            we bring that caliber of work to SMBs at a time - backed by AI that
            handles the heavy lifting on data, monitoring, and reporting.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" onClick={() => open()}>
              Book a fit call
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToIncluded}>
              See what&apos;s included
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-9 max-w-2xl mx-auto"
        >
          <div className="mb-4 text-center">
            <h2 className="text-[clamp(22px,2.4vw,30px)] font-semibold tracking-[-0.02em]">
              We built our own AI co-pilot.
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Trained on what actually matters to US SMBs.
            </p>
          </div>
          <div className="glass-strong rounded-2xl p-3 shadow-2xl">
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
                <span>
                  &#9889; Trained on US SMB market data &middot; Built and tuned
                  by us
                </span>
              </div>
              <Compass className="h-4 w-4 text-text-faint shrink-0" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {chips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-text-muted hover:text-text hover:border-accent/40 cursor-pointer transition-colors"
              >
                <c.icon className="h-3.5 w-3.5 text-accent" />
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
