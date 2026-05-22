"use client";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, ExternalLink, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const calComUrl = process.env.NEXT_PUBLIC_CAL_COM_URL;

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
            className={clsx(
              "relative w-full glass-strong rounded-3xl p-7 sm:p-8 shadow-2xl",
              calComUrl ? "max-w-4xl" : "max-w-md",
            )}
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
                <p className="eyebrow mb-3">Book a fit call</p>
                <h3 className="text-2xl font-semibold text-text tracking-[-0.01em]">
                  See if VyloMedia is the right growth partner
                </h3>
                <p className="text-text-muted mt-2 text-[15px]">
                  {reason ??
                    "A 25-minute conversation about your ad stack, growth goals, and where senior attention would make the biggest difference."}
                </p>
                {calComUrl ? (
                  <div className="mt-6">
                    <div className="overflow-hidden rounded-2xl border border-border bg-white">
                      <iframe
                        title="Book a VyloMedia fit call"
                        src={calComUrl}
                        className="h-[650px] w-full"
                      />
                    </div>
                    <a
                      href={calComUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2"
                    >
                      Open scheduling page <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-accent">
                          <CalendarDays className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-text">
                            Cal.com direct booking is ready to connect.
                          </p>
                          <p className="mt-1 text-sm text-text-muted">
                            Add NEXT_PUBLIC_CAL_COM_URL with your Cal.com event
                            link and this modal will show the live scheduler
                            instead of the fallback form.
                          </p>
                        </div>
                      </div>
                    </div>
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
                        Request fit call
                      </Button>
                      <p className="text-text-faint text-xs text-center mt-1">
                        We&apos;ll never share your data. Cancel any time.
                      </p>
                    </form>
                  </>
                )}
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
