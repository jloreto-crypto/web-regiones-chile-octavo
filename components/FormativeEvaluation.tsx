
import React from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);


const FormativeEvaluation: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">4. Evaluación Formativa</h2>
        
        <FuturisticCard>
            <h3 className="text-xl font-bold text-cyan-300 text-center">Ponte a Prueba</h3>
            <p className="text-gray-400 text-center mt-2 mb-6">Este juego te ayudará a reforzar lo aprendido sobre desarrollo y sus implicancias. ¡No te preocupes, es solo para practicar!</p>
            
            <div className="w-full aspect-[795/690] mx-auto bg-gray-900 rounded-lg overflow-hidden border border-cyan-500/20">
                <iframe 
                    allow="fullscreen; autoplay; allow-top-navigation-by-user-activation" 
                    allowFullScreen 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    src="https://es.educaplay.com/juego/11378579-desarrollo_humano_9_a.html"
                    title="Juego Educaplay: Desarrollo Humano"
                ></iframe>
            </div>
        </FuturisticCard>

        <div className="text-center pt-4">
            <button 
                onClick={onNext} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                Siguiente: Evaluación Final
            </button>
        </div>
    </div>
  );
};

export default FormativeEvaluation;
