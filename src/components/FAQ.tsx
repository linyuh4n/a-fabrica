import { ChevronDown } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quais modalidades a academia oferece?",
    answer: "A A Fábrica oferece duas modalidades principais: <strong>Musculação</strong> com área completa de equipamentos e pesos livres, e <strong>Jiu-Jitsu</strong> com a equipe <strong>Carlson Gracie</strong>. Ambas as modalidades funcionam no mesmo endereço.",
  },
  {
    question: "Quais são os planos de musculação?",
    answer: "Temos planos tradicionais (Mensal R$ 145,00, Trimestral R$ 359,70, Semestral R$ 659,40, Anual R$ 1.138,80) e planos especiais (Universitário, Master 60+, Kids) com valores a confirmar. Consulte a seção de planos ou entre em contato para detalhes.",
  },
  {
    question: "Quais são os planos de Jiu-Jitsu?",
    answer: "Os planos de Jiu-Jitsu Carlson Gracie são: Mensal R$ 180,00, Trimestral R$ 499,00 (economia de R$ 41,00) e Semestral R$ 899,00 (economia de R$ 181,00). Valores sujeitos a confirmação - entre em contato para condições atuais.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "A academia funciona: <strong>Segunda a sexta</strong> das 06:00 às 22:00, <strong>Sábado</strong> das 09:00 às 17:00, <strong>Domingos e feriados</strong> das 09:00 às 13:00. <em>Estes são os horários de funcionamento da academia, não a grade de aulas de Jiu-Jitsu.</em>",
  },
  {
    question: "Onde fica a A Fábrica?",
    answer: "Rua Leopoldo Fores, 38 — Uvaranas, Ponta Grossa — PR, CEP 84030-120. Use o botão \"Ver no Mapa\" na seção de localização para abrir no Google Maps.",
  },
  {
    question: "Como faço para conhecer a academia?",
    answer: "Você pode visitar a academia durante o horário de funcionamento. Recomendamos entrar em contato pelo WhatsApp para agendar uma visita guiada e tirar todas as dúvidas sobre planos e modalidades.",
  },
  {
    question: "Como entrar em contato?",
    answer: "Pelo WhatsApp: (42) 99124-6560 ou clique em qualquer botão \"Fale Conosco\" no site. Também pode nos seguir no Instagram: @fabrica.academia.",
  },
  {
    question: "Como posso começar a treinar?",
    answer: "Escolha a modalidade e o plano de seu interesse, entre em contato pelo WhatsApp para confirmar valores e condições atuais, agende sua primeira visita e venha conhecer a estrutura. Nossa equipe vai orientar tudo o que você precisa para começar.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <h2 id="faq-title" className="section-title">PERGUNTAS FREQUENTES</h2>
          <p className="section-subtitle">
            Dúvidas comuns sobre a academia, planos e modalidades
          </p>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={index} className="accordion-item">
              <summary className="accordion-trigger">
                {item.question}
                <ChevronDown className="accordion-icon" aria-hidden="true" width={24} height={24} />
              </summary>
              <div className="accordion-content">
                <div className="accordion-content-inner" dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </details>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <a
            href={generateWhatsAppLink({ message: "Olá! Tenho uma dúvida que não está na FAQ. Podem me ajudar?" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-red"
          >
            NÃO ENCONTROU SUA RESPOSTA? FALE CONOSCO
          </a>
        </div>
      </div>
    </section>
  );
}
