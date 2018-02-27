var lengthOfLastWord = function(s) {
    var result = 0;
    var last = s.length-1;
    while(last>=0 && s.charAt(last)==' '){
            last--;
    }
    while(last>=0 && s.charAt(last)!=' '){
            result++;
            last--;
    }
    return result;
};