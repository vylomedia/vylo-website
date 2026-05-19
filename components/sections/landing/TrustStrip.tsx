import { Container } from "@/components/ui/Container";

const enterpriseBrands = [
  "Diageo",
  "PepsiCo",
  "McDonald's",
  "Loreal Paris",
  "Nissan",
  "HelloFresh",
  "Woodland",
];

const smbBrands = [
  "Vision Pitch",
  "Stoggles",
  "Kith",
  "Rise & Puff",
  "Salt & Straw",
];

export function TrustStrip() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container size="wide">
        <p className="text-center text-text-muted text-[15px] mb-10">
          Social proof from global brands and growing US SMBs.
        </p>
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          <div className="min-w-0 rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)]">
            <p className="eyebrow text-center lg:text-left mb-5">
              Brands We Have Worked With in the Last 10 Years
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              {enterpriseBrands.map((b) => (
                <span
                  key={b}
                  className="text-text-muted/85 text-xl font-semibold tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "var(--font-host-grotesk)" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-px h-24 bg-border-strong mt-6" />
          <div className="min-w-0 rounded-3xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(30,29,27,0.04),0_24px_60px_-34px_rgba(30,29,27,0.2)]">
            <p className="eyebrow text-center lg:text-left mb-5">
              SMBs We Have Worked With
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              {smbBrands.map((a) => (
                <span
                  key={a}
                  className="text-text-muted/85 text-xl font-semibold tracking-tight whitespace-nowrap"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
