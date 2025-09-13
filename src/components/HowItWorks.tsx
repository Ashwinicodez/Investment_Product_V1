import React from 'react';
import { UserPlus, CreditCard, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Quick signup with identity verification'
  },
  {
    icon: CreditCard,
    title: 'Fund Securely',
    description: 'Bank-grade security for your deposits'
  },
  {
    icon: TrendingUp,
    title: 'Track & Withdraw',
    description: 'Monitor performance and withdraw anytime'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple, transparent process to start your investment journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:scale-105 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;