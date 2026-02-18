import React, { useState } from 'react';
import { CHECKOUT_MONTHLY_URL, CHECKOUT_ANNUAL_URL } from '../constants.ts';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Determina o link correto com base no ciclo de faturamento selecionado
  const currentCheckoutUrl = billingCycle === 'monthly' ? CHECKOUT_MONTHLY_URL : CHECKOUT_ANNUAL_URL;

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-[500px] mx-auto relative">
        {/* Efeito de Brilho Externo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-[2.5rem] blur opacity-25 animate-gradient-text"></div>
        
        {/* Card Principal */}
        <div className="relative bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center overflow-hidden">
          
          {/* Badge de Oferta */}
          <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-700 animate-gradient-text text-white px-6 py-1.5 rounded-full flex items-center gap-2 mb-8 shadow-lg shadow-red-900/20">
            <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-1 text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              🔥 Oferta de Lançamento
            </span>
          </div>

          {/* Seletor de Plano */}
          <div className="w-full bg-white/5 rounded-2xl p-1.5 flex mb-10 border border-white/5">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all duration-500 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-gradient-text text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}
            >
              Mensal
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all duration-500 flex items-center justify-center gap-2 ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-gradient-text text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}
            >
              Anual
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${billingCycle === 'yearly' ? 'bg-white text-red-600 font-bold' : 'bg-green-500/20 text-green-500 font-bold'}`}>
                -40% OFF
              </span>
            </button>
          </div>

          {/* Informações de Preço */}
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
              Acesso imediato • Cancele quando quiser
            </p>
            <p className="text-gray-500 text-xs md:text-sm font-medium pt-2">
              Investimento de R$ {billingCycle === 'monthly' ? '1,66' : '0,99'} por dia 🚀
            </p>
          </div>

          {/* Botão de Checkout (Link Dinâmico) */}
          <a 
            href={currentCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-red-700 via-orange-500 via-yellow-500 to-red-700 animate-gradient-text text-white font-black text-xl py-6 rounded-2xl shadow-[0_15px_45px_rgba(220,38,38,0.5)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.7)] hover:scale-[1.03] transition-all duration-300 uppercase italic tracking-wider flex items-center justify-center gap-3 mb-10 group"
          >
            <span className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
              GARANTIR MEU ACESSO
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </span>
          </a>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-3 gap-4 w-full mb-12">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Seguro" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label: "Imediato" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, label: "Garantia" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-center">
                <div className="text-green-500">{item.icon}</div>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-tight">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Lista de Benefícios */}
          <div className="w-full space-y-4">
            {[
              "Ecossistema completo de Alta Performance",
              "Safari: Inteligência Artificial de Rotina",
              "Gamificação e Ranks de Elite",
              "Gestão de Fluxo de Caixa e Investimentos",
              "Acesso à Comunidade VIP"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
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