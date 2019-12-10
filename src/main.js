import "./style.css";
import { Menu } from "./Menu";

const menu = new Menu();
menu.addButton(".insert-line", () => {
  console.log("insert line");
});
menu.addButton(".delete-all", () => {
  console.log("delete all");
});


