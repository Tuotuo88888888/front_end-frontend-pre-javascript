// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(255, 255, 255)'; // #xxxxx

// 取出三个数字
var parts = rgb.replace('rgb', '').replace('(', '').replace(')', '').split(',');
var r = parseInt(parts[0]).toString(16);
var g = parseInt(parts[1]).toString(16);
var b = parseInt(parts[2]).toString(16);
var result = '#' + r + g + b;
console.log(result);
