"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useBookDemo } from "@/components/modals/BookDemoProvider";
import { getPlans, type Billing } from "@/lib/pricing";

export function PlanGrid({
  spend,
  billing,
}: {
  spend: number;
  billing: Billing;
}) {
  const plans = getPlans(spend, billing);
  const { open } = useBookDemo();
  return (
    <section className="pb-24">
      <Container size="wide">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => {
            const isPro = p.highlight;
            return (
              <div
                key={p.key}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  isPro
                    ? "bg-white border-2 border-accent shadow-[0_30px_80px_-20px_rgba(92,95,255,0.35)]"
                    : "glass"
                }`}
              >
                {isPro && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full bg-accent text-white">
                    Most popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-text text-xl font-semibold">{p.name}</h3>
                  <p className="text-text-muted text-sm mt-1">{p.audience}</p>
                </div>
                <div className="mb-6">
                  <p className="text-text-faint line-through text-sm">
                    ${p.originalMonthly}
                  </p>
                  <p className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-text text-5xl font-semibold tracking-tight">
                      ${p.monthly}
                    </span>
                    <span className="text-text-muted text-sm">/month</span>
                  </p>
                  {billing === "yearly" && (
                    <p className="text-accent text-xs mt-1">
                      Billed yearly · 30% off
                    </p>
                  )}
                </div>
                <Button
                  onClick={() => open(`Start ${p.name} 7-day free trial`)}
                  variant={isPro ? "primary" : "ghost"}
                  size="lg"
                  className="w-full"
                >
                  Start 7-day free trial
                </Button>
                <p className="text-text-faint text-[11px] text-center mt-2">
                  No credit card required
                </p>
                <ul className="mt-7 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f.label}
                      className="flex items-start gap-2.5 text-[14px]"
                    >
                      <span className="h-5 w-5 rounded-full bg-accent/15 grid place-items-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      <span className="text-text-muted">
                        {f.label}
                        {f.pill && (
                          <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-surface-3 text-text-faint border border-border">
                            {f.pill}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
