/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let temp = '';
            while (stack[stack.length - 1] !== '[') {
                temp = stack.pop() + temp;
            }
            stack.pop();  // [
            let count = '';
            while (stack.length > 0 && stack[stack.length - 1].match(/[/0-9/]+/)) {
                count = stack.pop() + count;
            }
            count = parseInt(count);
            let str = '';
            while (count > 0) {
                str += temp;
                count--;
            }
            stack.push(str)
        }
    }

    let res = '';
    while (stack.length > 0) {
        res = stack.pop() + res;
    }
    return res;
};
