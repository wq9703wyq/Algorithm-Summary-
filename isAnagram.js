/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2022-02-06 20:53:35
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2022-02-06 20:53:35
 */
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }

    for(let i = 0; i < t.length; i++) {
        if (map.has(t[i]) && map.get(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
            if (map.get(t[i]) === 0) {
                map.delete(t[i])
            }
        } else {
            return false;
        }
    }
    return true
};