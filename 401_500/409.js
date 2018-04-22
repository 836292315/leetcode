var longestPalindrome = function(s) {
    var result = 0,
        gather = {},
        hasOdd = false;
    for (var i = 0; i < s.length; i++) {
        if (gather[s[i]]) {
            gather[s[i]]++;
        } else {
            gather[s[i]] = 1;
        }
    }
    for (var key in gather) {
        if (gather[key] % 2 === 0) {
            result = result + gather[key];
        } else {
            result = result + gather[key] - 1;
        }
        if (gather[key] % 2 !== 0) {
            hasOdd = true;
        }
    }
    if (hasOdd === true) {
        return result + 1;
    } else {
        return result;
    }
};