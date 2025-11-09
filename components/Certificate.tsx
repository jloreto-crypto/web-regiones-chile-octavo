
import React from 'react';
import type { UserData, EvaluationState } from '../types';
import { Icons } from './Icons';

// This is a placeholder SVG for a QR code. In a real app, you'd use a library to generate this dynamically.
const QrCodeSVG: React.FC = () => (
    <svg viewBox="0 0 25 25" className="w-24 h-24" fill="currentColor">
        <path d="M0 0h7v7H0zm2 2h3v3H2zM0 9h7v7H0zm2 2h3v3H2zM0 18h7v7H0zm2 2h3v3H2zM9 0h7v7H9zm2 2h3v3h-3zM9 9h7v7H9zm2 2h3v3h-3zM9 18h7v7H9zm2 2h3v3h-3zM18 0h7v7h-7zm2 2h3v3h-3zM18 9h7v7h-7zm2 2h3v3h-3zM18 18h7v7h-7zm2 2h3v3h-3z"/>
    </svg>
);


const Certificate: React.FC<{ userData: UserData | null; evaluationState: EvaluationState }> = ({ userData, evaluationState }) => {

    const generatePdf = () => {
        const element = document.getElementById('certificate');
        if (element) {
            const opt = {
                margin: 0,
                filename: `Certificado_${userData?.name.replace(' ','_') || 'participacion'}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            // @ts-ignore
            html2pdf().set(opt).from(element).save();
        }
    };
    
    if (!evaluationState.passed) {
        return (
            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-xl border border-red-500/20 rounded-2xl animate-fade-in">
                <h2 className="text-2xl font-bold text-red-400">Certificado No Disponible</h2>
                <p className="mt-4 text-gray-300">Debes aprobar la evaluación final con un 60% o más para generar tu certificado de participación.</p>
                <p className="mt-2 text-gray-400">Tu puntaje actual es { (evaluationState.score / 10 * 100).toFixed(0) }%. Por favor, regresa a la sección de evaluación e inténtalo de nuevo.</p>
            </div>
        );
    }

    const issueDate = new Date().toLocaleDateString('es-CL');

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">8. Certificado de Participación</h2>
            
            <div id="certificate" className="w-full max-w-4xl mx-auto bg-gray-800 text-gray-200 aspect-[11/8.5] p-8 border-4 border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-500/20 relative overflow-hidden font-sans">
                {/* Background elements */}
                <div className="absolute -top-20 -left-20 w-80 h-80 border-4 border-cyan-500/20 rounded-full opacity-50"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 border-4 border-blue-500/20 rounded-full opacity-50"></div>
                <div className="absolute inset-0 bg-grid-cyan opacity-5"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center border-b-2 border-cyan-400/30 pb-4">
                        <h1 className="text-5xl font-bold text-cyan-400 font-orbitron tracking-widest">CERTIFICADO</h1>
                        <h2 className="text-2xl text-gray-300 mt-2">DE PARTICIPACIÓN</h2>
                    </div>
                    
                    <div className="flex-grow flex flex-col items-center justify-center text-center my-8">
                        <p className="text-lg text-gray-400">Otorgado a:</p>
                        <p className="text-4xl font-bold text-white my-4">{userData?.name || 'Estudiante Ejemplar'}</p>
                        <p className="max-w-xl text-lg text-gray-300">
                            Por haber completado satisfactoriamente el módulo educativo interactivo sobre
                            <span className="font-bold text-cyan-300"> "Desarrollo Regional en Chile"</span>.
                        </p>
                    </div>

                    <div className="flex justify-between items-end mt-auto text-sm">
                        <div className="text-center">
                            <p className="font-bold text-lg">Juan Loreto</p>
                            <hr className="my-1 border-cyan-400/50" />
                            <p className="text-gray-400">Instructor</p>
                        </div>
                        <div className="text-center">
                            <QrCodeSVG />
                            <a href="https://www.colegioabo.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.colegioabo.com</a>
                        </div>
                        <div className="text-center">
                             <p className="font-bold text-lg">Colegio Adolfo Beyzaga Ovando</p>
                            <hr className="my-1 border-cyan-400/50" />
                            <p className="text-gray-400">Institución Emisora</p>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 text-center mt-2">
                        Emitido el {issueDate} | Válido por 1 año | 80 horas académicas.
                    </div>
                </div>
            </div>

            <div className="text-center pt-4">
                <button 
                    onClick={generatePdf}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 transform hover:scale-105 transition-all duration-300">
                    <Icons.Download />
                    Descargar Certificado (PDF)
                </button>
            </div>
        </div>
    );
};

export default Certificate;
