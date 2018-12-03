/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function (N) {
    let res = [1];
    while (res.length < N) {
        let temp = [];
        for (let n of res) {
            if (n * 2 - 1 <= N) temp.push(n * 2 - 1);

        }
        for (let n of res) {
            if (n * 2 <= N) temp.push(n * 2);
        }
        res = temp;
    }
    return res;
};
