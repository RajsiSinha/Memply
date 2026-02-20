
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  xp: number;
};

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which iconic meme dog represents the 'Doge' cryptocurrency?",
    options: [
      "Shiba Inu",
      "Golden Retriever",
      "Pug",
      "Husky",
    ],
    correctIndex: 0,
    xp: 50,
  },
];
