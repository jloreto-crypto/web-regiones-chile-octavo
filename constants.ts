
import type { Question } from './types';

export const SECTIONS = {
  LOGIN: 'login',
  COVER: 'cover',
  INTRODUCTION: 'introduction',
  ACTIVATION: 'activation',
  DEVELOPMENT: 'development',
  FORMATIVE_EVALUATION: 'formative_evaluation',
  EVALUATION: 'evaluation',
  SYNTHESIS: 'synthesis',
  METACOGNITION: 'metacognition',
  CERTIFICATE: 'certificate',
};

export const evaluationQuestions: Question[] = [
    {
        question: "¿Cuál de estas regiones es famosa por tener el desierto más seco del mundo?",
        options: ["Región de Los Lagos", "Región Metropolitana", "Región de Antofagasta", "Región de Magallanes"],
        correctAnswer: "Región de Antofagasta"
    },
    {
        question: "La capital de Chile, Santiago, se encuentra en la...",
        options: ["Región de Valparaíso", "Región Metropolitana", "Región del Biobío", "Región de Aysén"],
        correctAnswer: "Región Metropolitana"
    },
    {
        question: "¿Qué actividad económica es muy importante en el norte de Chile, como en la región de Antofagasta?",
        options: ["Pesca de salmones", "Cultivo de uvas para vino", "Minería de cobre", "Fabricación de barcos"],
        correctAnswer: "Minería de cobre"
    },
    {
        question: "En el sur de Chile, como en la Región de Los Lagos, podemos encontrar muchos...",
        options: ["Desiertos y cactus", "Grandes edificios y autopistas", "Volcanes, lagos y bosques", "Campos de girasoles"],
        correctAnswer: "Volcanes, lagos y bosques"
    },
    {
        question: "¿Por qué es un desafío para Chile estar conectado de norte a sur?",
        options: ["Porque es un país muy corto", "Por su geografía larga y con muchas montañas", "Porque a la gente no le gusta viajar", "Porque no hay carreteras"],
        correctAnswer: "Por su geografía larga y con muchas montañas"
    },
    {
        question: "El concepto de \"descentralización\" busca que...",
        options: ["Todo el poder y el dinero se queden en Santiago", "Cada región tenga más poder para tomar sus propias decisiones", "Chile se divida en países más pequeños", "No existan las regiones"],
        correctAnswer: "Cada región tenga más poder para tomar sus propias decisiones"
    },
    {
        question: "¿Qué producto famoso se cultiva en los valles de la zona central de Chile?",
        options: ["Cobre", "Petróleo", "Salmones", "Uvas para el vino"],
        correctAnswer: "Uvas para el vino"
    },
    {
        question: "La Isla de Pascua, con sus famosos Moáis, pertenece a la región de...",
        options: ["Magallanes", "Valparaíso", "Arica y Parinacota", "Atacama"],
        correctAnswer: "Valparaíso"
    },
    {
        question: "Un desafío social importante para muchas regiones es...",
        options: ["Tener demasiados parques", "La falta de oportunidades de trabajo y educación de calidad", "Que llueva mucho en el desierto", "Que haya demasiados turistas"],
        correctAnswer: "La falta de oportunidades de trabajo y educación de calidad"
    },
    {
        question: "Para lograr un desarrollo regional más justo, es importante que...",
        options: ["Solo Santiago reciba dinero", "Todas las regiones tengan recursos para crecer según sus necesidades", "Se cierren las minas del norte", "Se prohíba el turismo en el sur"],
        correctAnswer: "Todas las regiones tengan recursos para crecer según sus necesidades"
    }
];
