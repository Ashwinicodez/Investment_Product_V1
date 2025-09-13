import React, { useState } from 'react';
import { performanceData } from '../data/mockData';

const timeRanges = ['1M', '6M', '1Y'];

const Performance: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('6M');
  const data = performanceData[selectedRange];
  
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;
  
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Performance Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track historical performance across different time periods
          </p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {/* Time Range Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-700/50 p-1 rounded-full">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedRange === range
                      ? 'bg-gradient-to-r from-emerald-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chart */}
          <div className="relative h-64 mb-8">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Chart Line */}
              <polyline
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="3"
                points={data.map((point, index) => {
                  const x = (index / (data.length - 1)) * 100;
                  const y = 100 - ((point.value - minValue) / range) * 80;
                  return `${x}%,${y}%`;
                }).join(' ')}
                className="drop-shadow-lg"
              />
              
              {/* Chart Fill */}
              <polygon
                fill="url(#chartFill)"
                points={[
                  ...data.map((point, index) => {
                    const x = (index / (data.length - 1)) * 100;
                    const y = 100 - ((point.value - minValue) / range) * 80;
                    return `${x}%,${y}%`;
                  }),
                  '100%,100%',
                  '0%,100%'
                ].join(' ')}
              />
              
              {/* Data Points */}
              {data.map((point, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 100 - ((point.value - minValue) / range) * 80;
                return (
                  <circle
                    key={index}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="4"
                    fill="white"
                    stroke="url(#chartGradient)"
                    strokeWidth="2"
                    className="hover:r-6 transition-all duration-200"
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                +{((data[data.length - 1].value / data[0].value - 1) * 100).toFixed(1)}%
              </div>
              <div className="text-gray-400">Total Return</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                ${maxValue.toLocaleString()}
              </div>
              <div className="text-gray-400">Peak Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-300">
                {((Math.pow(data[data.length - 1].value / data[0].value, 365 / data.length) - 1) * 100).toFixed(1)}%
              </div>
              <div className="text-gray-400">Annualized</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Past performance is not indicative of future results. All investments carry risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;