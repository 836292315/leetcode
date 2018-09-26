/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    if (answers.length === 0) {
        return 0;
    }
    let res = 0;
    let map = {};
    for (let el of answers) {
        if (el === 0) {
            res += 1;
        } else if (!map[el]) {
            res += el + 1;
            map[el] = 1;
        } else {
            if (mapel[el] < i + 1) {
                map[el]++;
            } else {
                res += el + 1;
                map[el] = 1
            }
        }
    }
    return res;
};