/* 
1. 1~100求和
*/
// var sum = 0; // 最终的求和结果
// for (var i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

/* 
2. 求某个数的阶乘
5! = 5*4*3*2
*/
// var n = 5;
// var result = 1;
// for (var i = 2; i <= n; i++) {
//   result = result * i;
// }
// console.log(result);

/* 
3. 数组求和
*/
// var nums = [23, 43, 7, 1, 4, 15];
// var sum = 0;
// for (var i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(sum);

/* 
4. 求数组中的奇数的个数
*/
// var nums = [23, 43, 7, 1, 4, 3, 15];
// var count = 0; // 总数
// for (var i = 0; i < nums.length; i++) {
//   // 看一下nums[i]是不是奇数，如果是，count加1
//   if (nums[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

/* 
5. 求数组中的奇数和
*/
var nums = [23, 43, 7, 1, 4, 15];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  var n = nums[i];
  if (n % 2 !== 0) {
    sum += n;
  }
}
console.log(sum);
