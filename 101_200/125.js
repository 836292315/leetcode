var isPalindrome = function(s) {
    var s_accord = s.replace(/\W/g,'');
    var s_accord_reverse = s_accord.split('').reverse().join('');
    return s_accord_reverse.toLowerCase() === s_accord.toLowerCase();
};