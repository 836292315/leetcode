var isPowerOfThree = function(n) {
    var result = Math.log10(n) / Math.log10(3);
    if (result % 1 === 0) {
        return true;
    }
    return false;
};
console.log(isPowerOfThree(9));