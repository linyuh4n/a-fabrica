import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navSections = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Modalidades", href: "#modalidades" },
        { label: "Planos", href: "#planos" },
        { label: "Horários", href: "#horarios" },
        //{ label: "Ferramentas", href: "#ferramentas" },
        { label: "Localização", href: "#localizacao" },
      ],
    },
    {
      title: "Modalidades",
      links: [
        { label: "Musculação", href: "#modalidades" },
        { label: "Jiu-Jitsu Carlson Gracie", href: "#modalidades" },
      ],
    },
    {
      title: "Planos",
      links: [
        { label: "Planos de Musculação", href: "#planos-musculacao" },
        { label: "Planos de Jiu-Jitsu", href: "#planos-jiu-jitsu" },
      ],
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/images/logo/logo.jpg" 
                alt="" 
                width="40" 
                height="40" 
                aria-hidden="true"
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <span>A Fábrica</span>
            </div>
            <p className="footer-desc">
              {academyConfig.description}. Musculação e artes marciais em um ambiente 
              dedicado à disciplina, respeito e evolução pessoal.
            </p>
            <div className="footer-social">
              <a
                href={academyConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link instagram"
                aria-label="Siga-nos no Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link whatsapp"
                aria-label="Fale conosco no WhatsApp"
              >
                <MessageSquare width="20" height="20" aria-hidden="true" />
              </a>
            </div>
          </div>

          {navSections.map((section, index) => (
            <nav key={section.title} className="footer-nav" aria-labelledby={`footer-${index}`}>
              <h3 id={`footer-${index}`} className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link" onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-contact">
            <h3 className="footer-title">Contato</h3>
            <address style={{ fontStyle: "normal" }}>
              <div className="footer-contact-item">
                <MapPin width="20" height="20" aria-hidden="true" />
                <span>{academyConfig.address.full}</span>
              </div>
              <div className="footer-contact-item">
                <Clock width="20" height="20" aria-hidden="true" />
                <div>
                  <div>Segunda a sexta: 06:00 às 22:00</div>
                  <div>Sábado: 09:00 às 17:00</div>
                  <div>Domingos e feriados: 09:00 às 13:00</div>
                </div>
              </div>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
                style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", color: "var(--color-text-muted)", textDecoration: "none" }}
              >
                <Phone width="20" height="20" aria-hidden="true" />
                <span>{academyConfig.whatsapp.formatted}</span>
              </a>
              <a
                href={academyConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
                style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", color: "var(--color-text-muted)", textDecoration: "none" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>{academyConfig.instagram.handle}</span>
              </a>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} A Fábrica — Musculação e Artes Marciais. Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacidade" className="footer-bottom-link">Política de Privacidade</a>
            <a href="#termos" className="footer-bottom-link">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
