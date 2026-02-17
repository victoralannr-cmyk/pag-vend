
import React from 'react';

interface BadgeProps {
  text: string;
  icon: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ text, icon }) => (
  <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-red-900/40 bg-red-950/5 backdrop-blur-sm whitespace-nowrap mx-4 group hover:border-red-500/50 transition-colors duration-300">
    <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <span className="text-gray-200 font-semibold tracking-wide text-sm md:text-base uppercase italic">{text}</span>
  </div>
);

const Carousel: React.FC = () => {
  const items = [
    { text: "Controle Financeiro", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" /><path d="M18 12h4" /></svg> },
    { text: "Metas Claras", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
    { text: "Sprints 60 Dias", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg> },
    { text: "Progresso Visível", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { text: "Tarefas Diárias", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> },
  ];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .carousel-container::before,
        .carousel-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
        }
        .carousel-container::before {
          left: 0;
          background: linear-gradient(to right, black, transparent);
        }
        .carousel-container::after {
          right: 0;
          background: linear-gradient(to left, black, transparent);
        }
      `}</style>
      
      <div className="carousel-container relative">
        <div className="animate-scroll">
          {/* Render double to ensure continuous loop */}
          {[...items, ...items, ...items].map((item, index) => (
            <Badge key={index} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
