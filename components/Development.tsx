
import React from 'react';
import { Icons } from './Icons';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const InfoPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
        <h4 className="font-bold text-cyan-300 mb-2">{title}</h4>
        <p className="text-gray-300">{children}</p>
    </div>
);

const Development: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">3. Desarrollo del Contenido</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Video Introductorio: Las Regiones de Chile</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-cyan-500/20">
                    <iframe 
                        src="https://www.youtube.com/embed/bvFD5Osbww8?autoplay=1&mute=1&rel=0" 
                        title="Las 16 regiones de Chile y sus capitales" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="text-center mt-4">
                    <a 
                        href="https://www.youtube.com/watch?v=bvFD5Osbww8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                        <Icons.ExternalLink />
                        <span>Ver en YouTube en una nueva pestaña</span>
                    </a>
                </div>
            </FuturisticCard>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Un Viaje por las Regiones de Chile</h3>
                <p className="text-gray-400 mb-6">
                    Chile es como un largo y diverso poema geográfico. Para entender sus desafíos y potencialidades, primero debemos conocer sus grandes zonas.
                </p>
                <div className="space-y-4">
                    <InfoPoint title="Norte Grande y Chico">
                        Caracterizado por el Desierto de Atacama, el más árido del mundo. Su principal riqueza es la minería, especialmente el cobre, que es el "sueldo de Chile". El desafío aquí es la escasez de agua y la necesidad de diversificar su economía.
                    </InfoPoint>
                    <InfoPoint title="Zona Central">
                        Aquí se concentra la mayor parte de la población y la actividad política y económica del país, incluyendo la capital, Santiago. Es una zona de clima mediterráneo, ideal para la agricultura, destacando sus famosos vinos. El gran desafío es la centralización, que acapara recursos y oportunidades.
                    </InfoPoint>
                    <InfoPoint title="Zona Sur y Austral">
                        Famosa por sus paisajes de bosques, lagos, volcanes y glaciares. La economía se basa en la agricultura, ganadería, pesca (salmonicultura) y el turismo. Los desafíos son la conectividad (muchas islas y territorio accidentado) y el proteger su invaluable riqueza natural.
                    </InfoPoint>
                </div>
            </FuturisticCard>

            <FuturisticCard>
                 <h3 className="text-xl font-bold text-cyan-300 mb-4">El Gran Desafío: La Descentralización</h3>
                 <p className="text-gray-400 mb-4">
                    Imagina que en un equipo de fútbol, solo un jugador pudiera tomar todas las decisiones. ¡No sería muy justo ni eficiente! Algo parecido pasa en Chile. Durante mucho tiempo, la mayoría de las decisiones importantes, el dinero y las oportunidades se han concentrado en Santiago.
                </p>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/30">
                    <p className="text-lg text-cyan-200">
                        La <strong className="font-bold">descentralización</strong> es el proceso de entregar más poder, recursos y capacidad de decisión a las regiones. El objetivo es que cada región pueda resolver sus propios problemas y aprovechar sus oportunidades según su propia realidad, sin tener que esperar la aprobación de Santiago para todo.
                    </p>
                </div>
                 <p className="text-gray-400 mt-4">
                    Esto permite un desarrollo más justo y equitativo, donde la riqueza que genera una región (como la minería en el norte) también se invierte en mejorar la calidad de vida de sus propios habitantes.
                </p>
            </FuturisticCard>
            
            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Siguiente: Pausa y Comprobación
                </button>
            </div>
        </div>
    );
};

export default Development;