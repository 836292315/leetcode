var countBinarySubstrings = function(s) {
    var cur = 1,
        pre = 0,
        count = 0;
    for(var i = 1; i < s.length;i++){
        if(s[i] === s[i-1]){
            cur +=1;
        }
        else{
            pre = cur;
            cur = 1
        }
        if(pre >= cur){
            count +=1;
        }
    }
    return count;
};