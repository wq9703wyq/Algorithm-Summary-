// 给定一个整数 n ，返回 可表示为两个 n 位整数乘积的 最大回文整数 。因为答案可能非常大，所以返回它对 1337 取余 。

// 输入：n = 2
// 输出：987
// 解释：99 x 91 = 9009, 9009 % 1337 = 987

function largestPalindrome(n) {
  const maxNum = getMaxNum(n);
  for (let i = getMaxReturn(maxNum); i > 0; i = getMaxReturn(i)) {
    const remainderArr = getRemainder(i);
    console.log(remainderArr)
    for (let j = 0; j < remainderArr.length; j++) {
      const res = getRes(remainderArr[j], i, n);
      if (res) {
        return res;
      }
    }
  }
}

function getMaxNum(n) {
  return (10 ** n - 1) ** 2;
}

function getMaxReturn(maxNum) {
  const numArr = `${maxNum}`.split('');
  let half = numArr.slice(0, numArr.length >> 1).join('') - 0;
  let returnNum = undefined;
  for (half; half > 0; half--) {
    returnNum = `${half}${`${half}`.split('').reverse().join('')}` - 0;
    if (returnNum <= maxNum) {
      break;
    }
  }
  return returnNum;
}

function getRemainder(returnNum) {
  const remainderArr = [];
  for (let i = 2; i < 10; i++) {
    if (returnNum % i === 0) {
      remainderArr.push(i);
    }
  }
  return remainderArr;
}

function getRes(remainder, returnNum, n) {
  let nMax = 10 ** n - 1;
  while(nMax > 0) {
    const anthoerOne = returnNum / nMax;
    if (anthoerOne <= 10 ** 2 - 1 && Number.isInteger(anthoerOne)) {
      return [anthoerOne, nMax];
    }
    nMax = nMax - remainder;
    // console.log(nMax)
  }
  for (nMax; nMax > 0; nMax - remainder) {
  }
  return false;
}

// console.log(getRemainder(getMaxReturn(getMaxNum(2))));
console.log(largestPalindrome(2))

// 1. 获取两个 n 位数最大乘积 maxNum
// 2. 获取小于等于最大乘积的回文数 maxReturn
// 3. 对 maxReturn 使用 1-9 取余，获得取余后值为0的数组 arr
// 4. 遍历 arr，每次值为 val，从高到低遍历 n 位数乘积范围，获得两个 n 为整数，若遍历过程中出现非 n 为整数则中止遍历，取下一个 val 反复该步骤
// 5. 若第4步后未获得答案则重复2-4
