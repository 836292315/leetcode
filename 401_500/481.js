/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    let arr = [1, 2, 2];
    let head = 2;
    let tail = 3;
    let res = 1;
    let num = 1;
    while (tail < n) {
        for (let i = 0; i < arr[head]; i++) {
            arr[tail] = num;
            if (num === 1 && tail < n) res++;
            tail++;
        }
        num = num ^ 3;
        head++;
    }
    return res;
};
