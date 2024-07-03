// mouseover & mouseout 기능 구현

const outerElment1 = document.querySelector(".out.overout");
let outerCount1 = 0;
outerElment1.addEventListener("mouseover", () => {
  const pElments = outerElment1.querySelectorAll("p");
  if (pElments.length > 0) {
    pElments[0].innerText = `Outer Box Over : ${outerCount1++}`;
  }
});

const innerElement1 = document.querySelector(".in.overout");
let innerCount1 = 0;
innerElement1.addEventListener("mouseover", () => {
  const pElments = innerElement1.querySelectorAll("p");
  if (pElments.length > 0) {
    pElments[0].innerText = `Inner Box Over : ${outerCount1++}`;
  }
});

// mouseenter & mouseleave 기능 구현

const outerElment2 = document.querySelector(".out.enterleave");
let outerCount2 = 0;
outerElment2.addEventListener("mouseenter", () => {
  const pElments = outerElment2.querySelectorAll("p");
  if (pElments.length > 0) {
    pElments[0].innerText = `Outer Box Over : ${outerCount2++}`;
  }
});

const innerElement2 = document.querySelector(".in.enterleave");
let innerCount2 = 0;
innerElement2.addEventListener("mouseenter", () => {
  const pElments = innerElement2.querySelectorAll("p");
  if (pElments.length > 0) {
    pElments[0].innerText = `Inner Box Over : ${outerCount2++}`;
  }
});
