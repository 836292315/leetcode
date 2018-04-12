var countPrimes = function(n) {
    var flagArray = [],
        result = 0;
    for (var i = 2; i < n; i++) {
        if (flagArray[i] === 1) {
            continue;
        }
        result++;
        for (var j = i; j < n; j = j + i) {
            flagArray[j] = 1;
        }
    }
    return result;
};