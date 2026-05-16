"use client";
import { CheckCircle2, Users, FileBarChart, Search, Sparkles, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";
import { stack } from "@/lib/copy";

const ncFeatures = [
  { title: "Root-cause performance analysis", body: "Diagnose what changed, where, and why — in seconds", icon: Search },
  { title: "Creative analysis & winning patterns", body: "Break down hooks, angles, and formats across your ads", icon: Wand2 },
  { title: "Competitor ad research", body: "See every ad rivals run, with the patterns that drive spend", icon: Sparkles },
  { title: "Cross-platform attribution", body: "One ranked feed of moves across Meta, Google, and TikTok", icon: FileBarChart },
  { title: "Campaign execution", body: "Pause, scale, and launch directly from chat", icon: CheckCircle2 },
];

const stackIcons = [Users, Users, FileBarChart, Search, Wand2];

export function VsComparison() {
  const { open } = useBookDemo();
  return (
    <section className="bg-bg-deep section-pad relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="One platform"
          title="One AI co-pilot. Not five tools and two new hires."
          lead="Everything your paid-media team needs — in a single workspace."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          {/* Current setup */}
          <div className="glass-strong rounded-3xl p-7 relative">
            <p className="eyebrow tracking-[0.25em] text-text-faint">YOUR CURRENT SETUP</p>
            <div className="mt-6 space-y-3">
              {stack.map((s, i) => {
                const Icon = stackIcons[i] ?? Users;
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 rounded-2xl bg-surface-1 border border-border px-4 py-3"
                  >
                    <span className="h-9 w-9 rounded-xl bg-surface-2 border border-border grid place-items-center">
                      <Icon className="h-4 w-4 text-text-muted" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-text text-sm font-medium">{s.label}</p>
                      <p className="text-text-faint text-xs">{s.sub}</p>
                    </div>
                    <span className="text-xs font-medium text-danger bg-danger-soft border border-danger/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                      -{s.cost}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 pt-6 border-t border-border flex items-end justify-between">
              <p className="eyebrow tracking-[0.25em] text-text-faint">TOTAL</p>
              <p className="text-3xl font-semibold text-text">
                $18,950
                <span className="text-text-muted text-base font-normal">/month</span>
              </p>
            </div>
          </div>

          {/* VS pill */}
          <div className="grid place-items-center">
            <span className="h-14 w-14 lg:h-16 lg:w-16 rounded-full glass-strong grid place-items-center text-text font-semibold tracking-[0.1em]">
              VS
            </span>
          </div>

          {/* VyloMedia */}
          <div className="rounded-3xl p-7 relative border border-accent/50 bg-gradient-to-br from-[#2a2a52] via-[#1f1e3f] to-[#13131f]">
            <p className="eyebrow tracking-[0.25em] text-accent-2">VYLOMEDIA</p>
            <div className="mt-6 space-y-3">
              {ncFeatures.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl bg-surface-1 border border-border px-4 py-3"
                >
                  <span className="h-9 w-9 rounded-xl bg-accent/15 grid place-items-center shrink-0">
                    <f.icon className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <p className="text-text text-sm font-medium">{f.title}</p>
                    <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-border flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow tracking-[0.25em] text-text-faint">STARTING AT</p>
                <p className="text-3xl font-semibold text-text mt-1">
                  $99<span className="text-text-muted text-base font-normal">/month</span>
                </p>
                <p className="text-text-muted text-xs mt-1">
                  Free 7-day trial · No card
                </p>
              </div>
              <Button onClick={() => open()}>Start free trial</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
