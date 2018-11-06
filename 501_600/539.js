/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let arr = timePoints.map((str) => {
        return str.slice(0, 2) * 60 + +str.slice(3);
    }).sort((a, b) => a - b);
    
    let min = arr[arr.length - 1] - arr[0];
    if (min > 720) {
        min = 1440 - min;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1]
        }
    }
    return min;
};