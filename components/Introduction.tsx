
import React from 'react';
import { Icons } from './Icons';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Introduction: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const objectives = [
        "Identificar las principales regiones de Chile y una característica distintiva de cada una.",
        "Explicar con ejemplos sencillos los desafíos económicos y sociales que enfrentan diferentes regiones del país.",
        "Describir la importancia de la descentralización para un desarrollo más equitativo de Chile.",
        "Proponer una idea simple para mejorar la calidad de vida en su propia región o en una región estudiada.",
    ];
    
    const videoTranscript = "¡Hola, exploradores! Hoy vamos a viajar por un país largo y angosto llamado Chile. ¿Sabían que Chile se divide en 16 partes más pequeñas llamadas regiones? ¡Así es, 16! Cada una es como una pieza de un rompecabezas gigante, con su propio clima, paisajes y tesoros. En el norte, tenemos el Desierto de Atacama, el más seco del mundo, donde podemos ver estrellas como en ningún otro lugar. ¡Es como un observatorio natural! Si vamos al centro, encontramos la capital, Santiago, rodeada de valles donde crecen deliciosas frutas. Y en el sur, ¡wow! Nos esperan bosques frondosos, lagos de color esmeralda y volcanes impresionantes. Cada región tiene sus propias actividades, como la minería en el norte, la agricultura en el centro y el turismo en el sur. Juntas, todas estas regiones forman el increíble país que es Chile. ¿Están listos para conocer más sobre sus desafíos y cómo podemos hacer de cada región un lugar aún mejor para vivir? ¡Acompáñenme!";

  return (
    <div className="space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">1. Introducción al Módulo</h2>
        
        <FuturisticCard>
            <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20"><Icons.Target /></div>
                <div>
                    <h3 className="text-xl font-bold text-cyan-300">Objetivos de Aprendizaje</h3>
                    <p className="text-gray-400 mb-4">Al finalizar este módulo, serás capaz de:</p>
                    <ul className="space-y-2 list-inside">
                        {objectives.map((obj, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-cyan-400 mr-2">✦</span>
                                <span className="text-gray-300">{obj}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </FuturisticCard>

        <FuturisticCard>
             <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20"><Icons.Users /></div>
                <div>
                    <h3 className="text-xl font-bold text-cyan-300">Público Objetivo</h3>
                    <p className="text-gray-300">Este módulo está diseñado para estudiantes de educación básica con curiosidad por aprender sobre la geografía, sociedad y economía de Chile de una manera entretenida e interactiva.</p>
                </div>
            </div>
        </FuturisticCard>

        <FuturisticCard>
             <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20"><Icons.Transcript /></div>
                <div>
                    <h3 className="text-xl font-bold text-cyan-300">Transcripción del Video Principal</h3>
                    <p className="text-sm text-gray-400 mt-4 bg-gray-900/50 p-4 rounded-lg border border-gray-700 max-h-48 overflow-y-auto">
                        {videoTranscript}
                    </p>
                </div>
            </div>
        </FuturisticCard>

        <div className="text-center pt-4">
            <button 
                onClick={onNext} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                Siguiente: Activación
            </button>
        </div>
    </div>
  );
};

export default Introduction;
