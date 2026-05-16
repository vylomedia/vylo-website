"use client";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
  }
>(function Button(
  { className, variant = "primary", size = "md", iconLeft, iconRight, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 whitespace-nowrap",
        "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-bg-base",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-2.5 text-[15px]",
        size === "lg" && "px-7 py-3.5 text-base",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent-2 hover:-translate-y-[1px] btn-glow",
        variant === "ghost" &&
          "bg-surface-2 text-text hover:bg-surface-3 border border-border",
        variant === "outline" &&
          "bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent",
        variant === "dark" &&
          "bg-bg-deep text-text hover:bg-bg-card border border-border",
        className,
      )}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
});
