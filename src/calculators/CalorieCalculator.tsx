import { useState, FormEvent } from "react";
import { AlertCircle, Info, Flame, Zap } from "lucide-react";
import { calculateCalories, validateCalorieInput, getWeightLossTargets, getWeightGainTargets, type CalorieCalculatorInput, type CalorieCalculatorResult } from "@/lib/calculations/calories";
import { formatNumber } from "@/lib/formatting";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { CalculatorCard } from "@/components/CalculatorCard";
import "./CalorieCalculator.css";

const activityLevels = [
  { value: "sedentary", label: "Sedentário", description: "Pouco ou nenhum exercício" },
  { value: "light", label: "Leve", description: "Exercício leve 1-3 dias/semana" },
  { value: "moderate", label: "Moderado", description: "Exercício moderado 3-5 dias/semana" },
  { value: "very", label: "Intenso", description: "Exercício intenso 6-7 dias/semana" },
  { value: "extra", label: "Muito intenso", description: "Exercício muito intenso, trabalho físico pesado" },
];

const sexOptions = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Feminino" },
];

export function CalorieCalculator() {
  const [formData, setFormData] = useState<CalorieCalculatorInput>({
    age: 25,
    weightKg: 70,
    heightCm: 170,
    sex: "male",
    activityLevel: "moderate",
  });
  const [result, setResult] = useState<CalorieCalculatorResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (field: keyof CalorieCalculatorInput, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateCalorieInput(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsCalculating(true);
    setTimeout(() => {
      const calculated = calculateCalories(formData);
      setResult(calculated);
      setIsCalculating(false);
    }, 300);
  };

  const handleClear = () => {
    setFormData({ age: 25, weightKg: 70, heightCm: 170, sex: "male", activityLevel: "moderate" });
    setResult(null);
    setErrors([]);
  };

  const handleShare = () => {
    if (result) {
      const text = `Calculadora de Calorias - A Fábrica\nIdade: ${formData.age} anos\nSexo: ${formData.sex === "male" ? "Masculino" : "Feminino"}\nPeso: ${formData.weightKg}kg\nAltura: ${formData.heightCm}cm\nAtividade: ${activityLevels.find(a => a.value === formData.activityLevel)?.label}\nTMB: ${result.bmrText}\nGET: ${result.tdeeText}`;
      window.open(generateWhatsAppLink({ message: text }), "_blank", "noopener,noreferrer");
    }
  };

  const lossTargets = result ? getWeightLossTargets(result.tdee) : null;
  const gainTargets = result ? getWeightGainTargets(result.tdee) : null;

  return (
    <section id="calculadora-calorias" className="section" aria-labelledby="calorie-calc-title">
      <div className="container">
        <div className="section-header">
          <h2 id="calorie-calc-title" className="section-title">CALCULADORA DE CALORIAS</h2>
          <p className="section-subtitle">
            Calcule sua Taxa Metabólica Basal e Gasto Energético Total Estimado
          </p>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <CalculatorCard
          title="Calculadora de Calorias (Mifflin-St Jeor)"
          description="Preencha seus dados para estimar suas necessidades calóricas diárias baseadas na equação de Mifflin-St Jeor."
          onCalculate={handleSubmit}
          onClear={handleClear}
          onShare={handleShare}
          isCalculating={isCalculating}
          hasResult={!!result}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-lg)" }}>
            <div className="form-group">
              <label htmlFor="calorie-age" className="form-label">
                Idade (anos) <span aria-hidden="true">*</span>
              </label>
              <input
                type="number"
                id="calorie-age"
                className="form-input"
                placeholder="Ex: 25"
                step="1"
                min="15"
                max="100"
                value={formData.age}
                onChange={(e) => handleChange("age", parseInt(e.target.value) || 0)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="calorie-weight" className="form-label">
                Peso (kg) <span aria-hidden="true">*</span>
              </label>
              <input
                type="number"
                id="calorie-weight"
                className="form-input"
                placeholder="Ex: 70"
                step="0.1"
                min="30"
                max="300"
                value={formData.weightKg}
                onChange={(e) => handleChange("weightKg", parseFloat(e.target.value) || 0)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="calorie-height" className="form-label">
                Altura (cm) <span aria-hidden="true">*</span>
              </label>
              <input
                type="number"
                id="calorie-height"
                className="form-input"
                placeholder="Ex: 170"
                step="1"
                min="100"
                max="250"
                value={formData.heightCm}
                onChange={(e) => handleChange("heightCm", parseInt(e.target.value) || 0)}
                required
              />
            </div>

            <fieldset className="form-group">
              <legend className="form-label">Sexo (para a equação) <span aria-hidden="true">*</span></legend>
              <div className="radio-group" style={{ gridTemplateColumns: "repeat(2, 1fr)" }} role="radiogroup" aria-label="Sexo">
                {sexOptions.map(option => (
                  <label 
                    key={option.value} 
                    className={`radio-option ${formData.sex === option.value ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="sex"
                      value={option.value}
                      checked={formData.sex === option.value}
                      onChange={() => handleChange("sex", option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend className="form-label">Nível de atividade <span aria-hidden="true">*</span></legend>
              <div className="radio-group" role="radiogroup" aria-label="Nível de atividade">
                {activityLevels.map(option => (
                  <label 
                    key={option.value} 
                    className={`radio-option ${formData.activityLevel === option.value ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="activityLevel"
                      value={option.value}
                      checked={formData.activityLevel === option.value}
                      onChange={() => handleChange("activityLevel", option.value)}
                      aria-describedby={`${option.value}-desc`}
                    />
                    <div>
                      <div style={{ fontWeight: 500 }}>{option.label}</div>
                      <div id={`${option.value}-desc`} style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {errors.length > 0 && (
            <div className="form-error" role="alert">
              <AlertCircle width="18" height="18" aria-hidden="true" />
              <ul style={{ margin: "var(--space-xs) 0 0 var(--space-lg)", padding: 0 }}>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
            </div>
          )}
        </CalculatorCard>

        {result && (
          <div className="calorie-result-details" role="region" aria-labelledby="calorie-result-title">
            <h3 id="calorie-result-title" className="calculator-title" style={{ marginTop: "var(--space-xl)" }}>Resultados</h3>
            
            <div className="calorie-result-main">
              <div className="calorie-card">
                <div className="calorie-card-icon">
                  <Flame width="28" height="28" aria-hidden="true" />
                </div>
                <div className="calorie-card-content">
                  <div className="calorie-card-label">Taxa Metabólica Basal (TMB)</div>
                  <div className="calorie-card-value">{result.bmrText}</div>
                  <div className="calorie-card-desc">Energia em repouso total</div>
                </div>
              </div>
              
              <div className="calorie-card featured">
                <div className="calorie-card-icon">
                  <Zap width="28" height="28" aria-hidden="true" />
                </div>
                <div className="calorie-card-content">
                  <div className="calorie-card-label">Gasto Energético Total (GET)</div>
                  <div className="calorie-card-value">{result.tdeeText}</div>
                  <div className="calorie-card-desc">Incluindo atividade (×{result.activityMultiplier})</div>
                </div>
              </div>
            </div>

            <div className="calorie-targets" style={{ marginTop: "var(--space-xl)" }}>
              <h4 style={{ color: "var(--color-accent)", marginBottom: "var(--space-lg)", textAlign: "center" }}>Metas Sugeridas (Estimativas)</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-lg)" }}>
                {lossTargets && (
                  <div className="target-card">
                    <h5 style={{ color: "#EF4444", marginBottom: "var(--space-md)" }}>Para Emagrecer</h5>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>
                        <span style={{ color: "var(--color-text-muted)" }}>Conservador (-200 kcal)</span>
                        <strong>{formatNumber(lossTargets.conservative)} kcal</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>
                        <span style={{ color: "var(--color-text-muted)" }}>Moderado (-500 kcal) <em style={{ fontStyle: "normal", color: "var(--color-accent)" }}>★</em></span>
                        <strong>{formatNumber(lossTargets.moderate)} kcal</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0" }}>
                        <span style={{ color: "var(--color-text-muted)" }}>Agressivo (-750 kcal)</span>
                        <strong>{formatNumber(lossTargets.aggressive)} kcal</strong>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="target-card">
                  <h5 style={{ color: "var(--color-accent)", marginBottom: "var(--space-md)" }}>Manutenção</h5>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Peso atual</span>
                    <strong>{formatNumber(result.tdee)} kcal</strong>
                  </div>
                </div>
                
                {gainTargets && (
                  <div className="target-card">
                    <h5 style={{ color: "#22C55E", marginBottom: "var(--space-md)" }}>Para Ganhar Massa</h5>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0", borderBottom: "1px solid var(--color-border)" }}>
                        <span style={{ color: "var(--color-text-muted)" }}>Moderado (+300 kcal)</span>
                        <strong>{formatNumber(gainTargets.moderate)} kcal</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0" }}>
                        <span style={{ color: "var(--color-text-muted)" }}>Agressivo (+500 kcal)</span>
                        <strong>{formatNumber(gainTargets.aggressive)} kcal</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="result-disclaimer" style={{ marginTop: "var(--space-xl)" }}>
              <Info width="20" height="20" aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
              <div style={{ lineHeight: 1.6 }}>
                <strong>Importante:</strong> {result.disclaimer}
              </div>
            </div>

            <details className="calorie-explanation" style={{ marginTop: "var(--space-xl)" }}>
              <summary style={{ cursor: "pointer", color: "var(--color-accent)", fontWeight: 600, marginBottom: "var(--space-md)" }}>
                Ver explicação detalhada dos fatores
              </summary>
              <div style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                <p>{result.explanation}</p>
                <h5 style={{ color: "var(--color-white)", marginTop: "var(--space-lg)", marginBottom: "var(--space-sm)" }}>Fatores utilizados:</h5>
                <ul style={{ paddingLeft: "var(--space-lg)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-sm)" }}>
                  {result.factors.map((factor, i) => (
                    <li key={i}><strong>{factor.label}:</strong> {factor.value}</li>
                  ))}
                </ul>
              </div>
            </details>

            <div className="result-sources" style={{ marginTop: "var(--space-xl)", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              <strong>Referência:</strong> Mifflin MD, St Jeor ST, et al. "A new predictive equation for resting energy expenditure in healthy individuals." Am J Clin Nutr. 1990;51(2):241-7.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
