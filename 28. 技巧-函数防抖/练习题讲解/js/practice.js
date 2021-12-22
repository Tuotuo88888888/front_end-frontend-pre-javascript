// 当窗口尺寸变化后，调用layout函数
function debounce(fn, delay) {
  var timerId; // 最后一个计时器的id
  return function () {
    var args = Array.prototype.slice.call(arguments);
    clearTimeout(timerId); // 清除最后一个计时器
    timerId = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

var newLayout = debounce(layout, 500);

window.addEventListener('resize', newLayout);
