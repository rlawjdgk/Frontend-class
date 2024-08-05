const btn = document.querySelector("#open");
const modalBox = document.querySelector(".container");
const close = document.querySelector(".fa-x");
const firstDiv = document.querySelector("#wrapper > div:first-child");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //객체를 가지고 왔을때 필요한것
  modalBox.classList.add("active");
  firstDiv.classList.add("active");
});
close.addEventListener("click", () => {
  modalBox.classList.remove("active");
  firstDiv.classList.remove("active");
});
