"use client";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { BookDemoModal } from "./BookDemoModal";

type Ctx = {
  open: (reason?: string) => void;
  close: () => void;
};

const BookDemoCtx = createContext<Ctx | null>(null);

export function useBookDemo() {
  const ctx = useContext(BookDemoCtx);
  if (!ctx) throw new Error("useBookDemo must be used within BookDemoProvider");
  return ctx;
}

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<string | undefined>();

  const open = useCallback((r?: string) => {
    setReason(r);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookDemoCtx.Provider value={{ open, close }}>
      {children}
      <BookDemoModal open={isOpen} onClose={close} reason={reason} />
    </BookDemoCtx.Provider>
  );
}
