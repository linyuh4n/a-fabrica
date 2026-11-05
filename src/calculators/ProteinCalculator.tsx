import { useState, FormEvent } from "react";
import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { calculateProtein, validateProteinInput, getProteinSources, type ProteinCalculatorInput, type ProteinCalculatorResult } from "@/lib/calculations/protein";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { CalculatorCard } from "@/components/CalculatorCard";
import "./ProteinCalculator.css";

const objectiveOptions = [
  { value: "health", label: "Saúde geral/manutenção", description: "Manter peso e saúde (0,8-1,0 g/kg)" },
  { value: "activity", label: "Atividade física", description: "Exercício regular (1,0-1,4 g/kg)" },
  { value: "hypertrophy", label: "Hipertrofia", description: "Ganho de massa muscular (1,6-2,2 g/kg)" },
];

const dietOptions = [
  { value: "omnivore", label: "Onívora", description: "Inclui carnes, ovos, laticínios" },
  { value: "vegetarian-eggs-dairy", label: "Vegetariana (ovos e laticínios)", description: "Sem carnes, com ovos e laticínios" },
  { value: "vegan", label: "Vegetariana estrita (vegana)", description: "Sem produtos de origem animal" },
];

export function ProteinCalculator() {
  const [formData, setFormData] = useState<ProteinCalculatorInput>({
    weightKg: 70,
    objective: "hypertrophy",
    dietPreference: "omnivore",
  });
  const [result, setResult] = useState<ProteinCalculatorResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (field: keyof ProteinCalculatorInput, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateProteinInput(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsCalculating(true);
    setTimeout(() => {
      const calculated = calculateProtein(formData);
      setResult(calculated);
      setIsCalculating(false);
    }, 300);
  };

  const handleClear = () => {
    setFormData({ weightKg: 70, objective: "hypertrophy", dietPreference: "omnivore" });
    setResult(null);
    setErrors([]);
  };

  const handleShare = () => {
    if (result) {
      const text = `Calculadora de Proteínas - A Fábrica\nPeso: ${formData.weightKg}kg\nObjetivo: ${objectiveOptions.find(o => o.value === formData.objective)?.label}\nDieta: ${dietOptions.find(o => o.value === formData.dietPreference)?.label}\nResultado: ${result.rangeText} (média: ${result.averageGramsPerDay}g/dia)`;
      window.open(generateWhatsAppLink({ message: text }), "_blank", "noopener,noreferrer");
    }
  };

  const sources = result ? getProteinSources(formData.dietPreference) : [];

  return (
    <section id="calculadora-proteinas" className="section" aria-labelledby="protein-calc-title">
      <div className="container">
        <div className="section-header">
          <h2 id="protein-calc-title" className="section-title">CALCULADORA DE PROTEÍNAS</h2>
          <p className="section-subtitle">
            Descubra sua necessidade diária de proteína baseada no seu peso, objetivo e preferência alimentar
          </p>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <CalculatorCard
          title="Calculadora de Proteínas"
          description="Insira seu peso, selecione seu objetivo e preferência alimentar para obter a faixa recomendada de ingestão proteica diária."
          onCalculate={handleSubmit}
          onClear={handleClear}
          onShare={handleShare}
          isCalculating={isCalculating}
          hasResult={!!result}
        >
          <div className="form-group">
            <label htmlFor="protein-weight" className="form-label">
              Peso corporal (kg) <span aria-hidden="true">*</span>
            </label>
            <input
              type="number"
              id="protein-weight"
              className="form-input"
              placeholder="Ex: 70"
              step="0.1"
              min="20"
              max="300"
              value={formData.weightKg}
              onChange={(e) => handleChange("weightKg", parseFloat(e.target.value) || 0)}
              required
              aria-describedby="weight-hint"
            />
            <p id="weight-hint" className="form-hint">Seu peso atual em quilogramas</p>
          </div>

          <fieldset className="form-group">
            <legend className="form-label">Objetivo <span aria-hidden="true">*</span></legend>
            <div className="radio-group" role="radiogroup" aria-label="Objetivo">
              {objectiveOptions.map(option => (
                <label 
                  key={option.value} 
                  className={`radio-option ${formData.objective === option.value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="objective"
                    value={option.value}
                    checked={formData.objective === option.value}
                    onChange={() => handleChange("objective", option.value)}
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

          <fieldset className="form-group">
            <legend className="form-label">Preferência alimentar <span aria-hidden="true">*</span></legend>
            <div className="radio-group" role="radiogroup" aria-label="Preferência alimentar">
              {dietOptions.map(option => (
                <label 
                  key={option.value} 
                  className={`radio-option ${formData.dietPreference === option.value ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="dietPreference"
                    value={option.value}
                    checked={formData.dietPreference === option.value}
                    onChange={() => handleChange("dietPreference", option.value)}
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
          <div className="protein-result-details" role="region" aria-labelledby="protein-result-title">
            <h3 id="protein-result-title" className="calculator-title" style={{ marginTop: "var(--space-xl)" }}>Detalhes e Recomendações</h3>
            
            <div className="result-grid">
              <div className="result-card">
                <h4 style={{ color: "var(--color-accent)", marginBottom: "var(--space-sm)" }}>Faixa Recomendada</h4>
                <div className="result-value">{result.minGramsPerDay}g - {result.maxGramsPerDay}g/dia</div>
                <p className="result-label">Média: {result.averageGramsPerDay}g/dia</p>
              </div>
              <div className="result-card">
                <h4 style={{ color: "var(--color-accent)", marginBottom: "var(--space-sm)" }}>Por Quilograma</h4>
                <div className="result-value">
                  {formData.weightKg > 0 ? (result.minGramsPerDay / formData.weightKg).toFixed(1) : 0} - 
                  {formData.weightKg > 0 ? (result.maxGramsPerDay / formData.weightKg).toFixed(1) : 0} g/kg
                </div>
              </div>
            </div>

            <div className="result-sources" style={{ marginTop: "var(--space-xl)" }}>
              <h4 style={{ marginBottom: "var(--space-sm)" }}>Fontes Proteicas Sugeridas ({formData.dietPreference === "vegan" ? "Vegana" : formData.dietPreference === "vegetarian-eggs-dairy" ? "Vegetariana" : "Onívora"})</h4>
              <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)", marginTop: "var(--space-md)" }}>
                {sources.map((source, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-sm)", color: "var(--color-text)", lineHeight: 1.6 }}>
                    <CheckCircle width="20" height="20" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            <div className="result-disclaimer" style={{ marginTop: "var(--space-xl)" }}>
              <Info width="20" height="20" aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
              <div style={{ lineHeight: 1.6 }}>
                <strong>Importante:</strong> {result.disclaimer}
              </div>
            </div>

            <div className="result-sources" style={{ marginTop: "var(--space-xl)", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              <strong>Referências:</strong>
              <ul style={{ marginTop: "var(--space-xs)", paddingLeft: "var(--space-lg)" }}>
                {result.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
