"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { useBookDemo } from "@/components/modals/BookDemoProvider";
import { clsx } from "clsx";

const links = [
  { href: "/product", label: "Product" },
  { href: "/product#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useBookDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 bg-bg-deep border-b border-border transition-all duration-300",
        scrolled
          ? "shadow-[0_14px_40px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl"
          : "shadow-none",
      )}
    >
      <div className="h-16 w-full pl-3 pr-5 sm:pl-4 sm:pr-8 flex items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="VyloMedia home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-text-muted hover:text-text transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => open()}
          >
            Book Demo
          </Button>
          <button
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border text-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg-base/95 backdrop-blur-xl">
          <div className="px-5 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-text-muted hover:text-text"
              >
                {l.label}
              </Link>
            ))}
            <Button
              className="mt-3 w-full"
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
            >
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
