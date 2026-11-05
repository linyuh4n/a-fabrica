import { describe, it, expect } from "vitest";
import { formatCurrency, formatNumber, formatInstallments, formatDuration } from "@/lib/formatting";

// Intl.NumberFormat for pt-BR currency uses non-breaking space (U+00A0)
const NBSP = "\u00A0";

describe("Formatting Utilities", () => {
  describe("formatCurrency", () => {
    it("should format Brazilian Real correctly", () => {
      expect(formatCurrency(145)).toBe(`R$${NBSP}145,00`);
      expect(formatCurrency(359.7)).toBe(`R$${NBSP}359,70`);
      expect(formatCurrency(1138.8)).toBe(`R$${NBSP}1.138,80`);
    });

    it("should handle zero", () => {
      expect(formatCurrency(0)).toBe(`R$${NBSP}0,00`);
    });

    it("should handle decimals", () => {
      expect(formatCurrency(100.5)).toBe(`R$${NBSP}100,50`);
      expect(formatCurrency(100.05)).toBe(`R$${NBSP}100,05`);
    });
  });

  describe("formatNumber", () => {
    it("should format numbers with thousand separator", () => {
      expect(formatNumber(1000)).toBe("1.000");
      expect(formatNumber(10000)).toBe("10.000");
      expect(formatNumber(1000000)).toBe("1.000.000");
    });

    it("should handle decimals", () => {
      expect(formatNumber(1000.5, 1)).toBe("1.000,5");
      expect(formatNumber(1000.55, 2)).toBe("1.000,55");
    });

    it("should handle small numbers", () => {
      expect(formatNumber(100)).toBe("100");
      expect(formatNumber(99)).toBe("99");
    });
  });

  describe("formatInstallments", () => {
    it("should format installment string correctly", () => {
      expect(formatInstallments(2, 179.85)).toBe(`2x de R$${NBSP}179,85`);
      expect(formatInstallments(3, 219.8)).toBe(`3x de R$${NBSP}219,80`);
      expect(formatInstallments(6, 189.8)).toBe(`6x de R$${NBSP}189,80`);
    });
  });

  describe("formatDuration", () => {
    it("should format months correctly", () => {
      expect(formatDuration(1)).toBe("1 mês");
      expect(formatDuration(3)).toBe("3 meses");
      expect(formatDuration(6)).toBe("6 meses");
      expect(formatDuration(12)).toBe("1 ano");
      expect(formatDuration(24)).toBe("2 anos");
    });
  });
});
