/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var result = [];
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 60; j++) {
            if (helper(i) + helper(j) === num) {
                result.push(i + (j < 10 ? ':0' : ':') + j);
            }
        }
    }

    function helper(tem) {
        var binary = tem.toString(2),
            count = 0;
        for (var k = 0; k < binary.length; k++) {
            if (binary[k] == 1) { //binary[k] === '1'
                count++;
            }
        }
        return count;
    }
    return result;
};