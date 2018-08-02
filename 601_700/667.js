/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let arr = [],
        small = 1,
        big = n,
        i = 0;
    while (i < k) {
        arr[i++] = small++;
        if (i < k) {
            arr[i++] = big--;
        }
    }
    if (k % 2 === 0) {
        while (i < n) {
            arr[i++] = big--;
        }
    } else {
        while (i < n) {
            arr[i++] = small++;
        }
    }
    return arr;
};