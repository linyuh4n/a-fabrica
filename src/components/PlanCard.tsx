import { Check, AlertCircle } from "lucide-react";
import { formatCurrency, formatInstallments } from "@/lib/formatting";
import { openWhatsApp } from "@/lib/whatsapp";
import type { GymPlan, BjjPlan } from "@/types/plans";
import "./PlanCard.css";

interface PlanCardProps {
  plan: GymPlan | BjjPlan;
  type: "gym" | "bjj";
  featured?: boolean;
}

export function PlanCard({ plan, type, featured = false }: PlanCardProps) {
  const isPending = !plan.isConfirmed || !plan.isPublic;
  const hasInstallments = plan.installments !== null;
  const hasSavings = plan.savings !== null && plan.savings > 0;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isPending) {
      openWhatsApp({ message: plan.whatsappMessage });
    }
  };

  const periodLabels: Record<string, string> = {
    monthly: "/mês",
    quarterly: "/trimestre",
    semiannual: "/semestre",
    annual: "/ano",
    pending: "",
  };

  return (
    <article 
      className={`plan-card ${featured ? "featured" : ""} ${isPending ? "pending" : ""}`}
      data-plan-id={plan.id}
    >
      {(featured || isPending) && (
        <span className={`plan-badge badge ${isPending ? "badge-primary" : "badge-primary"}`}>
          {featured ? "DESTAQUE" : "PENDENTE"}
        </span>
      )}

      <h3 className="plan-name">{plan.name}</h3>
      
      <div className="plan-price">
        {formatCurrency(plan.totalPrice)}
        <span className="plan-period">{periodLabels[plan.period] || ""}</span>
      </div>

      {hasInstallments && plan.installments && (
        <div className="plan-installments">
          {formatInstallments(plan.installments.count, plan.installments.value)}
        </div>
      )}

      {hasSavings && plan.savingsDescription && (
        <div className="plan-savings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span>{plan.savingsDescription}</span>
        </div>
      )}

      {plan.condition && !isPending && (
        <div className="plan-condition">
          <AlertCircle width="16" height="16" aria-hidden="true" />
          <span>{plan.condition}</span>
        </div>
      )}

      <div className="plan-features">
        {type === "gym" && (
          <>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Acesso à área de musculação</span>
            </div>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Uso de equipamentos e pesos livres</span>
            </div>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Vestiários e chuveiros</span>
            </div>
          </>
        )}
        {type === "bjj" && (
          <>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Aulas de Jiu-Jitsu Carlson Gracie</span>
            </div>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Acesso ao tatame</span>
            </div>
            <div className="plan-feature">
              <Check width="20" height="20" aria-hidden="true" />
              <span>Vestiários e chuveiros</span>
            </div>
          </>
        )}
      </div>

      <button
        className={`btn btn-primary ${isPending ? "btn-disabled" : ""}`}
        onClick={handleWhatsAppClick}
        disabled={isPending}
        aria-disabled={isPending}
        aria-label={isPending 
          ? `Plano ${plan.name} - informações pendentes de confirmação` 
          : `Quero o plano ${plan.name}`}
      >
        {isPending ? "AGUARDANDO CONFIRMAÇÃO" : "QUERO ESTE PLANO"}
      </button>

      {isPending && plan.condition && (
        <div className="pending-notice" role="alert">
          <AlertCircle width="20" height="20" aria-hidden="true" />
          <p>
            <strong>Informações pendentes:</strong> {plan.condition}. 
            Entre em contato pelo WhatsApp para detalhes atualizados.
          </p>
        </div>
      )}
    </article>
  );
}
