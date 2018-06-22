/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    function dfs(M, i) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] === 1) {
                M[i][j] = M[j][i] = 0;
                dfs(M, j);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < M.length; i++) {
        if (M[i][i] === 1) {
            dfs(M, i);
            count++;
        }
    }
    return count;
};