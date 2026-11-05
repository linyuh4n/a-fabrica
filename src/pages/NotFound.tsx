import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1 className="not-found-title">PÁGINA NÃO ENCONTRADA</h1>
        <p className="not-found-desc">
          Ops! Parece que esta página não existe ou foi movida. 
          Não se preocupe, podemos te ajudar a encontrar o que procura.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Home width="20" height="20" aria-hidden="true" />
            VOLTAR AO INÍCIO
          </Link>
          <a
            href={generateWhatsAppLink({ message: "Olá! Estava navegando no site e encontrei um erro 404. Podem me ajudar?" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-red"
          >
            <ArrowLeft width="20" height="20" aria-hidden="true" />
            FALE CONOSCO
          </a>
        </div>
      </div>
    </div>
  );
}
