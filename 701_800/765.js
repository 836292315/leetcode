/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let len = row.length;
    let pos = new Array(len);
    for (let i = 0; i < len; i++) {
        pos[row[i]] = i;
    }
    let res = 0;
    for (let i = 0; i < len; i += 2) {
        let pair = row[i] % 2 == 0 ? row[i] + 1 : row[i] - 1;
        if (pair !== row[i + 1]) {
            row[pos[pair]] = row[i + 1];
            pos[row[i + 1]] = pos[pair];
            res++;
        }
    }
    return res;
};