// 生成一个a-z的字符串
var s = '';
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  s += String.fromCharCode(i);
}
console.log(s);
