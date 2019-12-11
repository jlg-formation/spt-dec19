import { DrawingBoard } from './DrawingBoard';
import { IPoint } from './IPoint';

export abstract class Widget {
  constructor(public parent: DrawingBoard) {}

  abstract depose(event: MouseEvent): void;

  abstract select(): void;

  unselect() {
    this.parent.removeAllEditionPoint();
  }

  getOrigin() {
    return { ...this };
  }

  abstract edit(label: string, orig: any, delta: IPoint): void;
  
  abstract move(orig: any, delta: IPoint): void;
}
