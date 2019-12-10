import { Mode } from './Mode';
import { Widget } from './Widget';

export class DrawingBoard {
  elt: HTMLElement;
  svg: SVGSVGElement;
  stateBar: HTMLElement;
  private privateMode: string;
  widget: Widget;

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
    this.svg.addEventListener('click', this.onClick.bind(this))
  }

  prepareToInsert(widget: Widget) {
    console.log('widget: ', widget);
    this.mode = Mode.INSERT;
    this.widget = widget;
  }

  onClick(event: MouseEvent) {
    console.log('click', this, event);
    if (this.mode === Mode.INSERT) {
      console.log('about to insert widget');
      this.widget.depose(event);
      this.mode = Mode.DEFAULT;
    }
  }
}
