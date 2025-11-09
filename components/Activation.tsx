
import React, { useState } from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Activation: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [thoughts, setThoughts] = useState('');

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">2. Activación: Tus Ideas Previas</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">¿Qué sabes sobre las regiones de Chile?</h3>
                <p className="text-gray-400 mb-6">
                    Antes de sumergirnos en el contenido, queremos saber qué piensas. No hay respuestas correctas o incorrectas, ¡solo queremos conocer tus ideas!
                </p>
                <div>
                    <label htmlFor="thoughts" className="block text-gray-300 mb-2">
                        Escribe una o dos ideas que se te vengan a la mente cuando piensas en las diferencias entre Santiago y otras regiones de Chile.
                    </label>
                    <textarea
                        id="thoughts"
                        value={thoughts}
                        onChange={(e) => setThoughts(e.target.value)}
                        rows={5}
                        className="w-full bg-gray-900/50 border border-cyan-400/30 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
                        placeholder="Por ejemplo, ¿cómo crees que es la vida en el norte o en el sur comparada con la capital? ¿Qué trabajos imaginas que existen allí?"
                    />
                </div>
            </FuturisticCard>
            
            <FuturisticCard>
                 <h3 className="text-xl font-bold text-cyan-300 mb-4">¿Por qué es importante esta reflexión?</h3>
                 <p className="text-gray-400">
                    Activar tus conocimientos previos es como calentar antes de hacer ejercicio. Te prepara para conectar lo que ya sabes con la nueva información que vas a aprender. ¡Esto hace que el aprendizaje sea mucho más significativo y duradero!
                 </p>
            </FuturisticCard>

            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Siguiente: Desarrollo del Contenido
                </button>
            </div>
        </div>
    );
};

export default Activation;
