import React, { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import Performance from './components/Performance';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update document title
    document.title = 'InvestPlatform - Invest with Discipline';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <HowItWorks />
      <Products />
      <Performance />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;