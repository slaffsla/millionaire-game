export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctIndex: number;
}

export interface WelcomeScreenProps {
  onStart: () => void;
}

export interface GameScreenProps {
  onEnd: (score: number) => void;
  questions: Question[];
}

export interface FinalScreenProps {
  score: number;
}

export interface QuestionsDataType extends Array<Question> {}