/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    let flipCount = 0;
    let onesCount = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '0') {
            if (onesCount === 0) continue;
            else {
                flipCount++;
            }
        }
        else {
            onesCount++;
        }
        if (flipCount > onesCount) {
            flipCount = onesCount;
        }
    }
    return flipCount;
};
