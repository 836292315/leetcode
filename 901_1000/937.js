/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    let nums = [],
        letters = [];
    for (let i of logs) {
        if (i.split(' ')[1].charAt(0) >= 0 && i.split(' ')[1].charAt(0) <= 9) {
            nums.push(i);
        }
        else {
            letters.push(i);
        }
    }
    letters.sort(function (a, b) {
        return a.slice(a.indexOf(' ') + 1) > b.slice(b.indexOf(' ') + 1) ? 1 : -1;
    });
    return letters.concat(nums);
};
