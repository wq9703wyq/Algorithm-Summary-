/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 20:12:55
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 20:12:56
 */

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素


var majorityElement = function(nums) {
    let major = nums[0];
    if (nums.length < 3) {
        return major;
    }
    let majorTimes = 1;
    for(let i = 1; i < nums.length; i++) {
        if (major !== nums[i]) {
            majorTimes--;
            if (!majorTimes) {
                major = nums[i];
                majorTimes = 1;
            }
        } else {
            majorTimes++;
        }
    }
    return major;
};