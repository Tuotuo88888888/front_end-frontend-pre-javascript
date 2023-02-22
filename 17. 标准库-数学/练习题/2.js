/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
function getRandomString(length) {
  var result = "";
  var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < length; i++) {
    // str += num.charAt(Math.floor(Math.random() * num.length));
    result += str.charAt(getRandom(0, str.length));
  }
  return result;
}

/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
