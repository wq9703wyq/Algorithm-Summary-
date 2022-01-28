/*
 * @Descripttion: 富途二面算法
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-01-26 23:19:47
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-01-27 00:37:29
 */

// 元素皆为整数且无重复元素的数组中，存在一些元素比它左侧所有元素都大，并且小于它右侧的所有元素
// 例如：[4, 2, 5, 1, 7, 6, 9, 10, 15, 11, 13, 16, 17]
// 输出：[9, 10]

function findBoundaryNumbers(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!res.length) {
      res.push(value);
      continue;
    }
    if (value < res[res.length - 1]) {
      const beforeStackEnd = res[res.length - 1];
      while(value < res[res.length - 1]){
        res.pop();
      }
      while(nums[i] < beforeStackEnd && i < nums.length) {
        i++;
      }
      if (i !== nums.length) {
        res.push(nums[i])
      }
    } else {
      res.push(value)
    }
  }
  return res;
}

// const { Random } = require("mockjs");
// const Mock = require("mockjs");
// const random = Mock.Random;
// const data = Mock.mock()

// function mockTest() {
//   return function() {
//     const mockData = Mock.mock({
//       "array|": [
//         Random.integer(0)
//       ]
//     })
//   }
// }

console.log(findBoundaryNumbers([4, 2, 5, 1, 7, 6, 9, 10, 15, 11, 13, 16]))