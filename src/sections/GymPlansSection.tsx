import { gymPlanCategories } from "@/config/plans";
import { PlanCard } from "@/components/PlanCard";
import { SectionTitle } from "@/components/SectionTitle";
import type { GymPlan } from "@/types/plans";
import "./GymPlansSection.css";

export function GymPlansSection() {
  return (
    <section id="planos-musculacao" className="section" aria-labelledby="gym-plans-title">
      <div className="container">
        <SectionTitle 
          title="PLANOS DE MUSCULAÇÃO" 
          subtitle="ESCOLHA O PLANO IDEAL PARA SUA EVOLUÇÃO."
        />

        {gymPlanCategories.map((category) => (
          <div key={category.id} className="plans-category">
            <h3 className="plans-category-title">{category.title}</h3>
            <div className="plans-grid">
              {category.plans.map((plan: GymPlan, index: number) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan} 
                  type="gym" 
                  featured={plan.id === "gym-annual" && index === category.plans.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
