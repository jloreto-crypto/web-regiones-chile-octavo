
import React from 'react';
import { Icons } from './Icons';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Synthesis: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const keyIdeas = [
        {
            title: "Diversidad Geográfica",
            description: "Chile se divide en 16 regiones con paisajes y climas muy diferentes, desde el desierto en el norte hasta los glaciares en el sur.",
            icon: <Icons.Mountain />
        },
        {
            title: "Desafíos de Conectividad",
            description: "La forma larga y angosta del país, junto a la Cordillera de los Andes, crea grandes desafíos para conectar y desarrollar todas las regiones por igual.",
            icon: <Icons.Road />
        },
        {
            title: "Importancia de la Descentralización",
            description: "Para un desarrollo justo, es crucial que cada región pueda tomar sus propias decisiones y usar sus recursos para solucionar sus problemas específicos.",
            icon: <Icons.Balance />
        },
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">6. Síntesis y Contenido Adicional</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Ideas Clave del Módulo</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {keyIdeas.map(idea => (
                        <div key={idea.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 text-center hover:border-cyan-500 hover:scale-105 transition-all duration-300">
                            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4 text-cyan-400">
                                {idea.icon}
                            </div>
                            <h4 className="font-bold text-lg text-gray-200">{idea.title}</h4>
                            <p className="text-sm text-gray-400 mt-2">{idea.description}</p>
                        </div>
                    ))}
                </div>
            </FuturisticCard>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Podcast: Una Mirada Profunda</h3>
                <p className="text-gray-400 mb-4">Escucha este podcast para explorar más a fondo la geografía, demografía y las tensiones del desarrollo en Chile.</p>
                <div className="rounded-lg overflow-hidden border border-cyan-500/20">
                    <iframe 
                        width="100%" 
                        height="166" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1865955609&color=%2300b4d8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                        title="Soundcloud Podcast"
                        >
                    </iframe>
                </div>
            </FuturisticCard>
            
            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Siguiente: Metacognición
                </button>
            </div>
        </div>
    );
};

export default Synthesis;
