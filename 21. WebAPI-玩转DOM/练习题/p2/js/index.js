let img = document.querySelector("img");
var i = 1;
// 每隔一段时间，切换英雄的图片，让英雄动起来
setInterval(function () {
  img.src = `./img/${i}.png`;
  i++;
  if (i > 4) {
    i = 1;
  }
}, 100);

// 每隔一段时间，改变英雄的位置，让英雄向右移动
setInterval(function () {
  img.style.left = `${img.offsetLeft + 10}px`;
  if (img.offsetLeft + 10 > window.innerWidth) {
    img.style.left = 0;
  }
}, 100);
