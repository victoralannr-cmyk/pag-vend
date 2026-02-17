
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-[500px] mx-auto relative">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-[2.5rem] blur opacity-25 animate-gradient-text"></div>
        
        {/* Main Card */}
        <div className="relative bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center overflow-hidden">
          
          {/* Special Offer Badge */}
          <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-700 animate-gradient-text text-white px-6 py-1.5 rounded-full flex items-center gap-2 mb-8 shadow-lg shadow-red-900/20">
            <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              🔥 Oferta Especial
            </span>
          </div>

          {/* Billing Toggle */}
          <div className="w-full bg-white/5 rounded-2xl p-1.5 flex mb-10 border border-white/5">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all duration-500 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-gradient-text text-white shadow-xl shadow-red-900/20' : 'text-gray-500 hover:text-white'}`}
            >
              Mensal
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all duration-500 flex items-center justify-center gap-2 ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-gradient-text text-white shadow-xl shadow-red-900/20' : 'text-gray-500 hover:text-white'}`}
            >
              Anual
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${billingCycle === 'yearly' ? 'bg-white text-red-600 font-bold' : 'bg-green-500/20 text-green-500 font-bold'}`}>
                -40% OFF
              </span>
            </button>
          </div>

          {/* Pricing Info */}
          <div className="text-center space-y-2 mb-10">
            <p className="text-gray-500 line-through text-lg font-medium">
              De R$ {billingCycle === 'monthly' ? '97,00' : '298,80'}
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-gray-400 text-xl font-bold italic">por</span>
              <h3 className="text-6xl md:text-7xl font-black italic tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-gradient-text">R$ {billingCycle === 'monthly' ? '49,90' : '29,90'}</span>
              </h3>
              <span className="text-gray-400 text-lg font-bold">/mês</span>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 animate-gradient-text font-bold text-sm md:text-base mt-2">
              Flexibilidade total • Cancele quando quiser
            </p>
            <p className="text-gray-500 text-xs md:text-sm font-medium pt-2">
              R$ {billingCycle === 'monthly' ? '1,66' : '0,99'}/dia = Menos que 1 Café ☕
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-red-700 via-orange-500 via-yellow-500 to-red-700 animate-gradient-text text-white font-black text-xl py-6 rounded-2xl shadow-[0_15px_45px_rgba(220,38,38,0.5)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.7)] hover:scale-[1.03] transition-all duration-300 uppercase italic tracking-wider flex items-center justify-center gap-3 mb-10 group">
            <span className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
              GARANTIR MEU ACESSO
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </span>
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 w-full mb-12">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Compra Segura" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label: "Acesso Imediato" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, label: "Satisfação Garantida" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">{item.icon}</div>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-tight">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="w-full space-y-4">
            {[
              "Acesso total ao app Web + Mobile",
              "Safari: Sua IA de produtividade diária",
              "Sistema de Gamificação com Níveis e XP",
              "Gestão Financeira Completa",
              "Comunidade Exclusiva de Elite"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;