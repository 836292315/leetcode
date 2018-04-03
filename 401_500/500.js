var findWords = function(words) {
    var result = [],
        keyRow = ['qwertyuiopQWERTYUIOP', 'asdfghjklASDFGHJKL', 'zxcvbnmZXCVBNM'];
    for (var i = 0; i < words.length; i++) {
        for (var k = 0; k < 3; k++) {
            for (var j = 0; j < words[i].length; j++) {
                if (keyRow[k].indexOf(words[i][j]) === -1) {
                    break;
                }
                if (j === words[i].length - 1) {
                    result.push(words[i]);
                }
            }
        }
    }
    return result;
};