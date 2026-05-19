import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SocialIcons } from "@/components/brand/SocialIcons";

const cols = [
  {
    title: "Services",
    links: [
      { label: "What you get", href: "/#included" },
      { label: "Paid media", href: "/#included" },
      { label: "Creative analysis", href: "/#included" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Fit call", href: "/#included" },
      { label: "Playbooks", href: "#" },
      { label: "Benchmarks", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs hiring", href: "/#included" },
      { label: "vs agency retainers", href: "/#included" },
      { label: "vs dashboards", href: "/#included" },
      { label: "vs AI tools", href: "/#included" },
      { label: "vs freelancers", href: "/#included" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_3fr] gap-12">
          <div>
            <Logo />
            <p className="text-text-muted mt-4 max-w-xs text-[15px]">
              Boutique paid media for US SMBs that deserve senior attention -
              backed by AI that handles the heavy lifting.
            </p>
            <SocialIcons />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h6 className="eyebrow mb-4 text-text-muted">{c.title}</h6>
                <ul className="flex flex-col gap-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-text-muted hover:text-text transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-text-faint text-[13px]">
          <p>© {new Date().getFullYear()} VyloMedia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text">
              Privacy
            </a>
            <a href="#" className="hover:text-text">
              Terms
            </a>
            <a href="#" className="hover:text-text">
              Security
            </a>
            <a href="#" className="hover:text-text">
              AI Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
