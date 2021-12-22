// 每隔1秒自动切换图片

var curIndex = 1;
var img = document.querySelector('.container img');
var timerId;
// 开始切换
function start() {
  if (timerId) {
    return; // 正在切换中
  }
  timerId = setInterval(function () {
    // curIndex++;
    // if (curIndex === 5) {
    //   curIndex = 1;
    // }
    curIndex = (curIndex % 4) + 1;
    img.src = './img/' + curIndex + '.jpeg';
  }, 1000);
}

// 停止切换
function stop() {
  clearInterval(timerId);
  timerId = null;
}

start();

// 当鼠标移动到元素上时停止切换，移出后开始切换
img.addEventListener('mouseenter', stop);
img.addEventListener('mouseleave', start);
