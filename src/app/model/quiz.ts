import { Question } from "./question";

export class Quiz {
  id: number = 0;
  title: string = '';
  description: string = '';
  question: Question[] | number[] = [];
  active: boolean = true;
}
