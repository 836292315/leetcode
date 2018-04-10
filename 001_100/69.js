var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }

    var left = 1,
        right = x;

    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (mid <= x / mid && (mid + 1) > x / (mid + 1)) {
            return mid;
        } else if (mid > x / mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
};