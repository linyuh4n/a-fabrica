import { useState, FormEvent } from "react";
import { AlertCircle, Info } from "lucide-react";
import { calculateBMI, validateBMIInput, getBMIClassification, getBMICautions, type BMICalculatorInput, type BMICalculatorResult } from "@/lib/calculations/bmi";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { CalculatorCard } from "@/components/CalculatorCard";
import "./BMICalculator.css";

export function BMICalculator() {
  const [formData, setFormData] = useState<BMICalculatorInput>({
    weightKg: 70,
    heightCm: 170,
  });
  const [result, setResult] = useState<BMICalculatorResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (field: keyof BMICalculatorInput, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateBMIInput(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsCalculating(true);
    setTimeout(() => {
      const calculated = calculateBMI(formData);
      setResult(calculated);
      setIsCalculating(false);
    }, 300);
  };

  const handleClear = () => {
    setFormData({ weightKg: 70, heightCm: 170 });
    setResult(null);
    setErrors([]);
  };

  const handleShare = () => {
    if (result) {
      const classification = getBMIClassification(result.bmi);
      const text = `Calculadora de IMC - A Fábrica\nPeso: ${formData.weightKg}kg\nAltura: ${formData.heightCm}cm\nIMC: ${result.bmi}\nClassificação: ${classification.label}`;
      window.open(generateWhatsAppLink({ message: text }), "_blank", "noopener,noreferrer");
    }
  };

  const classification = result ? getBMIClassification(result.bmi) : null;
  const cautions = result ? getBMICautions(result.bmi, formData.weightKg, formData.heightCm) : [];

  return (
    <section id="calculadora-imc" className="section" aria-labelledby="bmi-calc-title">
      <div className="container">
        <div className="section-header">
          <h2 id="bmi-calc-title" className="section-title">CALCULADORA DE IMC</h2>
          <p className="section-subtitle">
            Calcule seu Índice de Massa Corporal e entenda sua classificação
          </p>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <CalculatorCard
          title="Calculadora de IMC"
          description="Insira seu peso e altura para calcular seu IMC e ver a classificação segundo a OMS."
          onCalculate={handleSubmit}
          onClear={handleClear}
          onShare={handleShare}
          isCalculating={isCalculating}
          hasResult={!!result}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-lg)" }}>
            <div className="form-group">
              <label htmlFor="bmi-weight" className="form-label">
                Peso (kg) <span aria-hidden="true">*</span>
              </label>
              <input
                type="number"
                id="bmi-weight"
                className="form-input"
                placeholder="Ex: 70"
                step="0.1"
                min="20"
                max="300"
                value={formData.weightKg}
                onChange={(e) => handleChange("weightKg", parseFloat(e.target.value) || 0)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bmi-height" className="form-label">
                Altura (cm) <span aria-hidden="true">*</span>
              </label>
              <input
                type="number"
                id="bmi-height"
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
          <div className="bmi-result-details" role="region" aria-labelledby="bmi-result-title">
            <h3 id="bmi-result-title" className="calculator-title" style={{ marginTop: "var(--space-xl)" }}>Resultado</h3>
            
            <div className="bmi-result-main">
              <div className="bmi-value-circle" style={{ "--bmi-color": classification?.color || "var(--color-accent)" } as React.CSSProperties}>
                <span className="bmi-value">{result.bmi}</span>
                <span className="bmi-label">IMC</span>
              </div>
              <div className="bmi-classification" style={{ "--classification-color": classification?.color || "var(--color-accent)" } as React.CSSProperties}>
                <span className="classification-label">{classification?.label}</span>
                <p className="classification-explanation">{result.explanation}</p>
              </div>
            </div>

            <div className="bmi-details-grid" style={{ marginTop: "var(--space-xl)" }}>
              <div className="detail-card">
                <h4 style={{ color: "var(--color-accent)", marginBottom: "var(--space-sm)" }}>Como é calculado</h4>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  IMC = Peso ÷ Altura²<br/>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>
                    {formData.weightKg} ÷ ({formData.heightCm / 100})² = {result.bmi}
                  </span>
                </p>
              </div>
              
              <div className="detail-card">
                <h4 style={{ color: "var(--color-accent)", marginBottom: "var(--space-sm)" }}>Classificações OMS (Adultos)</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)", fontSize: "0.875rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#3B82F6" }} aria-hidden="true" />
                    <span>Abaixo de 18,5: Abaixo do peso</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#22C55E" }} aria-hidden="true" />
                    <span>18,5 a 24,9: Peso normal</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#F59E0B" }} aria-hidden="true" />
                    <span>25,0 a 29,9: Sobrepeso</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#EF4444" }} aria-hidden="true" />
                    <span>30,0 a 34,9: Obesidade I</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#DC2626" }} aria-hidden="true" />
                    <span>35,0 a 39,9: Obesidade II</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "var(--radius-full)", background: "#991B1B" }} aria-hidden="true" />
                    <span>40,0 ou mais: Obesidade III</span>
                  </div>
                </div>
              </div>
            </div>

            {cautions.length > 0 && (
              <div className="result-disclaimer" style={{ marginTop: "var(--space-xl)" }}>
                <Info width="20" height="20" aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <div style={{ lineHeight: 1.6 }}>
                  <strong>Atenção:</strong>
                  <ul style={{ marginTop: "var(--space-sm)", paddingLeft: "var(--space-lg)" }}>
                    {cautions.map((caution, i) => (
                      <li key={i}>{caution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="result-disclaimer" style={{ marginTop: "var(--space-xl)" }}>
              <Info width="20" height="20" aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
              <div style={{ lineHeight: 1.6 }}>
                <strong>Limitações do IMC:</strong>
                <ul style={{ marginTop: "var(--space-sm)", paddingLeft: "var(--space-lg)" }}>
                  {result.limitations.map((limitation, i) => (
                    <li key={i}>{limitation}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="result-sources" style={{ marginTop: "var(--space-xl)", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              <strong>Referência:</strong> Organização Mundial da Saúde (OMS) - Classificação do IMC para adultos.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
