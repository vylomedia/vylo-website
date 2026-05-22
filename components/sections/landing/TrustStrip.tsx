import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

const enterpriseBrands = [
  { name: "Diageo", mark: "D" },
  { name: "PepsiCo", mark: "P" },
  { name: "McDonald's", mark: "M" },
  { name: "Loreal Paris", mark: "L" },
  { name: "Nissan", mark: "N" },
  { name: "HelloFresh", mark: "H" },
  { name: "Woodland", mark: "W" },
];

const smbBrands = [
  { name: "Vision Pitch", mark: "VP" },
  { name: "Stoggles", mark: "S" },
  { name: "Kith", mark: "K" },
  { name: "Rise & Puff", mark: "RP" },
  { name: "Salt & Straw", mark: "SS" },
];

export function TrustStrip() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container size="wide">
        <p className="text-center text-text-muted text-[15px] mb-10">
          Social proof from global brands and growing US SMBs.
        </p>
        <div className="rounded-3xl border border-border bg-white py-6 shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)]">
          <p className="eyebrow text-center mb-5">
            Brands We Have Worked With in the Last 10 Years
          </p>
          <Marquee speed="slow" className="py-2">
            {enterpriseBrands.map((brand) => (
              <LogoPill key={brand.name} {...brand} />
            ))}
          </Marquee>
          <div className="my-6 h-px bg-border" />
          <p className="eyebrow text-center mb-5">SMBs We Have Worked With</p>
          <Marquee reverse speed="normal" className="py-2">
            {smbBrands.map((brand) => (
              <LogoPill key={brand.name} {...brand} compact />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}

function LogoPill({
  name,
  mark,
  compact = false,
}: {
  name: string;
  mark: string;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-border bg-bg-soft px-5 py-3 shadow-[0_10px_30px_-24px_rgba(30,29,27,0.45)]">
      <span
        className={
          compact
            ? "grid h-8 w-8 place-items-center rounded-full bg-bg-deep text-[10px] font-semibold text-white"
            : "grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-semibold text-white"
        }
      >
        {mark}
      </span>
      <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-text-muted">
        {name}
      </span>
    </span>
  );
}
