/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 20:57:53
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 20:57:54
 */
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

var removeDuplicates = function(nums) {
    let slow = 1;
    let fast = 1;
    for (fast; fast < nums.length; fast++) {
        if (nums[fast] === nums[slow - 1]) {
            continue
        }
        nums[slow++] = nums[fast]
    }
    return slow;
};