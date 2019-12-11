import { SVGUtils, xmlns } from './SVGUtils';

export type EditCallback =
  (ev: MouseEvent, label: string, x: number, y: number) => void;


export class EditionPoint {
  group: SVGGElement;

  constructor(
    label: string,
    x: number,
    y: number,
    onEdit: EditCallback
  ) {
    this.group = document.createElementNS(xmlns, 'g');
    this.group.classList.add('edition-point', label);
    const circle = document.createElementNS(xmlns, 'circle');
    circle.setAttribute('cx', '' + x);
    circle.setAttribute('cy', '' + y);
    circle.setAttribute('r', '10');
    circle.classList.add('visible');

    this.group.appendChild(circle);
    const clickableCircle = document.createElementNS(xmlns, 'circle');
    clickableCircle.setAttribute('cx', '' + x);
    clickableCircle.setAttribute('cy', '' + y);
    clickableCircle.setAttribute('r', '30');
    clickableCircle.classList.add('invisible');
    clickableCircle.addEventListener('mousedown', (ev: MouseEvent) => {
      ev.stopPropagation();
      ev.preventDefault();
      console.log('start to edit');
      onEdit(ev, label, x, y);
    });

    clickableCircle.addEventListener('click', (ev: MouseEvent) => {
      ev.stopPropagation();
      ev.preventDefault();
      console.log('stop propagation');
    });
    this.group.appendChild(clickableCircle);
  }

  getGroup(): SVGGElement {
    return this.group;
  }
}
