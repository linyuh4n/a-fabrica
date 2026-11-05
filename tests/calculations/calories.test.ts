import { describe, it, expect } from "vitest";
import { calculateCalories, validateCalorieInput, getWeightLossTargets, getWeightGainTargets } from "@/lib/calculations/calories";

describe("Calorie Calculator", () => {
  describe("calculateCalories", () => {
    it("should calculate BMR correctly for male using Mifflin-St Jeor", () => {
      // Male, 25 years, 70kg, 170cm
      // BMR = 10*70 + 6.25*170 - 5*25 + 5 = 700 + 1062.5 - 125 + 5 = 1642.5 -> 1643
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "sedentary",
      });
      
      expect(result.bmr).toBe(1643);
    });

    it("should calculate BMR correctly for female using Mifflin-St Jeor", () => {
      // Female, 25 years, 60kg, 165cm
      // BMR = 10*60 + 6.25*165 - 5*25 - 161 = 600 + 1031.25 - 125 - 161 = 1345.25 -> 1345
      const result = calculateCalories({
        age: 25,
        weightKg: 60,
        heightCm: 165,
        sex: "female",
        activityLevel: "sedentary",
      });
      
      expect(result.bmr).toBe(1345);
    });

    it("should calculate TDEE correctly for sedentary", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "sedentary",
      });
      
      // BMR = 1643, TDEE = 1643 * 1.2 = 1971.6 -> 1972
      expect(result.tdee).toBe(1972);
      expect(result.activityMultiplier).toBe(1.2);
    });

    it("should calculate TDEE correctly for light activity", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "light",
      });
      
      expect(result.activityMultiplier).toBe(1.375);
    });

    it("should calculate TDEE correctly for moderate activity", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "moderate",
      });
      
      expect(result.activityMultiplier).toBe(1.55);
    });

    it("should calculate TDEE correctly for very active", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "very",
      });
      
      expect(result.activityMultiplier).toBe(1.725);
    });

    it("should calculate TDEE correctly for extra active", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "extra",
      });
      
      expect(result.activityMultiplier).toBe(1.9);
    });

    it("should return factors array", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "moderate",
      });
      
      expect(result.factors).toHaveLength(5);
      expect(result.factors[0].label).toBe("Idade");
      expect(result.factors[1].label).toBe("Sexo");
      expect(result.factors[2].label).toBe("Peso");
      expect(result.factors[3].label).toBe("Altura");
      expect(result.factors[4].label).toBe("Nível de atividade");
    });

    it("should return explanation and disclaimer", () => {
      const result = calculateCalories({
        age: 25,
        weightKg: 70,
        heightCm: 170,
        sex: "male",
        activityLevel: "moderate",
      });
      
      expect(result.explanation).toContain("Taxa Metabólica Basal");
      expect(result.disclaimer).toContain("Mifflin-St Jeor");
      expect(result.disclaimer).toContain("acompanhamento nutricional");
    });
  });

  describe("validateCalorieInput", () => {
    it("should return error for missing age", () => {
      const errors = validateCalorieInput({ weightKg: 70, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Idade é obrigatória");
    });

    it("should return error for age too low", () => {
      const errors = validateCalorieInput({ age: 10, weightKg: 70, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Idade deve estar entre 15 e 100 anos");
    });

    it("should return error for age too high", () => {
      const errors = validateCalorieInput({ age: 120, weightKg: 70, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Idade deve estar entre 15 e 100 anos");
    });

    it("should return error for missing weight", () => {
      const errors = validateCalorieInput({ age: 25, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Peso é obrigatório");
    });

    it("should return error for weight too low", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 20, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Peso deve estar entre 30 e 300 kg");
    });

    it("should return error for weight too high", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 400, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Peso deve estar entre 30 e 300 kg");
    });

    it("should return error for missing height", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Altura é obrigatória");
    });

    it("should return error for height too low", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 50, sex: "male", activityLevel: "moderate" });
      expect(errors).toContain("Altura deve estar entre 100 e 250 cm");
    });

    it("should return error for missing sex", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 170, activityLevel: "moderate" });
      expect(errors).toContain("Sexo é obrigatório");
    });

    it("should return error for invalid sex", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 170, sex: "invalid" as any, activityLevel: "moderate" });
      expect(errors).toContain("Sexo inválido");
    });

    it("should return error for missing activity level", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 170, sex: "male" });
      expect(errors).toContain("Nível de atividade é obrigatório");
    });

    it("should return error for invalid activity level", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 170, sex: "male", activityLevel: "invalid" as any });
      expect(errors).toContain("Nível de atividade inválido");
    });

    it("should return empty array for valid input", () => {
      const errors = validateCalorieInput({ age: 25, weightKg: 70, heightCm: 170, sex: "male", activityLevel: "moderate" });
      expect(errors).toHaveLength(0);
    });
  });

  describe("getWeightLossTargets", () => {
    it("should calculate correct deficit targets", () => {
      const targets = getWeightLossTargets(2000);
      
      expect(targets.conservative).toBe(1800);
      expect(targets.moderate).toBe(1500);
      expect(targets.aggressive).toBe(1250);
    });
  });

  describe("getWeightGainTargets", () => {
    it("should calculate correct surplus targets", () => {
      const targets = getWeightGainTargets(2000);
      
      expect(targets.moderate).toBe(2300);
      expect(targets.aggressive).toBe(2500);
    });
  });
});
