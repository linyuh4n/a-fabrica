import { Target, Award, Users, Heart } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { SectionTitle } from "@/components/SectionTitle";
import "./DifferentialsSection.css";

interface Differential {
  id: string;
  title: string;
  description: string;
  icon: "target" | "award" | "users" | "heart";
}

const differentialIcons: Record<string, React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>> = {
  target: Target as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  award: Award as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  users: Users as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
  heart: Heart as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
};

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="section" aria-labelledby="differentials-title">
      <div className="container">
        <SectionTitle 
          title="NOSSOS DIFERENCIAIS" 
          subtitle="O que torna a A Fábrica única para sua jornada de transformação"
        />

        <div className="differentials-grid">
          {academyConfig.differentials.map((diff: Differential, index: number) => {
            const Icon = differentialIcons[diff.icon] || Target;
            return (
              <article key={diff.id} className="differential-card" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="differential-icon">
                  <Icon width={28} height={28} ariaHidden={true} />
                </div>
                <h3 className="differential-title">{diff.title}</h3>
                <p className="differential-desc">{diff.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
