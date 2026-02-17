
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import FallingLeaves from './components/FallingLeaves.tsx';
import Carousel from './components/Carousel.tsx';
import Testimonials from './components/Testimonials.tsx';
import Features from './components/Features.tsx';
import Pricing from './components/Pricing.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Decorative falling elements effect */}
      <FallingLeaves />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          
          {/* Second section: Animated Carousel */}
          <div className="mt-10 mb-20">
            <Carousel />
          </div>

          {/* Testimonials Section */}
          <Testimonials />

          {/* Third section: How it works / Features */}
          <Features />

          {/* Fourth section: Pricing */}
          <Pricing />
        </main>
        
        {/* Simple Footer */}
        <footer className="py-20 text-center text-gray-500 text-sm border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} FANTE IA. Todos os direitos reservados.</p>
        </footer>
      </div>
      
      {/* Background glow effects - Red themed */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default App;
