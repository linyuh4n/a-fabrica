/// <reference types="vite/client" />

declare module "@/config/academy" {
  export const academyConfig: any;
}

declare module "@/config/plans" {
  export const gymPlans: any[];
  export const bjjPlans: any[];
  export const gymPlanCategories: any[];
  export const allPublicGymPlans: any[];
  export const allPublicBjjPlans: any[];
}

declare module "@/config/openingHours" {
  export const openingHours: any;
  export const hoursArray: any[];
}

declare module "@/config/gallery" {
  export const galleryImages: any[];
  export const heroImages: any[];
}

declare module "@/lib/whatsapp" {
  export function generateWhatsAppLink(options?: any): string;
  export function openWhatsApp(options?: any): void;
  export function createGymPlanMessage(planName: string): string;
  export function createBjjPlanMessage(planName: string): string;
  export function createModalityMessage(modalityName: string): string;
  export function createContactMessage(context?: string): string;
}

declare module "@/lib/formatting" {
  export function formatCurrency(value: number): string;
  export function formatNumber(value: number, decimals?: number): string;
  export function formatInstallments(count: number, value: number): string;
}

declare module "@/lib/calculations/protein" {
  export interface ProteinCalculatorInput { weightKg: number; objective: "health" | "activity" | "hypertrophy"; dietPreference: "omnivore" | "vegetarian-eggs-dairy" | "vegan"; }
  export interface ProteinCalculatorResult { minGramsPerDay: number; maxGramsPerDay: number; averageGramsPerDay: number; rangeText: string; sources: string[]; disclaimer: string; }
  export function calculateProtein(input: ProteinCalculatorInput): ProteinCalculatorResult;
  export function getProteinSources(diet: ProteinCalculatorInput["dietPreference"]): string[];
  export function validateProteinInput(input: Partial<ProteinCalculatorInput>): string[];
}

declare module "@/lib/calculations/bmi" {
  export interface BMICalculatorInput { weightKg: number; heightCm: number; }
  export interface BMICalculatorResult { bmi: number; classification: string; explanation: string; limitations: string[]; isAdult: boolean; }
  export function calculateBMI(input: BMICalculatorInput): BMICalculatorResult;
  export function validateBMIInput(input: Partial<BMICalculatorInput>): string[];
  export function getBMIClassification(bmi: number): { label: string; color: string };
  export function getBMICautions(bmi: number, weightKg: number, heightCm: number): string[];
}

declare module "@/lib/calculations/calories" {
  export interface CalorieCalculatorInput { age: number; weightKg: number; heightCm: number; sex: "male" | "female"; activityLevel: "sedentary" | "light" | "moderate" | "very" | "extra"; }
  export interface CalorieCalculatorResult { bmr: number; tdee: number; bmrText: string; tdeeText: string; activityMultiplier: number; factors: { label: string; value: string }[]; explanation: string; disclaimer: string; }
  export function calculateCalories(input: CalorieCalculatorInput): CalorieCalculatorResult;
  export function validateCalorieInput(input: Partial<CalorieCalculatorInput>): string[];
  export function getWeightLossTargets(tdee: number): { conservative: number; moderate: number; aggressive: number };
  export function getWeightGainTargets(tdee: number): { moderate: number; aggressive: number };
}
