/*
var reverseString = function(s) {
    return s.split('').reverse().join('');
};
*/

var reverseString = function(s) {
    var len = s.length-1;
    var new_s = "";
    while(len>=0){
        new_s += s.charAt(len);
        len--;
    }
    return new_s;
}