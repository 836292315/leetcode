var judgeSquareSum = function(c) {
    var n1 = 0,
        n2 = Math.floor(Math.sqrt(c));
    while (n1 <= n2) {
        var result = n1 * n1 + n2 * n2;
        if (result < c) {
            n1++;
        } else if (result > c) {
            n2--;
        } else {
            return true;
        }

    }
    return false;
};