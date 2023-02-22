// 生成一个a-z的字符串

var str = '';
for (var i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) { 
    str += String.fromCharCode(i);
}
console.log(str);