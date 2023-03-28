export interface WelcomeScreenProps {
  onStart: () => void;
}

export interface GameScreenProps {
  onEnd: (finalScore: number) => void;
  questions: QuestionData[];
}

export interface FinalScreenProps {
  score: number;
}

export interface QuestionData {
  id: string;
  question: string;
  answers: string[];
  correctIndex: number;
}

export type QuestionsDataType = QuestionData[];