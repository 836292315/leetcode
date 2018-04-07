var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var result = 0,
        y = x;
    while (y !== 0) {
        result = result * 10 + y % 10;
        y = Math.floor(y / 10);
    }
    return x === result;
};