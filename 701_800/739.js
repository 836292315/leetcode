/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = [],
        len = temperatures.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > temperatures[i]) {
                res.push(j - i);
                break;
            }
            if (j === len - 1) {
                res.push(0);
                break;
            }
        }
    }
    res.push(0);
    return res;
};