const button = document.querySelector("button");

const buttonAction = (e) => {
  console.log(e.targets);
  console.log(e.currentTable);
};

button.addEventListener("click", buttonAction);
