import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export function FaqSection({
  items,
  title = "Frequently asked questions",
  lead = "Everything you need to know about the platform, pricing, security, and workflows.",
}: {
  items: { q: string; a: string }[];
  title?: string;
  lead?: string;
}) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <section id="faq" className="bg-bg-soft section-pad">
      <Container>
        <SectionHeading title={title} lead={lead} />
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <Accordion items={left} />
          <Accordion items={right} />
        </div>
      </Container>
    </section>
  );
}
