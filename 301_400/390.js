/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    return n === 1 ? 1 : 2 * (parseInt(n / 2) + 1 - lastRemaining(parseInt(n / 2)));
}
