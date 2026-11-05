import { ArrowRight } from "lucide-react";
import { academyConfig } from "@/config/academy";
import "./ModalityCard.css";

interface ModalityCardProps {
  modality: typeof academyConfig.modalities[0];
}

export function ModalityCard({ modality }: ModalityCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (modality.ctaTarget.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(modality.ctaTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const imageMap: Record<string, string> = {
    "musculacao": "/images/banners/academia-banner.jpg",
    "jiu-jitsu": "/images/gallery/carlson-gracie.jpg",
  };

  const imageSrc = imageMap[modality.id] || "/images/banners/academia-banner.jpeg";

  return (
    <article className="modality-card" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(e as any); } }}>
      <div className="modality-card-bg">
        <img 
          src={imageSrc} 
          alt="" 
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div className="modality-card-overlay">
        {modality.team && (
          <span className="modality-team-badge">{modality.team}</span>
        )}
        <h3 className="modality-card-title">{modality.name}</h3>
        <p className="modality-card-desc">{modality.description}</p>
        <button 
          className="btn btn-primary modality-cta"
          onClick={(e) => { e.stopPropagation(); handleClick(e); }}
          aria-label={modality.ctaText}
        >
          {modality.ctaText}
          <ArrowRight width="20" height="20" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
