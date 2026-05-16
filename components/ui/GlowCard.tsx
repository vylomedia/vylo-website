import { clsx } from "clsx";
import { HTMLAttributes } from "react";

export function GlowCard({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "deep" | "accent";
}) {
  return (
    <div
      className={clsx(
        "relative rounded-3xl overflow-hidden",
        variant === "default" && "glass",
        variant === "deep" && "glass-strong",
        variant === "accent" &&
          "bg-white border border-accent/30 shadow-[0_24px_60px_-30px_rgba(92,95,255,0.35)]",
        className,
      )}
      {...props}
    />
  );
}
