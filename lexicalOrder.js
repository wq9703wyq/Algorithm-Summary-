/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-04-18 22:49:52
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-04-19 00:08:35
 */
// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
// link: https://leetcode-cn.com/problems/lexicographical-numbers/solution/

// example:
// 输入：n = 13
// 输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]

var lexicalOrder = function (n) {
  const res = [];
  let number = 1;
  for (let i = 0; i < n; i++) {
    res.push(number);
    if (number * 10 <= n) {
      number *= 10;
    } else {
     while(number % 10 === 9 || number + 1 > n) {
       number = Math.floor(number / 10)
     } 
     number++
    }
  }
  return res;
};

console.log(lexicalOrder(1300))

// 深度优先遍历，优先元素长度遍历，每次判断 长度+1 的元素是否大于 n
// 若 false 则使元素 长度+1
// 若 true 则表明下一个长度的元素大于n，取当前元素为val，每次 val + 1，直到 val + 1 > n 或个位数等于9