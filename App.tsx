export interface Exercise {
  id: number;
  type: "singular" | "plural";
  verb: string;
  pronoun: string;
  desc: string;
  folder: string;
  imagePath: string;
  
  // Tab 1: Grammar
  grammarQuestion: string;
  grammarAnswerPrimary: string;
  grammarAnswerFull: string;
  
  // Tab 2: Questions
  questionPrompt: string;
  questionAnswerPrimary: string;
  
  // Tab 3: Shadowing Phrase
  shadowingPhrase: string;
}

export interface ScoreState {
  grammar: Record<number, boolean>;      // exerciseIndex: status
  questions: Record<number, boolean>;    // exerciseIndex: status
  shadowing: Record<number, number>;     // exerciseIndex: match percentage (0-100)
}

export interface StudentProfile {
  name: string;
  email: string;
  isAuthenticated: boolean;
}
