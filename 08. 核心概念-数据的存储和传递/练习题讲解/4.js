function includes(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

/**
 * 修改对象，仅保留需要的属性
 * @param {Object} obj 要修改的对象
 * @param {Array<string>} keys 需要保留的属性名数组
 */
function pick(obj, keys) {
  for (var key in obj) {
    if (!includes(keys, key)) {
      // 不保留此属性
      delete obj[key];
    }
  }
}

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

pick(obj, ['a', 'c']);

console.log(obj); //  {a:1, c:3}
