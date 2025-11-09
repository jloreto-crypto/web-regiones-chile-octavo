
import React, { useState } from 'react';
import { SECTIONS } from '../constants';
import type { UserData } from '../types';
import { Icons } from './Icons';

interface FloatingMenuProps {
    navigateTo: (section: string) => void;
    currentSection: string;
    resetProgress: () => void;
    openChatbot: () => void;
    userData: UserData | null;
}

const menuItems = [
    { section: SECTIONS.COVER, label: 'Portada', icon: <Icons.Home /> },
    { section: SECTIONS.INTRODUCTION, label: 'Introducción', icon: <Icons.Info /> },
    { section: SECTIONS.DEVELOPMENT, label: 'Desarrollo', icon: <Icons.Development /> },
    { section: SECTIONS.EVALUATION, label: 'Evaluación', icon: <Icons.Evaluation /> },
    { section: SECTIONS.SYNTHESIS, label: 'Síntesis', icon: <Icons.Synthesis /> },
    { section: SECTIONS.METACOGNITION, label: 'Cierre', icon: <Icons.Metacognition /> },
];

const NavLink: React.FC<{ item: typeof menuItems[0], isActive: boolean, onClick: () => void }> = ({ item, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive 
            ? 'bg-cyan-500/20 text-cyan-300 scale-105 shadow-lg' 
            : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
        }`}
    >
        {item.icon}
        <span className="font-medium">{item.label}</span>
    </button>
);


const FloatingMenu: React.FC<FloatingMenuProps> = ({ navigateTo, currentSection, resetProgress, openChatbot, userData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleNavigation = (section: string) => {
        navigateTo(section);
        setIsMenuOpen(false);
    };

    const menuContent = (
         <div className="flex flex-col h-full p-4">
            <div className="flex items-center space-x-3 border-b border-cyan-500/20 pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Icons.User />
                </div>
                <div>
                    <p className="font-bold text-white truncate">{userData?.name || 'Invitado'}</p>
                    <p className="text-xs text-gray-400">Estudiante</p>
                </div>
            </div>

            <nav className="flex-grow space-y-2">
                {menuItems.map(item => (
                    <NavLink 
                        key={item.section}
                        item={item}
                        isActive={currentSection === item.section}
                        onClick={() => handleNavigation(item.section)}
                    />
                ))}
            </nav>

            <div className="space-y-2 pt-4 border-t border-cyan-500/20">
                 <button onClick={openChatbot} className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition-colors duration-200">
                     <Icons.Chat />
                     <span>Asistente IA</span>
                 </button>
                 <button onClick={resetProgress} className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200">
                     <Icons.Reset />
                     <span>Reiniciar Módulo</span>
                 </button>
            </div>
        </div>
    );
    
    return (
        <>
            {/* --- Mobile Menu Button --- */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-full text-cyan-400"
                aria-label="Abrir menú"
            >
                <Icons.Menu />
            </button>
            
            {/* --- Mobile Menu Overlay --- */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div 
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                   {menuContent}
                </div>
            </div>

            {/* --- Desktop Sidebar --- */}
            <aside className="hidden md:block fixed top-0 left-0 h-full w-64 bg-gray-900/50 backdrop-blur-lg border-r border-cyan-500/10 z-20">
                {menuContent}
            </aside>
        </>
    );
};

export default FloatingMenu;
