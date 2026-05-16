"use client";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function PromoBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="relative z-40 bg-accent-soft border-b border-border">
      <div className="mx-auto max-w-[1320px] px-5 py-2.5 flex items-center justify-center gap-3 text-[13px] text-text">
        <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
        <span className="text-center">
          <span className="font-semibold">New &middot; Agent Mode</span>{" "}
          <span className="text-text-muted">
            — launch and manage campaigns from a single prompt.{" "}
          </span>
          <a
            href="/product"
            className="text-accent font-medium inline-flex items-center gap-1 hover:underline"
          >
            See it in action <ArrowRight className="h-3 w-3" />
          </a>
        </span>
        <button
          aria-label="Dismiss"
          onClick={() => setHidden(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
