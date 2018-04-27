var minWindow = function(s, t) {
    var tMap = {},
        left = 0,
        right = 0,
        head = 0,
        minLen = Number.MAX_VALUE,
        count = t.length;
    for (var i = 0; i < t.length; i++) {
        if (tMap[t[i]]) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    while (right < s.length) {
        if (tMap[s[right++]]-- > 0) {
            count--;
        }
        while (count === 0) {
            if (right - left < minLen) {
                head = left;
                minLen = right - left;
            }
            if (tMap[s[left++]]++ >= 0) {
                count++;
            }
        }
    }

    if (minLen === Number.MAX_VALUE) {
        return "";
    }
    return s.substring(head, head + minLen);
};