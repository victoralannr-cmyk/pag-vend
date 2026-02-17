
import React, { useEffect, useState } from 'react';

const DailyTasksMock = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(25), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#0c0c0c] p-5 flex flex-col gap-4 text-xs font-medium">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Tarefas Diárias</h4>
          <p className="text-gray-500 text-[10px]">1/4 concluídos</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/30 transition-all duration-700 animate-in fade-in zoom-in-95">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="text-gray-400 line-through">⏰ Acordar 5h</span>
          </div>
          <span className="text-green-500 text-[10px] font-bold">+10 XP</span>
        </div>

        {[
          { icon: "💪", text: "Treino físico", delay: 100 },
          { icon: "💧", text: "Beber 4L água", delay: 200 },
          { icon: "📚", text: "Leitura 30min", delay: 300 }
        ].map((task, i) => (
          <div key={i} 
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 animate-in slide-in-from-left duration-500"
            style={{ animationDelay: `${task.delay}ms` }}
          >
            <div className="w-5 h-5 rounded-full border border-gray-600"></div>
            <span className="text-gray-300">{task.icon} {task.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-white/5">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 text-[10px]">Progresso diário</span>
          <span className="text-green-500 text-[10px] font-bold">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const DashboardMock = () => {
  const [animatedHeights, setAnimatedHeights] = useState([0,0,0,0,0,0,0]);
  const heights = [40, 60, 45, 70, 55, 90, 85];

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedHeights(heights), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#0c0c0c] p-5 flex flex-col gap-4 text-xs font-medium">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase italic">Dashboard Fante</h4>
          <p className="text-gray-500 text-[10px]">Progresso em tempo real</p>
        </div>
      </div>

      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-green-500 text-black font-bold text-[10px] shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse">Relatório</span>
        <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-[10px]">Metas</span>
        <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-[10px]">Progresso</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-xl font-black text-green-500">87%</span>
          <span className="text-gray-500 text-[8px] uppercase">Taxa de Conclusão</span>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-xl font-black text-orange-500">2.450</span>
          <span className="text-gray-500 text-[8px] uppercase">XP Total</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-[10px]">Progresso Semanal</span>
          <span className="text-green-500 text-[10px] font-bold animate-pulse">↗ +24%</span>
        </div>
        <div className="h-16 flex items-end gap-1">
          {animatedHeights.map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-green-500/20 to-green-500/60 rounded-t-sm transition-all duration-1000 ease-out" 
              style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Mid Card Footer - Text removed per request */}
      <div className="mt-auto p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-white/10" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"/>
            <path 
              className="text-orange-500 transition-all duration-1000 ease-in-out" 
              strokeDasharray="49, 100" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">49%</span>
        </div>
        <div className="ml-4">
          <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-orange-500 animate-pulse"></div>
          </div>
          <p className="text-[8px] text-gray-500 mt-1 uppercase tracking-widest text-center">Nível de Performance</p>
        </div>
      </div>
    </div>
  );
};

const FinanceMock = () => {
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#0c0c0c] p-5 flex flex-col gap-4 text-xs font-medium">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M18 12h4"/></svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Financeiro</h4>
          <p className="text-gray-500 text-[10px]">Janeiro 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center gap-2 py-2 rounded-xl border border-green-500/30 bg-green-500/5 text-green-500 text-[10px] font-bold hover:bg-green-500/10 transition-colors">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Receita
        </button>
        <button className="flex items-center justify-center gap-2 py-2 rounded-xl border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-bold hover:bg-red-500/10 transition-colors">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Despesa
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-2xl bg-green-500/5 border border-green-500/10 animate-in fade-in duration-1000">
          <p className="text-gray-500 text-[8px] uppercase mb-1">Receitas</p>
          <p className="text-green-500 font-black text-sm italic">R$5.000</p>
        </div>
        <div className="p-3 rounded-2xl bg-red-500/5 border border-red-500/10 animate-in fade-in duration-1000">
          <p className="text-gray-500 text-[8px] uppercase mb-1">Despesas</p>
          <p className="text-red-500 font-black text-sm italic">R$3.200</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: "🍔", name: "Alimentação", perc: 75, color: "bg-orange-500" },
          { icon: "🚗", name: "Transporte", perc: 70, color: "bg-orange-400" },
          { icon: "🎮", name: "Lazer", perc: 50, color: "bg-green-500" }
        ].map((cat, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-gray-300">{cat.icon} {cat.name}</span>
              <span className={`font-bold transition-all duration-1000 ${showProgress ? (cat.perc > 60 ? 'text-orange-500' : 'text-green-500') : 'text-transparent'}`}>{cat.perc}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full ${cat.color} transition-all duration-1000 ease-out`} 
                style={{ width: showProgress ? `${cat.perc}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 rounded-2xl bg-green-500/5 border border-green-500/20 text-center animate-pulse">
        <p className="text-gray-500 text-[8px] uppercase mb-1">Saldo disponível</p>
        <p className="text-green-500 font-black text-2xl tracking-tighter italic">+R$1.800</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const placeholders = [
    { 
      title: "Dashboard de Rotina", 
      description: "Organize suas tarefas diárias com um sistema de XP e gamificação que te mantém motivado.",
      mock: <DailyTasksMock />
    },
    { 
      title: "Fante AI Analytics", 
      description: "Nossa IA analisa seu desempenho e gera relatórios em tempo real para otimizar seus resultados.",
      mock: <DashboardMock />
    },
    { 
      title: "Gestão Financeira Elite", 
      description: "Controle cada centavo com precisão cirúrgica e veja seu saldo crescer mês a mês.",
      mock: <FinanceMock />
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tight">
          Sua vida em <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 to-red-600 animate-gradient-text">alta performance</span> 👇
        </h2>
        <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
          Uma experiência desenhada para quem não tem tempo a perder e quer resultados rápidos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {placeholders.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col items-center animate-in fade-in slide-in-from-bottom duration-700"
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            {/* Real Mockup Container */}
            <div className="relative w-full aspect-[9/16] rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden group-hover:border-red-600/40 transition-all duration-500 shadow-2xl">
              {/* Internal glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-600/5 pointer-events-none"></div>
              
              {/* Mockup Content */}
              <div className="absolute inset-0">
                {item.mock}
              </div>
              
              {/* Subtle overlay info hover effect */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 animate-gradient-text">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
            
            {/* Legend for mobile or non-hover */}
            <div className="mt-6 text-center group-hover:opacity-0 transition-opacity md:block hidden">
               <h3 className="text-lg font-bold uppercase italic tracking-tight text-white mb-1">{item.title}</h3>
               <p className="text-xs text-gray-500 px-4">{item.description}</p>
            </div>

            {/* Bottom shadow / reflection effect */}
            <div className="w-[80%] h-4 bg-gradient-to-r from-red-600/10 to-orange-600/10 blur-xl rounded-full mt-[-10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
