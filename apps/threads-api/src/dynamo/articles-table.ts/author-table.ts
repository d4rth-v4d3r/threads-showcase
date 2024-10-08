export interface Author {
  id: string;
  firstname: string;
  lastname: string;
  photo: string;
  subscribers: Array<Author>;
  // TODO: Add metadata type
  flashcards: Array<string>;
}
