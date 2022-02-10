/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 21:12:05
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 22:07:53
 */
// 给定一个整数数组 a，其中0 ≤ a[i] ≤ n-1 （n为数组长度）,

//  其中有些元素出现两次而其他元素出现一次,找到所有出现两次的元素

// 例: 输入: [4,3,2,7,0,2,3,1] 输出: [2,3]

var disorderFindDuplicate = function (a) {
    let i = 0;
    // 元素归位
    while (i < a.length) {
        const value = a[i];
        if (a[value] === value) {
            i++;
        } else if (value !== i) {
            swap(a, i, value);
        }
    }

    // 快慢指针原地交换位置
    let slow = 0;
    let fast = 0;
    for(fast; fast < a.length; fast++) {
        if (a[fast] === fast) {
            continue;
        }
        a[slow++] = a[fast];
    }
    a.splice(slow)
    return a;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(disorderFindDuplicate([4, 3, 8, 8, 1, 0, 2, 3, 1]))