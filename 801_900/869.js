/**
 * @param {number} N
 * @return {boolean}
 * http://www.cnblogs.com/qiulinzhang/p/9514321.html
 */
var reorderedPowerOf2 = function (N) {
    let c = helper(N);
    for (let i = 0; i < 32; i++) {
        if (c === helper(1 << i)) {
            return true;
        }
    }
    return false;

    function helper(N) {
        let res = 0;
        for (; N > 0; N = Math.floor(N / 10)) {
            res += Math.floor(Math.pow(10, N % 10))
        }
        return res;
    }
};