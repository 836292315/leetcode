/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let res = [],
        ind = [],
        len = S.length;
    for (let i = 0; i < len; i++) {
        ind[S[i]] = i;

    }
    console.log(ind);
    let start = 0,
        end = 0;
    for (let j = 0; j < len; j++) {
        end = Math.max(end, ind[S[j]]);
        if (end === j) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }
    return res;
};