import { clsx } from "clsx";
import { HTMLAttributes } from "react";

export function Container({
  className,
  size = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & { size?: "default" | "wide" | "narrow" }) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-5 sm:px-8",
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-[1320px]",
        size === "narrow" && "max-w-[900px]",
        className,
      )}
      {...props}
    />
  );
}
