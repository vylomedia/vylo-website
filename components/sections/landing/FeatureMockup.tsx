"use client";
import {
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  XCircle,
  AlertTriangle,
  BarChart3,
  Play,
} from "lucide-react";

export function FeatureMockup({ index, title }: { index: number; title: string }) {
  switch (index) {
    case 0:
      return <MockLaunch />;
    case 1:
      return <MockCompetitors />;
    case 2:
      return <MockCreative />;
    case 3:
      return <MockRootCause />;
    case 4:
      return <MockReport />;
    default:
      return <div className="text-text-muted">{title}</div>;
  }
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-strong rounded-2xl p-5 w-full shadow-xl">
      {children}
    </div>
  );
}

function MockLaunch() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <span className="eyebrow">Campaign · Spring Launch</span>
        <span className="text-text-faint text-xs">Setup complete</span>
      </div>
      <div className="rounded-xl bg-surface-1 border border-border p-4 space-y-3 text-sm">
        <Row label="Objective" value="Sales" />
        <Row label="Daily budget" value="$220" />
        <Row label="Audience" value="Lookalike 1% — US" />
        <Row label="Attribution" value="7d click / 1d view" />
      </div>
      <div className="mt-4 rounded-xl bg-surface-1 border border-border p-4">
        <p className="text-text text-sm font-medium mb-1">Ad — Protein bar</p>
        <p className="text-text-muted text-xs leading-relaxed mb-3">
          Indulge in the rich, chocolatey goodness of our protein bars. Fuel up.
        </p>
        <div className="flex items-center gap-2">
          <button className="text-xs rounded-full bg-accent/20 text-accent px-3 py-1 inline-flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Approve
          </button>
          <button className="text-xs rounded-full bg-surface-2 text-text-muted px-3 py-1 inline-flex items-center gap-1">
            <XCircle className="h-3 w-3" /> Reject
          </button>
        </div>
      </div>
      <button className="mt-4 w-full rounded-full bg-bg-deep border border-accent/40 text-accent text-sm font-medium py-2 inline-flex items-center justify-center gap-2">
        <Play className="h-3.5 w-3.5" /> Publish to Meta
      </button>
    </Card>
  );
}

function MockCompetitors() {
  return (
    <Card>
      <span className="eyebrow">Competitor radar</span>
      <p className="text-text mt-1 font-medium text-[15px]">
        Top angles this week
      </p>
      <div className="mt-4 space-y-2.5">
        {[
          { p: "Brevia", a: "Founder explains the ingredient story", t: "+38% spend" },
          { p: "Halycon", a: "Side-by-side before/after", t: "+24% spend" },
          { p: "Foundry", a: "UGC dad humor + claim stack", t: "+19% spend" },
          { p: "Northwind", a: "Reviewer reads a 5-star review aloud", t: "+11% spend" },
        ].map((r) => (
          <div
            key={r.p}
            className="flex items-center justify-between gap-3 rounded-lg bg-surface-1 border border-border px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-text text-sm font-medium">{r.p}</p>
              <p className="text-text-muted text-xs truncate">{r.a}</p>
            </div>
            <span className="text-[11px] text-accent shrink-0">{r.t}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MockCreative() {
  return (
    <Card>
      <span className="eyebrow">Creative DNA</span>
      <p className="text-text mt-1 font-medium text-[15px]">What&apos;s working in your top 10 ads</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
        {[
          { k: "Hook type", v: "Pattern interrupt", c: 86 },
          { k: "Format", v: "Vertical 9:16", c: 72 },
          { k: "Tone", v: "Founder-led", c: 64 },
          { k: "Pacing", v: "Sub-2s scene cuts", c: 58 },
        ].map((b) => (
          <div key={b.k} className="rounded-lg bg-surface-1 border border-border p-3">
            <p className="text-text-faint">{b.k}</p>
            <p className="text-text text-sm mt-1">{b.v}</p>
            <div className="mt-2 h-1.5 bg-surface-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent"
                style={{ width: `${b.c}%` }}
              />
            </div>
            <p className="text-text-faint text-[10px] mt-1">{b.c}% of winners</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MockRootCause() {
  return (
    <Card>
      <div className="flex items-center gap-2 text-text">
        <BarChart3 className="h-4 w-4 text-accent" />
        <span className="text-sm font-medium">Root-cause: CAC up 18% W-o-W</span>
      </div>
      <div className="mt-4 space-y-2.5 text-sm">
        <Line
          icon={<TrendingDown className="h-3.5 w-3.5 text-danger" />}
          label="Meta CPM"
          value="+22%"
        />
        <Line
          icon={<TrendingDown className="h-3.5 w-3.5 text-danger" />}
          label="Search conv rate"
          value="-12%"
        />
        <Line
          icon={<TrendingUp className="h-3.5 w-3.5 text-accent" />}
          label="Branded search vol"
          value="+9%"
        />
      </div>
      <div className="mt-4 rounded-xl bg-accent/10 border border-accent/30 p-3 text-xs text-text">
        <AlertTriangle className="h-3.5 w-3.5 text-accent inline mr-1.5" />
        Primary driver: competitor spend up 31% on branded keywords.
      </div>
    </Card>
  );
}

function MockReport() {
  return (
    <Card>
      <span className="eyebrow">Weekly report</span>
      <p className="text-text mt-1 font-medium text-[15px]">Performance · Last 7 days</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {[
          { k: "CAC", v: "$57.6", d: "-17%", up: true },
          { k: "Conversions", v: "149", d: "+18%", up: true },
          { k: "Spend", v: "$8,585", d: "-2%", up: false },
          { k: "Blended ROAS", v: "1.64", d: "+24%", up: true },
        ].map((m) => (
          <div key={m.k} className="rounded-lg bg-surface-1 border border-border p-3">
            <p className="text-text-faint text-xs">{m.k}</p>
            <p className="text-text text-lg font-semibold mt-1">{m.v}</p>
            <p className={`text-[11px] mt-0.5 ${m.up ? "text-accent" : "text-danger"}`}>
              {m.d}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-text-muted">{label}</span>
      <span className="text-text">{value}</span>
    </div>
  );
}

function Line({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-surface-1 border border-border px-3 py-2">
      <span className="text-text-muted inline-flex items-center gap-2">
        {icon} {label}
      </span>
      <span className="text-text">{value}</span>
    </div>
  );
}
