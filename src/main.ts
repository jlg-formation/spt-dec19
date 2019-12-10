import "./style.css";
import { Menu } from "./Menu";
import { DrawingBoard } from "./DrawingBoard";

const menu = new Menu();
menu.addButton(".insert-line", () => {
  console.log("insert line");
});
menu.addButton(".delete-all", () => {
  console.log("delete all");
});

const board = new DrawingBoard('main');


