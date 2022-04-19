/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-04-19 22:27:18
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-04-19 23:01:17
 */

// 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
// 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

// 输入：s = "loveleetcode", c = "e"
// 输出：[3,2,1,0,1,0,0,1,2,2,1,0]

// link: https://leetcode-cn.com/problems/shortest-distance-to-a-character/

var shortestToChar = function (s, c) {
  let slow = 0;
  let fast = 1;
  let res = []
  for (fast; fast < s.length; fast++) {
    if (s.charAt(fast) === c) {
      let i = slow;
      while (i <= fast) {
        res[i] = s.charAt(slow) === c ? Math.min(i - slow, fast - i) : fast - i;
        i++
      }
      slow = fast;
    }
  }
  let i = slow
  while(i < fast) {
    res[i] = i - slow
    i++
  }
  return res;
};

const s = "loveleetcode";
const c = "e";

console.log(shortestToChar(s, c))

// 直接快慢指针解决