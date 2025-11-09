
import React, { useState } from 'react';
import type { UserData } from '../types';
import { Icons } from './Icons';

interface LoginFormProps {
  onLogin: (data: UserData) => void;
}

const FuturisticCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`bg-gray-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 p-8 ${className}`}>
        <div className="absolute inset-0 bg-grid-cyan opacity-5"></div>
        <div className="relative">{children}</div>
    </div>
);

const FuturisticInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }> = ({ error, ...props }) => (
    <input
        {...props}
        className={`w-full bg-gray-900/50 border ${error ? 'border-red-500/50' : 'border-cyan-400/30'} text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder-gray-500`}
    />
);

const FuturisticButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
    <button
        {...props}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transform hover:scale-105 transition-all duration-300"
    />
);

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onLogin({ name, email, rut });
    }
  };

  return (
    <FuturisticCard className="w-full max-w-md">
        <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Icons.User />
            </div>
            <h1 className="text-3xl font-bold text-cyan-400 font-orbitron">Registro de Estudiante</h1>
            <p className="text-gray-400 mt-2">Ingresa tus datos para generar tu certificado de participación.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
                <FuturisticInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre y apellido"
                    error={!!errors.name}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
                <FuturisticInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    error={!!errors.email}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">RUT (Opcional)</label>
                <FuturisticInput
                    type="text"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    placeholder="12.345.678-9"
                />
            </div>
            <FuturisticButton type="submit">
                Comenzar Aprendizaje
            </FuturisticButton>
        </form>
    </FuturisticCard>
  );
};

export default LoginForm;
