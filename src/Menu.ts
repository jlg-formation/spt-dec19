export class Menu {
  addButton(selector: string, callback: () => void) {
    const btn = document.querySelector(selector);
    btn.addEventListener("click", callback);
  }
}
