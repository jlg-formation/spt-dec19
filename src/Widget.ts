import { DrawingBoard } from "./DrawingBoard";

export abstract class Widget {
  constructor(public parent: DrawingBoard) {
  }
}
