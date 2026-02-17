
import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  location: string;
  avatar: string;
  stars: number;
  text: string;
  achievement: string;
  achievementColor: 'red' | 'yellow';
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, role, location, avatar, stars, text, achievement, achievementColor 
}) => {
  return (
    <div className="relative group p-6 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
      {/* Quote Icon */}
      <div className="absolute top-8 right-8 text-white/10 group-hover:text-red-600/20 transition-colors">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Header with Avatar and Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600/30">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-red-600 to-orange-500 text-white p-0.5 rounded-full border-2 border-[#0c0c0c]">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg flex items-center gap-1.5 uppercase tracking-tight">
            {name}
          </h4>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{role}</p>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">{location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(stars)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#EAB308">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
        "{text}"
      </p>

      {/* Achievement Badge */}
      <div className={`inline-flex px-5 py-2 rounded-full border font-black text-sm uppercase tracking-tighter ${achievementColor === 'red' ? 'bg-red-600/10 border-red-600/20' : 'bg-yellow-900/20 text-yellow-500 border-yellow-500/20'}`}>
        <span className={achievementColor === 'red' ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-red-500 animate-gradient-text" : ""}>
          {achievement}
        </span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const data: TestimonialProps[] = [
    {
      name: "Thiago Oliveira",
      role: "Engenheiro de Software",
      location: "São Paulo, SP",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      stars: 5,
      text: "O FANTE IA mudou minha percepção de gastos variáveis. Hoje consigo planejar meus investimentos com uma clareza que nunca tive antes.",
      achievement: "45 DIAS DE CONSISTÊNCIA",
      achievementColor: "red"
    },
    {
      name: "Mariana Souza",
      role: "Especialista em Marketing",
      location: "Curitiba, PR",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      stars: 5,
      text: "Como freelancer, minha renda oscila muito. A IA do app me ajuda a criar um colchão financeiro e a manter o foco nas metas de longo prazo.",
      achievement: "R$ 5.800 INVESTIDOS",
      achievementColor: "red"
    },
    {
      name: "Lucas Silva",
      role: "Gestor de Tráfego",
      location: "Florianópolis, SC",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      stars: 5,
      text: "O sistema de gamificação me viciou em poupar. Bati minha meta anual em apenas 7 meses usando as estratégias de controle do app.",
      achievement: "RANK: ELITE",
      achievementColor: "yellow"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tight">
          QUEM COMANDA COM FANTE, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 to-red-600 animate-gradient-text">DOMINA A ROTINA</span>
        </h2>
        <p className="text-gray-400 font-medium text-lg md:text-xl">
          Resultados reais. Pessoas reais. <span className="text-white font-bold">Disciplina real.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;