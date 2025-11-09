
import React from 'react';
import type { UserData, EvaluationState } from '../types';
import { Icons } from './Icons';

interface CertificateProps {
    userData: UserData | null;
    evaluationState: EvaluationState;
}

const Certificate: React.FC<CertificateProps> = ({ userData, evaluationState }) => {
    
    const printCertificate = () => {
        window.print();
    };

    if (!evaluationState.passed) {
        return (
            <div className="text-center p-8 bg-gray-800/50 backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-lg shadow-red-500/10 animate-fade-in">
                <h2 className="text-2xl font-bold text-red-400">Certificado No Disponible</h2>
                <p className="text-gray-300 mt-4">Debes aprobar la evaluación final para poder generar tu certificado de finalización.</p>
            </div>
        );
    }
    
    const completionDate = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Assuming 10 questions for score calculation
    const totalQuestions = 10;
    const scorePercentage = (evaluationState.score / totalQuestions) * 100;


    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">8. Certificado de Finalización</h2>

            <div className="certificate-container max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-2xl border-2 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-500/20 p-8 sm:p-12 text-gray-200">
                <div className="text-center border-b-2 border-cyan-500/30 pb-6 mb-6">
                    <h1 className="text-4xl font-bold text-cyan-300 font-orbitron tracking-widest">CERTIFICADO DE FINALIZACIÓN</h1>
                    <p className="text-lg text-gray-400 mt-2">se otorga a</p>
                </div>

                <div className="text-center my-10">
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {userData?.name || 'Estudiante'}
                    </h2>
                </div>

                <div className="text-center text-lg text-gray-300 max-w-2xl mx-auto">
                    <p>
                        Por haber completado satisfactoriamente el módulo de aprendizaje sobre
                        <strong className="text-cyan-400"> "Desarrollo Regional en Chile"</strong>.
                    </p>
                    <p className="mt-4">
                        Puntaje final obtenido: <strong className="text-green-400">{scorePercentage.toFixed(0)}%</strong>
                    </p>
                </div>

                <div className="text-center mt-12 text-gray-400">
                    <p>Emitido el {completionDate}</p>
                </div>
            </div>
            
            <div className="text-center pt-4">
                <button 
                    onClick={printCertificate} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center justify-center gap-2">
                        <Icons.Development/>
                        Imprimir o Guardar PDF
                    </span>
                </button>
            </div>
            <style>
            {`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .certificate-container, .certificate-container * {
                        visibility: visible;
                    }
                    .certificate-container {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 2rem;
                        border: 10px solid #22d3ee;
                        color: black !important;
                    }
                     .certificate-container h1, .certificate-container h2, .certificate-container p, .certificate-container strong {
                        color: black !important;
                        text-shadow: none;
                        background: none;
                        -webkit-print-color-adjust: exact;
                    }
                }
            `}
            </style>
        </div>
    );
};

export default Certificate;
