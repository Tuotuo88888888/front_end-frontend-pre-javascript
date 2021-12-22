// name转换成驼峰命名
var name = 'what is your name'; // --> hasOwnProperty

var result = '';
var parts = name.split(' ');
for (var i = 0; i < parts.length; i++) {
  var s = parts[i];
  if (i > 0) {
    s = s[0].toUpperCase() + s.substring(1);
  }
  result += s;
}
console.log(result);
