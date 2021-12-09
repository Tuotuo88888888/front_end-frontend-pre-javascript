/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
// var nums = [3, 6, 1, 77, 23];
// var target = 11;
// var isFind = false; // 是否找到
// for (var i = 0; i < nums.length; i++) {
//   // 判断nums[i]是否满足条件，如果满足，设置找到了，结束
//   if (nums[i] === target) {
//     isFind = true;
//     break;
//   }
// }

// if (isFind) {
//   console.log('是');
// } else {
//   console.log('否');
// }

// 错误的写法
// var nums = [3, 6, 1, 77, 23];
// var target = 77;

// for (var i = 0; i < nums.length; i++) {
//   // 判断nums[i]是否满足条件，如果满足，设置找到了，结束
//   if (nums[i] === target) {
//     console.log('是');
//     break;
//   } else {
//     console.log('否');
//     break;
//   }
// }

/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/
// var nums = [3, 6, 1, 77, 6, 6, 23];
// var target = 6;
// var index = -1; // 找到的下标，-1表示没有找到
// for (var i = 0; i < nums.length; i++) {
//   // 判断nums[i]是否满足条件，如果满足，设置找到了，结束
//   if (nums[i] === target) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// var nums = [3, 6, 1, 77, 6, 6, 23];
// var target = 16;
// var index = []; // 找到的下标，空数组表示没有找到
// for (var i = 0; i < nums.length; i++) {
//   // 判断nums[i]是否满足条件，如果满足，设置找到了，结束
//   if (nums[i] === target) {
//     index.push(i);
//   }
// }
// console.log(index);

/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
// var nums = [2, 3, 6, 1, 77, 6, 6, 23, 8];
// // 1. 找到第一个奇数
// var first = null; // 第一个奇数
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {
//     first = nums[i]; // 记录这个奇数
//     break;
//   }
// }

// // 2. 找到最后一个奇数
// var last = null; // 最后一个奇数
// for (var i = nums.length - 1; i >= 0; i--) {
//   if (nums[i] % 2 !== 0) {
//     last = nums[i]; // 记录这个奇数
//     break;
//   }
// }

// // 3. 相加
// console.log(first + last);

/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/
var nums1 = [2, 34, 4, 5, 10, 36];
var nums2 = [2, 6, 8, 11, 22, 10, 12];

// nums1中有没有奇数
var isFind1 = false;

for (var i = 0; i < nums1.length; i++) {
  if (nums1[i] % 2 !== 0) {
    isFind1 = true;
    break;
  }
}

// nums2中有没有奇数
var isFind2 = false;

for (var i = 0; i < nums2.length; i++) {
  if (nums2[i] % 2 !== 0) {
    isFind2 = true;
    break;
  }
}

// 合并结果
if (isFind1 && isFind2) {
  console.log('是');
} else {
  console.log('否');
}
