
export interface UserData {
  name: string;
  email: string;
  rut?: string;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface EvaluationState {
  score: number;
  attempts: number;
  passed: boolean;
}
