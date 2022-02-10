<!--
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-01 21:03:29
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-06 21:58:15
-->
# 用 Map 解决
1. ### twoSum 数组内两个数字求和 **target**
   1. [leetcode](https://leetcode-cn.com/problems/two-sum/)
   2. [Time = O(n), Space = O(n)](./twoSum.js)

# 有序数组 —— 二分法
1. ### 缺失的数字，有序不重复元素数组中找出缺失的数字
   1. [leetcode](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)
   2. [Time = O(log N)，Space = O(1)](./missingNumber.js)

# 快慢指针
#### 利用两个指针 *slow* 和 *fast* 将数组划分为三个区域，
### [...[处理完成], *slow*，...[待处理]，*fast*，...[未检查]]
#### 适用于不改变数组元素相对排序的原地移动
1. ### 移动零，要求移动后不改变非零元素的相对顺序
   1. [leetcode](https://leetcode-cn.com/problems/move-zeroes/)
   2. [Time = O(n)，Space = O(1)](./moveZero.js)

2. ### 移除指定元素，返回移除指定元素后的数组长度
   1. [leetcode](https://leetcode-cn.com/problems/remove-element/)
   2. [Time = O(n)，Space = O(1)](./removeElement.js)

3. ### 奇偶数排序，返回数组偶数在前奇数在后
   1. [leetcode](https://leetcode-cn.com/problems/sort-array-by-parity/)
   2. [Time = O(n)，Space = O(1)](./sortArrayByParity.js)
4. ### 有序数组去重
   1. [leetcode](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
   2. [Time = O(n)，Space = O(1)](./removeDuplicates.js)

5. ### 合并连续数字
   1. [Time = O(n)，Space = O(1)]

# 投票法
#### 假设每一个元素都有一票，
#### 投票相同则当前元素票数 +1，不同则 -1，减至零则更换元素
#### 由于多数元素的个数一定比其他元素多，因此多数元素一定是得票最多的
1. 多数元素，找出数组中重复次数超过 **n / 2** 的元素
   1. [leetcode](https://leetcode-cn.com/problems/majority-element/)
   2. [Time = O(n)，Space = O(1)]()

# 归并排序
1. ### 合并两个有序数组
   1. [Time = O(max(n, m)), Space = O(n)](./merge.js)

# 元素归位法
#### 适用于元素的大小可以用数组的下标来表示
#### 每个元素按照自己的值 *归位* 到等值的下标
#### 重复元素若发现目标下标已有元素 *归位* 则保持不变

1. ### 无序数组找出重复元素
   1. [Time = O(n)，Space = O(1)](./disorderFindDuplicate.js)


# 指针对撞
1. ### 判断回文
   1. [leetcode](https://leetcode-cn.com/problems/palindrome-number/)
   2. [Time = O(n), Space = O(1)](./isPalindrome)

2. ### 反转字符串
   1. [leetcode](https://leetcode-cn.com/problems/reverse-string/)
   2. [Time = O(n), Space = O(1)](./reverseString.js)

# 哈希存储
#### 无序序列寻找多个目标
1. ### 有效的字母异位词
   1. [leetcode](https://leetcode-cn.com/problems/valid-anagram/)
   2. [Time = O(n), Space = O(n)](./isAnagram.js)

# 回溯
1. ### 字符串的排列
   1. [leetcode](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)
   2. [Time = O(n^2)，Space = O(n)](./permutation.js)