import type { QuizBank } from "./types";
import { quizSN } from "./quiz-sn";
import { extraQuizzes } from "./quiz-extra";

export const allQuizzes: QuizBank[] = [quizSN, ...extraQuizzes];

export function getQuiz(id: string): QuizBank | undefined {
  return allQuizzes.find((q) => q.id === id);
}

export const totalQuestions = allQuizzes.reduce(
  (n, q) => n + q.questions.length,
  0
);

export type { QuizBank };
