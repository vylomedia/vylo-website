import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { brands, agencies } from "@/lib/copy";

export function TrustStrip() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container size="wide">
        <p className="text-center text-text-muted text-[15px] mb-10">
          Trusted by 10,000+ marketers across 100+ countries
        </p>
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <div className="min-w-0">
            <p className="eyebrow text-center lg:text-left mb-4">Brands</p>
            <Marquee>
              {brands.map((b) => (
                <span
                  key={b}
                  className="text-text-muted/80 text-xl font-medium tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "var(--font-host-grotesk)" }}
                >
                  {b}
                </span>
              ))}
            </Marquee>
          </div>
          <div className="hidden lg:block w-px h-12 bg-border-strong" />
          <div className="min-w-0">
            <p className="eyebrow text-center lg:text-left mb-4">Agencies</p>
            <Marquee reverse speed="slow">
              {agencies.map((a) => (
                <span
                  key={a}
                  className="text-text-muted/80 text-xl font-medium tracking-tight whitespace-nowrap"
                >
                  {a}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </Container>
    </section>
  );
}
