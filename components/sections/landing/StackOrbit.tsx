"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";
import { integrations } from "@/lib/copy";

export function StackOrbit() {
  const { open } = useBookDemo();
  return (
    <section
      id="integrations"
      className="section-pad relative overflow-hidden bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/50 via-bg-base to-bg-base" />
      <Container className="relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <h3 className="text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[-0.02em] leading-tight">
              Your entire marketing stack — in one place.
            </h3>
            <p className="text-text-muted mt-4 text-[15px] max-w-md leading-relaxed">
              Native integrations with every ad platform, analytics tool, and
              warehouse your team already uses. Setup is two minutes and one
              OAuth click.
            </p>
            <Button className="mt-7" size="lg" onClick={() => open()}>
              Start Free Trial
            </Button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                className="aspect-square rounded-2xl glass flex flex-col items-center justify-center gap-1.5 hover:border-accent/40 hover:bg-surface-2 transition group"
              >
                <span
                  className="h-7 w-7 rounded-lg grid place-items-center text-[11px] font-semibold text-bg-deep"
                  style={{
                    background: `hsl(${(i * 27) % 360} 70% 70%)`,
                  }}
                >
                  {name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="text-[10.5px] text-text-muted text-center leading-tight px-1 group-hover:text-text transition">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
