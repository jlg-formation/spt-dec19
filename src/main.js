import "./style.css";

console.log("coucou");

const insertLineButton = document.querySelector(".insert-line");

insertLineButton.addEventListener("click", () => {
  console.log("insert line");
});


const deleteAllButton = document.querySelector(".delete-all");

deleteAllButton.addEventListener("click", () => {
  console.log("delete all");
});
