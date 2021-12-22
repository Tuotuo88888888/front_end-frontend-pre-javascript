/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
function getRandomString(length) {
  // var str = '0123456789abcdefghijklmnopqrstuvwxyz';
  // var result = '';
  // for (var i = 0; i < length; i++) {
  //   var index = getRandom(0, str.length);
  //   result += str[index];
  // }
  // return result;

  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
console.log(getRandomString(7));

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
