/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    /*
    let res = [];
    for(let i = 1; i <= n; i++){
        res.push(i);
    }
    return res.sort();
    */
    let res = [];
    helper(res, 1, 10, n);
    return res;

    function helper(res, start, end, n) {
        for (let i = start; i < end; i++) {
            if (i > n) return;
            res.push(i);
            let next = i * 10;
            if (next <= n) {
                helper(res, next, next + 10, n);
            }
        }
    }
};
