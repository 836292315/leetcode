/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let obj = {},
        res = 0;
    for (let i = 0; i < A.length; i++) {
        let even = [];
        let odd = [];
        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                even.push(A[i][j]);
            } else {
                odd.push(A[i][j]);
            }
        }
        even.sort();
        odd.sort();
        let key = even.join("") + odd.join("");
        if (!obj[key]) {
            obj[key] = true;
            res++;
        }
    }
    return res;
};