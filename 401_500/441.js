var arrangeCoins = function(n) {
    if (n < 1) {
        return 0;
    }
    for (var i = 1;; i++) {
        n = n - i;
        if (n < 0) {
            return i - 1;
        }
    }
};