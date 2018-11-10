/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    let res = 10,
        avaliableNumber = 9,
        uniqueDigits = 9;
    while (n > 1 && avaliableNumber > 0) {
        uniqueDigits = uniqueDigits * avaliableNumber;
        res += uniqueDigits;
        avaliableNumber--;
        n--;
    }
    return res;
};