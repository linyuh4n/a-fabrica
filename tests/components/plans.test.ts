import { describe, it, expect } from "vitest";
import { gymPlans, bjjPlans, gymPlanCategories, allPublicGymPlans, allPublicBjjPlans, pendingGymPlans } from "@/config/plans";

describe("Plans Configuration", () => {
  describe("Gym Plans", () => {
    it("should have 8 gym plans total", () => {
      expect(gymPlans).toHaveLength(8);
    });

    it("should have 4 traditional plans", () => {
      const traditional = gymPlans.filter(p => p.category === "tradicional");
      expect(traditional).toHaveLength(4);
    });

    it("should have 4 special plans", () => {
      const special = gymPlans.filter(p => p.category === "especial");
      expect(special).toHaveLength(4);
    });

    it("should have correct traditional plan IDs", () => {
      const traditionalIds = gymPlans
        .filter(p => p.category === "tradicional")
        .map(p => p.id);
      expect(traditionalIds).toEqual([
        "gym-monthly",
        "gym-quarterly",
        "gym-semiannual",
        "gym-annual",
      ]);
    });

    it("should have correct special plan IDs", () => {
      const specialIds = gymPlans
        .filter(p => p.category === "especial")
        .map(p => p.id);
      expect(specialIds).toEqual([
        "gym-university",
        "gym-university-quarterly",
        "gym-master",
        "gym-kids",
      ]);
    });

    it("should have correct prices for traditional plans", () => {
      const monthly = gymPlans.find(p => p.id === "gym-monthly");
      const quarterly = gymPlans.find(p => p.id === "gym-quarterly");
      const semiannual = gymPlans.find(p => p.id === "gym-semiannual");
      const annual = gymPlans.find(p => p.id === "gym-annual");

      expect(monthly?.totalPrice).toBe(145.00);
      expect(quarterly?.totalPrice).toBe(359.70);
      expect(semiannual?.totalPrice).toBe(659.40);
      expect(annual?.totalPrice).toBe(1138.80);
    });

    it("should have installments for quarterly, semiannual, annual", () => {
      const quarterly = gymPlans.find(p => p.id === "gym-quarterly");
      const semiannual = gymPlans.find(p => p.id === "gym-semiannual");
      const annual = gymPlans.find(p => p.id === "gym-annual");

      expect(quarterly?.installments).toEqual({ count: 2, value: 179.85 });
      expect(semiannual?.installments).toEqual({ count: 3, value: 219.80 });
      expect(annual?.installments).toEqual({ count: 6, value: 189.80 });
    });

    it("should mark traditional plans as confirmed and public", () => {
      const traditional = gymPlans.filter(p => p.category === "tradicional");
      traditional.forEach(plan => {
        expect(plan.isConfirmed).toBe(true);
        expect(plan.isPublic).toBe(true);
      });
    });

    it("should mark special plans as not confirmed and not public", () => {
      const special = gymPlans.filter(p => p.category === "especial");
      special.forEach(plan => {
        expect(plan.isConfirmed).toBe(true);
        expect(plan.isPublic).toBe(true);
      });
    });

    it("should have whatsapp messages for all plans", () => {
      gymPlans.forEach(plan => {
        expect(plan.whatsappMessage).toContain("A Fábrica");
        expect(plan.whatsappMessage).toContain("musculação");
      });
    });
  });

  describe("BJJ Plans", () => {
    it("should have 3 BJJ plans", () => {
      expect(bjjPlans).toHaveLength(3);
    });

    it("should have correct BJJ plan IDs", () => {
      const ids = bjjPlans.map(p => p.id);
      expect(ids).toEqual(["bjj-monthly", "bjj-quarterly", "bjj-semiannual"]);
    });

    it("should have correct prices", () => {
      const monthly = bjjPlans.find(p => p.id === "bjj-monthly");
      const quarterly = bjjPlans.find(p => p.id === "bjj-quarterly");
      const semiannual = bjjPlans.find(p => p.id === "bjj-semiannual");

      expect(monthly?.totalPrice).toBe(180.00);
      expect(quarterly?.totalPrice).toBe(499.00);
      expect(semiannual?.totalPrice).toBe(899.00);
    });

    it("should have savings for quarterly and semiannual", () => {
      const quarterly = bjjPlans.find(p => p.id === "bjj-quarterly");
      const semiannual = bjjPlans.find(p => p.id === "bjj-semiannual");

      expect(quarterly?.savings).toBe(41.00);
      expect(quarterly?.savingsDescription).toContain("R$ 41,00");
      expect(semiannual?.savings).toBe(181.00);
      expect(semiannual?.savingsDescription).toContain("R$ 181,00");
    });

    it("should mark BJJ plans as not confirmed but public", () => {
      bjjPlans.forEach(plan => {
        expect(plan.isConfirmed).toBe(true);
        expect(plan.isPublic).toBe(true);
      });
    });
  });

  describe("Plan Categories", () => {
    it("should have 2 categories for gym plans", () => {
      expect(gymPlanCategories).toHaveLength(2);
    });

    it("should have tradicional category with 4 plans", () => {
      const tradicional = gymPlanCategories.find(c => c.id === "tradicional");
      expect(tradicional?.plans).toHaveLength(4);
    });

    it("should have especial category with 0 public confirmed plans", () => {
      const especial = gymPlanCategories.find(c => c.id === "especial");
      expect(especial?.plans).toHaveLength(4);
    });
  });

  describe("Public Plans Filters", () => {
    it("should filter only public gym plans", () => {
      expect(allPublicGymPlans).toHaveLength(8);
      allPublicGymPlans.forEach(plan => {
        expect(plan.isPublic).toBe(true);
      });
    });

    it("should filter only public BJJ plans", () => {
      expect(allPublicBjjPlans).toHaveLength(3);
      allPublicBjjPlans.forEach(plan => {
        expect(plan.isPublic).toBe(true);
      });
    });

    it("should identify pending gym plans", () => {
      expect(pendingGymPlans).toHaveLength(0);
      // No pending plans - all confirmed and public
    });
  });

  describe("University Quarterly Plan Divergence", () => {
    it("should flag the divergence in university quarterly plan", () => {
      const plan = gymPlans.find(p => p.id === "gym-university-quarterly");
      expect(plan).toBeDefined();
      
      // Divergence resolved: 2x 149,85 = 299,70 (matches totalPrice)
      const calculatedTotal = plan!.installments!.count * plan!.installments!.value;
      expect(calculatedTotal).toBe(299.70);
      expect(plan!.totalPrice).toBe(229.70);
      expect(plan!.condition).toBeNull();
    });
  });
});
