
import React, { useState, useEffect } from 'react';

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden ${className}`}>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative">{children}</div>
    </div>
);

const Metacognition: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [answers, setAnswers] = useState<string[]>(['', '', '']);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        try {
            const savedAnswers = localStorage.getItem('metacognitionAnswers');
            if (savedAnswers) {
                setAnswers(JSON.parse(savedAnswers));
            }
        } catch (error) {
            console.error("Error loading answers from localStorage", error);
        }
    }, []);

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const saveAnswers = () => {
        localStorage.setItem('metacognitionAnswers', JSON.stringify(answers));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const questions = [
        "Después de lo que aprendiste, ¿qué crees que es lo más difícil de vivir en una región muy lejana del centro de Chile? ¿Por qué?",
        "Si tuvieras el poder de crear un proyecto para mejorar tu propia región, ¿qué harías y cómo ayudaría a las personas que viven allí?",
        "¿Cómo le explicarías a un amigo de otro país por qué es importante que todas las regiones de Chile se desarrollen y no solo la capital?",
    ];

    const rubricData = {
        criteria: ["Comprensión del Contenido", "Profundidad de la Reflexión", "Claridad de la Expresión"],
        levels: ["Excelente", "Bueno", "Satisfactorio", "Necesita Mejora"],
        descriptors: [
            ["Demuestra una comprensión profunda y matizada de los desafíos regionales, conectando múltiples conceptos.", "Aplica los conceptos a situaciones nuevas de forma creativa y original, proponiendo soluciones viables.", "La respuesta es clara, bien estructurada, y utiliza un lenguaje preciso y adecuado."],
            ["Demuestra una buena comprensión de los desafíos regionales, conectando algunos conceptos.", "Reflexiona sobre los conceptos y los aplica a situaciones concretas con cierta elaboración.", "La respuesta es mayormente clara y organizada, con un uso adecuado del lenguaje."],
            ["Demuestra una comprensión básica de los desafíos regionales, pero con algunas imprecisiones.", "Aplica los conceptos de forma simple, con poca profundización o análisis personal.", "La respuesta es comprensible pero puede ser desorganizada o poco clara en algunas partes."],
            ["No demuestra una comprensión clara de los conceptos o los aplica incorrectamente.", "La reflexión es superficial o inexistente, sin conexión personal con el contenido.", "La respuesta es confusa, difícil de entender o no responde a la pregunta planteada."]
        ]
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 font-orbitron">7. Cierre y Metacognición</h2>

            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Preguntas para Reflexionar</h3>
                <p className="text-gray-400 mb-6">Tómate un momento para pensar en lo que has aprendido y responde las siguientes preguntas. Tus respuestas son importantes para consolidar tu aprendizaje.</p>
                <div className="space-y-6">
                    {questions.map((q, index) => (
                        <div key={index}>
                            <label className="block text-gray-300 mb-2">{index + 1}. {q}</label>
                            <textarea
                                value={answers[index]}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                rows={4}
                                className="w-full bg-gray-900/50 border border-cyan-400/30 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
                                placeholder="Escribe tu reflexión aquí..."
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button 
                        onClick={saveAnswers}
                        className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors duration-300">
                        {saved ? "¡Guardado!" : "Guardar Respuestas"}
                    </button>
                </div>
            </FuturisticCard>
            
            <FuturisticCard>
                <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">Rúbrica Analítica para Evaluación</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-300 border-collapse">
                        <thead className="text-xs text-cyan-300 uppercase bg-gray-900/50">
                            <tr>
                                <th scope="col" className="px-4 py-3 border border-gray-700">Criterio</th>
                                {rubricData.levels.map(level => (
                                    <th key={level} scope="col" className="px-4 py-3 border border-gray-700">{level}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rubricData.criteria.map((criterion, i) => (
                                <tr key={criterion} className="bg-gray-800/50">
                                    <th scope="row" className="px-4 py-4 font-medium text-gray-200 whitespace-nowrap border border-gray-700">{criterion}</th>
                                    {rubricData.descriptors[i].map((desc, j) => (
                                        <td key={j} className="px-4 py-4 border border-gray-700">{desc}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </FuturisticCard>

            <div className="text-center pt-4">
                <button 
                    onClick={onNext} 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300">
                    Finalizar y ver Certificado
                </button>
            </div>
        </div>
    );
};

export default Metacognition;
