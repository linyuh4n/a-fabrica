import { describe, it, expect } from "vitest";
import { calculateProtein, validateProteinInput, getProteinSources } from "@/lib/calculations/protein";

describe("Protein Calculator", () => {
  describe("calculateProtein", () => {
    it("should calculate correct range for health objective, omnivore", () => {
      const result = calculateProtein({
        weightKg: 70,
        objective: "health",
        dietPreference: "omnivore",
      });
      
      expect(result.minGramsPerDay).toBe(56); // 70 * 0.8
      expect(result.maxGramsPerDay).toBe(70); // 70 * 1.0
      expect(result.averageGramsPerDay).toBe(63);
      expect(result.rangeText).toBe("56g - 70g por dia");
    });

    it("should calculate correct range for activity objective, omnivore", () => {
      const result = calculateProtein({
        weightKg: 70,
        objective: "activity",
        dietPreference: "omnivore",
      });
      
      expect(result.minGramsPerDay).toBe(70); // 70 * 1.0
      expect(result.maxGramsPerDay).toBe(98); // 70 * 1.4
    });

    it("should calculate correct range for hypertrophy objective, omnivore", () => {
      const result = calculateProtein({
        weightKg: 70,
        objective: "hypertrophy",
        dietPreference: "omnivore",
      });
      
      expect(result.minGramsPerDay).toBe(112); // 70 * 1.6
      expect(result.maxGramsPerDay).toBe(154); // 70 * 2.2
    });

    it("should apply vegetarian multiplier (1.1x)", () => {
      const omnivore = calculateProtein({ weightKg: 70, objective: "hypertrophy", dietPreference: "omnivore" });
      const vegetarian = calculateProtein({ weightKg: 70, objective: "hypertrophy", dietPreference: "vegetarian-eggs-dairy" });
      
      expect(vegetarian.minGramsPerDay).toBe(Math.round(omnivore.minGramsPerDay * 1.1));
      expect(vegetarian.maxGramsPerDay).toBe(Math.round(omnivore.maxGramsPerDay * 1.1));
    });

    it("should apply vegan multiplier (1.2x)", () => {
      const omnivore = calculateProtein({ weightKg: 70, objective: "hypertrophy", dietPreference: "omnivore" });
      const vegan = calculateProtein({ weightKg: 70, objective: "hypertrophy", dietPreference: "vegan" });
      
      expect(vegan.minGramsPerDay).toBe(Math.round(omnivore.minGramsPerDay * 1.2));
      expect(vegan.maxGramsPerDay).toBe(Math.round(omnivore.maxGramsPerDay * 1.2));
    });

    it("should handle edge case: minimum weight", () => {
      const result = calculateProtein({ weightKg: 20, objective: "health", dietPreference: "omnivore" });
      expect(result.minGramsPerDay).toBe(16);
      expect(result.maxGramsPerDay).toBe(20);
    });

    it("should handle edge case: maximum weight", () => {
      const result = calculateProtein({ weightKg: 300, objective: "hypertrophy", dietPreference: "omnivore" });
      expect(result.minGramsPerDay).toBe(480);
      expect(result.maxGramsPerDay).toBe(660);
    });

    it("should return sources and disclaimer", () => {
      const result = calculateProtein({ weightKg: 70, objective: "hypertrophy", dietPreference: "omnivore" });
      
      expect(result.sources).toHaveLength(3);
      expect(result.disclaimer).toContain("Não substitui avaliação nutricional");
    });
  });

  describe("validateProteinInput", () => {
    it("should return errors for missing weight", () => {
      const errors = validateProteinInput({ objective: "hypertrophy", dietPreference: "omnivore" });
      expect(errors).toContain("Peso corporal é obrigatório");
    });

    it("should return error for weight too low", () => {
      const errors = validateProteinInput({ weightKg: 10, objective: "hypertrophy", dietPreference: "omnivore" });
      expect(errors).toContain("Peso deve estar entre 20 e 300 kg");
    });

    it("should return error for weight too high", () => {
      const errors = validateProteinInput({ weightKg: 400, objective: "hypertrophy", dietPreference: "omnivore" });
      expect(errors).toContain("Peso deve estar entre 20 e 300 kg");
    });

    it("should return error for missing objective", () => {
      const errors = validateProteinInput({ weightKg: 70, dietPreference: "omnivore" });
      expect(errors).toContain("Objetivo é obrigatório");
    });

    it("should return error for invalid objective", () => {
      const errors = validateProteinInput({ weightKg: 70, objective: "invalid" as any, dietPreference: "omnivore" });
      expect(errors).toContain("Objetivo inválido");
    });

    it("should return error for missing diet preference", () => {
      const errors = validateProteinInput({ weightKg: 70, objective: "hypertrophy" });
      expect(errors).toContain("Preferência alimentar é obrigatória");
    });

    it("should return error for invalid diet preference", () => {
      const errors = validateProteinInput({ weightKg: 70, objective: "hypertrophy", dietPreference: "invalid" as any });
      expect(errors).toContain("Preferência alimentar inválida");
    });

    it("should return empty array for valid input", () => {
      const errors = validateProteinInput({ weightKg: 70, objective: "hypertrophy", dietPreference: "omnivore" });
      expect(errors).toHaveLength(0);
    });
  });

  describe("getProteinSources", () => {
    it("should return omnivore sources", () => {
      const sources = getProteinSources("omnivore");
      expect(sources).toContain("Carnes magras (frango, peixe, carne bovina magra)");
      expect(sources).toContain("Ovos");
      expect(sources).toContain("Whey protein");
    });

    it("should return vegetarian sources", () => {
      const sources = getProteinSources("vegetarian-eggs-dairy");
      expect(sources).toContain("Ovos");
      expect(sources.some(s => s.startsWith("Laticínios"))).toBe(true);
      expect(sources).not.toContain("Carnes magras");
    });

    it("should return vegan sources", () => {
      const sources = getProteinSources("vegan");
      expect(sources.some(s => s.startsWith("Leguminosas"))).toBe(true);
      expect(sources).toContain("Tofu, tempeh, edamame");
      expect(sources).not.toContain("Ovos");
      expect(sources).not.toContain("Laticínios");
    });
  });
});
