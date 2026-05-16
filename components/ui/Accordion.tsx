"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className="glass rounded-2xl overflow-hidden transition-colors hover:border-border-strong"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-text font-medium text-base sm:text-[17px]">
                {it.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-text-muted leading-relaxed text-[15px]">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
