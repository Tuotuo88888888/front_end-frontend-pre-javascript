// 每隔一段时间，切换英雄的图片，让英雄动起来
var img = document.querySelector('img');
var curIndex = 1; // 当前的图片下标是1

setInterval(function () {
  // curIndex++;
  // if (curIndex === 5) {
  //   curIndex = 1;
  // }
  curIndex = (curIndex % 4) + 1;
  img.src = './img/' + curIndex + '.png';
}, 100);

// 每隔一段时间，改变英雄的位置，让英雄向右移动
var x = 0;
setInterval(function () {
  x += 2;
  img.style.left = x + 'px';
}, 20);
