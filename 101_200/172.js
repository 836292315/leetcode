var trailingZeroes = function(n) {
    if (n === 0) {
        return 0;
    }
    var result = 0;
    while (n !== 0) {
        var tem = Math.floor(n / 5);
        result = result + tem;
        n = tem;
    }
    return result;
};