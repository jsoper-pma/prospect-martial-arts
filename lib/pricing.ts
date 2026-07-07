// ── Membership pricing data ─────────────────────────────────────────
// Shared by the program pages (/preschool, /kids, /adults).

export interface PricingTier {
  name: string;
  classes: string;
  monthly: string;
  highlighted: boolean;
  includes: string[];
}

export const preschoolTiers: PricingTier[] = [
  {
    name: "Silver",
    classes: "2 classes / week",
    monthly: "$149",
    highlighted: false,
    includes: [
      "Belt testing fee: $35",
      "Uniform: $50",
    ],
  },
  {
    name: "Gold",
    classes: "Unlimited",
    monthly: "$179",
    highlighted: true,
    includes: [
      "No belt testing fees (saves $35/test)",
      "Free uniform (saves $50)",
      "20% off school events & gear",
    ],
  },
];

export const youthTiers: PricingTier[] = [
  {
    name: "Silver",
    classes: "2 classes / week",
    monthly: "$159",
    highlighted: false,
    includes: [
      "Belt testing fee: $50",
      "Uniform: $50",
    ],
  },
  {
    name: "Gold",
    classes: "Unlimited",
    monthly: "$189",
    highlighted: true,
    includes: [
      "No belt testing fees (saves $50/test)",
      "Free uniform (saves $50)",
      "20% off school events & gear",
    ],
  },
];

export const adultTiers: PricingTier[] = [
  {
    name: "Adult Membership",
    classes: "2 classes / week",
    monthly: "$139",
    highlighted: true,
    includes: [
      "Evening classes built for adult schedules",
      "Monday & Wednesday, 7:00–7:45 PM",
      "No experience required — beginners welcome",
      "Structured belt curriculum with real milestones",
    ],
  },
];

export interface FamilyDiscountRow {
  plan: string;
  base: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
}

export const familyDiscounts: FamilyDiscountRow[] = [
  { plan: "Preschool Silver", base: "$149", s2: "$268.20", s3: "$357.60", s4: "$417.20", s5: "Free" },
  { plan: "Preschool Gold", base: "$179", s2: "$322.20", s3: "$429.60", s4: "$501.20", s5: "Free" },
  { plan: "Tang Soo Do Silver", base: "$159", s2: "$286.20", s3: "$381.60", s4: "$445.20", s5: "Free" },
  { plan: "Tang Soo Do Gold", base: "$189", s2: "$340.20", s3: "$453.60", s4: "$529.20", s5: "Free" },
];

export const feesAndPolicies = [
  {
    label: "Late Payment Fee",
    detail: "$30, applied after 10 days of non-payment",
  },
  {
    label: "Returned Check / NSF Fee",
    detail: "$35 — applies to returned checks and ACH bank transfers with insufficient funds",
  },
  {
    label: "Membership Hold",
    detail:
      "Up to 90 days — one-time hold fee equal to one month's tuition. Hold fee covers your first month back upon return.",
  },
  {
    label: "Cancellation",
    detail:
      "Cancel within the first 30 days without penalty. After 30 days, 30 days' written notice required. You may use services through your paid period.",
  },
];
