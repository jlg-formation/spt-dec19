import { Widget } from '../Widget';
import { DrawingBoard } from '../DrawingBoard';
import { xmlns, SVGUtils } from '../SVGUtils';
import { WidgetEdit } from '../WidgetEdit';
import { IPoint } from '../IPoint';

export class Line extends Widget {
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;
  elt: SVGLineElement;
  selectionElt: SVGLineElement;

  constructor(parent: DrawingBoard) {
    super(parent);
    console.log('creating line');
  }

  depose(event: MouseEvent): void {
    console.log('depose line');
    this.elt = document.createElementNS(xmlns, 'line');
    const { x, y } = SVGUtils.getCoordonates(this.parent.svg, event);
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + 100;
    this.y2 = y + 100;
    this.elt.setAttribute('x1', '' + this.x1);
    this.elt.setAttribute('y1', '' + this.y1);
    this.elt.setAttribute('x2', '' + this.x2);
    this.elt.setAttribute('y2', '' + this.y2);
    this.parent.content.appendChild(this.elt);

    this.selectionElt = document.createElementNS(xmlns, 'line');
    this.selectionElt.setAttribute('x1', '' + this.x1);
    this.selectionElt.setAttribute('y1', '' + this.y1);
    this.selectionElt.setAttribute('x2', '' + this.x2);
    this.selectionElt.setAttribute('y2', '' + this.y2);
    this.parent.selection.appendChild(this.selectionElt);
    this.selectionElt.addEventListener('click', (evt: MouseEvent) => {
      evt.stopPropagation();
      console.log('select');
      this.parent.select(this);
    });
  }

  select(): void {
    console.log('select line');
    this.parent.removeAllEditionPoint();
    this.parent.addEditionPoint('start', this.x1, this.y1, new WidgetEdit(this, 'start').getEditCallback());
    this.parent.addEditionPoint('end', this.x2, this.y2, new WidgetEdit(this, 'end').getEditCallback());
  }

  edit(label: string, orig: any, delta: IPoint) {
    console.log('line edit', delta);

    if (label === 'start') {
      console.log('line edit start');
      this.x1 = delta.x + orig.x1;
      console.log('this.x1: ', this.x1);
      this.y1 = delta.y + orig.y1;

      this.elt.setAttribute('x1', '' + this.x1);
      this.elt.setAttribute('y1', '' + this.y1);
      this.selectionElt.setAttribute('x1', '' + this.x1);
      this.selectionElt.setAttribute('y1', '' + this.y1);
      const editionPointElt = this.parent.getEditionPointElt(label);
      editionPointElt.setAttribute('cx', '' + this.x1);
      editionPointElt.setAttribute('cy', '' + this.y1);
    }
  }
}
