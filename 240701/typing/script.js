const content =
  "Hi!🤚🏼 I'm jh, \n Front-End Developer. \n Welcome to My world :D";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br />" : txt;

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 250);
