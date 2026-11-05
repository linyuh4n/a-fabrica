export interface ProteinCalculatorInput {
  weightKg: number;
  objective: "health" | "activity" | "hypertrophy";
  dietPreference: "omnivore" | "vegetarian-eggs-dairy" | "vegan";
}

export interface ProteinCalculatorResult {
  minGramsPerDay: number;
  maxGramsPerDay: number;
  averageGramsPerDay: number;
  rangeText: string;
  sources: string[];
  disclaimer: string;
}

/**
 * Calcula a faixa de proteína baseada no peso, objetivo e preferência alimentar
 * Referências: ISSN (International Society of Sports Nutrition), EFSA (European Food Safety Authority)
 * 
 * Para treinamento resistido: 1.4 - 2.0 g/kg/dia (ISSN)
 * Saúde geral/manutenção: 0.8 - 1.0 g/kg/dia (EFSA/RDA)
 * Atividade física geral: 1.0 - 1.4 g/kg/dia
 * Hipertrofia: 1.6 - 2.2 g/kg/dia (ISSN position stand)
 */
export function calculateProtein(input: ProteinCalculatorInput): ProteinCalculatorResult {
  const { weightKg, objective, dietPreference } = input;
  
  let minGPerKg: number;
  let maxGPerKg: number;
  
  switch (objective) {
    case "health":
      // Saúde geral/manutenção: RDA 0.8 g/kg, mas recomendamos 0.8-1.0 para adultos ativos
      minGPerKg = 0.8;
      maxGPerKg = 1.0;
      break;
    case "activity":
      // Atividade física geral: 1.0 - 1.4 g/kg/dia
      minGPerKg = 1.0;
      maxGPerKg = 1.4;
      break;
    case "hypertrophy":
      // Hipertrofia: ISSN recomenda 1.4-2.0, podendo chegar a 2.2 para atletas avançados
      minGPerKg = 1.6;
      maxGPerKg = 2.2;
      break;
    default:
      minGPerKg = 0.8;
      maxGPerKg = 1.0;
  }
  
  // Ajuste para dieta vegetariana/vegana: aumento de ~10-20% na recomendação
  // devido à menor biodisponibilidade e perfil de aminoácidos
  let dietMultiplier = 1.0;
  if (dietPreference === "vegetarian-eggs-dairy") {
    dietMultiplier = 1.1;
  } else if (dietPreference === "vegan") {
    dietMultiplier = 1.2;
  }
  
  const minGramsPerDay = Math.round(weightKg * minGPerKg * dietMultiplier);
  const maxGramsPerDay = Math.round(weightKg * maxGPerKg * dietMultiplier);
  const averageGramsPerDay = Math.round((minGramsPerDay + maxGramsPerDay) / 2);
  
  const rangeText = `${minGramsPerDay}g - ${maxGramsPerDay}g por dia`;
  
  const sources = [
    "ISSN (International Society of Sports Nutrition) - Position Stand: Protein and Exercise (2017)",
    "EFSA (European Food Safety Authority) - Dietary Reference Values for Protein (2012)",
    "Academy of Nutrition and Dietetics - Position Paper on Vegetarian Diets (2016)",
  ];
  
  const disclaimer = 
    "Esta calculadora fornece estimativas baseadas em referências científicas gerais. " +
    "Não substitui avaliação nutricional individualizada por profissional qualificado. " +
    "Necessidades proteicas variam conforme idade, sexo, composição corporal, intensidade do treino, " +
    "estado de saúde e outros fatores individuais.";
  
  return {
    minGramsPerDay,
    maxGramsPerDay,
    averageGramsPerDay,
    rangeText,
    sources,
    disclaimer,
  };
}

/**
 * Retorna sugestões de fontes proteicas baseadas na preferência alimentar
 */
export function getProteinSources(dietPreference: ProteinCalculatorInput["dietPreference"]): string[] {
  const sources: Record<ProteinCalculatorInput["dietPreference"], string[]> = {
    omnivore: [
      "Carnes magras (frango, peixe, carne bovina magra)",
      "Ovos",
      "Laticínios (queijo cottage, iogurte grego, leite)",
      "Whey protein",
      "Leguminosas (feijão, lentilha, grão-de-bico)",
      "Tofu e tempeh",
    ],
    "vegetarian-eggs-dairy": [
      "Ovos",
      "Laticínios (queijo cottage, iogurte grego, leite, queijos)",
      "Whey protein",
      "Leguminosas (feijão, lentilha, grão-de-bico, ervilha)",
      "Tofu, tempeh e seitan",
      "Quinoa, amaranto",
      "Oleaginosas e sementes (chia, linhaça, abóbora)",
    ],
    vegan: [
      "Leguminosas (feijão, lentilha, grão-de-bico, ervilha, soja)",
      "Tofu, tempeh, edamame",
      "Seitan (glúten de trigo)",
      "Proteína de ervilha, arroz, soja (vegan protein)",
      "Quinoa, amaranto, trigo sarraceno",
      "Oleaginosas e sementes (chia, linhaça, abóbora, girassol)",
      "Vegetais verde-escuros (brócolis, espinafre, couve)",
      "Levedura nutricional",
    ],
  };
  
  return sources[dietPreference];
}

/**
 * Valida entrada da calculadora de proteínas
 */
export function validateProteinInput(input: Partial<ProteinCalculatorInput>): string[] {
  const errors: string[] = [];
  
  if (input.weightKg === undefined || input.weightKg === null) {
    errors.push("Peso corporal é obrigatório");
  } else if (input.weightKg < 20 || input.weightKg > 300) {
    errors.push("Peso deve estar entre 20 e 300 kg");
  }
  
  if (!input.objective) {
    errors.push("Objetivo é obrigatório");
  } else if (!["health", "activity", "hypertrophy"].includes(input.objective)) {
    errors.push("Objetivo inválido");
  }
  
  if (!input.dietPreference) {
    errors.push("Preferência alimentar é obrigatória");
  } else if (!["omnivore", "vegetarian-eggs-dairy", "vegan"].includes(input.dietPreference)) {
    errors.push("Preferência alimentar inválida");
  }
  
  return errors;
}
