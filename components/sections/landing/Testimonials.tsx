"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/copy";

export function Testimonials() {
  return (
    <section className="section-pad">
      <Container size="wide">
        <SectionHeading title="Top 1% operators trust VyloMedia" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[0, 1, 2].map((col) => (
            <div key={col} className="flex flex-col gap-5">
              {testimonials
                .filter((_, i) => i % 3 === col)
                .map((t, i) => (
                  <motion.figure
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="glass rounded-3xl p-6 hover:border-accent/30 transition-colors"
                  >
                    <Quote className="h-5 w-5 text-accent mb-4 opacity-70" />
                    <blockquote
                      className="text-text text-[15px] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: t.quote }}
                    />
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="h-9 w-9 rounded-full bg-gradient-to-br from-accent/40 to-bg-deep grid place-items-center text-white font-semibold text-sm">
                        {t.name
                          .split(" ")
                          .map((s) => s[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div className="leading-tight">
                        <p className="text-text text-sm font-medium">{t.name}</p>
                        <p className="text-text-muted text-xs">{t.role}</p>
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
