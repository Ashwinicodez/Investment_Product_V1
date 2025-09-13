import React from 'react';
import { products } from '../data/mockData';
import { Shield, BarChart3, TrendingUp } from 'lucide-react';

const riskIcons = {
  Conservative: Shield,
  Balanced: BarChart3,
  Growth: TrendingUp
};

const riskColors = {
  Conservative: 'from-emerald-400 to-teal-400',
  Balanced: 'from-blue-400 to-purple-400',
  Growth: 'from-purple-400 to-pink-400'
};

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment Products
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your risk profile and investment strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = riskIcons[product.riskProfile];
            const colorClass = riskColors[product.riskProfile];
            
            return (
              <div
                key={product.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <div className="text-sm text-gray-400 mb-4">{product.riskProfile} Risk</div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {product.targetReturn}
                    <span className="text-sm text-gray-400 ml-1">target</span>
                  </div>
                  <div className="text-xs text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full inline-block">
                    Illustrative only, not guaranteed
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="text-sm text-gray-400 mb-6">
                  Min. Investment: ${product.minInvestment.toLocaleString()}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${colorClass} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;