module.exports = function check(str, bracketsConfig) {
    let open = bracketsConfig.map((item) => item[0]);

    let close = bracketsConfig.map((item) => item[1]);

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (['|', '7', '8'].includes(str[i])) {
          if (stack.length == 0 || str[i] != stack[stack.length - 1]) stack.push(str[i])
          else stack.pop()
        } else if (open.includes(str[i])) {
            stack.push(str[i])
        } else {
            if (stack.length == 0) stack.push(str[i])
            else {
                if (close.indexOf(str[i]) == open.indexOf(stack[stack.length - 1])) stack.pop()
                else stack.push(str[i])
            }
        }
    }
    return stack.length == 0
}
