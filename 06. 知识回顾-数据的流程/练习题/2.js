/* 
1. 输出1-100的所有奇数
*/

/* 
2. 定义一个数组，输出数组中所有的奇数
*/

/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/
var arr = [23, 234234, 546, 657, 89, 13, 76, 867, 34537, 9, 9, 4, 2]
var newArr=[]
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2!==0)
    {
        newArr.push(arr[index])
    }
    
}