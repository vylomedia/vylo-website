"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";

const offers = [
  {
    title: "Run your paid media end-to-end",
    body:
      "Strategy, account structure, campaign builds, audience targeting, bidding, daily optimization, and scaling decisions across Meta, Google, TikTok, and LinkedIn.",
    hire: "What you'd hire otherwise: a senior media buyer at $8K-$12K/month.",
    image: "/agency/running-channels.svg",
    alt: "Paid-media optimization board showing Meta, Google, TikTok, and LinkedIn campaign actions.",
  },
  {
    title: "Diagnose what's actually happening",
    body:
      "When CAC spikes or ROAS drops, you get a root-cause answer - not \"let's monitor it.\" The AI co-pilot correlates signals across your account, your competitors, and US SMB benchmarks to surface the real driver in minutes.",
    hire: "What you'd hire otherwise: a performance analyst at $10K+/month.",
    image: "/agency/cac-diagnosis.svg",
    alt: "CAC diagnosis dashboard showing a spike and contributing factors.",
  },
  {
    title: "Decode your creative",
    body:
      "Every ad in your account gets tagged across hook, format, pacing, claim, and angle. The AI finds the patterns in your winners. I translate those patterns into the next creative brief.",
    hire: "What you'd hire otherwise: a creative strategist + tools like Motion at ~$8.5K/month.",
    image: "/agency/creative-dna.svg",
    alt: "Creative DNA dashboard showing winning ad patterns and creative thumbnails.",
  },
  {
    title: "Track competitors continuously",
    body:
      "What ads your competitors are scaling, which angles are gaining traction in your category, where you're losing market share - surfaced weekly, not when you remember to check.",
    hire: "What you'd hire otherwise: a research analyst + tools like Foreplay at ~$3K/month.",
    image: "/agency/competitor-radar.svg",
    alt: "Competitor radar dashboard showing category map and top angles this week.",
  },
  {
    title: "Reporting you'll actually read",
    body:
      "Every Monday: a written report in plain English. What changed last week, what I did about it, what's planned next, where your money went. AI drafts the numbers. I write the narrative. You read it in 5 minutes.",
    hire: "What you'd hire otherwise: a reporting analyst + tools like Triple Whale at ~$4K/month.",
    image: "/agency/weekly-report.svg",
    alt: "Weekly performance report visual with verified metrics and a Slack notification.",
  },
];

export function WhatYouGet() {
  const { open } = useBookDemo();

  return (
    <section id="included" className="scroll-mt-20 bg-bg-soft py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">What you actually get</p>
            <h2 className="text-[clamp(32px,4.2vw,56px)] font-semibold tracking-[-0.02em] leading-[1.05]">
              Five jobs. One senior operator. AI doing the heavy lifting.
            </h2>
          </div>
          <div>
            <p className="text-text-muted text-lg leading-relaxed">
              The work an agency would split across a strategist, analyst,
              media buyer, creative researcher, and reporting specialist -
              delivered by one operator who has run Fortune 500 and US SMB
              accounts, with a custom AI co-pilot handling the parts that do
              not need a human.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {["5 roles covered", "150 brands run", "1 senior lead"].map(
                (stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-border bg-white px-3 py-3 text-sm font-semibold text-text"
                  >
                    {stat}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
              className="group grid gap-0 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)] transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/12 text-accent font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-[clamp(24px,2.6vw,34px)] font-semibold tracking-[-0.02em] leading-tight">
                  {offer.title}
                </h3>
                <p className="mt-4 text-text-muted leading-relaxed">
                  {offer.body}
                </p>
                <p className="mt-6 inline-flex items-start gap-2 rounded-2xl bg-bg-soft px-4 py-3 text-sm font-medium text-text">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {offer.hire}
                </p>
              </div>
              <div className="overflow-hidden bg-bg-base border-t lg:border-t-0 lg:border-l border-border p-3 sm:p-4">
                <motion.div
                  initial={{ scale: 1.03 }}
                  whileInView={{ scale: 1.08 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full min-h-[320px] w-full rounded-2xl bg-white"
                >
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    width={800}
                    height={500}
                    className="h-full min-h-[320px] w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            onClick={() => open()}
            iconRight={<ArrowRight className="h-4 w-4" />}
          >
            Book a fit call
          </Button>
        </div>
      </Container>
    </section>
  );
}
