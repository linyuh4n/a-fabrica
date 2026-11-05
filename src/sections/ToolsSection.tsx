import { Dumbbell, HeartPulse, Flame } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
// import { ProteinCalculator } from "@/calculators/ProteinCalculator";
// import { BMICalculator } from "@/calculators/BMICalculator";
// import { CalorieCalculator } from "@/calculators/CalorieCalculator";
import "./ToolsSection.css";

type IconProps = { width?: number; height?: number; ariaHidden?: boolean };

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  color: string;
}

const tools: Tool[] = [
  {
    id: "proteinas",
    title: "Calculadora de Proteínas",
    description: "Descubra sua necessidade diária de proteína baseada no peso, objetivo e dieta",
    icon: Dumbbell as React.ComponentType<IconProps>,
    color: "var(--color-accent)",
  },
  {
    id: "imc",
    title: "Calculadora de IMC",
    description: "Calcule seu Índice de Massa Corporal e veja a classificação OMS",
    icon: HeartPulse as React.ComponentType<IconProps>,
    color: "#3B82F6",
  },
  {
    id: "calorias",
    title: "Calculadora de Calorias",
    description: "Estime sua Taxa Metabólica Basal e Gasto Energético Total (Mifflin-St Jeor)",
    icon: Flame as React.ComponentType<IconProps>,
    color: "#F59E0B",
  },
];

export function ToolsSection() {
  return (
    <section id="ferramentas" className="section" aria-labelledby="tools-title">
      <div className="container">
        <SectionTitle 
          title="FERRAMENTAS PARA SUA EVOLUÇÃO" 
          subtitle="Utilize nossas calculadoras gratuitas e acompanhe melhor sua jornada"
        />

        <div className="tools-preview">
          {tools.map((tool, index: number) => (
            <article key={tool.id} className="tool-preview-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="tool-preview-icon" style={{ "--icon-color": tool.color } as React.CSSProperties}>
                <tool.icon width={28} height={28} ariaHidden={true} />
              </div>
              <h3 className="tool-preview-title">{tool.title}</h3>
              <p className="tool-preview-desc">{tool.description}</p>
              <a href={`#calculadora-${tool.id}`} className="tool-preview-link">
                Acessar calculadora
              </a>
            </article>
          ))}
        </div>

        {/* <div style={{ marginTop: "var(--space-4xl)" }}>
           <ProteinCalculator />
           <BMICalculator />
          <CalorieCalculator />
        </div> */}
      </div>
    </section>
  );
}
