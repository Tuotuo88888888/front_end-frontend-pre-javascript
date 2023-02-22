let img = document.querySelector("img");
var i = 1;
// 每隔1秒自动切换图片
var tempId = null;
function start() {
  if (tempId) {
    return;
  }
  tempId = setInterval(function () {
    i++;
    if (i == 5) {
      i = 1;
    }
    img.src = "./img/" + i + ".jpeg";
  }, 1000);
}

function stop() {
  clearInterval(tempId);
  tempId = null;
}

// 当鼠标移动到元素上时停止切换，移出后开始切换
img.addEventListener("mouseover", stop);
img.addEventListener("mouseout", start);
