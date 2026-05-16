"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PullQuote() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[clamp(20px,2.2vw,26px)] leading-snug tracking-[-0.01em]"
        >
          <span className="text-text">
            The best marketers win by spotting what others miss — angles
            competitors overlook, fatigue signals before they show up in ROAS,
            patterns hiding in plain sight.
          </span>{" "}
          <span className="text-text-muted">
            VyloMedia gives your team that edge, on every account, every day.
          </span>
        </motion.p>
      </Container>
    </section>
  );
}
