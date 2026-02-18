
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg md:text-xl font-bold uppercase italic tracking-tight transition-colors ${isOpen ? 'text-red-500' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : 'text-gray-500'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "O que exatamente é o Fante IA?",
      answer: "O Fante IA não é apenas um app de finanças, é um ecossistema de alta performance. Ele combina inteligência artificial para análise de gastos, um sistema de gestão de rotina gamificado e um mentor digital que te cobra e te orienta a atingir suas metas de elite."
    },
    {
      question: "Como funciona o sistema de XP e níveis?",
      answer: "Cada tarefa financeira ou de rotina concluída (como registrar um gasto, bater a meta de água ou concluir um treino) te dá pontos de XP. Ao acumular XP, você sobe de rank — de Soldado a General de Elite. Isso transforma o tédio das finanças em um jogo viciante de progresso real."
    },
    {
      question: "Meus dados financeiros estão seguros?",
      answer: "Segurança é nossa prioridade absoluta. Utilizamos criptografia de ponta a ponta de nível bancário e não temos acesso às suas senhas bancárias. Você tem controle total sobre quais dados deseja inserir e como deseja gerenciar sua privacidade."
    },
    {
      question: "Posso acessar o app em múltiplos dispositivos?",
      answer: "Sim! Sua conta é sincronizada em tempo real. Você pode começar o dia organizando suas tarefas no computador e registrar seus gastos na rua pelo celular. O Fante IA está disponível via Web e Mobile."
    },
    {
      question: "E se eu não gostar? Posso cancelar?",
      answer: "Com certeza. No plano mensal, você cancela quando quiser sem letras miúdas. No plano anual, você garante o maior desconto e tem acesso total por 12 meses. Queremos que você fique por resultados, não por contratos."
    },
    {
      question: "O app serve para quem está endividado?",
      answer: "Especialmente para quem precisa de ordem. O Fante IA ajuda a estancar sangramentos financeiros, priorizar dívidas e criar a disciplina necessária para sair do vermelho e entrar na rota da prosperidade."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 md:py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tight">
            Dúvidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 to-red-600 animate-gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-400 font-medium text-lg">
            Tudo o que você precisa saber para começar sua transformação hoje.
          </p>
        </div>

        <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="divide-y divide-white/5">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium italic">
            Ainda tem dúvidas? <span className="text-red-500 cursor-pointer hover:underline">Fale com nosso suporte 24/7.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
