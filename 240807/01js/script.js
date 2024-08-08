const contents = document.querySelector(".contents");
const icon = document.querySelector(".container");

icon.addEventListener("click", () => {
  contents.classList.toggle("active");
});
