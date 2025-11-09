import React from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-0 left-0 -mt-16 -ml-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Introduction: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">1. Introducción: El Mosaico Chileno</h2>
            
            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">¿Por qué hablar de "Desarrollo Regional"?</h3>
                <p className="text-gray-400 mb-4">
                    Chile es mucho más que su capital, Santiago. Es un país de contrastes asombrosos, desde el desierto más árido del mundo en el norte hasta los hielos milenarios en el sur. Cada una de sus 16 regiones tiene una identidad, cultura, economía y desafíos únicos.
                </p>
                <p className="text-gray-400">
                    Sin embargo, por mucho tiempo, el desarrollo se ha concentrado en el centro del país. Esto ha generado desigualdades y ha limitado el potencial de muchas comunidades. El "desarrollo regional" busca cambiar esto, creando un país más equilibrado y justo donde todas las regiones tengan la oportunidad de prosperar.
                </p>
            </FuturisticCard>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Objetivos de Aprendizaje</h3>
                <p className="text-gray-400 mb-4">
                    Al finalizar este módulo, serás capaz de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong className="text-cyan-400">Identificar</strong> las principales características geográficas y económicas de las distintas zonas de Chile.</li>
                    <li><strong className="text-cyan-400">Comprender</strong> el concepto de centralización y sus efectos en las regiones.</li>
                    <li><strong className="text-cyan-400">Explicar</strong> la importancia de la descentralización para un desarrollo más equitativo del país.</li>
                    <li><strong className="text-cyan-400">Analizar</strong> los desafíos y potencialidades que enfrentan las regiones de Chile.</li>
                </ul>
            </FuturisticCard>

            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Siguiente: Activación de Conocimientos
                </button>
            </div>
        </div>
    );
};

export default Introduction;
