/* 
1. 输出1-100的所有奇数
*/
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

/* 
2. 定义一个数组，输出数组中所有的奇数
*/
// var nums = [32, 11, 47, 22, 3434, 22, 1, 3, 2339];
// for (var i = 0; i < nums.length; i++) {
//   // 判断nums[i]是不是奇数，如果是，就输出
//   if (nums[i] % 2 !== 0) {
//     console.log(nums[i]);
//   }
// }

/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/
var nums = [32, 11, 47, 22, 3434, 22, 1, 3, 2339];
var newNums = [];

for (var i = 0; i < nums.length; i++) {
  // 判断 nums[i] 是不是奇数，如果是，把它加入到newNums中
  var n = nums[i];
  if (n % 2 !== 0) {
    newNums.push(n);
  }
}

console.log(newNums);
