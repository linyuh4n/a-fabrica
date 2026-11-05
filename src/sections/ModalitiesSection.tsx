import { academyConfig } from "@/config/academy";
import { ModalityCard } from "@/components/ModalityCard";
import { SectionTitle } from "@/components/SectionTitle";
import "./ModalitiesSection.css";

interface Modality {
  id: string;
  name: string;
  description: string;
  team?: string;
  ctaText: string;
  ctaTarget: string;
}

export function ModalitiesSection() {
  return (
    <section id="modalidades" className="section" aria-labelledby="modalities-title">
      <div className="container">
        <SectionTitle 
          title="MODALIDADES" 
          subtitle="Escolha a modalidade ideal para seus objetivos. Musculação para força e estética, Jiu-Jitsu para técnica e disciplina."
        />

        <div className="modalities-grid">
          {academyConfig.modalities.map((modality: Modality) => (
            <ModalityCard key={modality.id} modality={modality} />
          ))}
        </div>
      </div>
    </section>
  );
}
