// 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
// 输入：nums = [10,5,2,6], k = 100
// 输出：8
// 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

var numSubarrayProductLessThanK = function (nums, k) {
  let slow = 0;
  let fast = 0;
  let num = 1;
  let count = 0;
  for (fast; fast < nums.length; fast++) { 
    num *= nums[fast];
    while(slow <= fast && num >= k) {
      num /= nums[slow];
      slow++;
    }
    // TODO: 需要解释公式
    count += fast - slow + 1
  }

  return count;
};
// const nums = [10,5,2,6], k = 100
const nums = [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], k = 19
console.log(numSubarrayProductLessThanK(nums, k))