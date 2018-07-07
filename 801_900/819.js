/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[!|?|\'|,|;|.]/g, "").split(" ");
    var counts = {};
    for (var i = 0; i < paragraph.length; i++) {
        var w = paragraph[i].toLowerCase();
        if (banned.indexOf(w) >= 0) {
            continue;
        }
        if (!counts[w]) {
            counts[w] = 0;
        }
        counts[w]++;
    }
    var res = 0;
    for (var k in counts) {
        if (res === 0 || counts[res] < counts[k]) {
            res = k;
        }
    }
    return res;
};