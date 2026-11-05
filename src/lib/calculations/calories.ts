export interface CalorieCalculatorInput {
  age: number;
  weightKg: number;
  heightCm: number;
  sex: "male" | "female";
  activityLevel: "sedentary" | "light" | "moderate" | "very" | "extra";
}

export interface CalorieCalculatorResult {
  bmr: number;
  tdee: number;
  bmrText: string;
  tdeeText: string;
  activityMultiplier: number;
  factors: {
    label: string;
    value: string;
  }[];
  explanation: string;
  disclaimer: string;
}

/**
 * Calcula Taxa Metabólica Basal (TMB) usando equação de Mifflin-St Jeor
 * Homens: TMB = 10 × peso(kg) + 6,25 × altura(cm) - 5 × idade(anos) + 5
 * Mulheres: TMB = 10 × peso(kg) + 6,25 × altura(cm) - 5 × idade(anos) - 161
 * 
 * Calcula Gasto Energético Total (GET) = TMB × Fator de Atividade
 * Fatores de atividade:
 * - Sedentário: 1.2 (pouco ou nenhum exercício)
 * - Leve: 1.375 (exercício leve 1-3 dias/semana)
 * - Moderado: 1.55 (exercício moderado 3-5 dias/semana)
 * - Intenso: 1.725 (exercício intenso 6-7 dias/semana)
 * - Muito intenso: 1.9 (exercício muito intenso, trabalho físico pesado)
 */
export function calculateCalories(input: CalorieCalculatorInput): CalorieCalculatorResult {
  const { age, weightKg, heightCm, sex, activityLevel } = input;
  
  // Mifflin-St Jeor
  let bmr: number;
  if (sex === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  
  const roundedBMR = Math.round(bmr);
  
  // Fatores de atividade
  const activityMultipliers: Record<CalorieCalculatorInput["activityLevel"], number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    extra: 1.9,
  };
  
  const activityMultiplier = activityMultipliers[activityLevel];
  const tdee = Math.round(roundedBMR * activityMultiplier);
  
  const activityLabels: Record<CalorieCalculatorInput["activityLevel"], string> = {
    sedentary: "Sedentário (pouco ou nenhum exercício)",
    light: "Leve (exercício leve 1-3 dias/semana)",
    moderate: "Moderado (exercício moderado 3-5 dias/semana)",
    very: "Intenso (exercício intenso 6-7 dias/semana)",
    extra: "Muito intenso (exercício muito intenso, trabalho físico pesado)",
  };
  
  const sexLabel = sex === "male" ? "Masculino" : "Feminino";
  
  const factors = [
    { label: "Idade", value: `${age} anos` },
    { label: "Sexo", value: sexLabel },
    { label: "Peso", value: `${weightKg} kg` },
    { label: "Altura", value: `${heightCm} cm` },
    { label: "Nível de atividade", value: activityLabels[activityLevel] },
  ];
  
  const explanation = 
    `A Taxa Metabólica Basal (TMB) de ${roundedBMR} kcal/dia representa a energia que seu corpo gasta ` +
    `em repouso total para manter funções vitais (respiração, circulação, temperatura, etc.). ` +
    `O Gasto Energético Total Estimado (GET) de ${tdee} kcal/dia inclui sua TMB multiplicada pelo ` +
    `fator de atividade (${activityMultiplier}x), estimando as calorias necessárias para manter seu peso atual ` +
    `com seu nível de atividade informado.`;
  
  const disclaimer = 
    "Estes valores são estimativas baseadas na equação de Mifflin-St Jeor, amplamente utilizada e validada. " +
    "O gasto calórico real varia individualmente devido a fatores genéticos, composição corporal, " +
    "termogênese adaptativa, condições médicas, medicamentos e outros fatores não capturados pela fórmula. " +
    "Não utilize para prescrição de dietas restritivas ou déficits agressivos sem acompanhamento profissional. " +
    "Para emagrecimento saudável, recomenda-se déficit moderado (300-500 kcal/dia) com acompanhamento nutricional.";
  
  return {
    bmr: roundedBMR,
    tdee,
    bmrText: `${roundedBMR} kcal/dia`,
    tdeeText: `${tdee} kcal/dia`,
    activityMultiplier,
    factors,
    explanation,
    disclaimer,
  };
}

/**
 * Retorna sugestão de déficit calórico para emagrecimento
 */
export function getWeightLossTargets(tdee: number): { moderate: number; aggressive: number; conservative: number } {
  return {
    conservative: tdee - 200,
    moderate: tdee - 500,
    aggressive: tdee - 750,
  };
}

/**
 * Retorna sugestão de superávit para ganho de massa
 */
export function getWeightGainTargets(tdee: number): { moderate: number; aggressive: number } {
  return {
    moderate: tdee + 300,
    aggressive: tdee + 500,
  };
}

/**
 * Valida entrada da calculadora de calorias
 */
export function validateCalorieInput(input: Partial<CalorieCalculatorInput>): string[] {
  const errors: string[] = [];
  
  if (input.age === undefined || input.age === null) {
    errors.push("Idade é obrigatória");
  } else if (input.age < 15 || input.age > 100) {
    errors.push("Idade deve estar entre 15 e 100 anos");
  }
  
  if (input.weightKg === undefined || input.weightKg === null) {
    errors.push("Peso é obrigatório");
  } else if (input.weightKg < 30 || input.weightKg > 300) {
    errors.push("Peso deve estar entre 30 e 300 kg");
  }
  
  if (input.heightCm === undefined || input.heightCm === null) {
    errors.push("Altura é obrigatória");
  } else if (input.heightCm < 100 || input.heightCm > 250) {
    errors.push("Altura deve estar entre 100 e 250 cm");
  }
  
  if (!input.sex) {
    errors.push("Sexo é obrigatório");
  } else if (!["male", "female"].includes(input.sex)) {
    errors.push("Sexo inválido");
  }
  
  if (!input.activityLevel) {
    errors.push("Nível de atividade é obrigatório");
  } else if (!["sedentary", "light", "moderate", "very", "extra"].includes(input.activityLevel)) {
    errors.push("Nível de atividade inválido");
  }
  
  return errors;
}

/**
 * Retorna descrição do nível de atividade
 */
export function getActivityLevelDescription(level: CalorieCalculatorInput["activityLevel"]): string {
  const descriptions: Record<CalorieCalculatorInput["activityLevel"], string> = {
    sedentary: "Trabalho de escritório, pouco ou nenhum exercício, estilo de vida sedentário",
    light: "Trabalho leve, exercício leve (caminhada, yoga) 1-3 vezes por semana",
    moderate: "Trabalho ativo ou exercício moderado (musculação, corrida) 3-5 vezes por semana",
    very: "Trabalho físico pesado ou exercício intenso diário (treino pesado 6-7 vezes/semana)",
    extra: "Atleta de alto rendimento, trabalho físico muito pesado, treinos múltiplos por dia",
  };
  return descriptions[level];
}
