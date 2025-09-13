import React from 'react';
import { Twitter, Linkedin, Instagram, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">InvestPlatform</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transparent, tech-driven investing platform focused on disciplined wealth building.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Risk Disclosure', 'Complaints'].map((item) => (
                <li key={item}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Security', 'Status Page'].map((item) => (
                <li key={item}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 InvestPlatform. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs text-center max-w-md">
              <strong>Risk Warning:</strong> No guaranteed returns. Capital at risk. 
              Past performance does not predict future results. Seek independent advice.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;