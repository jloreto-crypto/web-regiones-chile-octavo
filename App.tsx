
import React, { useState, useEffect, useMemo } from 'react';
import LoginForm from './components/LoginForm';
import Cover from './components/Cover';
import Introduction from './components/Introduction';
import Activation from './components/Activation';
import Development from './components/Development';
import FormativeEvaluation from './components/FormativeEvaluation';
import Evaluation from './components/Evaluation';
import Synthesis from './components/Synthesis';
import Metacognition from './components/Metacognition';
import Certificate from './components/Certificate';
import { SECTIONS, evaluationQuestions } from './constants';
import type { UserData, EvaluationState } from './types';
import { Icons } from './components/Icons';
import Chatbot from './components/Chatbot';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [currentSection, setCurrentSection] = useState<string>(SECTIONS.LOGIN);
    const [completedSections, setCompletedSections] = useState<string[]>([]);
    const [evaluationState, setEvaluationState] = useState<EvaluationState>({
        score: 0,
        attempts: 0,
        passed: false,
    });
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    useEffect(() => {
        try {
            const savedData = localStorage.getItem('userData');
            const savedSection = localStorage.getItem('currentSection');
            const savedCompleted = localStorage.getItem('completedSections');
            const savedEval = localStorage.getItem('evaluationState');

            if (savedData) {
                const parsedData = JSON.parse(savedData);
                setUserData(parsedData);
                setCurrentSection(savedSection || SECTIONS.COVER);
            }
            if (savedCompleted) {
                setCompletedSections(JSON.parse(savedCompleted));
            }
            if (savedEval) {
                setEvaluationState(JSON.parse(savedEval));
            }
        } catch (error) {
            console.error("Error loading data from localStorage", error);
            resetProgress();
        }
    }, []);

    const handleLogin = (data: UserData) => {
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data));
        navigateTo(SECTIONS.COVER);
    };

    const navigateTo = (section: string) => {
        if (!completedSections.includes(currentSection) && currentSection !== SECTIONS.LOGIN) {
            const newCompleted = [...completedSections, currentSection];
            setCompletedSections(newCompleted);
            localStorage.setItem('completedSections', JSON.stringify(newCompleted));
        }
        setCurrentSection(section);
        localStorage.setItem('currentSection', section);
        window.scrollTo(0, 0);
    };
    
    const handleEvaluationComplete = (score: number, attempts: number, passed: boolean) => {
        const newState = { score, attempts, passed };
        setEvaluationState(newState);
        localStorage.setItem('evaluationState', JSON.stringify(newState));
        navigateTo(passed ? SECTIONS.SYNTHESIS : SECTIONS.EVALUATION);
    };

    const resetProgress = () => {
        localStorage.clear();
        setUserData(null);
        setCurrentSection(SECTIONS.LOGIN);
        setCompletedSections([]);
        setEvaluationState({ score: 0, attempts: 0, passed: false });
    };

    const sectionOrder = useMemo(() => [
        SECTIONS.LOGIN, SECTIONS.COVER, SECTIONS.INTRODUCTION, SECTIONS.ACTIVATION,
        SECTIONS.DEVELOPMENT, SECTIONS.FORMATIVE_EVALUATION, SECTIONS.EVALUATION,
        SECTIONS.SYNTHESIS, SECTIONS.METACOGNITION, SECTIONS.CERTIFICATE
    ], []);

    const currentStep = useMemo(() => sectionOrder.indexOf(currentSection), [currentSection, sectionOrder]);

    const renderSection = () => {
        switch (currentSection) {
            case SECTIONS.LOGIN:
                return <LoginForm onLogin={handleLogin} />;
            case SECTIONS.COVER:
                return <Cover onStart={() => navigateTo(SECTIONS.INTRODUCTION)} />;
            case SECTIONS.INTRODUCTION:
                return <Introduction onNext={() => navigateTo(SECTIONS.ACTIVATION)} />;
            case SECTIONS.ACTIVATION:
                return <Activation onNext={() => navigateTo(SECTIONS.DEVELOPMENT)} />;
            case SECTIONS.DEVELOPMENT:
                return <Development onNext={() => navigateTo(SECTIONS.FORMATIVE_EVALUATION)} />;
            case SECTIONS.FORMATIVE_EVALUATION:
                return <FormativeEvaluation onNext={() => navigateTo(SECTIONS.EVALUATION)} />;
            case SECTIONS.EVALUATION:
                return <Evaluation 
                           questions={evaluationQuestions} 
                           onComplete={handleEvaluationComplete}
                           initialState={evaluationState} />;
            case SECTIONS.SYNTHESIS:
                return <Synthesis onNext={() => navigateTo(SECTIONS.METACOGNITION)} />;
            case SECTIONS.METACOGNITION:
                return <Metacognition onNext={() => navigateTo(SECTIONS.CERTIFICATE)} />;
            case SECTIONS.CERTIFICATE:
                return <Certificate userData={userData} evaluationState={evaluationState} />;
            default:
                return <LoginForm onLogin={handleLogin} />;
        }
    };
    
    if (currentSection === SECTIONS.LOGIN) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <LoginForm onLogin={handleLogin} />
        </div>
      );
    }
    
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 selection:bg-cyan-400/20">
            <FloatingMenu 
                navigateTo={navigateTo}
                currentSection={currentSection}
                resetProgress={resetProgress}
                openChatbot={() => setIsChatbotOpen(true)}
                userData={userData}
            />

            <div className="md:pl-64">
                <header className="sticky top-0 z-10 bg-gray-900/50 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-2">
                               <Icons.ChileanFlag />
                                <h1 className="text-xl md:text-2xl font-bold text-cyan-400 font-orbitron tracking-wider">
                                    Desarrollo Regional
                                </h1>
                            </div>
                        </div>
                         <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full" style={{ width: `${((currentStep) / (sectionOrder.length - 2)) * 100}%` }}></div>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="relative">
                        {renderSection()}
                    </div>
                </main>
            </div>

            {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
        </div>
    );
};

export default App;
