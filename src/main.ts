import './style.css';
import { DrawingBoard } from './DrawingBoard';
import { Menu } from './Menu';
import { Line } from './widgets/Line';

const board = new DrawingBoard('main');

const menu = new Menu();

menu.addButton('.insert-line', () => {
  board.prepareToInsert(new Line(board));
});

menu.addButton('.delete-all', () => {
  console.log('delete all');
});
