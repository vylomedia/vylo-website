"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";

export function FinalCta({
  title = "Senior paid-media attention, without the full-time hire.",
  lead = "Bring the operating rhythm, creative judgment, and reporting clarity of a top-tier growth team into your SMB - backed by AI that handles the heavy lifting.",
}: {
  title?: string;
  lead?: string;
}) {
  const { open } = useBookDemo();
  const scrollToIncluded = () => {
    document.getElementById("included")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(92,95,255,0.35), rgba(92,95,255,0) 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(32px,4.6vw,56px)] font-semibold tracking-[-0.02em] leading-[1.05]"
        >
          {title}
        </motion.h2>
        <p className="text-text-muted text-lg mt-5 max-w-2xl mx-auto">{lead}</p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <Button size="lg" onClick={() => open()}>
            Book a fit call
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToIncluded}>
            See what&apos;s included
          </Button>
        </div>
      </Container>
    </section>
  );
}
