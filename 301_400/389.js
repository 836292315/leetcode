var findTheDifference = function(s, t) {
    var result = t.charCodeAt(t.length - 1);
    for (var i = 0; i < s.length; i++) {
        result = result ^ s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    return String.fromCharCode(result);
};