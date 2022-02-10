/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-02 23:30:08
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-02 23:30:09
 */
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

var moveZeroes = function(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let slow = 0;
    let fast = 0;
    for(fast; fast < nums.length; fast++) {
        if (nums[fast] === 0) {
            continue;
        }
        nums[slow++] = nums[fast]
    }
    nums.splice(slow, fast - slow);
    nums.push(...new Array(fast - slow).fill(0))
};