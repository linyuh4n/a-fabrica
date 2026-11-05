import { academyConfig } from "@/config/academy";

export interface WhatsAppLinkOptions {
  message?: string;
  phoneNumber?: string;
}

/**
 * Gera o link do WhatsApp com a mensagem codificada
 */
export function generateWhatsAppLink(options: WhatsAppLinkOptions = {}): string {
  const phone = options.phoneNumber || academyConfig.whatsapp.number;
  const message = options.message || academyConfig.whatsapp.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Abre o WhatsApp em nova aba com os atributos de segurança
 */
export function openWhatsApp(options: WhatsAppLinkOptions = {}): void {
  const link = generateWhatsAppLink(options);
  window.open(link, "_blank", "noopener,noreferrer");
}

/**
 * Cria mensagem personalizada para planos de musculação
 */
export function createGymPlanMessage(planName: string): string {
  return `Olá! Tenho interesse no ${planName} de musculação da A Fábrica. Gostaria de mais informações.`;
}

/**
 * Cria mensagem personalizada para planos de Jiu-Jitsu
 */
export function createBjjPlanMessage(planName: string): string {
  return `Olá! Tenho interesse no plano ${planName} de Jiu-Jitsu da A Fábrica. Gostaria de conhecer as condições e horários.`;
}

/**
 * Cria mensagem para modalidades
 */
export function createModalityMessage(modalityName: string): string {
  return `Olá! Tenho interesse na modalidade ${modalityName} da A Fábrica. Gostaria de mais informações.`;
}

/**
 * Cria mensagem genérica de contato
 */
export function createContactMessage(context?: string): string {
  const base = academyConfig.whatsapp.defaultMessage;
  if (context) {
    return `${base} (${context})`;
  }
  return base;
}
