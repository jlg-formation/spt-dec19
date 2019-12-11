import { Mode } from './Mode';
import { Widget } from './Widget';
import { SVGUtils } from './SVGUtils';
import { EditionPoint } from './EditionPoint';

export class DrawingBoard {
  elt: HTMLElement;
  svg: SVGSVGElement;
  stateBar: HTMLElement;
  private privateMode: string;
  widget: Widget;
  content: SVGGElement;
  selection: SVGGElement;
  edition: SVGGElement;

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
    this.svg.addEventListener('click', this.onClick.bind(this));
    this.content = SVGUtils.addGroup(this.svg, 'content');
    this.selection = SVGUtils.addGroup(this.svg, 'selection');
    this.edition = SVGUtils.addGroup(this.svg, 'edition');
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

  select(widget: Widget) {
    this.mode = Mode.SELECTION;
    widget.select();
  }

  addEditionPoint(label: string, x: number, y: number) {
    const editionPoint = new EditionPoint(label, x, y);
    this.edition.appendChild(editionPoint.getGroup());
  }

  removeAllEditionPoint() {
    while (this.edition.hasChildNodes()) {
      this.edition.removeChild(this.edition.firstChild);
    }
  }
}
