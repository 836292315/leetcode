var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    var result = 1;
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            result += i;
            if (num % i !== i) {
                result += num / i;
            }
        }
    }
    return result === num;
};