/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-06 20:57:02
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-06 20:57:03
 */
// 输入一个字符串，打印出该字符串中字符的所有排列。

 

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

var permutation = function(s) {
    const basicStr = s.split("").sort();
    const strVis = [];
    const preStr = [];
    const res = [];

    const backStrack = function(i) {
        if (i === s.length) {
            res.push(preStr.join(""));
            return;
        }

        for(let j = 0; j < s.length; j++) {
            if (strVis[j] || (j > 0 && !strVis[j - 1] && basicStr[j - 1] === basicStr[j])) {
                continue;
            }
            strVis[j] = true;
            preStr.push(basicStr[j]);
            backStrack(i + 1);
            preStr.pop();
            strVis[j] = false;
        }
    }

    backStrack(0);
    return res;    
};