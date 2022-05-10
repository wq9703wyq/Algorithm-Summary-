// 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。

// 请你找出所有出现 两次 的整数，并以数组形式返回。

// 你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

// 链接：https://leetcode.cn/problems/find-all-duplicates-in-an-array

var findDuplicates = function (nums) {
  let i = 0;
  while( i < nums.length) {
      if (nums[i] === i + 1 || nums[nums[i] - 1] === nums[i]) {
          i++;
          continue;
      }
      swap(nums, i, nums[i] - 1);
  }
  return nums.filter((item, index) => item !== index + 1);
};

var swap = function (nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}