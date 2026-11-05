import { ArrowRight } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./HeroSection.css";

export function HeroSection() {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <img 
          src="/images/banners/academia-banner.jpg" 
          alt="" 
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">{academyConfig.hero.title}</h1>
        <p className="hero-subtitle">{academyConfig.hero.subtitle}</p>
        <div className="hero-actions">
          <WhatsAppButton 
            variant="hero" 
            size="lg"
            onClick={handleWhatsAppClick}
          />
          <button 
            className="btn btn-secondary btn-lg"
            onClick={scrollToPlans}
            aria-label="Ver nossos planos de musculação e Jiu-Jitsu"
          >
            {academyConfig.hero.secondaryCta}
            <ArrowRight width="24" height="24" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      <WhatsAppButton variant="float" />
    </section>
  );
}
