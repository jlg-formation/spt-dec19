import { Mode } from "./Mode";

export class DrawingBoard {
  elt: HTMLElement;
  svg: SVGElement;
  stateBar: HTMLElement;
  mode: string;
  constructor(selector: string) {
    console.log('constructor');
    this.elt = document.querySelector(selector);
    this.svg = this.elt.querySelector('svg');
    this.stateBar = this.elt.querySelector('.state-bar');
    console.log('this.stateBar: ', this.stateBar);

    this.stateBar.innerHTML = 'MODE : DEFAULT';

    this.mode = Mode.DEFAULT;
    console.log('Mode: ', Mode);
  }
}
