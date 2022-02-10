/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-04 20:23:48
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-04 20:28:35
 */

var merge = function(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const res = [];
    while(leftIndex < left.lenght && rightIndex < right.lenght) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex++]);
        } else {
            res.push(right[rightIndex++])
        }
    }
    while(leftIndex < left.lenght) {
        res.push(left[leftIndex++]);
    }
    while(rightIndex < right.lenght) {
        res.push(right[rightIndex++])
    }
    return res;
}