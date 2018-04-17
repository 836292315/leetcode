var findNthDigit = function(n) {
    var start = 1,
        len = 1,
        value = 9;
    while (n > len * value) {
        n = n - len * value;
        len++;
        start = start * 10;
        value = value * 10;
    }
    var target = start + Math.floor((n - 1) / len);
    var index = (n - 1) % len;
    return parseInt(target.toString().charAt(index));
};