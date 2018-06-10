/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    /*
    while(num > 1){
        num = num / 4;
    }
    return num === 1;
    */
    return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) === num;
};