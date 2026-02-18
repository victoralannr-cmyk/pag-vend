
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pt-12 pb-24 md:pt-24 md:pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white uppercase italic">
              Construa uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 to-red-600 animate-gradient-text">rotina</span> que você cumpre.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
              FANTE IA é seu mentor digital: te cobra, organiza seu dia e mostra exatamente o que fazer.
            </p>
          </div>

          <div className="w-full sm:w-auto space-y-4">
            <a 
              href="https://www.ggcheckout.com/checkout/v5/BLqGpd7oJKooVkDooBo1"
              className="w-full sm:w-auto inline-block bg-gradient-to-r from-red-700 via-red-600 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-extrabold text-xl px-10 py-5 rounded-2xl shadow-[0_10px_40px_rgba(220,38,38,0.3)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 uppercase tracking-wide text-center"
            >
              ATIVE SUA ROTINA
            </a>
            <p className="text-gray-500 text-sm font-medium flex items-center justify-center sm:justify-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500"></span>
              sem cartão para testar • Cancele quando quiser
            </p>
          </div>
        </div>

        {/* Right Side: Image with animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative group">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
            
            <img 
              src="https://i.postimg.cc/VsbrdVK3/Chat-GPT-Image-17-de-fev-de-2026-11-33-41.png" 
              alt="App Interface Preview" 
              className="relative w-full max-w-[500px] h-auto rounded-3xl shadow-2xl animate-float border border-white/10 hover:border-red-600/30 transition-colors duration-500"
            />
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hidden md:block animate-bounce shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500"></div>
                <span className="text-xs font-bold uppercase tracking-wider">IA Ativa</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
