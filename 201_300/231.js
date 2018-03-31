var isPowerOfTwo = function(n) {
    var result = Math.log10(n) / Math.log10(2);
    if (result % 1 === 0) {
        return true;
    }
    return false;
};