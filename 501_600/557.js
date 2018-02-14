var reverseWords = function(s) {
    var result = s.split(' ');
    for(var i = 0 ; i < result.length ; i++){
        result[i] = result[i].split('').reverse().join('');    
    }
    return result.join(' ');
};