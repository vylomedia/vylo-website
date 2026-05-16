export type Billing = "monthly" | "yearly";

export type Plan = {
  key: "plus" | "pro" | "max";
  name: string;
  audience: string;
  highlight?: boolean;
  monthly: number;
  originalMonthly: number;
  features: { label: string; pill?: string }[];
};

// 5 ad-spend brackets. Each row = monthly prices for [plus, pro, max].
const brackets: { upTo: number; prices: [number, number, number]; original: [number, number, number] }[] = [
  { upTo: 30_000, prices: [48, 97, 209], original: [69, 139, 289] },
  { upTo: 100_000, prices: [68, 137, 289], original: [98, 198, 419] },
  { upTo: 250_000, prices: [98, 197, 419], original: [139, 279, 599] },
  { upTo: 500_000, prices: [148, 297, 619], original: [209, 419, 899] },
  { upTo: Infinity, prices: [198, 397, 829], original: [279, 569, 1199] },
];

const featurePlus = [
  { label: "1,000 AI Credits / month" },
  { label: "Up to 5 brands" },
  { label: "1 team member" },
  { label: "~100 Performance Reports" },
  { label: "~65 Analysis & Insights" },
  { label: "~50 Creative Breakdowns" },
  { label: "~40 Competitor Research" },
];

const featurePro = [
  { label: "2,000 AI Credits / month" },
  { label: "Up to 10 brands" },
  { label: "5 team members" },
  { label: "~200 Performance Reports" },
  { label: "~130 Analysis & Insights" },
  { label: "~100 Creative Breakdowns" },
  { label: "~80 Competitor Research" },
  { label: "Slack delivery" },
];

const featureMax = [
  { label: "4,000 AI Credits / month" },
  { label: "Unlimited brands" },
  { label: "Unlimited team members" },
  { label: "~800 Performance Reports" },
  { label: "~520 Analysis & Insights" },
  { label: "~400 Creative Breakdowns" },
  { label: "~300 Competitor Research" },
  { label: "~200 Ad Launches" },
  { label: "Early access to new features" },
  { label: "Priority chat support" },
  { label: "Agent Manage Mode" },
  { label: "White-labelled Reports", pill: "Coming Soon" },
];

export function getPlans(adSpend: number, billing: Billing): Plan[] {
  const bracket = brackets.find((b) => adSpend <= b.upTo)!;
  const factor = billing === "yearly" ? 0.7 : 1;
  const apply = (n: number) => Math.round(n * factor);

  return [
    {
      key: "plus",
      name: "Plus",
      audience: "For solo marketers & small brands",
      monthly: apply(bracket.prices[0]),
      originalMonthly: apply(bracket.original[0]),
      features: featurePlus,
    },
    {
      key: "pro",
      name: "Pro",
      audience: "For highly-leveraged growth teams",
      highlight: true,
      monthly: apply(bracket.prices[1]),
      originalMonthly: apply(bracket.original[1]),
      features: featurePro,
    },
    {
      key: "max",
      name: "Max",
      audience: "For scaling agencies & enterprises",
      monthly: apply(bracket.prices[2]),
      originalMonthly: apply(bracket.original[2]),
      features: featureMax,
    },
  ];
}

export function formatSpend(v: number) {
  if (v >= 500_000) return "$500k+";
  if (v >= 1000) return `$${Math.round(v / 1000)}k`;
  return `$${v}`;
}
