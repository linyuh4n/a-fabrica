import { describe, it, expect } from "vitest";
import { calculateBMI, validateBMIInput, getBMIClassification, getBMICautions } from "@/lib/calculations/bmi";

describe("BMI Calculator", () => {
  describe("calculateBMI", () => {
    it("should calculate BMI correctly for normal weight", () => {
      const result = calculateBMI({ weightKg: 70, heightCm: 175 });
      // BMI = 70 / (1.75^2) = 70 / 3.0625 = 22.86 -> 22.9
      expect(result.bmi).toBe(22.9);
      expect(result.classification).toBe("Peso normal");
    });

    it("should calculate BMI correctly for underweight (17.3)", () => {
      const result = calculateBMI({ weightKg: 50, heightCm: 170 });
      // BMI = 50 / (1.7^2) = 50 / 2.89 = 17.3 -> 17.3
      expect(result.bmi).toBe(17.3);
      expect(result.classification).toBe("Magreza leve");
    });

    it("should calculate BMI correctly for underweight (moderate)", () => {
      const result = calculateBMI({ weightKg: 48, heightCm: 170 });
      // BMI = 48 / (1.7^2) = 48 / 2.89 = 16.6 -> 16.6
      expect(result.bmi).toBe(16.6);
      expect(result.classification).toBe("Magreza moderada");
    });

    it("should calculate BMI correctly for severe underweight", () => {
      const result = calculateBMI({ weightKg: 40, heightCm: 170 });
      expect(result.classification).toBe("Magreza grave");
    });

    it("should calculate BMI correctly for overweight", () => {
      const result = calculateBMI({ weightKg: 85, heightCm: 170 });
      // BMI = 85 / 2.89 = 29.4 -> 29.4
      expect(result.bmi).toBe(29.4);
      expect(result.classification).toBe("Sobrepeso");
    });

    it("should calculate BMI correctly for obesity I", () => {
      const result = calculateBMI({ weightKg: 95, heightCm: 170 });
      // BMI = 95 / 2.89 = 32.9 -> 32.9
      expect(result.bmi).toBe(32.9);
      expect(result.classification).toBe("Obesidade grau I");
    });

    it("should calculate BMI correctly for obesity II", () => {
      const result = calculateBMI({ weightKg: 110, heightCm: 170 });
      // BMI = 110 / 2.89 = 38.1 -> 38.1
      expect(result.bmi).toBe(38.1);
      expect(result.classification).toBe("Obesidade grau II");
    });

    it("should calculate BMI correctly for obesity III", () => {
      const result = calculateBMI({ weightKg: 130, heightCm: 170 });
      // BMI = 130 / 2.89 = 45.0 -> 45.0
      expect(result.bmi).toBe(45.0);
      expect(result.classification).toBe("Obesidade grau III (mórbida)");
    });

    it("should return limitations array", () => {
      const result = calculateBMI({ weightKg: 70, heightCm: 175 });
      expect(result.limitations).toHaveLength(6);
      expect(result.limitations[0]).toContain("não distingue massa muscular");
    });

    it("should set isAdult to true", () => {
      const result = calculateBMI({ weightKg: 70, heightCm: 175 });
      expect(result.isAdult).toBe(true);
    });
  });

  describe("validateBMIInput", () => {
    it("should return error for missing weight", () => {
      const errors = validateBMIInput({ heightCm: 170 });
      expect(errors).toContain("Peso é obrigatório");
    });

    it("should return error for weight too low", () => {
      const errors = validateBMIInput({ weightKg: 10, heightCm: 170 });
      expect(errors).toContain("Peso deve estar entre 20 e 300 kg");
    });

    it("should return error for weight too high", () => {
      const errors = validateBMIInput({ weightKg: 400, heightCm: 170 });
      expect(errors).toContain("Peso deve estar entre 20 e 300 kg");
    });

    it("should return error for missing height", () => {
      const errors = validateBMIInput({ weightKg: 70 });
      expect(errors).toContain("Altura é obrigatória");
    });

    it("should return error for height too low", () => {
      const errors = validateBMIInput({ weightKg: 70, heightCm: 50 });
      expect(errors).toContain("Altura deve estar entre 100 e 250 cm");
    });

    it("should return error for height too high", () => {
      const errors = validateBMIInput({ weightKg: 70, heightCm: 300 });
      expect(errors).toContain("Altura deve estar entre 100 e 250 cm");
    });

    it("should return empty array for valid input", () => {
      const errors = validateBMIInput({ weightKg: 70, heightCm: 170 });
      expect(errors).toHaveLength(0);
    });
  });

  describe("getBMIClassification", () => {
    it("should return correct classification for underweight", () => {
      const result = getBMIClassification(17);
      expect(result.label).toBe("Abaixo do peso");
      expect(result.color).toBe("#3B82F6");
    });

    it("should return correct classification for normal weight", () => {
      const result = getBMIClassification(22);
      expect(result.label).toBe("Peso normal");
      expect(result.color).toBe("#22C55E");
    });

    it("should return correct classification for overweight", () => {
      const result = getBMIClassification(27);
      expect(result.label).toBe("Sobrepeso");
      expect(result.color).toBe("#F59E0B");
    });

    it("should return correct classification for obesity I", () => {
      const result = getBMIClassification(32);
      expect(result.label).toBe("Obesidade I");
      expect(result.color).toBe("#EF4444");
    });

    it("should return correct classification for obesity II", () => {
      const result = getBMIClassification(37);
      expect(result.label).toBe("Obesidade II");
      expect(result.color).toBe("#DC2626");
    });

    it("should return correct classification for obesity III", () => {
      const result = getBMIClassification(42);
      expect(result.label).toBe("Obesidade III");
      expect(result.color).toBe("#991B1B");
    });
  });

  describe("getBMICautions", () => {
    it("should return caution for overweight with possible muscle mass", () => {
      const cautions = getBMICautions(27, 85, 170);
      expect(cautions.length).toBeGreaterThan(0);
      expect(cautions[0]).toContain("musculação");
    });

    it("should return caution for underweight", () => {
      const cautions = getBMICautions(17, 50, 170);
      expect(cautions.length).toBeGreaterThan(0);
      expect(cautions[0]).toContain("desnutrição");
    });

    it("should return empty array for normal weight", () => {
      const cautions = getBMICautions(22, 70, 175);
      expect(cautions).toHaveLength(0);
    });
  });
});
