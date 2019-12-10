import { Mode } from './Mode';

export class DrawingBoard {
  elt: HTMLElement;
  svg: SVGElement;
  stateBar: HTMLElement;
  private privateMode: string;

  get mode() {
    return this.privateMode;
  }

  set mode(val: string) {
    this.privateMode = val;
    this.stateBar.innerHTML = `MODE : ${this.privateMode}`;
    for (const m of Mode) {
      this.elt.classList.remove(m);
    }
    this.elt.classList.add(this.privateMode);
  }

  constructor(selector: string) {
    this.elt = document.querySelector(selector);
    this.svg = this.elt.querySelector('svg');
    this.stateBar = this.elt.querySelector('.state-bar');
    this.mode = Mode.DEFAULT;
    console.log('Mode: %O', Mode);

    
  }
}
