import { Widget } from '../Widget';
import { DrawingBoard } from '../DrawingBoard';
import { xmlns, SVGUtils } from '../SVGUtils';
import { Mode } from '../Mode';

export class Line extends Widget {
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;

  constructor(parent: DrawingBoard) {
    super(parent);
    console.log('creating line');
  }

  depose(event: MouseEvent): void {
    console.log('depose line');
    const line = document.createElementNS(xmlns, 'line');
    const { x, y } = SVGUtils.getCoordonates(this.parent.svg, event);
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + 100;
    this.y2 = y + 100;
    line.setAttribute('x1', '' + this.x1);
    line.setAttribute('y1', '' + this.y1);
    line.setAttribute('x2', '' + this.x2);
    line.setAttribute('y2', '' + this.y2);
    this.parent.content.appendChild(line);

    const selectionLine = document.createElementNS(xmlns, 'line');
    selectionLine.setAttribute('x1', '' + this.x1);
    selectionLine.setAttribute('y1', '' + this.y1);
    selectionLine.setAttribute('x2', '' + this.x2);
    selectionLine.setAttribute('y2', '' + this.y2);
    this.parent.selection.appendChild(selectionLine);
  }
}
