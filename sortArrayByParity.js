/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 20:07:55
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 20:07:56
 */

// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

// 你可以返回满足此条件的任何数组作为答案。


//  对撞指针
var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        if (nums[left] % 2 !== 0) {
            swap(nums, left, right--)
            continue;
        }
        left++;
    }
    return nums;
};

// 快慢指针
var sortArrayByParity = function(nums) {
    let slow = 0;
    let fast = 0;

    for(fast; fast < nums.length; fast++) {
        if (nums[fast] % 2 !== 0) {
            continue;
        }
        swap(nums, slow++, fast)
    }
    return nums;
}

var swap = function(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}