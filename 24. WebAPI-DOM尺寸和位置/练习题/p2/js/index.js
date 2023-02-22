// 让小球向右下运动，遇到边缘后反弹
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randomColor() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}
let ball = document.querySelector(".ball");
let useLeft = 10;
let useTop = 10;

let ew = document.documentElement.clientWidth;
let eh = document.documentElement.clientHeight;
let bw = ball.offsetWidth;
let bh = ball.offsetHeight;
let dissW = ew - bw;
let dissH = eh - bh;

setInterval(function () {
  let rect = ball.getBoundingClientRect();
  let left = rect.left + useLeft;
  let top = rect.top + useTop;
  if (left < 0) {
    left = 0;
    useLeft = -useLeft;
    ball.style.backgroundColor = randomColor();
  }
  if (top < 0) {
    top = 0;
    useTop = -useTop;
    ball.style.backgroundColor = randomColor();
  }
  if (left > dissW) {
    left = dissW;
    useLeft = -useLeft;
    ball.style.backgroundColor = randomColor();
  }
  if (top > dissH) {
    top = dissH;
    useTop = -useTop;
    ball.style.backgroundColor = randomColor();
  }
  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 50);
