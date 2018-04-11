var convertToTitle = function(n) {
    var result = '';
    while (n) {
        result = String.fromCharCode((n - 1) % 26 + 65) + result;
        n = Math.floor((n - 1) / 26);
    }
    return result;
};