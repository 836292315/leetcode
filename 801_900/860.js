/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0,
        ten = 0;
    for (let i of bills) {
        if (i === 5) {
            five++;
        } else if (i === 10) {
            five--;
            ten++;
        } else if (ten > 0) {
            ten--;
            five--;
        } else {
            five = five - 3;
        }
        if (five < 0) {
            return false;
        }
    }
    return true;
};