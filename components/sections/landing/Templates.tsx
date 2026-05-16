import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { templates } from "@/lib/copy";

function TemplateCard({ t }: { t: { title: string; body: string } }) {
  return (
    <div className="w-[300px] shrink-0 glass rounded-2xl p-5 hover:border-accent/40 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <span className="h-9 w-9 rounded-xl bg-accent/15 grid place-items-center">
          <FileText className="h-4 w-4 text-accent" />
        </span>
        <ArrowRight className="h-4 w-4 text-text-faint" />
      </div>
      <h4 className="text-text font-semibold text-[15px] leading-snug">
        {t.title}
      </h4>
      <p
        className="text-text-muted text-[13px] mt-2 leading-relaxed line-clamp-3"
        dangerouslySetInnerHTML={{ __html: t.body }}
      />
    </div>
  );
}

export function Templates() {
  const row1 = templates.slice(0, 5);
  const row2 = templates.slice(4, 9);
  const row3 = templates.slice(7, 12);

  return (
    <section id="templates" className="section-pad">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow="Recipes"
            title="Built by the top 1% of paid-media operators"
            lead="Battle-tested templates you can remix, reuse, and ship — straight from chat."
          />
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-accent text-sm hover:gap-2.5 transition-all"
          >
            View all templates <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
      <div className="mt-14 flex flex-col gap-5">
        <Marquee speed="fast">
          {row1.map((t, i) => (
            <TemplateCard key={i} t={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row2.map((t, i) => (
            <TemplateCard key={i} t={t} />
          ))}
        </Marquee>
        <Marquee speed="slow">
          {row3.map((t, i) => (
            <TemplateCard key={i} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
