import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";
import { academyConfig } from "@/config/academy";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./Header.css";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Planos", href: "#planos-musculacao" },
  { label: "Horários", href: "#horarios" },
  //{ label: "Ferramentas", href: "#ferramentas" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "#home") return location.pathname === "/";
    return location.hash === href;
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} role="banner">
      <div className="header-inner">
        <Link to="/" className="header-logo" aria-label="A Fábrica - Página inicial">
          <img 
            src="/images/logo/logo.jpg" 
            alt="" 
            width="40" 
            height="40" 
            aria-hidden="true"
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <span>A Fábrica</span>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`} role="navigation" aria-label="Navegação principal">
          <ul>
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  className={`header-nav-link ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="header-nav-instagram">
              <a
                href={academyConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header-nav-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageSquare width="18" height="18" aria-hidden="true" />
            <span>FALE CONOSCO</span>
          </a>
          <button
            className="header-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X width="24" height="24" aria-hidden="true" /> : <Menu width="24" height="24" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
