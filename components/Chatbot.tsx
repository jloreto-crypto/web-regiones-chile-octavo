
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { GoogleGenAI } from '@google/genai';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

interface ChatbotProps {
    onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: '¡Hola! Soy tu asistente. ¿Cómo puedo ayudarte con el desarrollo regional de Chile?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;
        
        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // IMPORTANT: The API key is assumed to be set in the environment variables.
            if (!process.env.API_KEY) {
                throw new Error("API_KEY environment variable not set.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [{ 
                    role: "user", 
                    parts: [{text: `Responde como un profesor experto en geografía de Chile para un estudiante de primaria. Sé breve y claro. Mi pregunta es: ${input}`}] 
                }],
                config: {
                    systemInstruction: 'Eres un chatbot amigable y educativo llamado "Profe Heródoto". Tu especialidad es el desarrollo regional de Chile, y estás ayudando a un estudiante de primaria. Usa un lenguaje sencillo y ejemplos claros.',
                }
            });

            const botMessage: Message = { sender: 'bot', text: response.text };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error('Error calling Gemini API:', error);
            const errorMessage: Message = { sender: 'bot', text: 'Lo siento, tuve un problema para conectarme. Por favor, inténtalo de nuevo más tarde.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in" onClick={onClose}>
            <div 
                className="w-full max-w-md h-[80vh] flex flex-col bg-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 m-4"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                    <h3 className="text-lg font-bold text-cyan-400 font-orbitron">Profe Heródoto</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700">
                        <Icons.Close />
                    </button>
                </header>

                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0"><Icons.Bot/></div>}
                            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-end gap-2 justify-start">
                           <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0"><Icons.Bot/></div>
                            <div className="px-4 py-3 rounded-2xl bg-gray-700 rounded-bl-none">
                                <div className="flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0s'}}></span>
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-cyan-500/20">
                    <div className="flex items-center bg-gray-900/50 rounded-lg border border-gray-600 focus-within:border-cyan-400">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Escribe tu pregunta..."
                            className="flex-1 bg-transparent px-4 py-2 text-gray-200 focus:outline-none"
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading} className="p-3 text-cyan-400 hover:text-white disabled:text-gray-500">
                            <Icons.Send />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Chatbot;
