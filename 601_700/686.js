var repeatedStringMatch = function(A, B) {
    if(A.includes(B)){
        return 1;
    }
    var time = 1,
        result;
    while(true){
        result = A.repeat(++time);
        if(result.includes(B)){
            return time;
        }
        else if(result.length > 2*B.length){
            return -1;
        }
    }
};