
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface Subject {
  id: string;
  name: string;
  topic: string;
  icon: string;
  color: string;
  cards: Flashcard[];
}
