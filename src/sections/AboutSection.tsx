import { academyConfig } from "@/config/academy";
import { SectionTitle } from "@/components/SectionTitle";
import "./AboutSection.css";

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
              {academyConfig.about.details}
            </p>
            
            <div className="concepts-grid">
              {academyConfig.about.concepts.map((concept: { title: string; description: string }, index: number) => (
                <article key={concept.title} className="concept-card" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="concept-title">{concept.title.toUpperCase()}</h3>
                  <p className="concept-desc">{concept.description}</p>
                </article>
              ))}
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
