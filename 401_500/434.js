var countSegments = function(s) {
   var result = 0;
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i) !==' '&(i ===0 || s.charAt(i-1) === ' ')){
            result++;
        }
    }
    return result;
};