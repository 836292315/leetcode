var findComplement = function(num) {
    var bin = 0, r = 1;
    while (num >= r) {
        bin += r;
        r *= 2;
    }
    return num ^ bin;
};