/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            res += String.fromCharCode(str.charCodeAt(i) + 32);
        } else {
            res += str.charAt(i);
        }
    }
    return res;

    //return str.toLowerCase();
};