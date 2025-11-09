
export interface UserData {
  name: string;
}

export interface EvaluationState {
  score: number;
  attempts: number;
  passed: boolean;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}
