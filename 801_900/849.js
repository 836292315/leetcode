/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let res = 0,
        n = seats.length;
    for (let i = 0, zero = 0; i < n; i++)
        if (seats[i] === 1) {
            zero = 0;
        } else {
            res = Math.max(res, Math.floor((++zero + 1) / 2));
        }
    for (let i = 0, zero = 0; seats[i] === 0; i++) {
        res = Math.max(res, ++zero);
    }
    for (let i = n - 1, zero = 0; seats[i] === 0; i--) {
        res = Math.max(res, ++zero);
    }
    return res;
};