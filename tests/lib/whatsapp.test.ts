import { describe, it, expect, vi } from "vitest";
import { generateWhatsAppLink, openWhatsApp, createGymPlanMessage, createBjjPlanMessage, createModalityMessage } from "@/lib/whatsapp";

describe("WhatsApp Utilities", () => {
  describe("generateWhatsAppLink", () => {
    it("should generate correct WhatsApp link with default message", () => {
      const link = generateWhatsAppLink();
      // encodeURIComponent does NOT encode ! (RFC 3986 unreserved chars: A-Z a-z 0-9 - _ . ~ ! * ' ( ))
      expect(link).toBe("https://wa.me/5542991246560?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20A%20F%C3%A1brica%20e%20saber%20mais%20sobre%20os%20planos%20e%20modalidades.");
    });

    it("should generate link with custom message", () => {
      const link = generateWhatsAppLink({ message: "Mensagem personalizada" });
      expect(link).toContain("text=Mensagem%20personalizada");
    });

    it("should generate link with custom phone number", () => {
      const link = generateWhatsAppLink({ phoneNumber: "5511999999999" });
      expect(link).toContain("wa.me/5511999999999");
    });

    it("should encode special characters", () => {
      const link = generateWhatsAppLink({ message: "Olá! Como vai? 100%" });
      // encodeURIComponent does NOT encode ! (unreserved), encodes space as %20, ? as %3F, % as %25
      expect(link).toContain("Ol%C3%A1!%20Como%20vai%3F%20100%25");
    });
  });

  describe("openWhatsApp", () => {
    it("should call window.open with correct parameters", () => {
      const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
      
      openWhatsApp({ message: "Teste" });
      
      expect(openSpy).toHaveBeenCalledWith(
        "https://wa.me/5542991246560?text=Teste",
        "_blank",
        "noopener,noreferrer"
      );
      
      openSpy.mockRestore();
    });
  });

  describe("createGymPlanMessage", () => {
    it("should create message for gym plan", () => {
      const message = createGymPlanMessage("Plano Anual");
      expect(message).toBe("Olá! Tenho interesse no Plano Anual de musculação da A Fábrica. Gostaria de mais informações.");
    });
  });

  describe("createBjjPlanMessage", () => {
    it("should create message for BJJ plan", () => {
      const message = createBjjPlanMessage("Mensal");
      expect(message).toBe("Olá! Tenho interesse no plano Mensal de Jiu-Jitsu da A Fábrica. Gostaria de conhecer as condições e horários.");
    });
  });

  describe("createModalityMessage", () => {
    it("should create message for modality", () => {
      const message = createModalityMessage("Musculação");
      expect(message).toBe("Olá! Tenho interesse na modalidade Musculação da A Fábrica. Gostaria de mais informações.");
    });
  });
});
