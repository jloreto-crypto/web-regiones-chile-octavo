
import React, { useState } from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="relative">{children}</div>
    </div>
);

const Development: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState<{[key: number]: boolean}>({});

  const videoQuizzes = [
    {
      time: "1:05",
      question: "¿Qué recurso natural es muy importante en el norte de Chile?",
      options: ["Madera", "Cobre", "Vino"],
      correct: "Cobre",
    },
    {
      time: "2:15",
      question: "¿Qué caracteriza principalmente a la zona sur de Chile?",
      options: ["Desierto", "Valles agrícolas", "Bosques y lagos"],
      correct: "Bosques y lagos",
    }
  ];

  const handleAnswer = (quizIndex: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [quizIndex]: answer }));
    setShowFeedback(prev => ({...prev, [quizIndex]: true}));
  };

  return (
    <div className="space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">3. Desarrollo del Contenido</h2>
        
        <FuturisticCard>
            <h3 className="text-xl font-bold text-cyan-300 text-center">Video Central: Las Regiones de Chile</h3>
            <p className="text-gray-400 text-center mt-2 mb-6">Observa con atención el siguiente video. A medida que avances, aparecerán preguntas para verificar tu comprensión.</p>
            
            <div className="w-full aspect-video mx-auto bg-gray-900 rounded-lg overflow-hidden border border-cyan-500/20 mb-8">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/bvFD5Osbww8?si=A325lM6pLH4tMA2B" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-cyan-300">Video-Quiz Interactivo</h3>
              {videoQuizzes.map((quiz, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <p className="font-semibold text-gray-300">
                    <span className="text-cyan-400 font-orbitron mr-2">PAUSA EN {quiz.time}:</span> 
                    {quiz.question}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    {quiz.options.map(option => {
                        const isSelected = quizAnswers[index] === option;
                        const isCorrect = option === quiz.correct;
                        const feedbackVisible = showFeedback[index];
                        
                        let buttonClass = 'border border-gray-600 hover:bg-cyan-500/20 hover:border-cyan-500 text-gray-300';
                        if (feedbackVisible && isSelected) {
                            buttonClass = isCorrect ? 'bg-green-500/50 border-green-500' : 'bg-red-500/50 border-red-500';
                        } else if (feedbackVisible && isCorrect) {
                            buttonClass = 'border-green-500';
                        }
                      
                        return (
                          <button 
                            key={option}
                            onClick={() => handleAnswer(index, option)}
                            disabled={feedbackVisible}
                            className={`w-full text-left p-2 px-4 rounded-md transition-colors duration-200 ${buttonClass}`}
                          >
                            {option}
                          </button>
                        );
                    })}
                  </div>
                  {showFeedback[index] && (
                    <p className={`mt-2 text-sm ${quizAnswers[index] === quiz.correct ? 'text-green-400' : 'text-red-400'}`}>
                      {quizAnswers[index] === quiz.correct ? '¡Correcto!' : `Respuesta incorrecta. La respuesta es ${quiz.correct}.`}
                    </p>
                  )}
                </div>
              ))}
            </div>
        </FuturisticCard>

        <div className="text-center pt-4">
            <button 
                onClick={onNext} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                Siguiente: Evaluación Formativa
            </button>
        </div>
    </div>
  );
};

export default Development;
