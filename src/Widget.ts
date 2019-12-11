import { DrawingBoard } from "./DrawingBoard";

export abstract class Widget {
  
  constructor(public parent: DrawingBoard) {
  }

  abstract depose(event: MouseEvent): void;

  abstract select(): void;
}
