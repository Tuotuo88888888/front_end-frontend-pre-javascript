/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
  var index = getRandom(0, arr.length);
  return arr[index];
}

var arr = [2, 3, 4, 'a', 'asfgas', 5];

console.log(getRandomItem(arr));

/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
function getRandom(min, max) {
  // Math.random()   [0, 1)
  // Math.random() * (max - min)   [0, max-min)
  // Math.random() * (max - min) + min  [min, max)
  // Math.floor(Math.random() * (max - min) + min)    [min, max)  全是整数
  return Math.floor(Math.random() * (max - min) + min);
}
