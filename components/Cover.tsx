
import React from 'react';

const ChileMapSVG: React.FC = () => (
    <svg viewBox="0 0 100 400" className="w-32 h-auto text-cyan-400" fill="currentColor" stroke="white" strokeWidth="0.5">
        <style>
        {`
            .region-path {
                transition: fill 0.3s ease, transform 0.3s ease;
                animation: float 6s ease-in-out infinite;
            }
            .region-path:hover {
                fill: #67e8f9; /* lighter cyan */
                transform: scale(1.1);
            }
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
                100% { transform: translateY(0px); }
            }
            .sparkle {
                animation: sparkle-anim 2s infinite;
                fill: #f0f9ff;
            }
            @keyframes sparkle-anim {
                0%, 100% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1.2); }
            }
        `}
        </style>
        <g>
            <path className="region-path" style={{animationDelay: '0s'}} d="M50,10 L55,15 L52,20 L60,30 L55,35 L48,30 L50,20 Z" />
            <path className="region-path" style={{animationDelay: '0.2s'}} d="M55,35 L60,40 L58,50 L65,60 L60,65 L53,60 L55,50 Z" />
            <path className="region-path" style={{animationDelay: '0.4s'}} d="M60,65 L65,70 L63,80 L70,90 L65,95 L58,90 L60,80 Z" />
            <path className="region-path" style={{animationDelay: '0.6s'}} d="M58,95 L63,100 L61,110 L68,120 L63,125 L56,120 L58,110 Z" />
            <path className="region-path" style={{animationDelay: '0.8s'}} d="M56,125 L61,130 L59,140 L66,150 L61,155 L54,150 L56,140 Z" />
            <path className="region-path" style={{animationDelay: '1s'}} d="M54,155 L59,160 L57,170 L64,180 L59,185 L52,180 L54,170 Z" />
            <path className="region-path" style={{animationDelay: '1.2s'}} d="M52,185 L57,190 L55,200 L62,210 L57,215 L50,210 L52,200 Z" />
            <path className="region-path" style={{animationDelay: '1.4s'}} d="M50,215 L55,220 L53,230 L60,240 L55,245 L48,240 L50,230 Z" />
            <path className="region-path" style={{animationDelay: '1.6s'}} d="M48,245 L53,250 L51,260 L58,270 L53,275 L46,270 L48,260 Z" />
            <path className="region-path" style={{animationDelay: '1.8s'}} d="M46,275 L51,280 L49,290 L56,300 L51,305 L44,300 L46,290 Z" />
            <path className="region-path" style={{animationDelay: '2s'}} d="M44,305 L49,310 L47,320 L54,330 L49,335 L42,330 L44,320 Z" />
            <path className="region-path" style={{animationDelay: '2.2s'}} d="M42,335 L47,340 L45,350 L52,360 L47,365 L40,360 L42,350 Z" />
            <path className="region-path" style={{animationDelay: '2.4s'}} d="M40,365 L45,370 L43,380 L50,390 L45,395 L38,390 L40,380 Z" />
        </g>
        <circle className="sparkle" cx="70" cy="50" r="2" style={{animationDelay: '0.5s'}} />
        <circle className="sparkle" cx="40" cy="150" r="1.5" style={{animationDelay: '1.5s'}}/>
        <circle className="sparkle" cx="75" cy="250" r="2.5" style={{animationDelay: '1s'}}/>
        <circle className="sparkle" cx="35" cy="350" r="1" style={{animationDelay: '0.2s'}}/>
    </svg>
);


const Cover: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] animate-fade-in">
        <div className="relative mb-8">
             <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
             <div className="relative">
                <ChileMapSVG />
             </div>
        </div>
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 font-orbitron animate-slide-in-bottom">
        Desarrollo Regional en Chile
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
        Una travesía interactiva por los desafíos y potenciales de las regiones de nuestro país.
      </p>
      <button 
        onClick={onStart} 
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
        Iniciar Módulo
      </button>
    </div>
  );
};

export default Cover;
