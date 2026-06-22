export interface QuizOption {
  key: string; // "a" | "b" | "c" | "d"
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correct: string[]; // klucze poprawnych odpowiedzi
  multi?: boolean; // pytanie wielokrotnego wyboru
  note?: string; // wyjaśnienie / pełna treść przepisu
  basis?: string; // podstawa prawna
}

/** Pochodzenie materiału: "pani" = materiały wykładowcy, "ai" = przygotowane z AI. */
export type Origin = "pani" | "ai";

export interface QuizBank {
  id: string;
  title: string;
  short: string;
  description: string;
  act: string;
  source: string;
  origin: Origin;
  accent: string; // klasa koloru akcentu (tailwind)
  questions: QuizQuestion[];
}

/* --- Zagadnienia / materiały --- */
export interface LawArticle {
  ref: string; // np. "Art. 80 § 1 u.s.p."
  title: string; // krótki tytuł instytucji
  text: string; // treść przepisu / zagadnienia (akapity rozdzielone \n)
  highlight?: string; // najważniejsze do zapamiętania
}

export interface TopicSection {
  id: string;
  title: string;
  intro?: string;
  articles: LawArticle[];
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // nazwa ikony lucide
  act: string;
  origin: Origin;
  originNote?: string; // doprecyzowanie pochodzenia
  pdf?: string; // ścieżka do PDF w /akty
  sections: TopicSection[];
}

/* --- Fiszki --- */
export interface Flashcard {
  q: string;
  a: string;
  cat: string;
}

/* --- Akty prawne --- */
export interface ActDoc {
  id: string;
  title: string;
  citation: string;
  pdf: string;
  description: string;
}
