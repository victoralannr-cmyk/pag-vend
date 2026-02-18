import React from 'react';
import { CHECKOUT_URL } from '../constants.ts';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/q768GvkD/Chat-GPT-Image-17-de-fev-de-2026-10-45-16-removebg-preview.png" 
            alt="FANTE IA Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-extrabold tracking-tighter">FANTE IA</span>
        </div>
        
        <a 
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base inline-block"
        >
          ATIVE AGORA
        </a>
      </nav>
    </header>
  );
};

export default Header;