/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 00:17:29
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 00:17:30
 */
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 对撞指针
var removeElement = function(nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
}

// 快慢指针
var removeElement = function(nums, val) {
    let slow = 0;
    let fast = 0;
    for(fast; fast < nums.length; fast++) {
        if (nums[fast] === val) {
            continue;
        }
        nums[slow++] = nums[fast];
    }
    return slow;
}