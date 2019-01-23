/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * refer to https://leetcode.com/problems/game-of-life/discuss/73223/Easiest-JAVA-solution-with-explanation
 */
var gameOfLife = function(board) {
    if (!board || board.length === 0) return;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let lives = countLives(board, i, j);
            if (board[i][j] & 1 === 1) {
                if (lives >= 2 && lives <= 3) {
                    board[i][j] = 3;
                }
            }
            else {
                if (lives === 3) {
                    board[i][j] = 2;
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] >>= 1;
        }
    }

    function countLives(arr, a, b) {
        let count = 0;
        let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        for (let dir of dirs) {
            let x = a + dir[0];
            let y = b + dir[1];
            if (x > arr.length - 1 || x < 0 || y < 0 || y > arr[0].length - 1) {
                continue;
            }
            count += (arr[x][y] & 1);
        }
        return count;
    }
};
