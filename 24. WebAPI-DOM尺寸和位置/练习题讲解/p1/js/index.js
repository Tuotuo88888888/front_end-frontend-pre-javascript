// 让便签可被拖动，但不能超出视口

var moveBar = document.querySelector('.move-bar');
var note = document.querySelector('.note');
moveBar.onmousedown = function (e) {
  // 鼠标按下的坐标
  var x = e.clientX,
    y = e.clientY;
  var rect = moveBar.getBoundingClientRect();
  // 元素的坐标
  var ex = rect.left,
    ey = rect.top;

  // 获取视口宽高、元素宽高
  var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;
  var ew = note.offsetWidth,
    eh = note.offsetHeight;

  // 算出最大的left和top
  var maxLeft = w - ew,
    maxTop = h - eh;

  // 鼠标按下后，监听整个屏幕的鼠标移动
  window.onmousemove = function (e) {
    var disX = e.clientX - x,
      disY = e.clientY - y;
    var left = ex + disX,
      top = ey + disY;
    // left和top 的有效范围进行限制
    if (left < 0) {
      left = 0;
    }
    if (left > maxLeft) {
      left = maxLeft;
    }

    if (top < 0) {
      top = 0;
    }
    if (top > maxTop) {
      top = maxTop;
    }

    note.style.left = left + 'px';
    note.style.top = top + 'px';
  };

  // 鼠标抬起后，不再监听鼠标移动和抬起
  window.onmouseup = function () {
    console.log('不再监听移动');
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
