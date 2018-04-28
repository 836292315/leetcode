var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    var start = 0,
        max = 1;
    for (var i = 1; i < s.length; i++) {
        var index = s.indexOf(s[i], start);
        if (index < i) {
            start = index + 1;
        }
        max = Math.max(max, i - start + 1);
    }
    return max;
}