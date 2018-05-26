/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {

    function compare(a, b) {
        return a - b;
    }

    houses.sort(compare);
    heaters.sort(compare);
    let i = 0,
        j = 0,
        result = 0;
    while (i < houses.length) {
        while (j < heaters.length - 1 &&
            Math.abs(houses[i] - heaters[j]) >= Math.abs(houses[i] - heaters[j + 1])) {
            j++;
        }
        result = Math.max(result, Math.abs(houses[i] - heaters[j]));
        i++;
    }
    return result;
};