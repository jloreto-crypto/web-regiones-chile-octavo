import React from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Synthesis: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const keyIdeas = [
        "Chile es un país diverso con 16 regiones, cada una con características únicas (desierto en el norte, valles en el centro, volcanes y lagos en el sur).",
        "El país enfrenta desafíos de conectividad (por su geografía), desigualdad (oportunidades concentradas en Santiago) y dependencia económica en algunas regiones.",
        "La descentralización es clave para un desarrollo más justo, dando a las regiones más poder para tomar sus propias decisiones y administrar sus recursos.",
        "Entender estos desafíos nos permite pensar en soluciones para que todas las regiones puedan crecer y ofrecer una buena calidad de vida a sus habitantes."
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">6. Síntesis y Resumen</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Ideas Clave para Recordar</h3>
                <p className="text-gray-400 mb-6">
                    ¡Has recorrido un largo camino! Aquí tienes un resumen de las ideas más importantes que hemos explorado en este módulo sobre el desarrollo regional en Chile.
                </p>
                <ul className="space-y-4">
                    {keyIdeas.map((idea, index) => (
                        <li key={index} className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                            <span className="text-cyan-400 text-xl mr-4 font-bold">{index + 1}</span>
                            <p className="text-gray-300">{idea}</p>
                        </li>
                    ))}
                </ul>
            </FuturisticCard>
            
            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Mapa Conceptual</h3>
                 <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <p className="text-gray-300">
                        <strong className="text-cyan-300 block text-lg mb-2">Desarrollo Regional en Chile</strong>
                        <span className="block my-2 text-gray-500">↓</span>
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-white">Diversidad Geográfica y Económica</span>
                        <span className="block my-2 text-gray-500">↓</span>
                        <div className="flex justify-around mt-2">
                             <span className="bg-gray-700 px-3 py-1 rounded-full text-white">Potencialidades</span>
                             <span className="bg-gray-700 px-3 py-1 rounded-full text-white">Desafíos</span>
                        </div>
                         <div className="flex justify-around mt-1">
                             <span className="text-gray-500"> (Minería, Agricultura, Turismo)</span>
                             <span className="text-gray-500"> (Conectividad, Desigualdad)</span>
                        </div>
                        <span className="block my-2 text-gray-500">↓</span>
                        <span className="bg-cyan-600 px-4 py-2 rounded-full text-white font-bold">Solución: Descentralización</span>
                         <span className="block my-2 text-gray-500">↓</span>
                        <strong className="text-green-400 block text-lg mt-2">Objetivo: Desarrollo Equitativo</strong>
                    </p>
                </div>
            </FuturisticCard>
            

            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Siguiente: Cierre y Metacognición
                </button>
            </div>
        </div>
    );
};

export default Synthesis;
