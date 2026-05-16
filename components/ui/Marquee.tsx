import { clsx } from "clsx";
import { ReactNode } from "react";

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  className,
}: {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
}) {
  const cls =
    speed === "slow"
      ? "animate-marquee-slow"
      : speed === "fast"
        ? "animate-marquee-fast"
        : "animate-marquee";
  return (
    <div
      className={clsx(
        "group relative overflow-hidden",
        "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div
        className={clsx(
          "flex w-max gap-12 hover:[animation-play-state:paused]",
          cls,
          reverse && "[animation-direction:reverse]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
