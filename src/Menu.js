export class Menu {
  addButton(selector, callback) {
    const btn = document.querySelector(selector);
    btn.addEventListener("click", callback);
  }
}
