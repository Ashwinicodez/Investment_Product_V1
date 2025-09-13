import { Product, PerformanceData } from '../types';

export const products: Product[] = [
  {
    id: 'conservative',
    name: 'Conservative',
    riskProfile: 'Conservative',
    targetReturn: '6-8%',
    description: 'Lower risk, steady growth with capital preservation focus',
    minInvestment: 1000
  },
  {
    id: 'balanced',
    name: 'Balanced',
    riskProfile: 'Balanced',
    targetReturn: '10-12%',
    description: 'Moderate risk, balanced approach for long-term growth',
    minInvestment: 2500
  },
  {
    id: 'growth',
    name: 'Growth',
    riskProfile: 'Growth',
    targetReturn: '14-18%',
    description: 'Higher risk, maximum growth potential for experienced investors',
    minInvestment: 5000
  }
];

export const performanceData: { [key: string]: PerformanceData[] } = {
  '1M': [
    { date: '2024-01-01', value: 10000 },
    { date: '2024-01-08', value: 10150 },
    { date: '2024-01-15', value: 10080 },
    { date: '2024-01-22', value: 10220 },
    { date: '2024-01-29', value: 10180 }
  ],
  '6M': [
    { date: '2023-08-01', value: 10000 },
    { date: '2023-09-01', value: 10200 },
    { date: '2023-10-01', value: 9950 },
    { date: '2023-11-01', value: 10450 },
    { date: '2023-12-01', value: 10300 },
    { date: '2024-01-01', value: 10650 },
    { date: '2024-01-29', value: 10580 }
  ],
  '1Y': [
    { date: '2023-02-01', value: 10000 },
    { date: '2023-04-01', value: 10300 },
    { date: '2023-06-01', value: 9900 },
    { date: '2023-08-01', value: 10500 },
    { date: '2023-10-01', value: 10200 },
    { date: '2023-12-01', value: 10800 },
    { date: '2024-01-29', value: 10950 }
  ]
};