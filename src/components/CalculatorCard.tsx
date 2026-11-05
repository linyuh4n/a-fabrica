import { Copy, Share2 } from "lucide-react";
import "./CalculatorCard.css";

interface CalculatorCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  result?: React.ReactNode;
  onCalculate: (e: React.FormEvent<HTMLFormElement>) => void;
  onClear: () => void;
  onShare?: () => void;
  isCalculating?: boolean;
  hasResult?: boolean;
}

export function CalculatorCard({ 
  title, 
  description, 
  children, 
  result, 
  onCalculate, 
  onClear, 
  onShare,
  isCalculating = false,
  hasResult = false 
}: CalculatorCardProps) {
  const handleCopy = async () => {
    // Implementation would copy result to clipboard
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else if (navigator.share) {
      navigator.share({
        title: title,
        text: `Resultado da calculadora: ${title}`,
      }).catch(() => {});
    }
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <div>
          <h3 className="calculator-title">{title}</h3>
          <p className="calculator-description">{description}</p>
        </div>
      </div>

      <form className="calculator-form" onSubmit={onCalculate}>
        {children}
        
        <div className="calculator-actions">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isCalculating}
            aria-busy={isCalculating}
          >
            {isCalculating ? "CALCULANDO..." : "CALCULAR"}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onClear}
            disabled={isCalculating}
          >
            LIMPAR
          </button>
        </div>
      </form>

      {hasResult && result && (
        <div className="calculator-result show" role="region" aria-live="polite" aria-label="Resultado do cálculo">
          {result}
          <div className="calculator-result-actions">
            <button 
              type="button" 
              className="copy-btn"
              onClick={handleCopy}
              aria-label="Copiar resultado"
              title="Copiar resultado"
            >
              <Copy width="18" height="18" aria-hidden="true" />
            </button>
            <button 
              type="button" 
              className="share-btn"
              onClick={handleShare}
              aria-label="Compartilhar resultado"
              title="Compartilhar"
            >
              <Share2 width="18" height="18" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
