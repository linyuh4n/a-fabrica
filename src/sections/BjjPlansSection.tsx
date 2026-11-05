import { allPublicBjjPlans } from "@/config/plans";
import { PlanCard } from "@/components/PlanCard";
import { SectionTitle } from "@/components/SectionTitle";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./BjjPlansSection.css";

export function BjjPlansSection() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink({ message: "Olá! Tenho interesse nos planos de Jiu-Jitsu da A Fábrica. Gostaria de conhecer as condições e horários." }), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="planos-jiu-jitsu" className="section" style={{ backgroundColor: "var(--color-surface)" }} aria-labelledby="bjj-plans-title">
      <div className="container">
        <SectionTitle 
          title="JIU-JITSU — CARLSON GRACIE" 
          subtitle="JIU-JITSU TRANSFORMA CORPO, MENTE E VIDA!"
        />

        <div className="plans-grid">
          {allPublicBjjPlans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              type="bjj" 
              featured={plan.id === "bjj-semiannual"}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppClick}
            aria-label="Quero treinar Jiu-Jitsu - abrir WhatsApp"
          >
            QUERO TREINAR JIU-JITSU
          </button>
        </div>
      </div>
    </section>
  );
}
