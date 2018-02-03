var judgeCircle = function(moves) {
    var x = 0, y = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            x--;
        } else if (moves[i] === 'R') {
            x++;
        } else if (moves[i] === 'D') {
            y--;
        } else if (moves[i] === 'U') {
            y++;
        }
    }
    return x === 0 && y === 0;
};