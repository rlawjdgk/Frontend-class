const frame = document.querySelector("section");
// console.log(frame);
const lists = frame.querySelectorAll("article");
// console.log(lists);
const deg = 45;
let i = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;
});
