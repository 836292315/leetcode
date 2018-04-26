var findAnagrams = function(s, p) {
    var pMap = {},
        right = 0,
        left = 0,
        count = p.length,
        result = [];
    for (var i = 0; i < p.length; i++) {
        if (pMap[p[i]]) {
            pMap[p[i]]++;
        } else {
            pMap[p[i]] = 1;
        }
    }
    while (right < s.length) {
        if (pMap[s[right++]]-- > 0) {
            count--;
        }
        if (count === 0) {
            result.push(left);
        }
        if (right - left === p.length && pMap[s[left++]]++ >= 0) {
            count++;
        }
    }
    return result;
}