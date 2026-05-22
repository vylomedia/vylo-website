import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MinusCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Compare - VyloMedia",
  description:
    "A concise comparison of VyloMedia against hiring, traditional agency retainers, dashboards, AI tools, and freelancers.",
};

const comparisons = [
  {
    title: "Hiring a senior media buyer",
    alternative: "$8K-$12K/month before tools, management, and hiring risk.",
    vylo:
      "One senior operator plus AI-assisted analysis, creative reads, and weekly reporting without the full-time hiring bet.",
  },
  {
    title: "Traditional agency retainer",
    alternative: "More handoffs, more meetings, and strategy split across people who may not live in the account.",
    vylo:
      "A boutique operating model: one accountable lead who knows the account and ships the next move.",
  },
  {
    title: "Dashboards and reporting tools",
    alternative: "You still need someone to interpret the chart, diagnose the cause, and decide what to do.",
    vylo:
      "AI drafts the numbers and flags patterns; the senior operator turns them into decisions and action.",
  },
  {
    title: "Generic AI tools",
    alternative: "Useful for brainstorming, but disconnected from account context and category pressure.",
    vylo:
      "Built around paid-media workflows, US SMB data, competitor signals, and the operating judgment behind the recommendation.",
  },
  {
    title: "Freelance media buyer",
    alternative: "Can execute campaigns, but often leaves gaps in analytics, creative strategy, and reporting.",
    vylo:
      "Covers campaign execution, diagnosis, creative analysis, competitor tracking, and client-ready reporting in one rhythm.",
  },
];

export default function ComparePage() {
  return (
    <section className="bg-bg-soft section-pad">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Compare</p>
            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.025em] leading-[1.04]">
              Not another dashboard. Not another bloated retainer.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-text-muted">
            VyloMedia sits between a senior hire, a specialist agency, and an
            AI analyst. You get one accountable operator and the software layer
            that removes the low-leverage work.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)]">
          {comparisons.map((item) => (
            <div
              key={item.title}
              className="grid gap-5 border-b border-border p-6 last:border-b-0 lg:grid-cols-[0.85fr_1fr_1fr] lg:p-8"
            >
              <h2 className="text-xl font-semibold tracking-[-0.01em]">
                {item.title}
              </h2>
              <p className="flex gap-3 text-[15px] leading-relaxed text-text-muted">
                <MinusCircle className="mt-1 h-4 w-4 shrink-0 text-danger" />
                {item.alternative}
              </p>
              <p className="flex gap-3 text-[15px] leading-relaxed text-text">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {item.vylo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-border bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg font-semibold tracking-[-0.01em]">
            If your paid-media problem is partly execution and partly judgment,
            this is the lane VyloMedia was built for.
          </p>
          <Link
            href="/#included"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-2"
          >
            See services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
