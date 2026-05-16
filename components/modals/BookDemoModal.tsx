"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function BookDemoModal({
  open,
  onClose,
  reason,
}: {
  open: boolean;
  onClose: () => void;
  reason?: string;
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setDone(false), 300);
      return () => clearTimeout(t);
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-bg-deep/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md glass-strong rounded-3xl p-7 sm:p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 h-9 w-9 rounded-full grid place-items-center text-text-muted hover:text-text hover:bg-surface-2 transition"
            >
              <X className="h-5 w-5" />
            </button>

            {done ? (
              <div className="text-center py-6">
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 grid place-items-center mb-4">
                  <Check className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text">You&apos;re booked</h3>
                <p className="text-text-muted mt-2 text-[15px]">
                  Our team will reach out within one business day to confirm a
                  time that works for you.
                </p>
                <Button className="mt-6 w-full" onClick={onClose}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <p className="eyebrow mb-3">Book a demo</p>
                <h3 className="text-2xl font-semibold text-text tracking-[-0.01em]">
                  See VyloMedia on your ad accounts
                </h3>
                <p className="text-text-muted mt-2 text-[15px]">
                  {reason ??
                    "A 25-minute walkthrough tailored to your stack — no slides, real data."}
                </p>
                <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Full name" name="name" required />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Acme Co."
                    required
                  />
                  <Field
                    label="Monthly ad spend"
                    name="spend"
                    placeholder="e.g. $50k"
                  />
                  <Button type="submit" size="lg" className="mt-3 w-full">
                    Request demo
                  </Button>
                  <p className="text-text-faint text-xs text-center mt-1">
                    We&apos;ll never share your data. Cancel any time.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-text-muted text-xs font-medium">{label}</span>
      <input
        {...props}
        className="bg-surface-2 border border-border rounded-xl px-4 py-2.5 text-[15px] text-text placeholder:text-text-faint focus:outline-none focus:border-accent/60 focus:bg-surface-3 transition"
      />
    </label>
  );
}
