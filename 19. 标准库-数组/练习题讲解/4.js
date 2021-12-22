// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

var filename = 'd://files/mymap/3.jpg';

// 1. 得到文件的后缀名
var index = filename.lastIndexOf('.');
var extname = filename.substring(index);

// 2. 判断后缀名是否合法
var allows = ['.jpg', '.gif', '.bmp', '.webp', '.png'];

if (allows.includes(extname)) {
  console.log('合法');
} else {
  console.log('不合法');
}
