import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Case Studies - VyloMedia",
  description:
    "Mock case studies showing how VyloMedia supports US SMB paid-media growth with senior attention and AI-assisted analysis.",
};

const caseStudies = [
  {
    company: "Vision Pitch",
    category: "B2B sales enablement",
    summary:
      "Rebuilt paid search around high-intent demo terms, cleaned up LinkedIn audience waste, and turned reporting into a weekly operator memo.",
    wins: ["32% lower demo CAC", "18% higher qualified pipeline", "4 weeks to stable reporting rhythm"],
  },
  {
    company: "Stoggles",
    category: "Protective eyewear",
    summary:
      "Separated prospecting and retargeting economics, isolated creator hooks that drove assisted revenue, and tightened Google brand defense.",
    wins: ["24% ROAS lift", "41% lower wasted search spend", "9 winning creator briefs shipped"],
  },
  {
    company: "Rise & Puff",
    category: "Better-for-you food",
    summary:
      "Diagnosed a CAC spike from auction pressure and creative fatigue, then moved budget toward two faster-moving founder-led concepts.",
    wins: ["19% CAC reduction", "3 new creative angles validated", "2.1x Meta spend scale"],
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="bg-bg-soft section-pad">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Case studies</p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.025em] leading-[1.04]">
            Senior paid-media work for US SMBs with real constraints.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            A few representative examples of the kind of operating work
            VyloMedia brings into smaller teams: cleaner accounts, sharper
            creative reads, better weekly decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="rounded-3xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)]"
            >
              <p className="text-sm font-medium text-accent">{study.category}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">
                {study.company}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
                {study.summary}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {study.wins.map((win, index) => {
                  const Icon = index === 1 ? TrendingDown : TrendingUp;
                  return (
                    <li
                      key={win}
                      className="flex items-center gap-3 rounded-2xl bg-bg-soft px-4 py-3 text-sm font-semibold text-text"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {win}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-bg-deep p-8 text-white">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-text-faint">Want the same operating layer?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">
                Bring us your current ad account and growth target.
              </h2>
            </div>
            <Link
              href="/#included"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-2"
            >
              See what is included <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
