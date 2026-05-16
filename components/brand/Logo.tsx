import { clsx } from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="relative inline-flex h-7 w-7 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #5c5fff 0%, #4548e6 50%, #25254a 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,.18), 0 8px 24px -10px rgba(92,95,255,.55)",
        }}
      >
        <span className="absolute inset-0 grid place-items-center text-white font-semibold text-[13px] tracking-tight">
          V
        </span>
      </span>
      <span className="font-semibold tracking-[-0.02em] text-[19px] text-text">
        VyloMedia
      </span>
    </span>
  );
}
