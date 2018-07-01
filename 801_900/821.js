/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let result = [];
    for (let i = 0; i < S.length; i++) {
        let start = i,
            end = i,
            distance = 0,
            flag = false;
        if (S[i] !== C) {
            while (!flag) {
                start++;
                end--;
                distance++;
                if (S[start] === C || S[end] === C) {
                    flag = true;
                }
            }
        }
        result.push(distance);
    }
    return result;
};