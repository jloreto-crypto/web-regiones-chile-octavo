import React, { useState } from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const FormativeEvaluation: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({ 0: null, 1: null });
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        {
            question: "Verdadero o Falso: La descentralización busca que todo el poder se concentre en Santiago.",
            correctAnswer: false
        },
        {
            question: "Verdadero o Falso: La minería de cobre es una actividad económica muy importante principalmente en el sur de Chile.",
            correctAnswer: false
        }
    ];

    const handleAnswer = (index: number, answer: boolean) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [index]: answer }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const isComplete = Object.values(answers).every(a => a !== null);
    const score = Object.keys(answers).reduce((acc, key) => {
        const index = parseInt(key, 10);
        return answers[index] === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">4. Pausa y Comprobación</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Evaluación Formativa</h3>
                <p className="text-gray-400 mb-6">
                    ¡Vamos a hacer una pequeña pausa para comprobar lo que has aprendido! Esto no es una prueba con nota, es solo para ayudarte a reforzar los conceptos más importantes.
                </p>
                <div className="space-y-6">
                    {questions.map((q, index) => (
                        <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <p className="text-gray-200 mb-3">{index + 1}. {q.question}</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => handleAnswer(index, true)}
                                    className={`w-full p-2 rounded-lg border-2 transition-colors ${
                                        answers[index] === true ? 'bg-cyan-500/30 border-cyan-400' : 'bg-gray-800/60 border-gray-700 hover:border-cyan-500'
                                    }`}
                                >Verdadero</button>
                                <button
                                    onClick={() => handleAnswer(index, false)}
                                    className={`w-full p-2 rounded-lg border-2 transition-colors ${
                                        answers[index] === false ? 'bg-cyan-500/30 border-cyan-400' : 'bg-gray-800/60 border-gray-700 hover:border-cyan-500'
                                    }`}
                                >Falso</button>
                            </div>
                            {submitted && (
                                <div className={`mt-3 p-2 rounded-lg text-sm ${answers[index] === q.correctAnswer ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                    {answers[index] === q.correctAnswer ? '¡Correcto!' : `Incorrecto. La respuesta correcta era ${q.correctAnswer ? 'Verdadero' : 'Falso'}.`}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                 <div className="text-center mt-8">
                    {!submitted ? (
                        <button onClick={handleSubmit} disabled={!isComplete} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-8 rounded-full disabled:opacity-50">
                            Revisar Respuestas
                        </button>
                    ) : (
                         <div className="text-lg">
                            <p>¡Buen trabajo! Has respondido {score} de {questions.length} correctamente.</p>
                        </div>
                    )}
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
