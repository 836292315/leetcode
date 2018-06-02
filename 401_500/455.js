/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(compare);
    s.sort(compare);
    let i = 0,
        j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i;

    function compare(a, b) {
        return a - b;
    }
};