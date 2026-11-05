import { Target, Heart, ArrowUpRight, Users, Zap } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { SectionTitle } from "@/components/SectionTitle";
import "./AboutSection.css";

const conceptIcons: Record<string, React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>> = {
  Disciplina: Target as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  Respeito: Heart as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  Superação: ArrowUpRight as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  Evolução: Zap as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  Comunidade: Users as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
};

interface Concept {
  title: string;
  description: string;
}

export function AboutSection() {
  return (
    <section id="sobre" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle 
          title={academyConfig.about.title} 
          subtitle={academyConfig.about.text}
          align="left"
        />

        <div className="about-grid">
          <div className="about-content">
            <p style={{ fontSize: "1.125rem", color: "var(--color-text)", lineHeight: 1.8, marginBottom: "var(--space-xl)" }}>
              {academyConfig.about.text}
            </p>
            
            <div className="concepts-grid">
              {academyConfig.about.concepts.map((concept: Concept, index: number) => {
                const Icon = conceptIcons[concept.title] || Target;
                return (
                  <article key={concept.title} className="concept-card" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="concept-icon">
                      <Icon width={28} height={28} ariaHidden={true} />
                    </div>
                    <h3 className="concept-title">{concept.title.toUpperCase()}</h3>
                    <p className="concept-desc">{concept.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="about-image" aria-hidden="true">
            <img 
              src="/images/banners/academia-banner.jpg" 
              alt="Equipe Carlson Gracie - Material promocional da A Fábrica"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
