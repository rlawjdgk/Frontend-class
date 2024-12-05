const frame = document.querySelector("section");
// console.log(frame);
const lists = frame.querySelectorAll("article");
// console.log(lists);
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
// console.log(prev, next);
const audios = frame.querySelectorAll("audio");
console.log(audios);

const deg = 45;
let i = 0;
let num = 0;

lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  // move
  const pause = list.querySelector("ul li:nth-child(1)");
  // console.log(play);
  const play = list.querySelector("ul li:nth-child(2)");
  const load = list.querySelector("ul li:nth-child(3)");

  // PLAY
  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });

  // PAUSE
  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  //LOAD
  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });
});

const initMusic = () => {
  for (let audio of audios) {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  }
};

initMusic();
let active = 0;
// prev // next 버튼회전
const len = lists.length - 1;

const activation = (index, lists) => {
  for (let list of lists) {
    list.classList.remove("on");
  }

  lists[index].classList.add("on");
};

prev.addEventListener("click", () => {
  num++;
  initMusic();
  frame.style.transform = `rotate(${num * deg}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  // active++;
  // console.log(actives);

  active === len ? (active = 0) : active++;
  activation(active, lists);
});
