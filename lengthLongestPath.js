var lengthLongestPath = function(input) {
  let n = input.length;
  let res = 0;
  let pos = 0;
  const stack = [];
  while(pos < n) {
    let depth = 1;
    while(pos < n && input[pos] === "\t") {
      depth++;
      pos++;
    }

    let len = 0;
    let isFile = false;
    while(pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true;
      }
      len++;
      pos++;
    }

    pos++;

    while(stack.length >= depth) {
      stack.pop()
    }
    if (stack.length) {
      len += stack[stack.length - 1] + 1;
    }
    if (isFile) {
      res = Math.max(len, res)
    } else {
      stack.push(len)
    }
  }
  return res;
};


const path = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

console.log(lengthLongestPath(path))
