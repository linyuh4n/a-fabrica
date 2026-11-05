import { MessageSquare } from "lucide-react";
import { generateWhatsAppLink, openWhatsApp } from "@/lib/whatsapp";
import "./WhatsAppButton.css";

interface WhatsAppButtonProps {
  variant?: "float" | "inline" | "hero" | "section";
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function WhatsAppButton({ 
  variant = "inline", 
  message, 
  label, 
  size = "md", 
  iconOnly = false,
  className = "",
  onClick
}: WhatsAppButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      e.preventDefault();
      openWhatsApp({ message });
    }
  };

  const link = generateWhatsAppLink({ message });

  const defaultLabels: Record<string, string> = {
    float: "",
    inline: "FALE CONOSCO",
    hero: "QUERO CONHECER A ACADEMIA",
    section: "FALE CONOSCO",
  };

  const displayLabel = label || defaultLabels[variant] || "FALE CONOSCO";

  if (variant === "float") {
    return (
      <div className={`whatsapp-float ${className}`} role="button" tabIndex={0} onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(e as any); } }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageSquare width="32" height="32" aria-hidden="true" />
        </a>
      </div>
    );
  }

  const btnClasses = [
    "btn",
    "btn-whatsapp",
    `btn-${size}`,
    variant === "hero" && "btn-lg",
    className,
  ].filter(Boolean).join(" ");

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={btnClasses}
      onClick={handleClick}
      aria-label={iconOnly ? "Fale conosco no WhatsApp" : undefined}
    >
      <MessageSquare width={size === "sm" ? 16 : size === "lg" ? 24 : 20} height={size === "sm" ? 16 : size === "lg" ? 24 : 20} aria-hidden="true" />
      {!iconOnly && <span>{displayLabel}</span>}
    </a>
  );
}
