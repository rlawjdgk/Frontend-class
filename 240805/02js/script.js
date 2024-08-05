const text = document.querySelector("#text");
console.log(text);
const box = document.querySelector(".box");
console.log(box);
box.addEventListener("click", () => {
  console.log("click");
  text.classList.toggle("action");
});
