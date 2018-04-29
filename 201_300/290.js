var wordPattern = function(pattern, str) {
    var map1 = {},
        map2 = {},
        letters = pattern.split(""),
        words = str.split(" ");
    if (letters.length !== words.length) {
        return false;
    }
    for (var i = 0; i < words.length; i++) {
        if (map1[words[i]] && map1[words[i]] !== letters[i]) {
            return false;
        }
        if (map2[letters[i]] && map2[letters[i]] !== words[i]) {
            return false;
        }
        map1[words[i]] = letters[i];
        map2[letters[i]] = words[i];
    }
    return true;
};