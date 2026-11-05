export interface BasePlan {
  id: string;
  name: string;
  totalPrice: number;
  period: "monthly" | "quarterly" | "semiannual" | "annual" | "pending";
  installments: { count: number; value: number } | null;
  savings: number | null;
  savingsDescription: string | null;
  condition: string | null;
  isConfirmed: boolean;
  isPublic: boolean;
  whatsappMessage: string;
}

export interface GymPlan extends BasePlan {
  category: "tradicional" | "especial";
}

export interface BjjPlan extends BasePlan {
  // Jiu-Jitsu specific fields can be added here
}

export interface PlanCategory {
  id: string;
  title: string;
  plans: GymPlan[];
}

export interface InstallmentInfo {
  count: number;
  value: number;
}
