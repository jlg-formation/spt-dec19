import { SVGUtils, xmlns } from "./SVGUtils";

export class EditionPoint {
  group: SVGGElement;

  constructor(label: string, x: number, y: number) {
    this.group = document.createElementNS(xmlns, 'g');
    this.group.setAttribute('class', 'edition-point');
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
    
    this.group.appendChild(clickableCircle);
  }

  getGroup(): SVGGElement {
    return this.group;
  }
}
