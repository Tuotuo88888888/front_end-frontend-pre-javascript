// 当窗口尺寸变化后，调用layout函数
// function debounce(fn, delay) {
//   var timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fn.bind(this, ...arguments), delay);
//   };
// }
function debounce(fn, delay) {
  var timer;
  return function () {
    let arg = Array.prototype.slice.call(arguments);
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, arg);
    }, delay);
  };
}
var layoutDebounce = debounce(layout, 500);
var newSum = debounce(sum, 2000);
function sum(a, b) {
  console.log(a + b);
}
window.addEventListener("resize", layoutDebounce);
