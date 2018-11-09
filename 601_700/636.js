/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let res = new Array(n).fill(0);
    let stack = [];
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i].split(':');
        if (log[1] === 'start') {
            stack.push([log[2], 0]);
        } else {
            let start = stack.pop();
            let time = log[2] - start[0] + 1;
            res[log[0]] += time - start[1];
            if (stack.length) {
                stack[stack.length - 1][1] += time;
            }
        }
    }
    return res;
};