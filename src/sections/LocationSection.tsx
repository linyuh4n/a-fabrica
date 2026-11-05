import { MapPin, Phone, MessageSquare, Navigation, Clock } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { SectionTitle } from "@/components/SectionTitle";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./LocationSection.css";

type IconProps = { width?: number; height?: number; "aria-hidden"?: boolean };

interface ContactItem {
  icon: React.ComponentType<IconProps>;
  title: string;
  content: string;
  link?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: MapPin as React.ComponentType<IconProps>,
    title: "Endereço",
    content: academyConfig.address.full,
  },
  {
    icon: Clock as React.ComponentType<IconProps>,
    title: "Horários",
    content: "Segunda a sexta: 06:00 às 22:00\nSábado: 09:00 às 17:00\nDomingos e feriados: 09:00 às 13:00",
  },
  {
    icon: Phone as React.ComponentType<IconProps>,
    title: "WhatsApp",
    content: academyConfig.whatsapp.formatted,
    link: generateWhatsAppLink(),
  },
  {
    icon: MessageSquare as React.ComponentType<IconProps>,
    title: "Instagram",
    content: academyConfig.instagram.handle,
    link: academyConfig.instagram.url,
  },
];

export function LocationSection() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  const handleMapsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const query = encodeURIComponent(academyConfig.address.mapsQuery);
    window.open(`https://maps.app.goo.gl/z8gTkoFnPNd4VGdW7`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="localizacao" className="section" aria-labelledby="location-title">
      <div className="container">
        <SectionTitle 
          title="VENHA CONHECER A FÁBRICA" 
          subtitle="Estamos localizados em Uvaranas, Ponta Grossa. Venha nos visitar!"
        />

        <div className="location-grid">
          <div className="location-info">
            {contactItems.map((item) => (
              <div key={item.title} className="location-card">
                <div className="location-icon" style={{ "--icon-color": item.link ? "#25D366" : "var(--color-accent)" } as React.CSSProperties}>
                  <item.icon width={24} height={24} aria-hidden={true} />
                </div>
                <div className="location-content">
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="location-actions">
              <button 
                className="btn btn-whatsapp btn-lg"
                onClick={handleWhatsAppClick}
                aria-label="Fale conosco no WhatsApp"
              >
                <MessageSquare width={24} height={24} aria-hidden={true} />
                FALE CONOSCO NO WHATSAPP
              </button>
              <button 
                className="btn btn-outline-red btn-lg"
                onClick={handleMapsClick}
                aria-label="Ver localização no Google Maps"
              >
                <Navigation width={24} height={24} aria-hidden={true} />
                VER NO MAPA
              </button>
              <a
                href={academyConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                aria-label="Siga-nos no Instagram"
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                SIGA NO INSTAGRAM
              </a>
            </div>
          </div>

          {/*<div className="location-map">
            <iframe
              title="Localização da A Fábrica - Google Maps"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD&q=${encodeURIComponent(academyConfig.address.mapsQuery)}`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p style={{ marginTop: "var(--space-md)", textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
              Mapa fornecido pelo Google Maps. A localização exata da entrada pode variar.
            </p>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
