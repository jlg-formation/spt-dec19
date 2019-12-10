import './style.css';
import { DrawingBoard } from './DrawingBoard';
import { Menu } from './Menu';
import { Mode } from './Mode';

const board = new DrawingBoard('main');

const menu = new Menu();

menu.addButton('.insert-line', () => {
  console.log('insert line');
  board.mode = Mode.INSERT;
});

menu.addButton('.delete-all', () => {
  console.log('delete all');
});

