/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-06 20:39:23
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-06 20:39:24
 */
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

var isPalindrome = function (x) {
    x = `${x}`
    let left = 0;
    let right = x.length - 1;
    while (left <= right) {
        if (x[left] !== x[right]) {
            return false
        } else {
            left++;
            right--;
        }
    }
    return true;
};