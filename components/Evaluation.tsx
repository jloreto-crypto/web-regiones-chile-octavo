
import React, { useState, useEffect, useMemo } from 'react';
import type { Question, EvaluationState } from '../types';

interface EvaluationProps {
    questions: Question[];
    onComplete: (score: number, attempts: number, passed: boolean) => void;
    initialState: EvaluationState;
}

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-grid-cyan opacity-5"></div>
        <div className="relative">{children}</div>
    </div>
);


const Evaluation: React.FC<EvaluationProps> = ({ questions, onComplete, initialState }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    const [attempts, setAttempts] = useState(initialState.attempts || 0);
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

    useEffect(() => {
        // Shuffle questions on initial load or retry
        setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
    }, [questions, attempts]);

    useEffect(() => {
        if (isFinished || attempts >= 6) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    finishAttempt();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFinished, attempts]);

    const score = useMemo(() => {
        return shuffledQuestions.reduce((acc, question, index) => {
            if (selectedAnswers[index] === question.correctAnswer) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [selectedAnswers, shuffledQuestions]);
    
    const scorePercentage = useMemo(() => (score / shuffledQuestions.length) * 100, [score, shuffledQuestions.length]);

    const handleAnswerSelect = (questionIndex: number, answer: string) => {
        if (isFinished) return;
        setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    const finishAttempt = () => {
        setIsFinished(true);
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const passed = scorePercentage >= 60;
        onComplete(score, newAttempts, passed);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            finishAttempt();
        }
    };

    const retry = () => {
        if (attempts < 6) {
            setCurrentQuestionIndex(0);
            setSelectedAnswers({});
            setIsFinished(false);
            setTimeLeft(90 * 60);
        }
    };
    
    if (initialState.passed) {
        return (
             <FuturisticCard>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-400">¡Evaluación Aprobada!</h3>
                    <p className="mt-4 text-gray-300">Ya has superado esta evaluación con un {initialState.score / questions.length * 100}%. Puedes continuar con el siguiente módulo.</p>
                </div>
            </FuturisticCard>
        );
    }
    
    if (attempts >= 6 && !isFinished) {
         return (
             <FuturisticCard>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-red-400">Límite de Intentos Alcanzado</h3>
                    <p className="mt-4 text-gray-300">Has utilizado tus 6 intentos. Por favor, contacta a tu instructor.</p>
                </div>
            </FuturisticCard>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">5. Evaluación Final</h2>

            <FuturisticCard>
                <div className="flex justify-between items-center mb-6 border-b border-cyan-500/20 pb-4">
                    <div className="text-lg">
                        <span className="font-bold text-cyan-300">Tiempo:</span> {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="text-lg">
                        <span className="font-bold text-cyan-300">Intento:</span> {attempts + 1} / 6
                    </div>
                     <div className="text-lg">
                        <span className="font-bold text-cyan-300">Pregunta:</span> {currentQuestionIndex + 1} / {shuffledQuestions.length}
                    </div>
                </div>

                {!isFinished ? (
                    <div>
                        {shuffledQuestions.length > 0 && (
                            <>
                                <h3 className="text-xl text-gray-200 mb-6">{shuffledQuestions[currentQuestionIndex].question}</h3>
                                <div className="space-y-3">
                                    {shuffledQuestions[currentQuestionIndex].options.map(option => {
                                        const isSelected = selectedAnswers[currentQuestionIndex] === option;
                                        return (
                                            <button 
                                                key={option}
                                                onClick={() => handleAnswerSelect(currentQuestionIndex, option)}
                                                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                                                    isSelected 
                                                    ? 'bg-cyan-500/30 border-cyan-400 scale-105' 
                                                    : 'bg-gray-800/60 border-gray-700 hover:border-cyan-500'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="text-center mt-8">
                                    <button 
                                        onClick={handleNextQuestion}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                                        {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Intento'}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className={`text-3xl font-bold ${scorePercentage >= 60 ? 'text-green-400' : 'text-red-400'}`}>
                            {scorePercentage >= 60 ? '¡Felicitaciones! Has Aprobado' : 'Intento Finalizado'}
                        </h3>
                        <p className="text-xl mt-4">Tu puntaje: {score.toFixed(0)} de {shuffledQuestions.length} ({scorePercentage.toFixed(0)}%)</p>
                        <p className="text-gray-400 mt-2">Necesitas un 60% para aprobar.</p>
                        
                        {scorePercentage < 60 && attempts < 6 && (
                            <button onClick={retry} className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300">
                                Intentar Nuevamente ({6 - attempts} {6 - attempts === 1 ? 'intento restante' : 'intentos restantes'})
                            </button>
                        )}
                         {scorePercentage >= 60 && (
                            <p className="mt-4 text-green-300">¡Excelente trabajo! Ya puedes avanzar a la siguiente sección.</p>
                        )}
                    </div>
                )}
            </FuturisticCard>
        </div>
    );
};

export default Evaluation;
