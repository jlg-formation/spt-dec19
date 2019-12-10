import { Widget } from '../Widget';
import { DrawingBoard } from '../DrawingBoard';

export class Line extends Widget {
  constructor(parent: DrawingBoard) {
    super(parent);
    console.log('creating line');
  }
}
