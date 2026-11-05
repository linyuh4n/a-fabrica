import { generateWhatsAppLink } from "@/lib/whatsapp";
import { SectionTitle } from "@/components/SectionTitle";
import "./OpeningHoursSection.css";

interface HoursItem {
  label: string;
  time: string;
  type: "weekday" | "saturday" | "holiday";
  days: string;
}

const hoursData: HoursItem[] = [
  { 
    label: "Segunda a sexta-feira", 
    time: "06:00 às 22:00", 
    type: "weekday",
    days: "Segunda, Terça, Quarta, Quinta, Sexta",
  },
  { 
    label: "Sábado", 
    time: "09:00 às 17:00", 
    type: "saturday",
    days: "Sábado",
  },
  { 
    label: "Domingos e feriados", 
    time: "09:00 às 13:00", 
    type: "holiday",
    days: "Domingos e feriados nacionais",
  },
];

const typeLabels: Record<HoursItem["type"], string> = {
  weekday: "DIAS ÚTEIS",
  saturday: "SÁBADO",
  holiday: "DOMINGOS E FERIADOS",
};

const typeColors: Record<HoursItem["type"], string> = {
  weekday: "var(--color-accent)",
  saturday: "#F59E0B",
  holiday: "#3B82F6",
};

export function OpeningHoursSection() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink({ message: "Olá! Gostaria de saber mais sobre os horários de aulas de Jiu-Jitsu na A Fábrica." }), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="horarios" className="section" aria-labelledby="hours-title">
      <div className="container">
        <SectionTitle 
          title="HORÁRIOS MUSCULAÇÃO" 
          subtitle="Horários de funcionamento da academia de musculação."
        />

        <div className="hours-grid">
          {hoursData.map((hour, index: number) => (
            <article key={hour.label} className="hours-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="hours-type" style={{ "--type-color": typeColors[hour.type] } as React.CSSProperties}>
                {typeLabels[hour.type]}
              </div>
              <h3 className="hours-day">{hour.label}</h3>
              <div className="hours-time">{hour.time}</div>
              <p className="hours-days" style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginTop: "var(--space-xs)" }}>
                {hour.days}
              </p>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppClick}
            aria-label="Consultar horários de aulas no WhatsApp"
          >
            CONSULTAR HORÁRIOS DE AULAS
          </button>
        </div>
      </div>
    </section>
  );
}
