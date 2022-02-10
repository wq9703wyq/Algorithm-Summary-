/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-06 21:08:04
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-06 21:56:37
 */

// 输入: [0, 2, 3, 5, 6, 7, 8, 9, 11, 13, 56, 57]
// 输出: [0,2-3,5-9,11,13,56-57]

var MergeConsecutiveNums = function (nums) {
    let slow = 0;
    let fast = 1;
    let consecutiveTimes = 0;
    while (fast <= nums.length) {
        if (fast < nums.length && nums[fast] - nums[fast - 1] === 1) {
            consecutiveTimes++;
            fast++
            continue;
        }

        if (consecutiveTimes > 0) {
            nums[slow++] = `${nums[fast - 1 - consecutiveTimes]}-${nums[fast - 1]}`
            consecutiveTimes = 0;
        } else {
            nums[slow++] = nums[fast - 1];
        }
        fast++;
    }
    nums.splice(slow);
    return nums;
}

console.log(MergeConsecutiveNums([0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 13, 56, 57]))