import { ArrowRight } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./CTASection.css";

export function CTASection() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink({ message: "Olá! Quero começar minha transformação na A Fábrica. Como faço para me matricular?" }), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cta" className="cta-section" aria-labelledby="cta-title">
      <div className="cta-bg" aria-hidden="true">
        <img 
          src="/images/banners/academia-banner.jpg" 
          alt="" 
          loading="lazy"
        />
      </div>
      <div className="cta-overlay" aria-hidden="true" />
      
      <div className="container">
        <div className="cta-content">
          <h2 id="cta-title" className="cta-title">{academyConfig.cta.title}</h2>
          <p className="cta-subtitle">{academyConfig.cta.subtitle}</p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppClick}
            aria-label="Fale com a A Fábrica no WhatsApp"
          >
            {academyConfig.cta.buttonText}
            <ArrowRight width="24" height="24" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
