/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-01 21:05:03
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-01 21:07:51
 */
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// nums = [2,7,11,15], target = 9
// [0, 1]

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        if (map.has(another)) {
            return [i, map.get(another)]
        }
        map.set(nums[i], i)
    }    
} 