import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import { CalculatorScenario } from '../types';

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(12);
  
  const calculateScenarios = (principal: number, months: number): CalculatorScenario[] => {
    const scenarios = [
      { scenario: 'best' as const, annualReturn: 0.18 },
      { scenario: 'base' as const, annualReturn: 0.12 },
      { scenario: 'worst' as const, annualReturn: 0.04 }
    ];
    
    return scenarios.map(({ scenario, annualReturn }) => {
      const monthlyReturn = annualReturn / 12;
      const finalAmount = principal * Math.pow(1 + monthlyReturn, months);
      const totalReturn = (finalAmount - principal) / principal;
      
      return {
        scenario,
        return: totalReturn,
        finalAmount
      };
    });
  };
  
  const scenarios = calculateScenarios(amount, duration);
  
  const scenarioColors = {
    best: 'from-emerald-400 to-teal-400',
    base: 'from-blue-400 to-purple-400',
    worst: 'from-orange-400 to-red-400'
  };
  
  const scenarioLabels = {
    best: 'Best Case',
    base: 'Base Case',
    worst: 'Worst Case'
  };
  
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalcIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore potential scenarios for your investment journey
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {/* Input Controls */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-white text-lg font-semibold mb-4">
                Investment Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-slate-700/50 border border-white/20 rounded-xl pl-8 pr-4 py-4 text-white text-xl focus:outline-none focus:border-purple-500 transition-colors"
                  min="1000"
                  step="1000"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-white text-lg font-semibold mb-4">
                Investment Duration
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-slate-700/50 border border-white/20 rounded-xl px-4 py-4 text-white text-xl focus:outline-none focus:border-purple-500 transition-colors"
                  min="1"
                  max="120"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">months</span>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {scenarios.map((scenario) => {
              const colorClass = scenarioColors[scenario.scenario];
              const label = scenarioLabels[scenario.scenario];
              
              return (
                <div
                  key={scenario.scenario}
                  className="bg-slate-700/30 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors"
                >
                  <div className={`text-sm font-semibold mb-2 bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                    {label}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${scenario.finalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className={`text-lg font-semibold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                    +{(scenario.return * 100).toFixed(1)}% return
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 bg-slate-700/30 px-4 py-2 rounded-full inline-block">
              Illustrative only, not assured. Market conditions may vary significantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;