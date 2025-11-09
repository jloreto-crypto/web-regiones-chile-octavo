
import React, { useState } from 'react';
import type { UserData } from '../types';

interface LoginFormProps {
    onLogin: (data: UserData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onLogin({ name: name.trim() });
        }
    };

    return (
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-8 space-y-6 animate-fade-in">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-cyan-400 font-orbitron">Bienvenido</h1>
                <p className="text-gray-400 mt-2">Ingresa tu nombre para comenzar la experiencia de aprendizaje.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-900/50 border border-cyan-400/30 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-500"
                        placeholder="Ej: Javiera Carrera"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300"
                >
                    Ingresar al Módulo
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
