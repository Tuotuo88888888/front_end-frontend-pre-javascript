// 删除数组中的所有字符串
var nums = [1, 1, '1', 'c', 'b', 'a', 3, 5, 3, 7];

for (var i = 0; i < nums.length; i++) {
  // 判断nums[i]是否是字符串，如果是，则将其删除
  if (typeof nums[i] === 'string') {
    nums.splice(i, 1);
    i--;
  }
}

console.log(nums);
