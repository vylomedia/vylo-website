import { clsx } from "clsx";

export function GlowBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden -z-0",
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full animate-glow-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(92,95,255,0.22), rgba(92,95,255,0) 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute top-10 right-0 h-[600px] w-[600px] rounded-full animate-glow-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(92,95,255,0.18), rgba(92,95,255,0) 70%)",
          filter: "blur(40px)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full animate-glow-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(226,226,255,0.55), rgba(226,226,255,0) 70%)",
          filter: "blur(50px)",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
