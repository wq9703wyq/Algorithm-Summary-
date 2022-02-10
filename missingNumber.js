/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-02 23:16:17
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-02 23:16:18
 */
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。

// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

var missingNumber = function(nums) {
    let front = 0;
    let behind = nums.length - 1;
    let index;
    while(front <= behind) {
        index = (front + behind) >> 1;
        if (nums[index] > index) {
            behind = index - 1;
        } else if (nums[index] === index) {
            front = index + 1;
        }
    }
    return front;
};
