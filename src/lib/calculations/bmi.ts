export interface BMICalculatorInput {
  weightKg: number;
  heightCm: number;
}

export interface BMICalculatorResult {
  bmi: number;
  classification: string;
  explanation: string;
  limitations: string[];
  isAdult: boolean;
}

/**
 * Calcula o IMC (Índice de Massa Corporal)
 * Fórmula: IMC = peso / altura² (altura em metros)
 * Classificação para adultos segundo OMS
 */
export function calculateBMI(input: BMICalculatorInput): BMICalculatorResult {
  const { weightKg, heightCm } = input;
  
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const roundedBMI = Math.round(bmi * 10) / 10;
  
  let classification: string;
  let explanation: string;
  
  if (roundedBMI < 16) {
    classification = "Magreza grave";
    explanation = "IMC muito abaixo do normal. Procure orientação médica e nutricional.";
  } else if (roundedBMI < 17) {
    classification = "Magreza moderada";
    explanation = "IMC abaixo do normal. Considere avaliação nutricional.";
  } else if (roundedBMI < 18.5) {
    classification = "Magreza leve";
    explanation = "IMC ligeiramente abaixo do normal.";
  } else if (roundedBMI < 25) {
    classification = "Peso normal";
    explanation = "IMC dentro da faixa considerada saudável para adultos.";
  } else if (roundedBMI < 30) {
    classification = "Sobrepeso";
    explanation = "IMC acima do ideal. Considere hábitos mais saudáveis e avaliação profissional.";
  } else if (roundedBMI < 35) {
    classification = "Obesidade grau I";
    explanation = "Obesidade leve. Recomenda-se acompanhamento médico e nutricional.";
  } else if (roundedBMI < 40) {
    classification = "Obesidade grau II";
    explanation = "Obesidade moderada. Necessário acompanhamento multiprofissional.";
  } else {
    classification = "Obesidade grau III (mórbida)";
    explanation = "Obesidade grave. Procure atendimento médico especializado.";
  }
  
  const limitations = [
    "O IMC não distingue massa muscular de massa gorda",
    "Atletas e pessoas muito musculosas podem ter IMC elevado sem excesso de gordura",
    "Idosos podem ter IMC normal mas pouca massa muscular (sarcopenia)",
    "Não se aplica a crianças e adolescentes (usar curvas de crescimento da OMS)",
    "Não considera distribuição de gordura (gordura abdominal é mais perigosa)",
    "Não substitui avaliação médica completa",
  ];
  
  return {
    bmi: roundedBMI,
    classification,
    explanation,
    limitations,
    isAdult: true,
  };
}

/**
 * Retorna a classificação do IMC para exibição
 */
export function getBMIClassification(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: "Abaixo do peso", color: "#3B82F6" };
  if (bmi < 25) return { label: "Peso normal", color: "#22C55E" };
  if (bmi < 30) return { label: "Sobrepeso", color: "#F59E0B" };
  if (bmi < 35) return { label: "Obesidade I", color: "#EF4444" };
  if (bmi < 40) return { label: "Obesidade II", color: "#DC2626" };
  return { label: "Obesidade III", color: "#991B1B" };
}

/**
 * Valida entrada da calculadora de IMC
 */
export function validateBMIInput(input: Partial<BMICalculatorInput>): string[] {
  const errors: string[] = [];
  
  if (input.weightKg === undefined || input.weightKg === null) {
    errors.push("Peso é obrigatório");
  } else if (input.weightKg < 20 || input.weightKg > 300) {
    errors.push("Peso deve estar entre 20 e 300 kg");
  }
  
  if (input.heightCm === undefined || input.heightCm === null) {
    errors.push("Altura é obrigatória");
  } else if (input.heightCm < 100 || input.heightCm > 250) {
    errors.push("Altura deve estar entre 100 e 250 cm");
  }
  
  return errors;
}

/**
 * Verifica se o IMC deve ser usado com cautela (ex: atletas)
 */
export function getBMICautions(_bmi: number, _weightKg: number, _heightCm: number): string[] {
  const cautions: string[] = [];
  
  // Heurística simples: se IMC > 25 mas peso não muito alto para a altura, pode ser atleta
  // Isso é apenas indicativo, não diagnóstico
  if (_bmi >= 25 && _bmi < 30) {
    cautions.push("Se você pratica musculação intensamente, seu IMC pode estar elevado devido à massa muscular, não gordura.");
  }
  
  if (_bmi < 18.5) {
    cautions.push("IMC abaixo do normal pode indicar desnutrição ou outras condições. Consulte um profissional.");
  }
  
  return cautions;
}
