export interface Product {
  id: string;
  name: string;
  riskProfile: 'Conservative' | 'Balanced' | 'Growth';
  targetReturn: string;
  description: string;
  minInvestment: number;
}

export interface PerformanceData {
  date: string;
  value: number;
}

export interface CalculatorScenario {
  scenario: 'best' | 'base' | 'worst';
  return: number;
  finalAmount: number;
}