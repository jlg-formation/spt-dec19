export class DrawingBoard {
  constructor(selector) {
    console.log('constructor');
    this.elt = document.querySelector(selector);
    this.svg = this.elt.querySelector('svg');
    this.stateBar = this.elt.querySelector('.state-bar');
    console.log('this.stateBar: ', this.stateBar);

    this.stateBar.innerHTML = 'MODE : xxx';
  }
}
