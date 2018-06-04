/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    return ((n + (n >> 1) + 1) & (n + (n >> 1))) === 0;
};
//  若其是二进制间隔0，1数，则错位相加得二进制全为1的数，在检测相加后的二进制数是否全为1