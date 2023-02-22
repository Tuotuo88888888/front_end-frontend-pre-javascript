// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

var filename = "d://files/mymap/3.jpg";
var extname = filename.substring(filename.lastIndexOf("."));
var ext = [".jpg", ".gif", ".bmp", ".webp", ".png"];

console.log(ext.includes(extname)?'是':'否');
