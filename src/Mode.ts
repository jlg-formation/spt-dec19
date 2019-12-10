export class Mode {
  static DEFAULT = 'DEFAULT';
  static INSERT = 'INSERT';
  static EDITION = 'EDITION';
  static SELECTION = 'SELECTION';

  static *[Symbol.iterator]() {
    yield Mode.DEFAULT;
    yield Mode.INSERT;
    yield Mode.EDITION;
    yield Mode.SELECTION;
  }
}


