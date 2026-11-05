import { Calendar, Users, User, Baby } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { SectionTitle } from "@/components/SectionTitle";
import "./BjjScheduleSection.css";

interface ScheduleItem {
  days: string;
  time: string;
}

interface BjjClass {
  id: string;
  title: string;
  icon: React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>;
  schedules: ScheduleItem[];
}

const classesData: BjjClass[] = [
  {
    id: "adulto",
    title: "Jiu-Jitsu Adulto",
    icon: Users as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
    schedules: [
      { days: "Segunda a Sexta", time: "19:30" },
      { days: "Terça, Quinta e Sexta", time: "12:00" },
      { days: "Terça e Quinta", time: "17:00" },
      { days: "Sábado", time: "11:00" },
    ],
  },
  {
    id: "feminino",
    title: "Jiu-Jitsu Exclusivo Feminino",
    icon: User as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
    schedules: [
      { days: "Segunda, Quarta e Sexta", time: "18:30" },
    ],
  },
  {
    id: "kids",
    title: "Jiu-Jitsu Kids",
    icon: Baby as React.ComponentType<{ width?: number; height?: number; ariaHidden?: boolean }>,
    schedules: [
      { days: "Terça e Quinta", time: "18:30" },
    ],
  },
];

export function BjjScheduleSection() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      generateWhatsAppLink({ 
        message: "Olá! Gostaria de saber mais sobre os horários de aulas de Jiu-Jitsu na A Fábrica." 
      }), 
      "_blank", 
      "noopener,noreferrer"
    );
  };

  return (
    <section id="horarios-jiu-jitsu" className="section" aria-labelledby="bjj-schedule-title">
      <div className="container">
        <SectionTitle 
          title="HORÁRIOS DE AULAS DE JIU-JITSU" 
          subtitle="Grade de aulas da equipe Carlson Gracie. Horários sujeitos a alteração - confirme disponibilidade."
        />

        <div className="bjj-classes-grid">
          {classesData.map((bjjClass, index: number) => (
            <article key={bjjClass.id} className="bjj-class-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bjj-class-header">
                <div className="bjj-class-icon">
                  <bjjClass.icon width={28} height={28} ariaHidden={true} />
                </div>
                <h3 className="bjj-class-title">{bjjClass.title}</h3>
              </div>
              
              <ul className="bjj-schedule-list">
                {bjjClass.schedules.map((schedule, sIndex: number) => (
                  <li key={sIndex} className="bjj-schedule-item">
                    <span className="bjj-schedule-days">{schedule.days}</span>
                    <span className="bjj-schedule-time">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="bjj-schedule-note" role="note">
          <Calendar width="20" height="20" aria-hidden="true" style={{ color: "var(--color-accent)", verticalAlign: "middle", marginRight: "var(--space-xs)" }} />
          <strong>Observação:</strong> Horários sujeitos a alteração conforme demanda e disponibilidade de turmas. 
          Confirme a grade atual e disponibilidade de vagas pelo WhatsApp.
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppClick}
            aria-label="Consultar horários de aulas no WhatsApp"
          >
            CONFIRMAR HORÁRIOS E VAGAS
          </button>
        </div>
      </div>
    </section>
  );
}
