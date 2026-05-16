"use client";
import { Container } from "@/components/ui/Container";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { formatSpend, type Billing } from "@/lib/pricing";

export function PricingHero({
  spend,
  setSpend,
  billing,
  setBilling,
}: {
  spend: number;
  setSpend: (n: number) => void;
  billing: Billing;
  setBilling: (b: Billing) => void;
}) {
  const min = 5000;
  const max = 500000;
  const pct = Math.min(100, Math.max(0, ((spend - min) / (max - min)) * 100));
  return (
    <section className="relative overflow-hidden">
      <GlowBackdrop />
      <Container className="relative z-10 pt-20 sm:pt-24 pb-12 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-text-muted mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Limited offer · Early-access pricing through Q3
        </span>
        <h1 className="text-[clamp(34px,4.8vw,58px)] font-semibold tracking-[-0.025em] leading-[1.05]">
          Flexible plans for every team.
        </h1>
        <p className="text-text-muted mt-5 text-lg max-w-2xl mx-auto">
          Pick the plan that scales with your ad spend. Pricing flexes — credits don&apos;t.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-[13px] text-text-muted mb-2">
            <span>Monthly ad spend</span>
            <span className="text-accent font-semibold">
              {formatSpend(spend)}
            </span>
          </div>
          <div className="relative h-2.5 rounded-full bg-surface-2 border border-border">
            <div
              className="absolute h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
              style={{ width: `${pct}%` }}
            />
            <input
              type="range"
              min={min}
              max={max}
              step={1000}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Monthly ad spend"
            />
            <span
              className="absolute -top-1.5 h-5 w-5 rounded-full bg-white shadow-md border border-accent transition-[left]"
              style={{ left: `calc(${pct}% - 10px)` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-text-faint mt-2">
            <span>$5k</span>
            <span>$500k+</span>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center p-1 rounded-full glass">
          {(["monthly", "yearly"] as Billing[]).map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className={`relative px-5 py-2 rounded-full text-sm transition-colors ${
                billing === b
                  ? "bg-accent text-white font-semibold"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {b === "monthly" ? "Monthly" : "Yearly"}
              {b === "yearly" && billing !== b && (
                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent">
                  Save 30%
                </span>
              )}
              {b === "yearly" && billing === b && (
                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-bg-deep text-accent-2">
                  -30%
                </span>
              )}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
