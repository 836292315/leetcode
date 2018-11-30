/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    let min = Number.MAX_VALUE;
    let target = '1,2,3,4,5,0';
    let map = {};
    
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                dfs(i, j, 0);
                return min === Number.MAX_VALUE ? -1 : min;
            }
        }
    }

    function dfs(r, c, len) {
        let hash = board[0].join(',') + ',' + board[1].join(',');
        if (map[hash] !== undefined && len >= map[hash]) return;
        map[hash] = len;

        if (hash === target) {
            min = Math.min(min, len);
            return;
        }

        for (let move of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            let [rr, cc] = [r + move[0], c + move[1]];
            if (rr < 0 || cc < 0 || rr > 1 || cc > 2) continue;
            [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
            dfs(rr, cc, len + 1);
            [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
        }
    }
};
