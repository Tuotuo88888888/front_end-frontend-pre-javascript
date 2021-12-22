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

console.log(getRandom(3, 10));
