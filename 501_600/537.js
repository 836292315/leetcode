/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    /*
    var m=[a,b].map(str=>/(-?\d+)\+(-?\d+)i/.exec(str));
    var [a1,b1,a2,b2]=[m[0][1],m[0][2],m[1][1],m[1][2]];
    var real=a1*a2-b1*b2;
    var fake=a1*b2+a2*b1;
    return ''+real+"+"+fake+"i";
    */

    var xa = getA(a);
    var xb = getB(a);
    var ya = getA(b);
    var yb = getB(b);
    var za = xa * ya - xb * yb;
    var zb = xa * yb + xb * ya;
    return za + "+" + zb + "i";
};

var getA = function(n) {
    return parseInt(n.split("+")[0]);
};

var getB = function(n) {
    return parseInt(n.split("+")[1]);
};